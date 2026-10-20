import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huatu.handheld_huatu',
  name: '华图在线',
  groups: [
    {
      key: 1,
      name: '未分类-首页广告弹窗',
      activityIds: [
        'com.huatu.handheld_huatu.view.MainPopDialog',
        'com.huatu.handheld_huatu.business.main.MainTabActivity',
      ],
      rules:
        '[id="com.huatu.handheld_huatu:id/main_img_adv_bg"] + [id="com.huatu.handheld_huatu:id/main_img_close"]',
      snapshotUrls: [
        'https://i.gkd.li/i/12715702',
        'https://i.gkd.li/i/12744973',
      ],
      enable: true,
    },
    {
      key: 10,
      name: '未分类-请求通知权限弹窗',
      activityIds: 'com.huatu.handheld_huatu.business.main.MainTabActivity',
      rules: '[text*="开启通知提示"] +2 LinearLayout > [text="取消"]',
      snapshotUrls: 'https://i.gkd.li/i/12715719',
      enable: true,
    },
  ],
});
