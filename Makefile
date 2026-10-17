SHELL := /bin/bash

PNPM ?= corepack pnpm
REMOTE ?= origin
BRANCH ?= $(shell git rev-parse --abbrev-ref HEAD)
REPO ?= $(shell gh repo view --json nameWithOwner -q .nameWithOwner 2>/dev/null)
WORKFLOW ?= build_release.yml
FIX_WORKFLOW ?= check_fix_push.yml
MSG ?=
DRY_RUN ?=
RUN = $(if $(DRY_RUN),echo '[dry-run]',)
SHA = $(shell git rev-parse HEAD 2>/dev/null)
CDN_RAW ?= https://raw.githubusercontent.com/$(REPO)/$(BRANCH)
CDN_JS ?= https://fastly.jsdelivr.net/gh/$(REPO)@$(BRANCH)

# CI 模式(默认)下 dist 由 build_release 生成并自动提交, 本地 dist 若已有改动
# 会让 CI 判定内容一致而输出 "No changes" -> 不升版本/不发 Release, 所以前置检查拦住
.PHONY: help build release
.PHONY: preflight install fmt lint check changes commit push sync-ci sync-remote trigger watch report
.PHONY: sync verify version status clean

.DEFAULT_GOAL := help
.NOTPARALLEL:

help: ## 显示全部命令
	@echo 'afreto/GKD 订阅发布'
	@echo '  make build              校验 -> 格式化 -> 提交 -> 推送 -> 触发 CI 发布 -> 等待完成 -> 输出版本与 Release'
	@echo '  make build DRY_RUN=1    同上, 但只打印 git/gh 写操作, 不真正提交推送发布'
	@echo '  make build MSG="fix: x"  指定 commit message (默认按改动的应用名自动生成)'
	@echo
	@awk 'BEGIN{FS=":.*##"} /^[a-zA-Z_-]+:.*##/ {printf "  %-14s %s\n", $$1, $$2}' $(MAKEFILE_LIST)

build: preflight install fmt lint check changes commit push sync-ci sync-remote trigger watch report ## 一键发布(推送 src, 由 CI 生成 dist/版本/tag/Release)

release: build ## build 的别名

preflight: ## 发布前环境自检
	@command -v git >/dev/null && command -v gh >/dev/null || { echo '缺少 git 或 gh'; exit 1; }
	@test `node -p 'Number(process.versions.node.split(".")[0])'` -ge 22 || { echo '需要 nodejs >= 22 (选择器校验依赖 WasmGc)'; exit 1; }
	@gh auth status >/dev/null 2>&1 || { echo 'gh 未登录, 先执行 gh auth login'; exit 1; }
	@git rev-parse --abbrev-ref --symbolic-full-name @{u} >/dev/null 2>&1 || { echo '当前分支 $(BRANCH) 没有 upstream'; exit 1; }
	@gh workflow view $(WORKFLOW) >/dev/null 2>&1 || { echo '找不到工作流 $(WORKFLOW)'; exit 1; }
	@command -v $(firstword $(PNPM)) >/dev/null 2>&1 || { echo '找不到 $(firstword $(PNPM)), 先执行 corepack enable'; exit 1; }
	@command -v pnpm >/dev/null 2>&1 || { echo 'git 钩子需要 PATH 里有 pnpm(.git/hooks/pre-commit 跑 pnpm exec lint-staged, pre-push 跑 pnpm run check), 先执行: corepack enable pnpm'; echo '  装不了时可 SKIP_SIMPLE_GIT_HOOKS=1 make build 跳过钩子(fmt/lint/check 步骤仍会执行)'; exit 1; }
	@echo "preflight ok  repo=$(REPO) branch=$(BRANCH) node=`node -v`"

install: ## 安装依赖(node_modules 缺失时)
	@test -d node_modules && echo 'node_modules ok' || $(PNPM) install

fmt: ## prettier 格式化(与 CI check_fix_push 一致, 避免 CI 再补一个格式化提交)
	@$(PNPM) run format >/dev/null
	@echo 'format ok'

lint: ## eslint 修复
	@$(PNPM) run lint >/dev/null
	@echo 'lint ok'

check: ## tsc + 订阅校验(文件名/分类前缀/快照链接/选择器语法)
	@$(PNPM) run check

status: ## 显示待发布改动概览
	@git status --short
	@echo '-- enable 开关变化 --'
	@git diff -U0 -- src | grep -E '^[+-]\s*enable: ' | sort | uniq -c || true

changes: ## 校验确实有东西可发布, 且 dist 没有本地改动
	@D=`git status --porcelain -- dist`; if test -n "$$D"; then echo 'dist/ 存在本地改动, 会与 CI 构建冲突(触发 No changes 不发 Release):'; echo "$$D"; echo '请先 git checkout -- dist 或改用本地构建流程'; exit 1; fi
	@S=`git status --porcelain -- src package.json pnpm-lock.yaml Makefile`; U=`git rev-list --count $(REMOTE)/$(BRANCH)..HEAD 2>/dev/null || echo 0`; \
		if test -z "$$S" && test "$$U" = "0"; then echo '没有可发布的改动(src 无差异且无未推送提交)'; exit 1; fi; \
		echo "待发布: 工作区改动 `echo "$$S" | grep -c . || true` 个文件, 未推送提交 $$U 个"

commit: ## git add src 并提交(MSG 可覆盖, 否则按改动的应用名自动生成)
	@$(RUN) git add src package.json pnpm-lock.yaml Makefile
	@if test -n "`git diff --cached --name-only`"; then \
		if test -n '$(MSG)'; then M='$(MSG)'; else \
			APPS=`git diff --cached --name-only -- src/apps`; N=`echo "$$APPS" | grep -c . || true`; \
			if test "$$N" = "0"; then M='chore: update subscription'; \
			elif test "$$N" = "1"; then M="feat: update rules for `basename $$APPS .ts`"; \
			else M="feat: update rules for $$N apps"; fi; \
		fi; \
		echo "commit: $$M"; $(RUN) git commit -m "$$M"; \
	else echo 'nothing to commit'; fi

push: ## 推送到远端
	@if test "`git rev-parse HEAD`" = "`git rev-parse $(REMOTE)/$(BRANCH) 2>/dev/null`"; then echo 'nothing to push'; else $(RUN) git push $(REMOTE) HEAD:$(BRANCH); fi

sync-ci: ## 等待 push 触发的 check_fix_push 结束
	@S=`git rev-parse HEAD`; \
		for i in `seq 1 20`; do \
			ID=`gh run list --workflow=$(FIX_WORKFLOW) --commit $$S --json databaseId -q '.[0].databaseId // empty' 2>/dev/null || true`; \
			if test -n "$$ID"; then echo "check_fix_push run=$$ID"; gh run watch $$ID --exit-status --interval 5 >/dev/null || echo '[warn] check_fix_push 未成功, 继续'; break; fi; \
			if test $$i -eq 20; then echo '[warn] 等不到 check_fix_push 运行记录, 跳过'; fi; \
			sleep 3; \
		done

sync-remote: ## 若 CI 追加了格式化提交, 快进本地与之对齐
	@$(RUN) git fetch $(REMOTE) $(BRANCH)
	@if test -n "$(DRY_RUN)"; then echo '[dry-run] skip ff'; else \
		L=`git rev-parse HEAD`; R=`git rev-parse $(REMOTE)/$(BRANCH)`; \
		if test "$$L" != "$$R"; then echo "本地落后远端, 快进 $$L -> $$R"; git merge --ff-only $(REMOTE)/$(BRANCH) || { echo '无法快进, 请先手动处理'; exit 1; }; \
		else echo 'local in sync'; fi; fi

trigger: ## 触发 build_release 工作流
	@BEFORE=`gh run list --workflow=$(WORKFLOW) --limit 1 --json databaseId -q '.[0].databaseId // empty'` || true; \
		S=`git rev-parse $(REMOTE)/$(BRANCH)`; \
		echo "dispatch $(WORKFLOW) on $(BRANCH) @ $$S"; \
		$(RUN) gh workflow run $(WORKFLOW) --ref $(BRANCH); \
		if test -n "$(DRY_RUN)"; then echo '[dry-run] skip wait run'; exit 0; fi; \
		for i in `seq 1 20`; do \
			ID=`gh run list --workflow=$(WORKFLOW) --commit $$S --json databaseId -q '.[0].databaseId // empty' 2>/dev/null || true`; \
			if test -n "$$ID" && test "$$ID" != "$$BEFORE"; then echo "$$ID" > /tmp/.gkd-run-id; echo "run=$$ID https://github.com/$(REPO)/actions/runs/$$ID"; exit 0; fi; \
			sleep 3; \
		done; \
		echo '没有等到本次 dispatch 的运行记录, 请手动检查 Actions'; exit 1

watch: ## 等待 build_release 完成
	@if test -n "$(DRY_RUN)"; then echo '[dry-run] skip watch'; exit 0; fi; \
		ID=`cat /tmp/.gkd-run-id`; \
		gh run watch $$ID --exit-status --interval 10 || { echo '构建失败, 查看日志: gh run view --log-failed'; exit 1; }; \
		echo 'build_release succeeded'

report: ## 输出版本号/tag/Release 并校验 CDN
	@if test -n "$(DRY_RUN)"; then echo '[dry-run] skip report'; exit 0; fi; \
		git fetch --quiet $(REMOTE) $(BRANCH) >/dev/null 2>&1; \
		V=`git show $(REMOTE)/$(BRANCH):dist/gkd.version.json5 | sed -n 's/.*version[: ]*\([0-9][0-9]*\).*/\1/p'`; \
		echo "订阅版本: v$$V"; \
		echo "Release:  `gh release view v$$V --json url -q .url 2>/dev/null || echo '(尚未生成)'`"; \
		echo "订阅地址: $(CDN_RAW)/dist/gkd.json5"; \
		echo; echo '-- dist/CHANGELOG.md --'; \
		git show $(REMOTE)/$(BRANCH):dist/CHANGELOG.md | head -30; \
		echo; echo '-- CDN 线上版本 --'; \
		echo "raw      : `curl -fsS $(CDN_RAW)/dist/gkd.version.json5 || echo '(拉取失败)'`"; \
		echo "jsdelivr : `curl -fsS '$(CDN_JS)/dist/gkd.version.json5?t='$$RANDOM || echo '(拉取失败/走缓存)'`"

verify: ## 只校验线上 CDN 的版本号
	@echo "raw      : `curl -fsS $(CDN_RAW)/dist/gkd.version.json5 || echo '(拉取失败)'`"
	@echo "jsdelivr : `curl -fsS '$(CDN_JS)/dist/gkd.version.json5?t='$$RANDOM || echo '(拉取失败/走缓存)'`"
	@echo "本地 dist : `cat dist/gkd.version.json5`"

version: ## 显示 dist 里的当前订阅版本
	@echo `cat dist/gkd.version.json5`

sync: ## 拉取远端(含 CI 生成的 dist 与 tag)到本地
	@git fetch --tags $(REMOTE)
	@git merge --ff-only $(REMOTE)/$(BRANCH)
	@echo `git log --oneline -1`

clean: ## 清理 eslint 缓存与本地构建产物缓存
	@rm -rf .eslintcache /tmp/.gkd-run-id
	@echo 'cleaned'
