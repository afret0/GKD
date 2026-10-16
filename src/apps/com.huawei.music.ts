import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huawei.music',
  name: '华为音乐',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: ['com.android.mediacenter.PageActivity'],
      rules: [
        {
          matches: '[id="com.huawei.hms.ads.uiengine:id/hiad_skip_text"]',
          action: 'clickCenter',
          snapshotUrls: ['https://i.gkd.li/i/12745222'],
        },
      ],
      order: -10,
    },
    {
      key: 2,
      name: '未分类-广告反馈下拉窗',
      fastQuery: true,
      activityIds: ['com.huawei.openalliance.ad.activity.FeedbackActivity'],
      rules: [
        {
          matches:
            'TextView[id="com.huawei.music:id/label_title"][text="直接关闭"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13067574',
            'https://i.gkd.li/i/13067572',
            'https://i.gkd.li/i/13067571',
            'https://i.gkd.li/i/13067659',
            'https://i.gkd.li/i/13067665',
            'https://i.gkd.li/i/13067820',
          ],
        },
      ],
      enable: false,
    },
    {
      key: 3,
      name: '未分类-播放界面直播浮窗',
      fastQuery: true,
      activityIds: ['com.android.mediacenter.MainActivity'],
      rules: [
        {
          matches:
            'TextView[id="com.huawei.music:id/live_info"] < LinearLayout -2 [id="com.huawei.music:id/close_button"]',
          snapshotUrls: ['https://i.gkd.li/i/13067649'],
        },
      ],
      enable: false,
    },
    {
      key: 4,
      name: '未分类-播放（音乐、视频）页面广告',
      fastQuery: true,
      activityIds: ['com.android.mediacenter.MainActivity'],
      rules: [
        {
          matches:
            'TextView[id="com.huawei.music:id/ad_icon"&&visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13067956',
            'https://i.gkd.li/i/13067978',
            'https://i.gkd.li/i/13067387',
          ],
        },
      ],
      enable: false,
    },
    {
      key: 5,
      name: '未分类-评论区广告',
      fastQuery: true,
      activityIds: [
        'com.android.mediacenter.comment.ui.CommentListMainActivity',
      ],
      rules: [
        {
          matches: '[id="com.huawei.music:id/ad_icon"]',
          snapshotUrls: ['https://i.gkd.li/i/13067937'],
        },
      ],
      enable: false,
    },
    {
      key: 6,
      name: '未分类-视频播放页广告反馈',
      fastQuery: true,
      activityIds: ['com.android.mediacenter.MainActivity'],
      rules: [
        {
          matches: 'TextView[text="不感兴趣"][id$="title"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13067986',
            'https://i.gkd.li/i/13067981',
          ],
        },
      ],
      enable: false,
    },
    {
      key: 7,
      name: '未分类-播放器上滑广告',
      fastQuery: true,
      activityIds: ['com.android.mediacenter.MainActivity'],
      rules: [
        {
          matches:
            'ViewGroup > TextView[text="广告"][id$="ad_icon"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13068935',
            'https://i.gkd.li/i/13194163',
            'https://i.gkd.li/i/13263590',
          ],
        },
      ],
      enable: false,
    },
  ],
});
