import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.icbc',
  name: '中国工商银行',
  groups: [
    {
      key: 0,
      name: '未分类-第一次启动提示',
      activityIds: 'com.icbc.activity.init.SplashActivity',
      rules: '[id="com.icbc:id/close_btn"]',
      enable: true,
    },
    {
      key: 1,
      name: '未分类-弹窗广告',
      activityIds: 'com.icbc.activity.main.MainActivity',
      rules: '[id="com.icbc:id/tv_time"][text*="跳过"][text.length<=6]',
      snapshotUrls: 'https://i.gkd.li/i/13330431',
      enable: true,
    },
  ],
});
