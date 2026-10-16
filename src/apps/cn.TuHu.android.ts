import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.TuHu.android',
  name: '途虎养车',
  groups: [
    {
      key: 1,
      name: '未分类-广告弹窗',
      fastQuery: true,
      activityIds: 'cn.TuHu.Activity.tuhutab.TuHuTabActivity',
      rules:
        '@[id="cn.TuHu.android:id/imgClose"] - [id="cn.TuHu.android:id/rlContent"] > [id="cn.TuHu.android:id/img_jump"]',
      snapshotUrls: 'https://i.gkd.li/i/13228818',
      enable: false,
    },
    {
      key: 10,
      fastQuery: true,
      name: '未分类-请求通知权限弹窗',
      activityIds: 'cn.TuHu.Activity.tuhutab.TuHuTabActivity',
      rules: '[id="cn.TuHu.android:id/imgClose"]',
      snapshotUrls: [
        'https://i.gkd.li/i/13228796',
        'https://i.gkd.li/i/13256535',
      ],
      enable: false,
    },
  ],
});
