import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tmall.wireless',
  name: '手机天猫',
  groups: [
    {
      key: 1,
      name: '未分类-版本更新',
      fastQuery: true,
      activityIds: [
        'com.tmall.wireless.splash.TMSplashActivity',
        'com.tmall.wireless.maintab.module.TMMainTabActivity',
        'com.tmall.wireless.webview.TMCommonWebViewActivity',
      ],
      rules: '[id="com.tmall.wireless:id/update_button_cancel"]',
      snapshotUrls: [
        'https://i.gkd.li/i/13162603',
        'https://i.gkd.li/i/13258201',
        'https://i.gkd.li/i/13399536',
      ],
      enable: false,
    },
    {
      key: 2,
      name: '未分类-弹窗广告',
      activityIds: [
        'com.tmall.wireless.maintab.module.TMMainTabActivity',
        'com.tmall.wireless.turboweb.container.TurboWebViewActivity',
        'com.tmall.wireless.webview.TMCommonWebViewActivity',
      ],
      rules:
        'Image[id=null][clickable=false] < View + Image[id=null][clickable=true]',
      snapshotUrls: [
        'https://i.gkd.li/i/13222394',
        'https://i.gkd.li/i/13222500',
        'https://i.gkd.li/i/13222510',
      ],
      enable: false,
    },
    {
      key: 3,
      name: '未分类-系统通知',
      matchTime: 10000,
      actionMaximum: 1,
      activityIds:
        'com.tmall.wireless.messagebox.activity.TMMsgboxMainActivity',
      rules: 'View[text="开启系统通知"] - View[clickable=true]',
      snapshotUrls: 'https://i.gkd.li/i/13258215',
      enable: false,
    },
  ],
});
