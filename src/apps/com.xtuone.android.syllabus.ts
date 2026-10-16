import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xtuone.android.syllabus',
  name: '超级课程表',
  groups: [
    {
      key: 1,
      name: '未分类-首页banner广告',
      activityIds: ['com.xtuone.android.friday.MainFragmentActivity'],
      rules: '[id="com.xtuone.android.syllabus:id/treehole_banner_close"]',
      snapshotUrls: 'https://i.gkd.li/i/12840733',
      enable: false,
    },
    {
      key: 2,
      name: '未分类-课程表界面广告',
      activityIds: ['com.xtuone.android.friday.MainFragmentActivity'],
      rules: '[id="com.xtuone.android.syllabus:id/imgv_close"]',
      snapshotUrls: 'https://i.gkd.li/i/12999642',
      enable: false,
    },
    {
      key: 3,
      name: '未分类-弹窗广告',
      activityIds: 'com.xtuone.android.friday.MainFragmentActivity',
      rules: '[id="com.xtuone.android.syllabus:id/dialog_ad_close"]',
      snapshotUrls: 'https://i.gkd.li/i/13166501',
      enable: false,
    },
  ],
});
