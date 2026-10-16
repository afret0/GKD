import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.bilibili.app.in',
  name: 'bilibili',
  groups: [
    {
      key: 5,
      name: '未分类-评论区-满意度评价',
      fastQuery: true,
      activityIds: 'com.bilibili.video.story.StoryVideoActivity',
      rules:
        '[text="对当前的评论区满意吗？"] + [id="com.bilibili.app.in:id/close"]',
      snapshotUrls: 'https://i.gkd.li/i/13115189',
      enable: false,
    },
    {
      key: 6,
      name: '未分类-APP评分',
      fastQuery: true,
      activityIds: 'tv.danmaku.bili.MainActivityV2',
      rules: '[id="com.bilibili.app.in:id/cancel"][text="下次再说"]',
      snapshotUrls: 'https://i.gkd.li/i/13180746',
      enable: false,
    },
    {
      key: 7,
      name: '未分类-订阅感兴趣的通知',
      desc: '点击【暂不开启】',
      fastQuery: true,
      rules: '[text="订阅感兴趣的通知"] +2 LinearLayout [text="暂不开启"]',
      snapshotUrls: 'https://i.gkd.li/i/13399195',
      enable: false,
    },
    {
      key: 8,
      name: '未分类-打开推送通知弹窗',
      desc: '自动点击“暂不”',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      rules:
        '[text="打开推送通知"] +2 LinearLayout > [id="com.bilibili.app.in:id/close"]',
      snapshotUrls: 'https://i.gkd.li/i/13600976',
      enable: false,
    },
  ],
});
