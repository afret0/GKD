import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.gspace.android',
  name: 'Gspace',
  groups: [
    {
      key: 1,
      name: '未分类-主页面上方广告',
      activityIds: ['com.gspace.android.ui.activity.main.MainActivity'],
      rules: [
        {
          key: 0,
          matches: '[id="com.gspace.android:id/hiad_banner_close_button"]',
          snapshotUrls: 'https://i.gkd.li/i/12705339',
        },
        {
          key: 1,
          matches: '@Image < View -2 View > View > View TextView[text="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12910419',
            'https://i.gkd.li/i/12910935',
          ],
        },
        {
          preKeys: 1,
          matches: '[id="com.byted.pangle:id/tt_item_tv" && text= "不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/12910420',
        },
      ],
      enable: true,
    },
    {
      key: 2,
      name: '未分类-Youtube播放视频跳过广告',
      rules: '[id="com.google.android.youtube:id/skip_ad_button"]',
      snapshotUrls: 'https://i.gkd.li/i/12709006',
      enable: true,
    },
  ],
});
