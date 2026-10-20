import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dubox.drive',
  name: 'TeraBox',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: 'TextView[id="com.dubox.drive:id/tv_skip"]',
          snapshotUrls: 'https://i.gkd.li/i/13200574',
        },
        {
          matches: ['[id="inmobi-ad"]', '[id="com.dubox.drive:id/ivClose"]'],
          snapshotUrls: 'https://i.gkd.li/i/13688384',
        },
      ],
      order: -10,
    },
    {
      key: 1,
      name: '未分类-广告弹窗',
      fastQuery: true,
      activityIds: 'com.dubox.drive.ui.MainActivity',
      rules: 'ImageView[id="com.dubox.drive:id/ivClose"]',
      snapshotUrls: 'https://i.gkd.li/i/13200577',
      enable: true,
    },
    {
      key: 2,
      name: '未分类-通知权限',
      fastQuery: true,
      activityIds: 'com.dubox.drive.permission.view.PermissionDialogActivity',
      rules:
        '[text="Authorize"] - [id="com.dubox.drive:id/dialog_button_cancel"]',
      snapshotUrls: 'https://i.gkd.li/i/13688406',
      enable: true,
    },
  ],
});
