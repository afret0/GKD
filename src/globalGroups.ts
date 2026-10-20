import { defineGkdGlobalGroups } from '@gkd-kit/define';

export default defineGkdGlobalGroups([
  {
    key: 0,
    name: '开屏广告-全局',
    desc: '关闭打开应用时的开屏广告',
    order: -10,
    matchRoot: true,
    fastQuery: true,
    matchTime: 10000,
    actionMaximum: 1,
    resetMatch: 'app',
    actionMaximumKey: 0,
    priorityTime: 10000,
    rules: [
      {
        key: 0,
        excludeMatches:
          '[text*="搜索" || text^="猜你" || text="历史记录" || text$="在搜"][text.length>3 && text.length<6][visibleToUser=true]',
        matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
      },
      {
        key: 1,
        excludeMatches:
          '[text*="搜索" || text^="猜你" || text="历史记录" || text$="在搜"][text.length>3 && text.length<6][visibleToUser=true]',
        matches:
          '[childCount=0][visibleToUser=true][(text.length<10 && (text*="跳过" || text*="跳過" || text~="(?is).*skip.*")) || vid~="(?is).*skip.*" || id$="tt_splash_skip_btn" || (desc.length<10 && (desc*="跳过" || desc*="跳過" || desc~="(?is).*skip.*"))]',
      },
      {
        key: 2,
        action: 'clickCenter',
        matches:
          'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][text=null][visibleToUser=true] + TextView[visibleToUser=true][text=null][index=parent.childCount.minus(1)]',
      },
    ],
    apps: [
      {
        id: 'com.tencent.mm',
        enable: true,
      },
      {
        id: 'li.songe.gkd',
        enable: true,
      },
      {
        id: 'com.eg.android.AlipayGphone',
        enable: true,
      },
      {
        id: 'com.tencent.wetype',
        enable: true,
      },
      {
        id: 'com.tmri.app.main',
        enable: true,
      },
      {
        id: 'com.github.android',
        enable: true,
      },
      {
        id: 'org.telegram.messenger',
        enable: true,
      },
      {
        id: 'com.twitter.android',
        enable: true,
      },
      {
        id: 'com.aistra.hail',
        enable: true,
      },
      {
        id: 'com.heyanle.easybangumi4',
        enable: true,
      },
      {
        id: 'com.perol.pixez',
        enable: true,
      },
      {
        id: 'com.perol.play.pixez',
        enable: true,
      },
      {
        id: 'com.magicalstory.videos',
        enable: true,
      },
      {
        id: 'com.magicalstory.installer',
        enable: true,
      },
      {
        id: 'com.guozhigq.pilipala',
        enable: true,
      },
      {
        id: 'com.salt.music',
        enable: true,
      },
      {
        id: 'com.xuncorp.qinalt.music',
        enable: true,
      },
      {
        id: 'com.github.wgh136.pica_comic',
        enable: true,
      },
      {
        id: 'com.yenaly.han1meviewer',
        enable: true,
      },
      {
        id: 'ru.zdevs.zarchiver',
        enable: true,
      },
      {
        id: 'ru.zdevs.zarchiver.pro',
        enable: true,
      },
      {
        id: 'me.zhanghai.android.files',
        enable: true,
      },
      {
        id: 'com.xjcheng.musictageditor',
        enable: true,
      },
      {
        id: 'com.lalilu.lmusic',
        enable: true,
      },
      {
        id: 'com.ktls.fileinfo',
        enable: true,
      },
      {
        id: 'idm.internet.download.manager',
        enable: true,
      },
      {
        id: 'idm.internet.download.manager.plus',
        enable: true,
      },
      {
        id: 'com.mxtech.videoplayer',
        enable: true,
      },
      {
        id: 'com.mxtech.videoplayer.pro',
        enable: true,
      },
      {
        id: 'com.github.kr328.clash',
        enable: true,
      },
      {
        id: 'com.x8bit.bitwarden',
        enable: true,
      },
      {
        id: 'org.localsend.localsend_app',
        enable: true,
      },
      {
        id: 'moe.shizuku.privileged.api',
        enable: true,
      },
      {
        id: 'com.ktls.automation',
        enable: true,
      },
      {
        id: 'com.deepl.mobiletranslator',
        enable: true,
      },
      {
        id: 'com.accessibilitymanager',
        enable: true,
      },
      {
        id: 'me.tasy5kg.cutegif',
        enable: true,
      },
      {
        id: 'com.absinthe.libchecker',
        enable: true,
      },
      {
        id: 'com.github.metacubex.clash.meta',
        enable: true,
      },
      {
        id: 'io.github.jd1378.otphelper',
        enable: true,
      },
      {
        id: 'com.valvesoftware.android.steam.community',
        enable: true,
      },
      {
        id: 'io.legado.app.release',
        enable: true,
      },
      {
        id: 'com.getsurfboard',
        enable: true,
      },
      {
        id: 'moe.nb4a',
        enable: true,
      },
      {
        id: 'com.v2ray.ang',
        enable: true,
      },
      {
        id: 'com.xiaoyv.bangumi',
        enable: true,
      },
      {
        id: 'com.funny.translation',
        enable: true,
      },
      {
        id: 'com.looker.droidify',
        enable: true,
      },
      {
        id: 'app.eleven.com.fastfiletransfer',
        enable: true,
      },
      {
        id: 'com.idaodan.clean.master',
        enable: true,
      },
      {
        id: 'com.samsung.agc.gcam84',
        enable: true,
      },
      {
        id: 'com.wsw.cospa',
        enable: true,
      },
      {
        id: 'app.mihon',
        enable: true,
      },
      {
        id: 'com.rosan.installer.x',
        enable: true,
      },
      {
        id: 'app.rikka.savecopy',
        enable: true,
      },
      {
        id: 'com.rosan.dhizuku',
        enable: true,
      },
      {
        id: 'com.rosan.accounts',
        enable: true,
      },
      {
        id: 'com.dv.adm',
        enable: true,
      },
      {
        id: 'com.assistant.ongoingclear',
        enable: true,
      },
      {
        id: 'org.koitharu.kotatsu',
        enable: true,
      },
      {
        id: 'me.ash.reader',
        enable: true,
      },
      {
        id: 'com.huanchengfly.tieba.post',
        enable: true,
      },
      {
        id: 'com.example.c001apk',
        enable: true,
      },
      {
        id: 'dev.anilbeesetti.nextplayer',
        enable: true,
      },
      {
        id: 'org.kde.kdeconnect_tp',
        enable: true,
      },
      {
        id: 'xyz.adproqwq.GKDTool',
        enable: true,
      },
      {
        id: 'com.alibaba.aliyun',
        enable: true,
      },
      {
        id: 'com.alicloud.databox',
        enable: true,
      },
      {
        id: 'xyz.nextalone.nagram',
        enable: true,
      },
      {
        id: 'com.openai.chatgpt',
        enable: true,
      },
      {
        id: 'org.telegram.group',
        enable: true,
      },
      {
        id: 'com.android.chrome',
        enable: true,
      },
      {
        id: 'org.mozilla.firefox',
        enable: true,
      },
      {
        id: 'org.mozilla.firefox_beta',
        enable: true,
      },
      {
        id: 'org.mozilla.fenix',
        enable: true,
      },
      {
        id: 'org.mozilla.focus',
        enable: true,
      },
      {
        id: 'com.google.android.youtube',
        enable: true,
      },
      {
        id: 'com.xunmeng.pinduoduo',
        enable: true,
      },
      {
        id: 'com.byyoung.setting',
        enable: true,
      },
      {
        id: 'com.mixplorer',
        enable: true,
      },
      {
        id: 'com.xjs.ehviewer',
        enable: true,
      },
      {
        id: 'rikka.appops',
        enable: true,
      },
      {
        id: 'com.vrem.wifianalyzer',
        enable: true,
      },
      {
        id: 'remix.myplayer',
        enable: true,
      },
      {
        id: 'com.arn.scrobble',
        enable: true,
      },
      {
        id: 'org.videolan.vlc',
        enable: true,
      },
      {
        id: 'org.geogebra.android.calculator.suite',
        enable: true,
      },
      {
        id: 'com.azure.authenticator',
        enable: true,
      },
      {
        id: 'com.microsoft.office.officehub',
        enable: true,
      },
      {
        id: 'com.microsoft.office.officehubrow',
        enable: true,
      },
      {
        id: 'com.microsoft.office.outlook',
        enable: true,
      },
      {
        id: 'com.microsoft.office.onenote',
        enable: true,
      },
      {
        id: 'com.sonkins.tguitar',
        enable: true,
      },
      {
        id: 'com.eumlab.android.prometronome',
        enable: true,
      },
      {
        id: 'cn.edu.buaa.wxwork',
        enable: true,
      },
      {
        id: 'io.github.muntashirakon.AppManager',
        enable: true,
      },
      {
        id: 'moe.shizuku.redirectstorage',
        enable: true,
      },
      {
        id: 'web1n.stopapp',
        enable: true,
      },
      {
        id: 'com.shatyuka.zhiliao',
        enable: true,
      },
      {
        id: 'com.adobe.reader',
        enable: true,
      },
      {
        id: 'org.wikipedia',
        enable: true,
      },
      {
        id: 'org.kiwix.kiwixmobile',
        enable: true,
      },
      {
        id: 'com.brakefield.painter',
        enable: true,
      },
      {
        id: 'me.iacn.biliroaming',
        enable: true,
      },
      {
        id: 'com.termux',
        enable: true,
      },
      {
        id: 'oss.krtirtho.spotube',
        enable: true,
      },
      {
        id: 'com.merxury.blocker',
        enable: true,
      },
      {
        id: 'moe.minamigo.miuigms',
        enable: true,
      },
      {
        id: 'mufanc.tools.applock',
        enable: true,
      },
      {
        id: 'com.gankes.tsbattery',
        enable: true,
      },
      {
        id: 'com.oasisfeng.nevo.xposed',
        enable: true,
      },
      {
        id: 'com.reddit.frontpage',
        enable: true,
      },
      {
        id: 'com.ghostflying.locationreportenabler',
        enable: true,
      },
      {
        id: 'com.zyc.zcontrol',
        enable: true,
      },
      {
        id: 'org.nobody.multitts',
        enable: true,
      },
      {
        id: 'deltazero.amarok',
        enable: true,
      },
      {
        id: 'com.canghai.haoka',
        enable: true,
      },
      {
        id: 'com.xy.td',
        enable: true,
      },
      {
        id: 'com.bug.hookvip',
        enable: true,
      },
      {
        id: 'one.yufz.hmspush',
        enable: true,
      },
      {
        id: 'io.github.huskydg.magisk',
        enable: true,
      },
      {
        id: 'xzr.konabess',
        enable: true,
      },
      {
        id: 'org.lsposed.manager',
        enable: true,
      },
      {
        id: 'bin.mt.plus',
        enable: true,
      },
      {
        id: 'tw.nekomimi.nekogram',
        enable: true,
      },
      {
        id: 'io.github.qauxv',
        enable: true,
      },
      {
        id: 'com.rezvorck.tiktokplugin',
        enable: true,
      },
      {
        id: 'com.zhiliaoapp.musically',
        enable: true,
      },
      {
        id: 'com.github.tianma8023.xposed.smscode',
        enable: true,
      },
      {
        id: 'Han.GJZS',
        enable: true,
      },
      {
        id: 'org.adblockplus.adblockplussbrowser',
        enable: true,
      },
      {
        id: 'com.viewblocker.jrsen',
        enable: true,
      },
      {
        id: 'com.tsng.hidemyapplist',
        enable: true,
      },
      {
        id: 'com.pittvandewitt.wavelet',
        enable: true,
      },
      {
        id: 'one.yufz.onebox',
        enable: true,
      },
      {
        id: 'com.Wecrane.Scar.pubg',
        enable: true,
      },
      {
        id: 'me.bmax.apatch',
        enable: true,
      },
      {
        id: 'com.tubevpn.client',
        enable: true,
      },
      {
        id: 'github.tornaco.android.thanos.pro',
        enable: true,
      },
      {
        id: 'com.omarea.vtools',
        enable: true,
      },
      {
        id: 'com.litebyte.samhelper',
        enable: true,
      },
      {
        id: 'com.nurke.perfectone',
        enable: true,
      },
      {
        id: 'qlenlen.OneDesign',
        enable: true,
      },
      {
        id: 'icu.nullptr.nativetest',
        enable: true,
      },
      {
        id: 'io.github.vvb2060.mahoshojo',
        enable: true,
      },
      {
        id: 'com.samsung.android.memoryguardian',
        enable: true,
      },
      {
        id: 'com.music.khkj',
        enable: true,
      },
      {
        id: 'Hook.JiuWu.Xp',
        enable: true,
      },
      {
        id: 'me.weishu.kernelsu',
        enable: true,
      },
      {
        id: 'com.franco.kernel',
        enable: true,
      },
      {
        id: 'com.samsung.android.themedesigner',
        enable: true,
      },
      {
        id: 'com.samsung.android.game.gamehome',
        enable: true,
      },
      {
        id: 'com.tencent.tmgp.sgame',
        enable: true,
      },
      {
        id: 'com.yangyanghuzhou.heijuan',
        enable: true,
      },
      {
        id: 'com.sec.android.app.sbrowser',
        enable: true,
      },
      {
        id: 'com.samsung.android.game.gamelab',
        enable: true,
      },
      {
        id: 'com.Twilight.tools',
        enable: true,
      },
      {
        id: 'com.miui.securitymanager',
        enable: true,
      },
      {
        id: 'com.google.android.documentsui',
        enable: true,
      },
      {
        id: 'com.android.settings',
        enable: true,
      },
      {
        id: 'com.miui.creation',
        enable: true,
      },
      {
        id: 'com.xiaomi.scanner',
        enable: true,
      },
      {
        id: 'com.miui.gallery',
        enable: true,
      },
      {
        id: 'com.yozo.office',
        enable: true,
      },
      {
        id: 'com.miui.video',
        enable: true,
      },
      {
        id: 'com.xiaomi.wpslauncher',
        enable: true,
      },
      {
        id: 'com.sevtinge.hyperceiler',
        enable: true,
      },
      {
        id: 'com.dna.tools',
        enable: true,
      },
      {
        id: 'flar2.devcheck',
        enable: true,
      },
      {
        id: 'com.gstarmc.android',
        enable: true,
      },
      {
        id: 'com.github.capntrips.kernelflasher',
        enable: true,
      },
      {
        id: 'com.google.android.googlequicksearchbox',
        enable: true,
      },
      {
        id: 'qyz.onedesign',
        enable: true,
      },
      {
        id: 'com.samsung.android.app.repaircal',
        enable: true,
      },
      {
        id: 'com.yhchat.app',
        enable: true,
      },
      {
        id: 'com.skyhand.sinahelper',
        enable: true,
      },
      {
        id: 'com.rong862.bear',
        enable: true,
      },
      {
        id: 'be.mygod.vpnhotspot',
        enable: true,
      },
      {
        id: 'com.samsung.android.bixby.agent',
        enable: true,
      },
      {
        id: 'com.miui.huanji',
        enable: true,
      },
      {
        id: 'com.miui.weather2',
        enable: true,
      },
      {
        id: 'com.miui.calculator',
        enable: true,
      },
      {
        id: 'com.android.soundrecorder',
        enable: true,
      },
      {
        id: 'com.android.email',
        enable: true,
      },
      {
        id: 'com.miui.screenrecorder',
        enable: true,
      },
      {
        id: 'com.android.deskclock',
        enable: true,
      },
      {
        id: 'com.miui.newmidrive',
        enable: true,
      },
      {
        id: 'cn.wps.moffice_eng.xiaomi.lite',
        enable: true,
      },
      {
        id: 'com.miui.mediaeditor',
        enable: true,
      },
      {
        id: 'com.miui.notes',
        enable: true,
      },
      {
        id: 'com.miui.cleanmaster',
        enable: true,
      },
      {
        id: 'com.miui.compass',
        enable: true,
      },
      {
        id: 'com.duokan.phone.remotecontroller',
        enable: true,
      },
      {
        id: 'com.mfashiongallery.emag',
        enable: true,
      },
      {
        id: 'com.miui.thirdappassistant',
        enable: true,
      },
      {
        id: 'com.xiaomi.cajlauncher',
        enable: true,
      },
      {
        id: 'com.mi.car.padapp',
        enable: true,
      },
      {
        id: 'com.android.calendar',
        enable: true,
      },
      {
        id: 'com.samsung.android.app.cameraassistant',
        enable: true,
      },
      {
        id: 'com.samsung.android.app.galaxyraw',
        enable: true,
      },
      {
        id: 'com.samsung.android.appbooster',
        enable: true,
      },
      {
        id: 'com.android.samsung.utilityapp',
        enable: true,
      },
      {
        id: 'com.samsung.android.goodlock',
        enable: true,
      },
      {
        id: 'com.samsung.android.thermalguardian',
        enable: true,
      },
      {
        id: 'com.samsung.android.calendar',
        enable: true,
      },
      {
        id: 'com.samsung.android.app.notes',
        enable: true,
      },
      {
        id: 'com.jv.samsungeshop',
        enable: true,
      },
      {
        id: 'com.samsung.android.app.sreminder',
        enable: true,
      },
      {
        id: 'com.samsung.android.app.watchmanager',
        enable: true,
      },
      {
        id: 'com.samsung.android.app.reminder',
        enable: true,
      },
      {
        id: 'com.adguard.android.contentblocker',
        enable: true,
      },
      {
        id: 'com.sec.android.app.music',
        enable: true,
      },
      {
        id: 'com.sec.android.app.voicenote',
        enable: true,
      },
      {
        id: 'com.futuremark.dmandroid.application',
        enable: true,
      },
      {
        id: 'com.sec.android.app.clockpackage',
        enable: true,
      },
      {
        id: 'mark.via',
        enable: true,
      },
      {
        id: 'mark.via.gp',
        enable: true,
      },
      {
        id: 'com.mmbox.xbrowser',
        enable: true,
      },
      {
        id: 'com.mmbox.xbrowser.pro',
        enable: true,
      },
      {
        id: 'com.mycompany.app.soulbrowser',
        enable: true,
      },
      {
        id: 'com.taptap',
        enable: true,
      },
      {
        id: 'com.sankuai.meituan',
        enable: true,
      },
      {
        id: 'info.muge.appshare',
        enable: true,
      },
      {
        id: 'make.more.r2d2.cellular_z',
        enable: true,
      },
      {
        id: 'net.csdn.csdnplus',
        enable: true,
      },
      {
        id: 'com.xiangzi.dislikecn',
        enable: true,
      },
      {
        id: 'com.eco.global.app',
        enable: true,
      },
      {
        id: 'com.jiaohua_browser',
        enable: true,
      },
      {
        id: 'com.vgjump.jump',
        enable: true,
      },
      {
        id: 'com.lofter.android',
        enable: true,
      },
      {
        id: 'com.superrhino.rarering',
        enable: true,
      },
      {
        id: 'com.cyl.musiccy.ou',
        enable: true,
      },
      {
        id: 'com.ksf.yyx',
        enable: true,
      },
      {
        id: 'com.picacomic.fregata',
        enable: true,
      },
      {
        id: 'com.tencent.mobileqq',
        enable: true,
      },
      {
        id: 'cn.soulapp.android',
        enable: true,
      },
      {
        id: 'com.dubox.drive',
        enable: true,
      },
      {
        id: 'com.myzaker.ZAKER_Phone',
        enable: true,
      },
      {
        id: 'dxwt.questionnaire.ui',
        enable: true,
      },
      {
        id: 'com.mfcloudcalculate.networkdisk',
        enable: true,
      },
      {
        id: 'com.excean.na',
        enable: true,
      },
      {
        id: 'com.qiyi.video',
        enable: true,
      },
      {
        id: 'com.qiyi.video.lite',
        enable: true,
      },
      {
        id: 'com.hanweb.android.sdzwfw.activity',
        enable: true,
      },
      {
        id: 'com.shanghaionstar',
        enable: true,
      },
      {
        id: 'tw.com.gamer.android.activecenter',
        enable: true,
      },
      {
        id: 'com.baidu.input_huawei',
        enable: true,
      },
      {
        id: 'com.baidu.tieba',
        enable: true,
      },
      {
        id: 'com.baidu.netdisk.samsung',
        enable: true,
      },
      {
        id: 'com.byfen.market',
        enable: true,
      },
      {
        id: 'tv.danmaku.bili',
        enable: true,
      },
      {
        id: 'tv.danmaku.bilibilihd',
        enable: true,
      },
      {
        id: 'com.csmbcx.candada',
        enable: true,
      },
      {
        id: 'com.skyworthdigital.picamera',
        enable: true,
      },
      {
        id: 'com.kuangxiangciweimao.novel',
        enable: true,
      },
      {
        id: 'cn.damai',
        enable: true,
      },
      {
        id: 'com.zmzx.college.search',
        enable: true,
      },
      {
        id: 'com.yoloho.dayima',
        enable: true,
      },
      {
        id: 'com.delicloud.app.smartoffice',
        enable: true,
      },
      {
        id: 'com.mxchip.petmarvel',
        enable: true,
      },
      {
        id: 'com.didapinche.booking',
        enable: true,
      },
      {
        id: 'com.dianxinai.mobile',
        enable: true,
      },
      {
        id: 'com.zlfcapp.batterymanager',
        enable: true,
      },
      {
        id: 'com.dongqiudi.news',
        enable: true,
      },
      {
        id: 'com.citiccard.mobilebank',
        enable: true,
      },
      {
        id: 'com.diershoubing.erbing',
        enable: true,
      },
      {
        id: 'com.feeyo.vz.pro.cdm',
        enable: true,
      },
      {
        id: 'com.fbank.mobile',
        enable: true,
      },
      {
        id: 'com.autonavi.minimap',
        enable: true,
      },
      {
        id: 'com.xpx365.projphoto',
        enable: true,
      },
      {
        id: 'com.wallstreetcn.news',
        enable: true,
      },
      {
        id: 'com.huawei.browser',
        enable: true,
      },
      {
        id: 'com.huawei.himovie',
        enable: true,
      },
      {
        id: 'com.huawei.android.totemweather',
        enable: true,
      },
      {
        id: 'com.android.mediacenter',
        enable: true,
      },
      {
        id: 'com.huawei.music',
        enable: true,
      },
      {
        id: 'com.huawei.health',
        enable: true,
      },
      {
        id: 'com.huawei.android.thememanager',
        enable: true,
      },
      {
        id: 'com.dongao.kaoqian.phone',
        enable: true,
      },
      {
        id: 'com.jihuanshe',
        enable: true,
      },
      {
        id: 'com.handsgo.jiakao.android',
        enable: true,
      },
      {
        id: 'com.tipsoon.android',
        enable: true,
      },
      {
        id: 'com.jd.app.reader',
        enable: true,
      },
      {
        id: 'com.coolapk.market',
        enable: true,
      },
      {
        id: 'com.kugou.android',
        enable: true,
      },
      {
        id: 'com.kkeji.news.client',
        enable: true,
      },
      {
        id: 'com.app.lantt.xs',
        enable: true,
      },
      {
        id: 'com.mm.android.lc',
        enable: true,
      },
      {
        id: 'com.ecellsz.watch.guard',
        enable: true,
      },
      {
        id: 'com.antfortune.wealth',
        enable: true,
      },
      {
        id: 'com.manmanbuy.bijia',
        enable: true,
      },
      {
        id: 'com.paokeji.yiqu',
        enable: true,
      },
      {
        id: 'com.motoband',
        enable: true,
      },
      {
        id: 'com.mostone.life',
        enable: true,
      },
      {
        id: 'com.nowcoder.app.florida',
        enable: true,
      },
      {
        id: 'com.xiaohu.olevodmobile',
        enable: true,
      },
      {
        id: 'com.qiekj.user',
        enable: true,
      },
      {
        id: 'com.gentle.ppcat',
        enable: true,
      },
      {
        id: 'com.sup.android.superb',
        enable: true,
      },
      {
        id: 'com.luna.music',
        enable: true,
      },
      {
        id: 'com.tencent.tmgp.kgame.ppcr',
        enable: true,
      },
      {
        id: 'com.example.pptv',
        enable: true,
      },
      {
        id: 'com.mci.smagazine',
        enable: true,
      },
      {
        id: 'cn.samsclub.app',
        enable: true,
      },
      {
        id: 'com.fan.app',
        enable: true,
      },
      {
        id: 'com.flyersoft.seekbooks',
        enable: true,
      },
      {
        id: 'com.mymoney',
        enable: true,
      },
      {
        id: 'com.leixun.taofen8',
        enable: true,
      },
      {
        id: 'com.taobao.movie.android',
        enable: true,
      },
      {
        id: 'com.taobao.litetao',
        enable: true,
      },
      {
        id: 'com.tencent.qqlive',
        enable: true,
      },
      {
        id: 'com.tencent.qqsports',
        enable: true,
      },
      {
        id: 'com.qq.qcloud',
        enable: true,
      },
      {
        id: 'com.tencent.docs',
        enable: true,
      },
      {
        id: 'com.chan.cwallpaper',
        enable: true,
      },
      {
        id: 'com.wacai365',
        enable: true,
      },
      {
        id: 'com.waimaiii.waimaiii',
        enable: true,
      },
      {
        id: 'com.netease.snailread',
        enable: true,
      },
      {
        id: 'com.netease.mobimail',
        enable: true,
      },
      {
        id: 'com.netease.mail',
        enable: true,
      },
      {
        id: 'com.netease.cloudmusic',
        enable: true,
      },
      {
        id: 'com.weico.international',
        enable: true,
      },
      {
        id: 'com.example.maintenancemaster',
        enable: true,
      },
      {
        id: 'com.wls.weex',
        enable: true,
      },
      {
        id: 'com.realtech.xiaocan',
        enable: true,
      },
      {
        id: 'com.baidu.duer.superapp',
        enable: true,
      },
      {
        id: 'com.xiaoenai.app',
        enable: true,
      },
      {
        id: 'com.craftvpn.craft',
        enable: true,
      },
      {
        id: 'com.xiaote',
        enable: true,
      },
      {
        id: 'com.firebear.androil',
        enable: true,
      },
      {
        id: 'me.zhouzhuo810.zznote',
        enable: true,
      },
      {
        id: 'io.iftech.android.box',
        enable: true,
      },
      {
        id: 'moc.nauxuoyoaixoaix.www',
        enable: true,
      },
      {
        id: 'com.uanmi.miaojiaccount',
        enable: true,
      },
      {
        id: 'com.xunlei.downloadprovider',
        enable: true,
      },
      {
        id: 'cn.wsds.gamemaster',
        enable: true,
      },
      {
        id: 'com.cctv.yangshipin.app.androidp',
        enable: true,
      },
      {
        id: 'com.sec.android.app.samsungapps',
        enable: true,
      },
      {
        id: 'com.videogo',
        enable: true,
      },
      {
        id: 'com.ky.medical.reference',
        enable: true,
      },
      {
        id: 'com.cmstop.shaoxing',
        enable: true,
      },
      {
        id: 'com.tencent.djcity',
        enable: true,
      },
      {
        id: 'com.mygolbs.mybus',
        enable: true,
      },
      {
        id: 'com.zgnet.eClass',
        enable: true,
      },
      {
        id: 'com.crirp.zhipu',
        enable: true,
      },
      {
        id: 'com.ct.client',
        enable: true,
      },
      {
        id: 'cn.mil.junhao',
        enable: true,
      },
      {
        id: 'com.android.bankabc',
        enable: true,
      },
      {
        id: 'com.dfsly.bbs',
        enable: true,
      },
      {
        id: 'com.chunqiu.ah',
        enable: true,
      },
      {
        id: 'com.njh.biubiu',
        enable: true,
      },
      {
        id: 'com.miui.systemAdSolution',
        enable: true,
      },
      {
        id: 'gov.pianzong.androidnga',
        enable: true,
      },
      {
        id: 'com.heytap.market',
        enable: true,
      },
      {
        id: 'com.xyhui',
        enable: true,
      },
      {
        id: 'com.tencent.mtt',
        enable: true,
      },
      {
        id: 'com.tencent.androidqqmail',
        enable: true,
      },
      {
        id: 'com.qq.reader',
        enable: true,
      },
      {
        id: 'com.midea.vm.washer',
        enable: true,
      },
      {
        id: 'com.UCMobile',
        enable: true,
      },
      {
        id: 'com.upupoo.apu.mobile',
        enable: true,
      },
      {
        id: 'com.bbk.appstore',
        enable: true,
      },
      {
        id: 'com.miui.player',
        enable: true,
      },
      {
        id: 'com.tencent.southpole.appstore',
        enable: true,
      },
      {
        id: 'com.heytap.browser',
        enable: true,
      },
      {
        id: 'com.heytap.themestore',
        enable: true,
      },
    ],
  },
  {
    key: 1,
    name: '更新提示-全局',
    desc: '关闭应用的更新弹窗',
    order: -9,
    fastQuery: true,
    matchTime: 10000,
    actionMaximum: 1,
    resetMatch: 'app',
    rules: [
      {
        key: 0,
        matches: [
          '[text*="内测" || text*="测试版" || text*="新版" || text*="更新" || text*="升级" || text*="体验" || text*="內測" || text*="測試版" || text*="升級" || text*="體驗" || text*="Update" || text*="Upgrade" || text*="Experience"][text!*="自动" && text!*="自動" && text!*="成功" && text!*="失败" && text!*="失敗" && text!*="检查更新" && text!*="检测更新" && text!*="卸载"][name!$=".CheckBox"][childCount=0][visibleToUser=true]',
          '[text*="更新" || text*="下载" || text*="安装" || text*="升级" || text*="查看" || text*="体验" || text*="确定" || text*="确认"][text.length<6][name!$=".CheckBox"][childCount=0][visibleToUser=true]',
          '[text*="不再提醒" || text$="再说" || text$="拒绝" || text$="再想想" || text*="再看看" || text^="忽略" || text^="暂不" || text^="放弃" || text^="取消" || text$="不要" || text$="再說" || text$="暫不" || text$="拒絕" || text*="稍后" || text^="关闭" || text$="Later" || text^="Ignore" || text^="Not now" || text^="Cancel" || vid="iv_close" || vid="iv_cancel" || vid="close" || vid="Close" || vid="img_close" || vid="btn_close" || vid="ivCancel" || vid="cancel" || vid="Cancel" || vid="ivClose" || vid="imgClose" || vid="iv_negative"][name!$=".CheckBox"][childCount=0][visibleToUser=true]',
        ],
        excludeSnapshotUrls: ['https://i.gkd.li/i/17710149'],
      },
    ],
    apps: [
      {
        id: 'com.tencent.mm',
        enable: true,
      },
      {
        id: 'li.songe.gkd',
        enable: true,
      },
      {
        id: 'com.eg.android.AlipayGphone',
        enable: true,
      },
      {
        id: 'com.tencent.wetype',
        enable: true,
      },
      {
        id: 'com.tmri.app.main',
        enable: true,
      },
      {
        id: 'com.github.android',
        enable: true,
      },
      {
        id: 'org.telegram.messenger',
        enable: true,
      },
      {
        id: 'com.twitter.android',
        enable: true,
      },
      {
        id: 'com.aistra.hail',
        enable: true,
      },
      {
        id: 'com.heyanle.easybangumi4',
        enable: true,
      },
      {
        id: 'com.perol.pixez',
        enable: true,
      },
      {
        id: 'com.perol.play.pixez',
        enable: true,
      },
      {
        id: 'com.magicalstory.videos',
        enable: true,
      },
      {
        id: 'com.magicalstory.installer',
        enable: true,
      },
      {
        id: 'com.guozhigq.pilipala',
        enable: true,
      },
      {
        id: 'com.salt.music',
        enable: true,
      },
      {
        id: 'com.xuncorp.qinalt.music',
        enable: true,
      },
      {
        id: 'com.github.wgh136.pica_comic',
        enable: true,
      },
      {
        id: 'com.yenaly.han1meviewer',
        enable: true,
      },
      {
        id: 'ru.zdevs.zarchiver',
        enable: true,
      },
      {
        id: 'ru.zdevs.zarchiver.pro',
        enable: true,
      },
      {
        id: 'me.zhanghai.android.files',
        enable: true,
      },
      {
        id: 'com.xjcheng.musictageditor',
        enable: true,
      },
      {
        id: 'com.lalilu.lmusic',
        enable: true,
      },
      {
        id: 'com.ktls.fileinfo',
        enable: true,
      },
      {
        id: 'idm.internet.download.manager',
        enable: true,
      },
      {
        id: 'idm.internet.download.manager.plus',
        enable: true,
      },
      {
        id: 'com.mxtech.videoplayer',
        enable: true,
      },
      {
        id: 'com.mxtech.videoplayer.pro',
        enable: true,
      },
      {
        id: 'com.github.kr328.clash',
        enable: true,
      },
      {
        id: 'com.x8bit.bitwarden',
        enable: true,
      },
      {
        id: 'org.localsend.localsend_app',
        enable: true,
      },
      {
        id: 'moe.shizuku.privileged.api',
        enable: true,
      },
      {
        id: 'com.ktls.automation',
        enable: true,
      },
      {
        id: 'com.deepl.mobiletranslator',
        enable: true,
      },
      {
        id: 'com.accessibilitymanager',
        enable: true,
      },
      {
        id: 'me.tasy5kg.cutegif',
        enable: true,
      },
      {
        id: 'com.absinthe.libchecker',
        enable: true,
      },
      {
        id: 'com.github.metacubex.clash.meta',
        enable: true,
      },
      {
        id: 'io.github.jd1378.otphelper',
        enable: true,
      },
      {
        id: 'com.valvesoftware.android.steam.community',
        enable: true,
      },
      {
        id: 'io.legado.app.release',
        enable: true,
      },
      {
        id: 'com.getsurfboard',
        enable: true,
      },
      {
        id: 'moe.nb4a',
        enable: true,
      },
      {
        id: 'com.v2ray.ang',
        enable: true,
      },
      {
        id: 'com.xiaoyv.bangumi',
        enable: true,
      },
      {
        id: 'com.funny.translation',
        enable: true,
      },
      {
        id: 'com.looker.droidify',
        enable: true,
      },
      {
        id: 'app.eleven.com.fastfiletransfer',
        enable: true,
      },
      {
        id: 'com.idaodan.clean.master',
        enable: true,
      },
      {
        id: 'com.samsung.agc.gcam84',
        enable: true,
      },
      {
        id: 'com.wsw.cospa',
        enable: true,
      },
      {
        id: 'app.mihon',
        enable: true,
      },
      {
        id: 'com.rosan.installer.x',
        enable: true,
      },
      {
        id: 'app.rikka.savecopy',
        enable: true,
      },
      {
        id: 'com.rosan.dhizuku',
        enable: true,
      },
      {
        id: 'com.rosan.accounts',
        enable: true,
      },
      {
        id: 'com.dv.adm',
        enable: true,
      },
      {
        id: 'com.assistant.ongoingclear',
        enable: true,
      },
      {
        id: 'org.koitharu.kotatsu',
        enable: true,
      },
      {
        id: 'me.ash.reader',
        enable: true,
      },
      {
        id: 'com.huanchengfly.tieba.post',
        enable: true,
      },
      {
        id: 'com.example.c001apk',
        enable: true,
      },
      {
        id: 'dev.anilbeesetti.nextplayer',
        enable: true,
      },
      {
        id: 'org.kde.kdeconnect_tp',
        enable: true,
      },
      {
        id: 'xyz.adproqwq.GKDTool',
        enable: true,
      },
      {
        id: 'com.alibaba.aliyun',
        enable: true,
      },
      {
        id: 'com.alicloud.databox',
        enable: true,
      },
      {
        id: 'xyz.nextalone.nagram',
        enable: true,
      },
      {
        id: 'com.openai.chatgpt',
        enable: true,
      },
      {
        id: 'org.telegram.group',
        enable: true,
      },
      {
        id: 'com.android.chrome',
        enable: true,
      },
      {
        id: 'org.mozilla.firefox',
        enable: true,
      },
      {
        id: 'org.mozilla.firefox_beta',
        enable: true,
      },
      {
        id: 'org.mozilla.fenix',
        enable: true,
      },
      {
        id: 'org.mozilla.focus',
        enable: true,
      },
      {
        id: 'com.google.android.youtube',
        enable: true,
      },
      {
        id: 'com.xunmeng.pinduoduo',
        enable: true,
      },
      {
        id: 'com.byyoung.setting',
        enable: true,
      },
      {
        id: 'com.mixplorer',
        enable: true,
      },
      {
        id: 'com.xjs.ehviewer',
        enable: true,
      },
      {
        id: 'rikka.appops',
        enable: true,
      },
      {
        id: 'com.vrem.wifianalyzer',
        enable: true,
      },
      {
        id: 'remix.myplayer',
        enable: true,
      },
      {
        id: 'com.arn.scrobble',
        enable: true,
      },
      {
        id: 'org.videolan.vlc',
        enable: true,
      },
      {
        id: 'org.geogebra.android.calculator.suite',
        enable: true,
      },
      {
        id: 'com.azure.authenticator',
        enable: true,
      },
      {
        id: 'com.microsoft.office.officehub',
        enable: true,
      },
      {
        id: 'com.microsoft.office.officehubrow',
        enable: true,
      },
      {
        id: 'com.microsoft.office.outlook',
        enable: true,
      },
      {
        id: 'com.microsoft.office.onenote',
        enable: true,
      },
      {
        id: 'com.sonkins.tguitar',
        enable: true,
      },
      {
        id: 'com.eumlab.android.prometronome',
        enable: true,
      },
      {
        id: 'cn.edu.buaa.wxwork',
        enable: true,
      },
      {
        id: 'io.github.muntashirakon.AppManager',
        enable: true,
      },
      {
        id: 'moe.shizuku.redirectstorage',
        enable: true,
      },
      {
        id: 'web1n.stopapp',
        enable: true,
      },
      {
        id: 'com.shatyuka.zhiliao',
        enable: true,
      },
      {
        id: 'com.adobe.reader',
        enable: true,
      },
      {
        id: 'org.wikipedia',
        enable: true,
      },
      {
        id: 'org.kiwix.kiwixmobile',
        enable: true,
      },
      {
        id: 'com.brakefield.painter',
        enable: true,
      },
      {
        id: 'me.iacn.biliroaming',
        enable: true,
      },
      {
        id: 'com.termux',
        enable: true,
      },
      {
        id: 'oss.krtirtho.spotube',
        enable: true,
      },
      {
        id: 'com.merxury.blocker',
        enable: true,
      },
      {
        id: 'moe.minamigo.miuigms',
        enable: true,
      },
      {
        id: 'mufanc.tools.applock',
        enable: true,
      },
      {
        id: 'com.gankes.tsbattery',
        enable: true,
      },
      {
        id: 'com.oasisfeng.nevo.xposed',
        enable: true,
      },
      {
        id: 'com.reddit.frontpage',
        enable: true,
      },
      {
        id: 'com.ghostflying.locationreportenabler',
        enable: true,
      },
      {
        id: 'com.zyc.zcontrol',
        enable: true,
      },
      {
        id: 'org.nobody.multitts',
        enable: true,
      },
      {
        id: 'deltazero.amarok',
        enable: true,
      },
      {
        id: 'com.canghai.haoka',
        enable: true,
      },
      {
        id: 'com.xy.td',
        enable: true,
      },
      {
        id: 'com.bug.hookvip',
        enable: true,
      },
      {
        id: 'one.yufz.hmspush',
        enable: true,
      },
      {
        id: 'io.github.huskydg.magisk',
        enable: true,
      },
      {
        id: 'xzr.konabess',
        enable: true,
      },
      {
        id: 'org.lsposed.manager',
        enable: true,
      },
      {
        id: 'bin.mt.plus',
        enable: true,
      },
      {
        id: 'tw.nekomimi.nekogram',
        enable: true,
      },
      {
        id: 'io.github.qauxv',
        enable: true,
      },
      {
        id: 'com.rezvorck.tiktokplugin',
        enable: true,
      },
      {
        id: 'com.zhiliaoapp.musically',
        enable: true,
      },
      {
        id: 'com.github.tianma8023.xposed.smscode',
        enable: true,
      },
      {
        id: 'Han.GJZS',
        enable: true,
      },
      {
        id: 'org.adblockplus.adblockplussbrowser',
        enable: true,
      },
      {
        id: 'com.viewblocker.jrsen',
        enable: true,
      },
      {
        id: 'com.tsng.hidemyapplist',
        enable: true,
      },
      {
        id: 'com.pittvandewitt.wavelet',
        enable: true,
      },
      {
        id: 'one.yufz.onebox',
        enable: true,
      },
      {
        id: 'com.Wecrane.Scar.pubg',
        enable: true,
      },
      {
        id: 'me.bmax.apatch',
        enable: true,
      },
      {
        id: 'com.tubevpn.client',
        enable: true,
      },
      {
        id: 'github.tornaco.android.thanos.pro',
        enable: true,
      },
      {
        id: 'com.omarea.vtools',
        enable: true,
      },
      {
        id: 'com.litebyte.samhelper',
        enable: true,
      },
      {
        id: 'com.nurke.perfectone',
        enable: true,
      },
      {
        id: 'qlenlen.OneDesign',
        enable: true,
      },
      {
        id: 'icu.nullptr.nativetest',
        enable: true,
      },
      {
        id: 'io.github.vvb2060.mahoshojo',
        enable: true,
      },
      {
        id: 'com.samsung.android.memoryguardian',
        enable: true,
      },
      {
        id: 'com.music.khkj',
        enable: true,
      },
      {
        id: 'Hook.JiuWu.Xp',
        enable: true,
      },
      {
        id: 'me.weishu.kernelsu',
        enable: true,
      },
      {
        id: 'com.franco.kernel',
        enable: true,
      },
      {
        id: 'com.samsung.android.themedesigner',
        enable: true,
      },
      {
        id: 'com.samsung.android.game.gamehome',
        enable: true,
      },
      {
        id: 'com.tencent.tmgp.sgame',
        enable: true,
      },
      {
        id: 'com.yangyanghuzhou.heijuan',
        enable: true,
      },
      {
        id: 'com.sec.android.app.sbrowser',
        enable: true,
      },
      {
        id: 'com.samsung.android.game.gamelab',
        enable: true,
      },
      {
        id: 'com.Twilight.tools',
        enable: true,
      },
      {
        id: 'com.miui.securitymanager',
        enable: true,
      },
      {
        id: 'com.google.android.documentsui',
        enable: true,
      },
      {
        id: 'com.android.settings',
        enable: true,
      },
      {
        id: 'com.miui.creation',
        enable: true,
      },
      {
        id: 'com.xiaomi.scanner',
        enable: true,
      },
      {
        id: 'com.miui.gallery',
        enable: true,
      },
      {
        id: 'com.yozo.office',
        enable: true,
      },
      {
        id: 'com.miui.video',
        enable: true,
      },
      {
        id: 'com.xiaomi.wpslauncher',
        enable: true,
      },
      {
        id: 'com.sevtinge.hyperceiler',
        enable: true,
      },
      {
        id: 'com.dna.tools',
        enable: true,
      },
      {
        id: 'flar2.devcheck',
        enable: true,
      },
      {
        id: 'com.gstarmc.android',
        enable: true,
      },
      {
        id: 'com.github.capntrips.kernelflasher',
        enable: true,
      },
      {
        id: 'com.google.android.googlequicksearchbox',
        enable: true,
      },
      {
        id: 'qyz.onedesign',
        enable: true,
      },
      {
        id: 'com.samsung.android.app.repaircal',
        enable: true,
      },
      {
        id: 'com.yhchat.app',
        enable: true,
      },
      {
        id: 'com.skyhand.sinahelper',
        enable: true,
      },
      {
        id: 'com.rong862.bear',
        enable: true,
      },
      {
        id: 'be.mygod.vpnhotspot',
        enable: true,
      },
      {
        id: 'com.samsung.android.bixby.agent',
        enable: true,
      },
      {
        id: 'com.miui.huanji',
        enable: true,
      },
      {
        id: 'com.miui.weather2',
        enable: true,
      },
      {
        id: 'com.miui.calculator',
        enable: true,
      },
      {
        id: 'com.android.soundrecorder',
        enable: true,
      },
      {
        id: 'com.android.email',
        enable: true,
      },
      {
        id: 'com.miui.screenrecorder',
        enable: true,
      },
      {
        id: 'com.android.deskclock',
        enable: true,
      },
      {
        id: 'com.miui.newmidrive',
        enable: true,
      },
      {
        id: 'cn.wps.moffice_eng.xiaomi.lite',
        enable: true,
      },
      {
        id: 'com.miui.mediaeditor',
        enable: true,
      },
      {
        id: 'com.miui.notes',
        enable: true,
      },
      {
        id: 'com.miui.cleanmaster',
        enable: true,
      },
      {
        id: 'com.miui.compass',
        enable: true,
      },
      {
        id: 'com.duokan.phone.remotecontroller',
        enable: true,
      },
      {
        id: 'com.mfashiongallery.emag',
        enable: true,
      },
      {
        id: 'com.miui.thirdappassistant',
        enable: true,
      },
      {
        id: 'com.xiaomi.cajlauncher',
        enable: true,
      },
      {
        id: 'com.mi.car.padapp',
        enable: true,
      },
      {
        id: 'com.android.calendar',
        enable: true,
      },
      {
        id: 'com.samsung.android.app.cameraassistant',
        enable: true,
      },
      {
        id: 'com.samsung.android.app.galaxyraw',
        enable: true,
      },
      {
        id: 'com.samsung.android.appbooster',
        enable: true,
      },
      {
        id: 'com.android.samsung.utilityapp',
        enable: true,
      },
      {
        id: 'com.samsung.android.goodlock',
        enable: true,
      },
      {
        id: 'com.samsung.android.thermalguardian',
        enable: true,
      },
      {
        id: 'com.samsung.android.calendar',
        enable: true,
      },
      {
        id: 'com.samsung.android.app.notes',
        enable: true,
      },
      {
        id: 'com.jv.samsungeshop',
        enable: true,
      },
      {
        id: 'com.samsung.android.app.sreminder',
        enable: true,
      },
      {
        id: 'com.samsung.android.app.watchmanager',
        enable: true,
      },
      {
        id: 'com.samsung.android.app.reminder',
        enable: true,
      },
      {
        id: 'com.adguard.android.contentblocker',
        enable: true,
      },
      {
        id: 'com.sec.android.app.music',
        enable: true,
      },
      {
        id: 'com.sec.android.app.voicenote',
        enable: true,
      },
      {
        id: 'com.futuremark.dmandroid.application',
        enable: true,
      },
      {
        id: 'com.sec.android.app.clockpackage',
        enable: true,
      },
      {
        id: 'mark.via',
        enable: true,
      },
      {
        id: 'mark.via.gp',
        enable: true,
      },
      {
        id: 'com.mmbox.xbrowser',
        enable: true,
      },
      {
        id: 'com.mmbox.xbrowser.pro',
        enable: true,
      },
      {
        id: 'com.mycompany.app.soulbrowser',
        enable: true,
      },
      {
        id: 'info.muge.appshare',
        enable: true,
      },
      {
        id: 'com.ylmf.androidclient',
        enable: true,
      },
      {
        id: 'net.csdn.csdnplus',
        enable: true,
      },
      {
        id: 'com.igpsport.igpsportandroid',
        enable: true,
      },
      {
        id: 'com.tencent.mobileqq',
        enable: true,
      },
      {
        id: 'com.taptap',
        enable: true,
      },
      {
        id: 'org.telegram.messenger.web',
        enable: true,
      },
      {
        id: 'cn.wps.moffice_eng',
        enable: true,
      },
      {
        id: 'com.alibaba.wireless',
        enable: true,
      },
      {
        id: 'com.giraffe',
        enable: true,
      },
      {
        id: 'com.baidu.searchbox',
        enable: true,
      },
      {
        id: 'com.baidu.BaiduMap',
        enable: true,
      },
      {
        id: 'com.boohee.one',
        enable: true,
      },
      {
        id: 'com.byd.aeri.caranywhere',
        enable: true,
      },
      {
        id: 'tv.danmaku.bili',
        enable: true,
      },
      {
        id: 'com.wibo.bigbang.ocr',
        enable: true,
      },
      {
        id: 'com.cainiao.wireless',
        enable: true,
      },
      {
        id: 'com.zmzx.college.search',
        enable: true,
      },
      {
        id: 'com.hpbr.directhires',
        enable: true,
      },
      {
        id: 'com.alibaba.android.rimet',
        enable: true,
      },
      {
        id: 'com.eastmoney.android.berlin',
        enable: true,
      },
      {
        id: 'com.dongqiudi.news',
        enable: true,
      },
      {
        id: 'com.cf.dubaji',
        enable: true,
      },
      {
        id: 'com.wm.dmall',
        enable: true,
      },
      {
        id: 'com.yaerxing.fkst',
        enable: true,
      },
      {
        id: 'com.autonavi.minimap',
        enable: true,
      },
      {
        id: 'com.guwendao.gwd',
        enable: true,
      },
      {
        id: 'com.cebbank.mobile.cemb',
        enable: true,
      },
      {
        id: 'com.jingyao.easybike',
        enable: true,
      },
      {
        id: 'com.haier.uhome.uplus',
        enable: true,
      },
      {
        id: 'com.xmcy.hykb',
        enable: true,
      },
      {
        id: 'com.redfinger.app',
        enable: true,
      },
      {
        id: 'com.duowan.kiwi',
        enable: true,
      },
      {
        id: 'com.huaban.android',
        enable: true,
      },
      {
        id: 'com.huawei.health',
        enable: true,
      },
      {
        id: 'com.huabenapp',
        enable: true,
      },
      {
        id: 'com.fileunzip.zxwknight',
        enable: true,
      },
      {
        id: 'com.ss.android.article.news',
        enable: true,
      },
      {
        id: 'com.jin10',
        enable: true,
      },
      {
        id: 'com.jingdong.pdj',
        enable: true,
      },
      {
        id: 'com.kugou.android.lite',
        enable: true,
      },
      {
        id: 'world.letsgo.booster.android.pro',
        enable: true,
      },
      {
        id: 'com.woapp.hebei',
        enable: true,
      },
      {
        id: 'com.lenovo.browser.hd',
        enable: true,
      },
      {
        id: 'com.lenovo.leos.appstore',
        enable: true,
      },
      {
        id: 'com.lolaage.tbulu.tools',
        enable: true,
      },
      {
        id: 'com.sankuai.movie',
        enable: true,
      },
      {
        id: 'com.mt.mtxx.mtxx',
        enable: true,
      },
      {
        id: 'com.sankuai.meituan',
        enable: true,
      },
      {
        id: 'com.sankuai.meituan.takeoutnew',
        enable: true,
      },
      {
        id: 'com.cmcc.cmvideo',
        enable: true,
      },
      {
        id: 'com.sjm.zhuanzhuan.mcy',
        enable: true,
      },
      {
        id: 'com.paokeji.yiqu',
        enable: true,
      },
      {
        id: 'com.csg.palmhall',
        enable: true,
      },
      {
        id: 'com.sup.android.superb',
        enable: true,
      },
      {
        id: 'com.dw.btime',
        enable: true,
      },
      {
        id: 'com.smzdm.client.android',
        enable: true,
      },
      {
        id: 'com.cnki.client',
        enable: true,
      },
      {
        id: 'com.sf.activity',
        enable: true,
      },
      {
        id: 'com.taobao.taobao',
        enable: true,
      },
      {
        id: 'com.tencent.docs',
        enable: true,
      },
      {
        id: 'com.alibaba.ailabs.tg',
        enable: true,
      },
      {
        id: 'com.eastmoney.android.fund',
        enable: true,
      },
      {
        id: 'com.cn21.ecloud',
        enable: true,
      },
      {
        id: 'com.wacai365',
        enable: true,
      },
      {
        id: 'cn.lezhi.speedtest',
        enable: true,
      },
      {
        id: 'cn.speedtest.lite',
        enable: true,
      },
      {
        id: 'com.netease.gl',
        enable: true,
      },
      {
        id: 'com.netease.newsreader.activity',
        enable: true,
      },
      {
        id: 'com.youdao.dict',
        enable: true,
      },
      {
        id: 'com.netease.cloudmusic',
        enable: true,
      },
      {
        id: 'cn.com.ruijie.magicbox',
        enable: true,
      },
      {
        id: 'com.ss.android.article.video',
        enable: true,
      },
      {
        id: 'com.daimajia.gold',
        enable: true,
      },
      {
        id: 'com.ximalaya.ting.android',
        enable: true,
      },
      {
        id: 'com.xingin.xhs',
        enable: true,
      },
      {
        id: 'com.xiaomi.vipaccount',
        enable: true,
      },
      {
        id: 'com.xiaomi.gamecenter.sdk.service',
        enable: true,
      },
      {
        id: 'com.okii.watch.global',
        enable: true,
      },
      {
        id: 'com.firebear.androil',
        enable: true,
      },
      {
        id: 'io.iftech.android.box',
        enable: true,
      },
      {
        id: 'ctrip.android.view',
        enable: true,
      },
      {
        id: 'com.baidu.youavideo',
        enable: true,
      },
      {
        id: 'com.heytap.music',
        enable: true,
      },
      {
        id: 'com.lphtsccft',
        enable: true,
      },
      {
        id: 'com.seebaby',
        enable: true,
      },
      {
        id: 'com.hanweb.android.zhejiang.activity',
        enable: true,
      },
      {
        id: 'com.zhihu.android',
        enable: true,
      },
      {
        id: 'com.cnki.view',
        enable: true,
      },
      {
        id: 'com.xiaolian.prometheus',
        enable: true,
      },
      {
        id: 'com.yipiao',
        enable: true,
      },
      {
        id: 'com.sinovatech.unicom.ui',
        enable: true,
      },
      {
        id: 'com.android.bankabc',
        enable: true,
      },
      {
        id: 'com.chinamobile.mcloud',
        enable: true,
      },
      {
        id: 'com.wuba.zhuanzhuan',
        enable: true,
      },
      {
        id: 'cn.xiaochuankeji.tieba',
        enable: true,
      },
      {
        id: 'com.heytap.market',
        enable: true,
      },
      {
        id: 'com.xyhui',
        enable: true,
      },
      {
        id: 'com.tencent.qqlite',
        enable: true,
      },
      {
        id: 'com.tencent.qqmusic',
        enable: true,
      },
      {
        id: 'com.qq.reader',
        enable: true,
      },
      {
        id: 'com.hihonor.phoneservice',
        enable: true,
      },
    ],
  },
  {
    key: 2,
    name: '青少年模式-全局',
    desc: '关闭应用的青少年模式弹窗',
    order: -8,
    fastQuery: true,
    matchTime: 10000,
    actionMaximum: 1,
    resetMatch: 'app',
    rules: [
      {
        key: 0,
        matches: [
          '[text*="青少年" || text*="未成年" || text*="儿童"][text*="模式" || text*="守护"][text.length<15][childCount=0][visibleToUser=true]',
          '[text*="知道了" || text*="关闭" || text*="我已知晓" || text*="已满"][text.length<8][childCount=0][visibleToUser=true]',
        ],
      },
    ],
    apps: [
      {
        id: 'com.tencent.mm',
        enable: true,
      },
      {
        id: 'li.songe.gkd',
        enable: true,
      },
      {
        id: 'com.eg.android.AlipayGphone',
        enable: true,
      },
      {
        id: 'com.tencent.wetype',
        enable: true,
      },
      {
        id: 'com.tmri.app.main',
        enable: true,
      },
      {
        id: 'com.github.android',
        enable: true,
      },
      {
        id: 'org.telegram.messenger',
        enable: true,
      },
      {
        id: 'com.twitter.android',
        enable: true,
      },
      {
        id: 'com.aistra.hail',
        enable: true,
      },
      {
        id: 'com.heyanle.easybangumi4',
        enable: true,
      },
      {
        id: 'com.perol.pixez',
        enable: true,
      },
      {
        id: 'com.perol.play.pixez',
        enable: true,
      },
      {
        id: 'com.magicalstory.videos',
        enable: true,
      },
      {
        id: 'com.magicalstory.installer',
        enable: true,
      },
      {
        id: 'com.guozhigq.pilipala',
        enable: true,
      },
      {
        id: 'com.salt.music',
        enable: true,
      },
      {
        id: 'com.xuncorp.qinalt.music',
        enable: true,
      },
      {
        id: 'com.github.wgh136.pica_comic',
        enable: true,
      },
      {
        id: 'com.yenaly.han1meviewer',
        enable: true,
      },
      {
        id: 'ru.zdevs.zarchiver',
        enable: true,
      },
      {
        id: 'ru.zdevs.zarchiver.pro',
        enable: true,
      },
      {
        id: 'me.zhanghai.android.files',
        enable: true,
      },
      {
        id: 'com.xjcheng.musictageditor',
        enable: true,
      },
      {
        id: 'com.lalilu.lmusic',
        enable: true,
      },
      {
        id: 'com.ktls.fileinfo',
        enable: true,
      },
      {
        id: 'idm.internet.download.manager',
        enable: true,
      },
      {
        id: 'idm.internet.download.manager.plus',
        enable: true,
      },
      {
        id: 'com.mxtech.videoplayer',
        enable: true,
      },
      {
        id: 'com.mxtech.videoplayer.pro',
        enable: true,
      },
      {
        id: 'com.github.kr328.clash',
        enable: true,
      },
      {
        id: 'com.x8bit.bitwarden',
        enable: true,
      },
      {
        id: 'org.localsend.localsend_app',
        enable: true,
      },
      {
        id: 'moe.shizuku.privileged.api',
        enable: true,
      },
      {
        id: 'com.ktls.automation',
        enable: true,
      },
      {
        id: 'com.deepl.mobiletranslator',
        enable: true,
      },
      {
        id: 'com.accessibilitymanager',
        enable: true,
      },
      {
        id: 'me.tasy5kg.cutegif',
        enable: true,
      },
      {
        id: 'com.absinthe.libchecker',
        enable: true,
      },
      {
        id: 'com.github.metacubex.clash.meta',
        enable: true,
      },
      {
        id: 'io.github.jd1378.otphelper',
        enable: true,
      },
      {
        id: 'com.valvesoftware.android.steam.community',
        enable: true,
      },
      {
        id: 'io.legado.app.release',
        enable: true,
      },
      {
        id: 'com.getsurfboard',
        enable: true,
      },
      {
        id: 'moe.nb4a',
        enable: true,
      },
      {
        id: 'com.v2ray.ang',
        enable: true,
      },
      {
        id: 'com.xiaoyv.bangumi',
        enable: true,
      },
      {
        id: 'com.funny.translation',
        enable: true,
      },
      {
        id: 'com.looker.droidify',
        enable: true,
      },
      {
        id: 'app.eleven.com.fastfiletransfer',
        enable: true,
      },
      {
        id: 'com.idaodan.clean.master',
        enable: true,
      },
      {
        id: 'com.samsung.agc.gcam84',
        enable: true,
      },
      {
        id: 'com.wsw.cospa',
        enable: true,
      },
      {
        id: 'app.mihon',
        enable: true,
      },
      {
        id: 'com.rosan.installer.x',
        enable: true,
      },
      {
        id: 'app.rikka.savecopy',
        enable: true,
      },
      {
        id: 'com.rosan.dhizuku',
        enable: true,
      },
      {
        id: 'com.rosan.accounts',
        enable: true,
      },
      {
        id: 'com.dv.adm',
        enable: true,
      },
      {
        id: 'com.assistant.ongoingclear',
        enable: true,
      },
      {
        id: 'org.koitharu.kotatsu',
        enable: true,
      },
      {
        id: 'me.ash.reader',
        enable: true,
      },
      {
        id: 'com.huanchengfly.tieba.post',
        enable: true,
      },
      {
        id: 'com.example.c001apk',
        enable: true,
      },
      {
        id: 'dev.anilbeesetti.nextplayer',
        enable: true,
      },
      {
        id: 'org.kde.kdeconnect_tp',
        enable: true,
      },
      {
        id: 'xyz.adproqwq.GKDTool',
        enable: true,
      },
      {
        id: 'com.alibaba.aliyun',
        enable: true,
      },
      {
        id: 'com.alicloud.databox',
        enable: true,
      },
      {
        id: 'xyz.nextalone.nagram',
        enable: true,
      },
      {
        id: 'com.openai.chatgpt',
        enable: true,
      },
      {
        id: 'org.telegram.group',
        enable: true,
      },
      {
        id: 'com.android.chrome',
        enable: true,
      },
      {
        id: 'org.mozilla.firefox',
        enable: true,
      },
      {
        id: 'org.mozilla.firefox_beta',
        enable: true,
      },
      {
        id: 'org.mozilla.fenix',
        enable: true,
      },
      {
        id: 'org.mozilla.focus',
        enable: true,
      },
      {
        id: 'com.google.android.youtube',
        enable: true,
      },
      {
        id: 'com.xunmeng.pinduoduo',
        enable: true,
      },
      {
        id: 'com.byyoung.setting',
        enable: true,
      },
      {
        id: 'com.mixplorer',
        enable: true,
      },
      {
        id: 'com.xjs.ehviewer',
        enable: true,
      },
      {
        id: 'rikka.appops',
        enable: true,
      },
      {
        id: 'com.vrem.wifianalyzer',
        enable: true,
      },
      {
        id: 'remix.myplayer',
        enable: true,
      },
      {
        id: 'com.arn.scrobble',
        enable: true,
      },
      {
        id: 'org.videolan.vlc',
        enable: true,
      },
      {
        id: 'org.geogebra.android.calculator.suite',
        enable: true,
      },
      {
        id: 'com.azure.authenticator',
        enable: true,
      },
      {
        id: 'com.microsoft.office.officehub',
        enable: true,
      },
      {
        id: 'com.microsoft.office.officehubrow',
        enable: true,
      },
      {
        id: 'com.microsoft.office.outlook',
        enable: true,
      },
      {
        id: 'com.microsoft.office.onenote',
        enable: true,
      },
      {
        id: 'com.sonkins.tguitar',
        enable: true,
      },
      {
        id: 'com.eumlab.android.prometronome',
        enable: true,
      },
      {
        id: 'cn.edu.buaa.wxwork',
        enable: true,
      },
      {
        id: 'io.github.muntashirakon.AppManager',
        enable: true,
      },
      {
        id: 'moe.shizuku.redirectstorage',
        enable: true,
      },
      {
        id: 'web1n.stopapp',
        enable: true,
      },
      {
        id: 'com.shatyuka.zhiliao',
        enable: true,
      },
      {
        id: 'com.adobe.reader',
        enable: true,
      },
      {
        id: 'org.wikipedia',
        enable: true,
      },
      {
        id: 'org.kiwix.kiwixmobile',
        enable: true,
      },
      {
        id: 'com.brakefield.painter',
        enable: true,
      },
      {
        id: 'me.iacn.biliroaming',
        enable: true,
      },
      {
        id: 'com.termux',
        enable: true,
      },
      {
        id: 'oss.krtirtho.spotube',
        enable: true,
      },
      {
        id: 'com.merxury.blocker',
        enable: true,
      },
      {
        id: 'moe.minamigo.miuigms',
        enable: true,
      },
      {
        id: 'mufanc.tools.applock',
        enable: true,
      },
      {
        id: 'com.gankes.tsbattery',
        enable: true,
      },
      {
        id: 'com.oasisfeng.nevo.xposed',
        enable: true,
      },
      {
        id: 'com.reddit.frontpage',
        enable: true,
      },
      {
        id: 'com.ghostflying.locationreportenabler',
        enable: true,
      },
      {
        id: 'com.zyc.zcontrol',
        enable: true,
      },
      {
        id: 'org.nobody.multitts',
        enable: true,
      },
      {
        id: 'deltazero.amarok',
        enable: true,
      },
      {
        id: 'com.canghai.haoka',
        enable: true,
      },
      {
        id: 'com.xy.td',
        enable: true,
      },
      {
        id: 'com.bug.hookvip',
        enable: true,
      },
      {
        id: 'one.yufz.hmspush',
        enable: true,
      },
      {
        id: 'io.github.huskydg.magisk',
        enable: true,
      },
      {
        id: 'xzr.konabess',
        enable: true,
      },
      {
        id: 'org.lsposed.manager',
        enable: true,
      },
      {
        id: 'bin.mt.plus',
        enable: true,
      },
      {
        id: 'tw.nekomimi.nekogram',
        enable: true,
      },
      {
        id: 'io.github.qauxv',
        enable: true,
      },
      {
        id: 'com.rezvorck.tiktokplugin',
        enable: true,
      },
      {
        id: 'com.zhiliaoapp.musically',
        enable: true,
      },
      {
        id: 'com.github.tianma8023.xposed.smscode',
        enable: true,
      },
      {
        id: 'Han.GJZS',
        enable: true,
      },
      {
        id: 'org.adblockplus.adblockplussbrowser',
        enable: true,
      },
      {
        id: 'com.viewblocker.jrsen',
        enable: true,
      },
      {
        id: 'com.tsng.hidemyapplist',
        enable: true,
      },
      {
        id: 'com.pittvandewitt.wavelet',
        enable: true,
      },
      {
        id: 'one.yufz.onebox',
        enable: true,
      },
      {
        id: 'com.Wecrane.Scar.pubg',
        enable: true,
      },
      {
        id: 'me.bmax.apatch',
        enable: true,
      },
      {
        id: 'com.tubevpn.client',
        enable: true,
      },
      {
        id: 'github.tornaco.android.thanos.pro',
        enable: true,
      },
      {
        id: 'com.omarea.vtools',
        enable: true,
      },
      {
        id: 'com.litebyte.samhelper',
        enable: true,
      },
      {
        id: 'com.nurke.perfectone',
        enable: true,
      },
      {
        id: 'qlenlen.OneDesign',
        enable: true,
      },
      {
        id: 'icu.nullptr.nativetest',
        enable: true,
      },
      {
        id: 'io.github.vvb2060.mahoshojo',
        enable: true,
      },
      {
        id: 'com.samsung.android.memoryguardian',
        enable: true,
      },
      {
        id: 'com.music.khkj',
        enable: true,
      },
      {
        id: 'Hook.JiuWu.Xp',
        enable: true,
      },
      {
        id: 'me.weishu.kernelsu',
        enable: true,
      },
      {
        id: 'com.franco.kernel',
        enable: true,
      },
      {
        id: 'com.samsung.android.themedesigner',
        enable: true,
      },
      {
        id: 'com.samsung.android.game.gamehome',
        enable: true,
      },
      {
        id: 'com.tencent.tmgp.sgame',
        enable: true,
      },
      {
        id: 'com.yangyanghuzhou.heijuan',
        enable: true,
      },
      {
        id: 'com.sec.android.app.sbrowser',
        enable: true,
      },
      {
        id: 'com.samsung.android.game.gamelab',
        enable: true,
      },
      {
        id: 'com.Twilight.tools',
        enable: true,
      },
      {
        id: 'com.miui.securitymanager',
        enable: true,
      },
      {
        id: 'com.google.android.documentsui',
        enable: true,
      },
      {
        id: 'com.android.settings',
        enable: true,
      },
      {
        id: 'com.miui.creation',
        enable: true,
      },
      {
        id: 'com.xiaomi.scanner',
        enable: true,
      },
      {
        id: 'com.miui.gallery',
        enable: true,
      },
      {
        id: 'com.yozo.office',
        enable: true,
      },
      {
        id: 'com.miui.video',
        enable: true,
      },
      {
        id: 'com.xiaomi.wpslauncher',
        enable: true,
      },
      {
        id: 'com.sevtinge.hyperceiler',
        enable: true,
      },
      {
        id: 'com.dna.tools',
        enable: true,
      },
      {
        id: 'flar2.devcheck',
        enable: true,
      },
      {
        id: 'com.gstarmc.android',
        enable: true,
      },
      {
        id: 'com.github.capntrips.kernelflasher',
        enable: true,
      },
      {
        id: 'com.google.android.googlequicksearchbox',
        enable: true,
      },
      {
        id: 'qyz.onedesign',
        enable: true,
      },
      {
        id: 'com.samsung.android.app.repaircal',
        enable: true,
      },
      {
        id: 'com.yhchat.app',
        enable: true,
      },
      {
        id: 'com.skyhand.sinahelper',
        enable: true,
      },
      {
        id: 'com.rong862.bear',
        enable: true,
      },
      {
        id: 'be.mygod.vpnhotspot',
        enable: true,
      },
      {
        id: 'com.samsung.android.bixby.agent',
        enable: true,
      },
      {
        id: 'com.miui.huanji',
        enable: true,
      },
      {
        id: 'com.miui.weather2',
        enable: true,
      },
      {
        id: 'com.miui.calculator',
        enable: true,
      },
      {
        id: 'com.android.soundrecorder',
        enable: true,
      },
      {
        id: 'com.android.email',
        enable: true,
      },
      {
        id: 'com.miui.screenrecorder',
        enable: true,
      },
      {
        id: 'com.android.deskclock',
        enable: true,
      },
      {
        id: 'com.miui.newmidrive',
        enable: true,
      },
      {
        id: 'cn.wps.moffice_eng.xiaomi.lite',
        enable: true,
      },
      {
        id: 'com.miui.mediaeditor',
        enable: true,
      },
      {
        id: 'com.miui.notes',
        enable: true,
      },
      {
        id: 'com.miui.cleanmaster',
        enable: true,
      },
      {
        id: 'com.miui.compass',
        enable: true,
      },
      {
        id: 'com.duokan.phone.remotecontroller',
        enable: true,
      },
      {
        id: 'com.mfashiongallery.emag',
        enable: true,
      },
      {
        id: 'com.miui.thirdappassistant',
        enable: true,
      },
      {
        id: 'com.xiaomi.cajlauncher',
        enable: true,
      },
      {
        id: 'com.mi.car.padapp',
        enable: true,
      },
      {
        id: 'com.android.calendar',
        enable: true,
      },
      {
        id: 'com.samsung.android.app.cameraassistant',
        enable: true,
      },
      {
        id: 'com.samsung.android.app.galaxyraw',
        enable: true,
      },
      {
        id: 'com.samsung.android.appbooster',
        enable: true,
      },
      {
        id: 'com.android.samsung.utilityapp',
        enable: true,
      },
      {
        id: 'com.samsung.android.goodlock',
        enable: true,
      },
      {
        id: 'com.samsung.android.thermalguardian',
        enable: true,
      },
      {
        id: 'com.samsung.android.calendar',
        enable: true,
      },
      {
        id: 'com.samsung.android.app.notes',
        enable: true,
      },
      {
        id: 'com.jv.samsungeshop',
        enable: true,
      },
      {
        id: 'com.samsung.android.app.sreminder',
        enable: true,
      },
      {
        id: 'com.samsung.android.app.watchmanager',
        enable: true,
      },
      {
        id: 'com.samsung.android.app.reminder',
        enable: true,
      },
      {
        id: 'com.adguard.android.contentblocker',
        enable: true,
      },
      {
        id: 'com.sec.android.app.music',
        enable: true,
      },
      {
        id: 'com.sec.android.app.voicenote',
        enable: true,
      },
      {
        id: 'com.futuremark.dmandroid.application',
        enable: true,
      },
      {
        id: 'com.sec.android.app.clockpackage',
        enable: true,
      },
      {
        id: 'mark.via',
        enable: true,
      },
      {
        id: 'mark.via.gp',
        enable: true,
      },
      {
        id: 'com.mmbox.xbrowser',
        enable: true,
      },
      {
        id: 'com.mmbox.xbrowser.pro',
        enable: true,
      },
      {
        id: 'com.mycompany.app.soulbrowser',
        enable: true,
      },
      {
        id: 'xxx.pornhub.fuck',
        enable: true,
      },
      {
        id: 'com.netease.cloudmusic',
        enable: true,
      },
      {
        id: 'com.zhihu.android',
        enable: true,
      },
      {
        id: 'com.luna.music',
        enable: true,
      },
      {
        id: 'com.taptap',
        enable: true,
      },
      {
        id: 'com.ss.android.ugc.aweme',
        enable: true,
      },
      {
        id: 'com.example.pptv',
        enable: true,
      },
      {
        id: 'com.ximalaya.ting.android',
        enable: true,
      },
      {
        id: 'com.qq.reader',
        enable: true,
      },
    ],
  },
]);
