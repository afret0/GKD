import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.cmocmna',
  name: '腾讯手游加速器',
  groups: [
    {
      key: 1,
      name: '未分类-悬浮广告',
      activityIds: 'com.tencent.mocmna.activity.MainActivity',
      rules:
        'ViewGroup[childCount=2] > @ImageView[id!=null][clickable=true] + ImageView',
      snapshotUrls: [
        'https://i.gkd.li/i/12847323',
        'https://i.gkd.li/i/12847336',
        'https://i.gkd.li/i/13063271',
      ],
      enable: false,
    },
    {
      key: 2,
      name: '未分类-信息流内嵌广告',
      activityIds: 'com.tencent.mocmna.activity.MainActivity',
      rules: 'ImageView - ViewGroup > ImageView + ImageView + ImageView',
      snapshotUrls: [
        'https://i.gkd.li/i/12847340',
        'https://i.gkd.li/i/12847364',
      ],
      enable: false,
    },
  ],
});
