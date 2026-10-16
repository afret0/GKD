import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.guwendao.gwd',
  name: '古文岛',
  groups: [
    {
      key: 1,
      name: '更新提示',
      activityIds: 'com.guwendao.gwd.MainActivity',
      rules: '[text="应用升级提醒"] +n LinearLayout > [text="取消"]',
      snapshotUrls: 'https://i.gkd.li/i/12776605',
      enable: false,
      order: -9,
    },
    {
      key: 2,
      name: '未分类-第三方 SDK 广告弹窗',
      activityIds: 'com.guwendao.gwd.MainActivity',
      rules: [
        {
          key: 0,
          matches: 'ImageView - FrameLayout > FrameLayout > ImageView[id=null]',
          snapshotUrls: 'https://i.gkd.li/i/12776607',
        },
        {
          activityIds:
            'com.android.systemui.media.MediaProjectionPermissionActivity',
          key: 1,
          matches:
            'ImageView - LinearLayout - FrameLayout > FrameLayout > ImageView[id=null]',
          snapshotUrls: 'https://i.gkd.li/i/12777151',
        },
        {
          key: 2,
          matches:
            '[id="com.byted.pangle.m:id/tt_reward_full_count_down_after"]',
          snapshotUrls: 'https://i.gkd.li/i/12781344',
        },
        {
          key: 3,
          matches:
            'ImageView < FrameLayout + FrameLayout > FrameLayout > ImageView[id=null]',
          snapshotUrls: 'https://i.gkd.li/i/12924728',
        },
        {
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          key: 10,
          matches: '@Image[id=null] < View + View + TextView[text="反馈"]',
          snapshotUrls: 'https://i.gkd.li/i/12781327',
        },
      ],
      enable: false,
    },
  ],
});
