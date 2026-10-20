import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.able.wisdomtree',
  name: '知到',
  groups: [
    {
      key: 2,
      name: '未分类-消息推送通知',
      desc: '自动点击暂不开启。',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: 'TextView[id="com.able.wisdomtree:id/negativeButton"]',
      snapshotUrls: [
        'https://i.gkd.li/i/13458779',
        'https://i.gkd.li/i/13623441',
        'https://i.gkd.li/i/13695447',
      ],
      enable: true,
    },
    {
      key: 3,
      name: '未分类-升级提醒',
      desc: '自动点击忽略。',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text="更新"] -n [text="忽略"]',
      snapshotUrls: [
        'https://i.gkd.li/i/13458796',
        'https://i.gkd.li/i/13797285',
      ],
      enable: true,
    },
  ],
});
