import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.thestore.main',
  name: '1号会员店',
  groups: [
    {
      key: 1,
      name: '未分类-促销广告',
      desc: '关闭促销弹窗，也许有用呢',
      activityIds: 'com.thestore.main.app.home.HomeActivity',
      rules: [
        {
          matches: '[id="com.thestore.main.home.feature:id/ad"] > TextView',
          snapshotUrls: 'https://i.gkd.li/i/13163686',
        },
      ],
      enable: true,
    },
  ],
});
