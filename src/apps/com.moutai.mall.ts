import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.moutai.mall',
  name: 'i茅台',
  groups: [
    {
      key: 1,
      name: '未分类-首页广告弹窗',
      activityIds: [
        'com.moutai.mall.MainActivity',
        'com.moutai.mall.module.splash.SplashActivity',
      ],
      rules:
        '[id="com.moutai.mall:id/ivPic"] + ViewGroup + [id="com.moutai.mall:id/vClose"]',
      snapshotUrls: [
        'https://i.gkd.li/i/12745130',
        'https://i.gkd.li/i/12745153',
      ],
      enable: true,
    },
    {
      key: 10,
      name: '未分类-请求通知权限弹窗',
      activityIds: 'com.moutai.mall.MainActivity',
      rules:
        '@[id="com.moutai.mall:id/vClose"] - LinearLayout > [text*="开通消息通知"]',
      snapshotUrls: 'https://i.gkd.li/i/12745142',
      enable: true,
    },
  ],
});
