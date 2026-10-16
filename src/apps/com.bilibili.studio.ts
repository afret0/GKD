import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.bilibili.studio',
  name: '必剪',
  groups: [
    {
      key: 0,
      name: '未分类-通知权限请求',
      desc: '会出现在创作、模板、我的页面，自动点击不开启。',
      fastQuery: true,
      activityIds: 'com.bcut.homepage.widget.MainActivity',
      rules: [
        {
          matches: 'TextView[text="开启设置"] - TextView[text="取消"]',
          snapshotUrls: 'https://i.gkd.li/i/12867401',
        },
        {
          matches: 'ImageView[id="com.bilibili.studio:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/12908880',
        },
        {
          matches: 'ImageView[id="com.bilibili.studio:id/iv_push_tips_close"]',
          snapshotUrls: 'https://i.gkd.li/i/12908886',
        },
      ],
      enable: false,
    },
    {
      key: 3,
      name: '未分类-版本更新',
      desc: '勾选【忽略】-点击【以后再说】',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.bcut.homepage.widget.MainActivity',
      rules: [
        {
          key: 0,
          name: '勾选【忽略】',
          matches:
            '[id="com.bilibili.studio:id/update_cbx_ignore_version"][checked=false]',
        },
        {
          preKeys: 0,
          name: '点击【以后再说】',
          matches: '[id="com.bilibili.studio:id/update_btn_cancel"]',
        },
      ],
      snapshotUrls: 'https://i.gkd.li/i/13496049',
      enable: false,
    },
  ],
});
