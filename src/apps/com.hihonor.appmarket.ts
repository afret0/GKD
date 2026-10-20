import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hihonor.appmarket',
  name: '荣耀应用市场',
  groups: [
    {
      key: 1,
      name: '未分类-广告弹窗',
      fastQuery: true,
      activityIds: [
        'com.hihonor.android.launcher.unihome.UniHomeLauncher',
        'com.hihonor.appmarket.module.main.MainActivity',
      ],
      rules: '[id="com.hihonor.appmarket:id/iv_dialog_operation_close"]',
      snapshotUrls: [
        'https://i.gkd.li/i/13063815',
        'https://i.gkd.li/i/13168440',
      ],
      enable: true,
    },
    {
      key: 2,
      name: '未分类-悬浮窗小广告',
      fastQuery: true,
      activityIds: 'com.hihonor.appmarket.module.main.MainActivity',
      rules: '[id="com.hihonor.appmarket:id/iv_floating_close"]',
      snapshotUrls: 'https://i.gkd.li/i/13063928',
      enable: true,
    },
    {
      key: 3,
      name: '未分类-推送通知',
      fastQuery: true,
      activityIds: 'com.hihonor.appmarket.module.main.MainActivity',
      rules:
        'TextView[text="接收通知"] < LinearLayout < LinearLayout +n [id="android:id/buttonPanel"] Button[text="否"]',
      snapshotUrls: 'https://i.gkd.li/i/13073319',
      enable: true,
    },
  ],
});
