import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.gwm.fusion',
  name: '长城汽车',
  groups: [
    {
      key: 1,
      name: '功能类-点击蓝牙图标',
      desc: '进入首页后自动点击一次蓝牙状态图标',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: '.ui.main.MainActivity',
      rules: [
        {
          key: 0,
          matches: '[vid="fl_ble_sts"]',
        },
      ],
      enable: true,
    },
  ],
});
