import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jd.jrapp',
  name: '京东金融',
  groups: [
    {
      key: 1,
      name: '未分类-通知提醒',
      fastQuery: true,
      actionMaximum: 1,
      activityIds: [
        'com.jd.jrapp.bm.mainbox.main.MainActivity',
        'com.jd.jrapp.bm.common.web.ui.WebActivity',
      ],
      rules: [
        {
          activityIds: 'com.jd.jrapp.bm.mainbox.main.MainActivity',
          matches:
            'TextView[text^="打开通知"] +2 [id="com.jd.jrapp:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13249998',
        },
        {
          activityIds: 'com.jd.jrapp.bm.common.web.ui.WebActivity',
          matches: 'View[text="开启并订阅通知"] < View + View[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13255656',
        },
      ],
      enable: true,
    },
    {
      key: 2,
      name: '未分类-版本更新',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.jd.jrapp.bm.mainbox.main.MainActivity',
      rules:
        '@ImageButton[id="com.jd.jrapp:id/ib_close"] + RelativeLayout [text^="发现新版本"]',
      snapshotUrls: 'https://i.gkd.li/i/13628364',
      enable: true,
    },
    {
      key: 3,
      name: '未分类-满意度打分弹窗',
      actionMaximum: 1,
      resetMatch: 'activity',
      rules: '[text*="满意度打几分"] + ImageView',
      snapshotUrls: 'https://i.gkd.li/i/13804561',
      enable: true,
    },
  ],
});
