import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.reddit.frontpage',
  name: 'Reddit',
  groups: [
    {
      key: 3,
      name: '未分类-社区消息-更新提示',
      fastQuery: true,
      rules: [
        {
          activityIds: 'com.reddit.launch.main.MainActivity',
          matches: '[id="com.reddit.frontpage:id/cancel_button"]',
          snapshotUrls: 'https://i.gkd.li/i/13649914',
        },
      ],
      enable: true,
    },
    {
      key: 4,
      name: '未分类-NSFW 内容提示',
      desc: '自动点击 continue',
      fastQuery: true,
      rules: [
        {
          activityIds: 'com.reddit.launch.main.MainActivity',
          matches: 'Button[text="Cancel"] + Button[text="Continue"]',
          snapshotUrls: 'https://i.gkd.li/i/13649992',
        },
      ],
      enable: true,
    },
  ],
});
