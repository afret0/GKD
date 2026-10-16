import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.netease.mobimail',
  name: '网易邮箱',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          fastQuery: true,
          matches:
            '[text*="跳过"][text.length<=10][id!="com.netease.mobimail:id/ad_skip"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12686132',
            'https://i.gkd.li/i/13328441',
            'https://i.gkd.li/i/13800060',
          ],
        },
        {
          key: 1,
          matches: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
          snapshotUrls: 'https://i.gkd.li/i/12686093',
        },
        {
          key: 2,
          matches: '[id="com.netease.mobimail:id/ad_skip"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/12667519',
            'https://i.gkd.li/i/13328425',
          ],
        },
      ],
      order: -10,
    },
    {
      key: 1,
      name: '未分类-邮件列表页面广告条目',
      rules: [
        {
          activityIds: 'com.netease.mail.biz.main.MainITabActivity',
          matches: '[id="com.netease.mobimail:id/ad_vip"]',
          snapshotUrls: 'https://i.gkd.li/i/12683488',
        },
        {
          activityIds: 'com.netease.mail.biz.main.MainITabActivity',
          matches: '[id="com.netease.mobimail:id/ll_delete"]',
          snapshotUrls: 'https://i.gkd.li/i/12683511',
        },
      ],
      enable: false,
    },
    {
      key: 2,
      name: '未分类-切回时的开屏广告',
      activityIds: 'com.netease.mail.biz.main.MainITabActivity',
      rules: '@LinearLayout > TextView[text^="跳过"]',
      snapshotUrls: 'https://i.gkd.li/i/12685745',
      enable: false,
    },
  ],
});
