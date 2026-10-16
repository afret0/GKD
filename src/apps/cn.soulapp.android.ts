import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.soulapp.android',
  name: 'Soul',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          matches: '[id="cn.soulapp.android:id/c_ad_skip_view_btn"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12833280',
            'https://i.gkd.li/i/12850094',
          ],
        },
      ],
      order: -10,
    },
    {
      key: 2,
      name: '未分类-广场页卡片广告',
      fastQuery: true,
      activityIds: ['cn.soulapp.android.component.startup.main.MainActivity'],
      rules: [
        {
          matches:
            '[id="cn.soulapp.android:id/sl_ad_root"] >n [id="cn.soulapp.android:id/fl_tag_container"]',
          snapshotUrls: 'https://i.gkd.li/i/12838000',
        },
      ],
      enable: false,
    },
    {
      key: 3,
      name: '未分类-app评分',
      fastQuery: true,
      activityIds: ['cn.soulapp.android.component.chat.ConversationActivity'],
      rules: [
        {
          matches:
            '[id="cn.soulapp.android:id/score_message"] +3 [id="cn.soulapp.android:id/cancel"]',
          snapshotUrls: 'https://i.gkd.li/i/13425057',
        },
      ],
      enable: false,
    },
    {
      key: 4,
      name: '未分类-版本更新',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: ['cn.soulapp.android.component.startup.main.MainActivity'],
      rules: [
        {
          matches:
            '@[id="cn.soulapp.android:id/img_close"] -2 RelativeLayout > [text="升级到最新版本"]',
          snapshotUrls: 'https://i.gkd.li/i/13693361',
        },
      ],
      enable: false,
    },
  ],
});
