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
        enable: false,
      },
      {
        id: 'li.songe.gkd',
        enable: false,
      },
      {
        id: 'com.eg.android.AlipayGphone',
        enable: false,
      },
      {
        id: 'com.tencent.wetype',
        enable: false,
      },
      {
        id: 'com.tmri.app.main',
        enable: false,
      },
      {
        id: 'com.github.android',
        enable: false,
      },
      {
        id: 'org.telegram.messenger',
        enable: false,
      },
      {
        id: 'com.twitter.android',
        enable: false,
      },
      {
        id: 'com.aistra.hail',
        enable: false,
      },
      {
        id: 'com.heyanle.easybangumi4',
        enable: false,
      },
      {
        id: 'com.perol.pixez',
        enable: false,
      },
      {
        id: 'com.perol.play.pixez',
        enable: false,
      },
      {
        id: 'com.magicalstory.videos',
        enable: false,
      },
      {
        id: 'com.magicalstory.installer',
        enable: false,
      },
      {
        id: 'com.guozhigq.pilipala',
        enable: false,
      },
      {
        id: 'com.salt.music',
        enable: false,
      },
      {
        id: 'com.xuncorp.qinalt.music',
        enable: false,
      },
      {
        id: 'com.github.wgh136.pica_comic',
        enable: false,
      },
      {
        id: 'com.yenaly.han1meviewer',
        enable: false,
      },
      {
        id: 'ru.zdevs.zarchiver',
        enable: false,
      },
      {
        id: 'ru.zdevs.zarchiver.pro',
        enable: false,
      },
      {
        id: 'me.zhanghai.android.files',
        enable: false,
      },
      {
        id: 'com.xjcheng.musictageditor',
        enable: false,
      },
      {
        id: 'com.lalilu.lmusic',
        enable: false,
      },
      {
        id: 'com.ktls.fileinfo',
        enable: false,
      },
      {
        id: 'idm.internet.download.manager',
        enable: false,
      },
      {
        id: 'idm.internet.download.manager.plus',
        enable: false,
      },
      {
        id: 'com.mxtech.videoplayer',
        enable: false,
      },
      {
        id: 'com.mxtech.videoplayer.pro',
        enable: false,
      },
      {
        id: 'com.github.kr328.clash',
        enable: false,
      },
      {
        id: 'com.x8bit.bitwarden',
        enable: false,
      },
      {
        id: 'org.localsend.localsend_app',
        enable: false,
      },
      {
        id: 'moe.shizuku.privileged.api',
        enable: false,
      },
      {
        id: 'com.ktls.automation',
        enable: false,
      },
      {
        id: 'com.deepl.mobiletranslator',
        enable: false,
      },
      {
        id: 'com.accessibilitymanager',
        enable: false,
      },
      {
        id: 'me.tasy5kg.cutegif',
        enable: false,
      },
      {
        id: 'com.absinthe.libchecker',
        enable: false,
      },
      {
        id: 'com.github.metacubex.clash.meta',
        enable: false,
      },
      {
        id: 'io.github.jd1378.otphelper',
        enable: false,
      },
      {
        id: 'com.valvesoftware.android.steam.community',
        enable: false,
      },
      {
        id: 'io.legado.app.release',
        enable: false,
      },
      {
        id: 'com.getsurfboard',
        enable: false,
      },
      {
        id: 'moe.nb4a',
        enable: false,
      },
      {
        id: 'com.v2ray.ang',
        enable: false,
      },
      {
        id: 'com.xiaoyv.bangumi',
        enable: false,
      },
      {
        id: 'com.funny.translation',
        enable: false,
      },
      {
        id: 'com.looker.droidify',
        enable: false,
      },
      {
        id: 'app.eleven.com.fastfiletransfer',
        enable: false,
      },
      {
        id: 'com.idaodan.clean.master',
        enable: false,
      },
      {
        id: 'com.samsung.agc.gcam84',
        enable: false,
      },
      {
        id: 'com.wsw.cospa',
        enable: false,
      },
      {
        id: 'app.mihon',
        enable: false,
      },
      {
        id: 'com.rosan.installer.x',
        enable: false,
      },
      {
        id: 'app.rikka.savecopy',
        enable: false,
      },
      {
        id: 'com.rosan.dhizuku',
        enable: false,
      },
      {
        id: 'com.rosan.accounts',
        enable: false,
      },
      {
        id: 'com.dv.adm',
        enable: false,
      },
      {
        id: 'com.assistant.ongoingclear',
        enable: false,
      },
      {
        id: 'org.koitharu.kotatsu',
        enable: false,
      },
      {
        id: 'me.ash.reader',
        enable: false,
      },
      {
        id: 'com.huanchengfly.tieba.post',
        enable: false,
      },
      {
        id: 'com.example.c001apk',
        enable: false,
      },
      {
        id: 'dev.anilbeesetti.nextplayer',
        enable: false,
      },
      {
        id: 'org.kde.kdeconnect_tp',
        enable: false,
      },
      {
        id: 'xyz.adproqwq.GKDTool',
        enable: false,
      },
      {
        id: 'com.alibaba.aliyun',
        enable: false,
      },
      {
        id: 'com.alicloud.databox',
        enable: false,
      },
      {
        id: 'xyz.nextalone.nagram',
        enable: false,
      },
      {
        id: 'com.openai.chatgpt',
        enable: false,
      },
      {
        id: 'org.telegram.group',
        enable: false,
      },
      {
        id: 'com.android.chrome',
        enable: false,
      },
      {
        id: 'org.mozilla.firefox',
        enable: false,
      },
      {
        id: 'org.mozilla.firefox_beta',
        enable: false,
      },
      {
        id: 'org.mozilla.fenix',
        enable: false,
      },
      {
        id: 'org.mozilla.focus',
        enable: false,
      },
      {
        id: 'com.google.android.youtube',
        enable: false,
      },
      {
        id: 'com.xunmeng.pinduoduo',
        enable: false,
      },
      {
        id: 'com.byyoung.setting',
        enable: false,
      },
      {
        id: 'com.mixplorer',
        enable: false,
      },
      {
        id: 'com.xjs.ehviewer',
        enable: false,
      },
      {
        id: 'rikka.appops',
        enable: false,
      },
      {
        id: 'com.vrem.wifianalyzer',
        enable: false,
      },
      {
        id: 'remix.myplayer',
        enable: false,
      },
      {
        id: 'com.arn.scrobble',
        enable: false,
      },
      {
        id: 'org.videolan.vlc',
        enable: false,
      },
      {
        id: 'org.geogebra.android.calculator.suite',
        enable: false,
      },
      {
        id: 'com.azure.authenticator',
        enable: false,
      },
      {
        id: 'com.microsoft.office.officehub',
        enable: false,
      },
      {
        id: 'com.microsoft.office.officehubrow',
        enable: false,
      },
      {
        id: 'com.microsoft.office.outlook',
        enable: false,
      },
      {
        id: 'com.microsoft.office.onenote',
        enable: false,
      },
      {
        id: 'com.sonkins.tguitar',
        enable: false,
      },
      {
        id: 'com.eumlab.android.prometronome',
        enable: false,
      },
      {
        id: 'cn.edu.buaa.wxwork',
        enable: false,
      },
      {
        id: 'io.github.muntashirakon.AppManager',
        enable: false,
      },
      {
        id: 'moe.shizuku.redirectstorage',
        enable: false,
      },
      {
        id: 'web1n.stopapp',
        enable: false,
      },
      {
        id: 'com.shatyuka.zhiliao',
        enable: false,
      },
      {
        id: 'com.adobe.reader',
        enable: false,
      },
      {
        id: 'org.wikipedia',
        enable: false,
      },
      {
        id: 'org.kiwix.kiwixmobile',
        enable: false,
      },
      {
        id: 'com.brakefield.painter',
        enable: false,
      },
      {
        id: 'me.iacn.biliroaming',
        enable: false,
      },
      {
        id: 'com.termux',
        enable: false,
      },
      {
        id: 'oss.krtirtho.spotube',
        enable: false,
      },
      {
        id: 'com.merxury.blocker',
        enable: false,
      },
      {
        id: 'moe.minamigo.miuigms',
        enable: false,
      },
      {
        id: 'mufanc.tools.applock',
        enable: false,
      },
      {
        id: 'com.gankes.tsbattery',
        enable: false,
      },
      {
        id: 'com.oasisfeng.nevo.xposed',
        enable: false,
      },
      {
        id: 'com.reddit.frontpage',
        enable: false,
      },
      {
        id: 'com.ghostflying.locationreportenabler',
        enable: false,
      },
      {
        id: 'com.zyc.zcontrol',
        enable: false,
      },
      {
        id: 'org.nobody.multitts',
        enable: false,
      },
      {
        id: 'deltazero.amarok',
        enable: false,
      },
      {
        id: 'com.canghai.haoka',
        enable: false,
      },
      {
        id: 'com.xy.td',
        enable: false,
      },
      {
        id: 'com.bug.hookvip',
        enable: false,
      },
      {
        id: 'one.yufz.hmspush',
        enable: false,
      },
      {
        id: 'io.github.huskydg.magisk',
        enable: false,
      },
      {
        id: 'xzr.konabess',
        enable: false,
      },
      {
        id: 'org.lsposed.manager',
        enable: false,
      },
      {
        id: 'bin.mt.plus',
        enable: false,
      },
      {
        id: 'tw.nekomimi.nekogram',
        enable: false,
      },
      {
        id: 'io.github.qauxv',
        enable: false,
      },
      {
        id: 'com.rezvorck.tiktokplugin',
        enable: false,
      },
      {
        id: 'com.zhiliaoapp.musically',
        enable: false,
      },
      {
        id: 'com.github.tianma8023.xposed.smscode',
        enable: false,
      },
      {
        id: 'Han.GJZS',
        enable: false,
      },
      {
        id: 'org.adblockplus.adblockplussbrowser',
        enable: false,
      },
      {
        id: 'com.viewblocker.jrsen',
        enable: false,
      },
      {
        id: 'com.tsng.hidemyapplist',
        enable: false,
      },
      {
        id: 'com.pittvandewitt.wavelet',
        enable: false,
      },
      {
        id: 'one.yufz.onebox',
        enable: false,
      },
      {
        id: 'com.Wecrane.Scar.pubg',
        enable: false,
      },
      {
        id: 'me.bmax.apatch',
        enable: false,
      },
      {
        id: 'com.tubevpn.client',
        enable: false,
      },
      {
        id: 'github.tornaco.android.thanos.pro',
        enable: false,
      },
      {
        id: 'com.omarea.vtools',
        enable: false,
      },
      {
        id: 'com.litebyte.samhelper',
        enable: false,
      },
      {
        id: 'com.nurke.perfectone',
        enable: false,
      },
      {
        id: 'qlenlen.OneDesign',
        enable: false,
      },
      {
        id: 'icu.nullptr.nativetest',
        enable: false,
      },
      {
        id: 'io.github.vvb2060.mahoshojo',
        enable: false,
      },
      {
        id: 'com.samsung.android.memoryguardian',
        enable: false,
      },
      {
        id: 'com.music.khkj',
        enable: false,
      },
      {
        id: 'Hook.JiuWu.Xp',
        enable: false,
      },
      {
        id: 'me.weishu.kernelsu',
        enable: false,
      },
      {
        id: 'com.franco.kernel',
        enable: false,
      },
      {
        id: 'com.samsung.android.themedesigner',
        enable: false,
      },
      {
        id: 'com.samsung.android.game.gamehome',
        enable: false,
      },
      {
        id: 'com.tencent.tmgp.sgame',
        enable: false,
      },
      {
        id: 'com.yangyanghuzhou.heijuan',
        enable: false,
      },
      {
        id: 'com.sec.android.app.sbrowser',
        enable: false,
      },
      {
        id: 'com.samsung.android.game.gamelab',
        enable: false,
      },
      {
        id: 'com.Twilight.tools',
        enable: false,
      },
      {
        id: 'com.miui.securitymanager',
        enable: false,
      },
      {
        id: 'com.google.android.documentsui',
        enable: false,
      },
      {
        id: 'com.android.settings',
        enable: false,
      },
      {
        id: 'com.miui.creation',
        enable: false,
      },
      {
        id: 'com.xiaomi.scanner',
        enable: false,
      },
      {
        id: 'com.miui.gallery',
        enable: false,
      },
      {
        id: 'com.yozo.office',
        enable: false,
      },
      {
        id: 'com.miui.video',
        enable: false,
      },
      {
        id: 'com.xiaomi.wpslauncher',
        enable: false,
      },
      {
        id: 'com.sevtinge.hyperceiler',
        enable: false,
      },
      {
        id: 'com.dna.tools',
        enable: false,
      },
      {
        id: 'flar2.devcheck',
        enable: false,
      },
      {
        id: 'com.gstarmc.android',
        enable: false,
      },
      {
        id: 'com.github.capntrips.kernelflasher',
        enable: false,
      },
      {
        id: 'com.google.android.googlequicksearchbox',
        enable: false,
      },
      {
        id: 'qyz.onedesign',
        enable: false,
      },
      {
        id: 'com.samsung.android.app.repaircal',
        enable: false,
      },
      {
        id: 'com.yhchat.app',
        enable: false,
      },
      {
        id: 'com.skyhand.sinahelper',
        enable: false,
      },
      {
        id: 'com.rong862.bear',
        enable: false,
      },
      {
        id: 'be.mygod.vpnhotspot',
        enable: false,
      },
      {
        id: 'com.samsung.android.bixby.agent',
        enable: false,
      },
      {
        id: 'com.miui.huanji',
        enable: false,
      },
      {
        id: 'com.miui.weather2',
        enable: false,
      },
      {
        id: 'com.miui.calculator',
        enable: false,
      },
      {
        id: 'com.android.soundrecorder',
        enable: false,
      },
      {
        id: 'com.android.email',
        enable: false,
      },
      {
        id: 'com.miui.screenrecorder',
        enable: false,
      },
      {
        id: 'com.android.deskclock',
        enable: false,
      },
      {
        id: 'com.miui.newmidrive',
        enable: false,
      },
      {
        id: 'cn.wps.moffice_eng.xiaomi.lite',
        enable: false,
      },
      {
        id: 'com.miui.mediaeditor',
        enable: false,
      },
      {
        id: 'com.miui.notes',
        enable: false,
      },
      {
        id: 'com.miui.cleanmaster',
        enable: false,
      },
      {
        id: 'com.miui.compass',
        enable: false,
      },
      {
        id: 'com.duokan.phone.remotecontroller',
        enable: false,
      },
      {
        id: 'com.mfashiongallery.emag',
        enable: false,
      },
      {
        id: 'com.miui.thirdappassistant',
        enable: false,
      },
      {
        id: 'com.xiaomi.cajlauncher',
        enable: false,
      },
      {
        id: 'com.mi.car.padapp',
        enable: false,
      },
      {
        id: 'com.android.calendar',
        enable: false,
      },
      {
        id: 'com.samsung.android.app.cameraassistant',
        enable: false,
      },
      {
        id: 'com.samsung.android.app.galaxyraw',
        enable: false,
      },
      {
        id: 'com.samsung.android.appbooster',
        enable: false,
      },
      {
        id: 'com.android.samsung.utilityapp',
        enable: false,
      },
      {
        id: 'com.samsung.android.goodlock',
        enable: false,
      },
      {
        id: 'com.samsung.android.thermalguardian',
        enable: false,
      },
      {
        id: 'com.samsung.android.calendar',
        enable: false,
      },
      {
        id: 'com.samsung.android.app.notes',
        enable: false,
      },
      {
        id: 'com.jv.samsungeshop',
        enable: false,
      },
      {
        id: 'com.samsung.android.app.sreminder',
        enable: false,
      },
      {
        id: 'com.samsung.android.app.watchmanager',
        enable: false,
      },
      {
        id: 'com.samsung.android.app.reminder',
        enable: false,
      },
      {
        id: 'com.adguard.android.contentblocker',
        enable: false,
      },
      {
        id: 'com.sec.android.app.music',
        enable: false,
      },
      {
        id: 'com.sec.android.app.voicenote',
        enable: false,
      },
      {
        id: 'com.futuremark.dmandroid.application',
        enable: false,
      },
      {
        id: 'com.sec.android.app.clockpackage',
        enable: false,
      },
      {
        id: 'mark.via',
        enable: false,
      },
      {
        id: 'mark.via.gp',
        enable: false,
      },
      {
        id: 'com.mmbox.xbrowser',
        enable: false,
      },
      {
        id: 'com.mmbox.xbrowser.pro',
        enable: false,
      },
      {
        id: 'com.mycompany.app.soulbrowser',
        enable: false,
      },
      {
        id: 'com.taptap',
        enable: false,
      },
      {
        id: 'com.sankuai.meituan',
        enable: false,
      },
      {
        id: 'info.muge.appshare',
        enable: false,
      },
      {
        id: 'make.more.r2d2.cellular_z',
        enable: false,
      },
      {
        id: 'net.csdn.csdnplus',
        enable: false,
      },
      {
        id: 'com.xiangzi.dislikecn',
        enable: false,
      },
      {
        id: 'com.eco.global.app',
        enable: false,
      },
      {
        id: 'com.jiaohua_browser',
        enable: false,
      },
      {
        id: 'com.vgjump.jump',
        enable: false,
      },
      {
        id: 'com.lofter.android',
        enable: false,
      },
      {
        id: 'com.superrhino.rarering',
        enable: false,
      },
      {
        id: 'com.cyl.musiccy.ou',
        enable: false,
      },
      {
        id: 'com.ksf.yyx',
        enable: false,
      },
      {
        id: 'com.picacomic.fregata',
        enable: false,
      },
      {
        id: 'com.tencent.mobileqq',
        enable: false,
      },
      {
        id: 'cn.soulapp.android',
        enable: false,
      },
      {
        id: 'com.dubox.drive',
        enable: false,
      },
      {
        id: 'com.myzaker.ZAKER_Phone',
        enable: false,
      },
      {
        id: 'dxwt.questionnaire.ui',
        enable: false,
      },
      {
        id: 'com.mfcloudcalculate.networkdisk',
        enable: false,
      },
      {
        id: 'com.excean.na',
        enable: false,
      },
      {
        id: 'com.qiyi.video',
        enable: false,
      },
      {
        id: 'com.qiyi.video.lite',
        enable: false,
      },
      {
        id: 'com.hanweb.android.sdzwfw.activity',
        enable: false,
      },
      {
        id: 'com.shanghaionstar',
        enable: false,
      },
      {
        id: 'tw.com.gamer.android.activecenter',
        enable: false,
      },
      {
        id: 'com.baidu.input_huawei',
        enable: false,
      },
      {
        id: 'com.baidu.tieba',
        enable: false,
      },
      {
        id: 'com.baidu.netdisk.samsung',
        enable: false,
      },
      {
        id: 'com.byfen.market',
        enable: false,
      },
      {
        id: 'tv.danmaku.bili',
        enable: false,
      },
      {
        id: 'tv.danmaku.bilibilihd',
        enable: false,
      },
      {
        id: 'com.csmbcx.candada',
        enable: false,
      },
      {
        id: 'com.skyworthdigital.picamera',
        enable: false,
      },
      {
        id: 'com.kuangxiangciweimao.novel',
        enable: false,
      },
      {
        id: 'cn.damai',
        enable: false,
      },
      {
        id: 'com.zmzx.college.search',
        enable: false,
      },
      {
        id: 'com.yoloho.dayima',
        enable: false,
      },
      {
        id: 'com.delicloud.app.smartoffice',
        enable: false,
      },
      {
        id: 'com.mxchip.petmarvel',
        enable: false,
      },
      {
        id: 'com.didapinche.booking',
        enable: false,
      },
      {
        id: 'com.dianxinai.mobile',
        enable: false,
      },
      {
        id: 'com.zlfcapp.batterymanager',
        enable: false,
      },
      {
        id: 'com.dongqiudi.news',
        enable: false,
      },
      {
        id: 'com.citiccard.mobilebank',
        enable: false,
      },
      {
        id: 'com.diershoubing.erbing',
        enable: false,
      },
      {
        id: 'com.feeyo.vz.pro.cdm',
        enable: false,
      },
      {
        id: 'com.fbank.mobile',
        enable: false,
      },
      {
        id: 'com.autonavi.minimap',
        enable: false,
      },
      {
        id: 'com.xpx365.projphoto',
        enable: false,
      },
      {
        id: 'com.wallstreetcn.news',
        enable: false,
      },
      {
        id: 'com.huawei.browser',
        enable: false,
      },
      {
        id: 'com.huawei.himovie',
        enable: false,
      },
      {
        id: 'com.huawei.android.totemweather',
        enable: false,
      },
      {
        id: 'com.android.mediacenter',
        enable: false,
      },
      {
        id: 'com.huawei.music',
        enable: false,
      },
      {
        id: 'com.huawei.health',
        enable: false,
      },
      {
        id: 'com.huawei.android.thememanager',
        enable: false,
      },
      {
        id: 'com.dongao.kaoqian.phone',
        enable: false,
      },
      {
        id: 'com.jihuanshe',
        enable: false,
      },
      {
        id: 'com.handsgo.jiakao.android',
        enable: false,
      },
      {
        id: 'com.tipsoon.android',
        enable: false,
      },
      {
        id: 'com.jd.app.reader',
        enable: false,
      },
      {
        id: 'com.coolapk.market',
        enable: false,
      },
      {
        id: 'com.kugou.android',
        enable: false,
      },
      {
        id: 'com.kkeji.news.client',
        enable: false,
      },
      {
        id: 'com.app.lantt.xs',
        enable: false,
      },
      {
        id: 'com.mm.android.lc',
        enable: false,
      },
      {
        id: 'com.ecellsz.watch.guard',
        enable: false,
      },
      {
        id: 'com.antfortune.wealth',
        enable: false,
      },
      {
        id: 'com.manmanbuy.bijia',
        enable: false,
      },
      {
        id: 'com.paokeji.yiqu',
        enable: false,
      },
      {
        id: 'com.motoband',
        enable: false,
      },
      {
        id: 'com.mostone.life',
        enable: false,
      },
      {
        id: 'com.nowcoder.app.florida',
        enable: false,
      },
      {
        id: 'com.xiaohu.olevodmobile',
        enable: false,
      },
      {
        id: 'com.qiekj.user',
        enable: false,
      },
      {
        id: 'com.gentle.ppcat',
        enable: false,
      },
      {
        id: 'com.sup.android.superb',
        enable: false,
      },
      {
        id: 'com.luna.music',
        enable: false,
      },
      {
        id: 'com.tencent.tmgp.kgame.ppcr',
        enable: false,
      },
      {
        id: 'com.example.pptv',
        enable: false,
      },
      {
        id: 'com.mci.smagazine',
        enable: false,
      },
      {
        id: 'cn.samsclub.app',
        enable: false,
      },
      {
        id: 'com.fan.app',
        enable: false,
      },
      {
        id: 'com.flyersoft.seekbooks',
        enable: false,
      },
      {
        id: 'com.mymoney',
        enable: false,
      },
      {
        id: 'com.leixun.taofen8',
        enable: false,
      },
      {
        id: 'com.taobao.movie.android',
        enable: false,
      },
      {
        id: 'com.taobao.litetao',
        enable: false,
      },
      {
        id: 'com.tencent.qqlive',
        enable: false,
      },
      {
        id: 'com.tencent.qqsports',
        enable: false,
      },
      {
        id: 'com.qq.qcloud',
        enable: false,
      },
      {
        id: 'com.tencent.docs',
        enable: false,
      },
      {
        id: 'com.chan.cwallpaper',
        enable: false,
      },
      {
        id: 'com.wacai365',
        enable: false,
      },
      {
        id: 'com.waimaiii.waimaiii',
        enable: false,
      },
      {
        id: 'com.netease.snailread',
        enable: false,
      },
      {
        id: 'com.netease.mobimail',
        enable: false,
      },
      {
        id: 'com.netease.mail',
        enable: false,
      },
      {
        id: 'com.netease.cloudmusic',
        enable: false,
      },
      {
        id: 'com.weico.international',
        enable: false,
      },
      {
        id: 'com.example.maintenancemaster',
        enable: false,
      },
      {
        id: 'com.wls.weex',
        enable: false,
      },
      {
        id: 'com.realtech.xiaocan',
        enable: false,
      },
      {
        id: 'com.baidu.duer.superapp',
        enable: false,
      },
      {
        id: 'com.xiaoenai.app',
        enable: false,
      },
      {
        id: 'com.craftvpn.craft',
        enable: false,
      },
      {
        id: 'com.xiaote',
        enable: false,
      },
      {
        id: 'com.firebear.androil',
        enable: false,
      },
      {
        id: 'me.zhouzhuo810.zznote',
        enable: false,
      },
      {
        id: 'io.iftech.android.box',
        enable: false,
      },
      {
        id: 'moc.nauxuoyoaixoaix.www',
        enable: false,
      },
      {
        id: 'com.uanmi.miaojiaccount',
        enable: false,
      },
      {
        id: 'com.xunlei.downloadprovider',
        enable: false,
      },
      {
        id: 'cn.wsds.gamemaster',
        enable: false,
      },
      {
        id: 'com.cctv.yangshipin.app.androidp',
        enable: false,
      },
      {
        id: 'com.sec.android.app.samsungapps',
        enable: false,
      },
      {
        id: 'com.videogo',
        enable: false,
      },
      {
        id: 'com.ky.medical.reference',
        enable: false,
      },
      {
        id: 'com.cmstop.shaoxing',
        enable: false,
      },
      {
        id: 'com.tencent.djcity',
        enable: false,
      },
      {
        id: 'com.mygolbs.mybus',
        enable: false,
      },
      {
        id: 'com.zgnet.eClass',
        enable: false,
      },
      {
        id: 'com.crirp.zhipu',
        enable: false,
      },
      {
        id: 'com.ct.client',
        enable: false,
      },
      {
        id: 'cn.mil.junhao',
        enable: false,
      },
      {
        id: 'com.android.bankabc',
        enable: false,
      },
      {
        id: 'com.dfsly.bbs',
        enable: false,
      },
      {
        id: 'com.chunqiu.ah',
        enable: false,
      },
      {
        id: 'com.njh.biubiu',
        enable: false,
      },
      {
        id: 'com.miui.systemAdSolution',
        enable: false,
      },
      {
        id: 'gov.pianzong.androidnga',
        enable: false,
      },
      {
        id: 'com.heytap.market',
        enable: false,
      },
      {
        id: 'com.xyhui',
        enable: false,
      },
      {
        id: 'com.tencent.mtt',
        enable: false,
      },
      {
        id: 'com.tencent.androidqqmail',
        enable: false,
      },
      {
        id: 'com.qq.reader',
        enable: false,
      },
      {
        id: 'com.midea.vm.washer',
        enable: false,
      },
      {
        id: 'com.UCMobile',
        enable: false,
      },
      {
        id: 'com.upupoo.apu.mobile',
        enable: false,
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
        enable: false,
      },
      {
        id: 'li.songe.gkd',
        enable: false,
      },
      {
        id: 'com.eg.android.AlipayGphone',
        enable: false,
      },
      {
        id: 'com.tencent.wetype',
        enable: false,
      },
      {
        id: 'com.tmri.app.main',
        enable: false,
      },
      {
        id: 'com.github.android',
        enable: false,
      },
      {
        id: 'org.telegram.messenger',
        enable: false,
      },
      {
        id: 'com.twitter.android',
        enable: false,
      },
      {
        id: 'com.aistra.hail',
        enable: false,
      },
      {
        id: 'com.heyanle.easybangumi4',
        enable: false,
      },
      {
        id: 'com.perol.pixez',
        enable: false,
      },
      {
        id: 'com.perol.play.pixez',
        enable: false,
      },
      {
        id: 'com.magicalstory.videos',
        enable: false,
      },
      {
        id: 'com.magicalstory.installer',
        enable: false,
      },
      {
        id: 'com.guozhigq.pilipala',
        enable: false,
      },
      {
        id: 'com.salt.music',
        enable: false,
      },
      {
        id: 'com.xuncorp.qinalt.music',
        enable: false,
      },
      {
        id: 'com.github.wgh136.pica_comic',
        enable: false,
      },
      {
        id: 'com.yenaly.han1meviewer',
        enable: false,
      },
      {
        id: 'ru.zdevs.zarchiver',
        enable: false,
      },
      {
        id: 'ru.zdevs.zarchiver.pro',
        enable: false,
      },
      {
        id: 'me.zhanghai.android.files',
        enable: false,
      },
      {
        id: 'com.xjcheng.musictageditor',
        enable: false,
      },
      {
        id: 'com.lalilu.lmusic',
        enable: false,
      },
      {
        id: 'com.ktls.fileinfo',
        enable: false,
      },
      {
        id: 'idm.internet.download.manager',
        enable: false,
      },
      {
        id: 'idm.internet.download.manager.plus',
        enable: false,
      },
      {
        id: 'com.mxtech.videoplayer',
        enable: false,
      },
      {
        id: 'com.mxtech.videoplayer.pro',
        enable: false,
      },
      {
        id: 'com.github.kr328.clash',
        enable: false,
      },
      {
        id: 'com.x8bit.bitwarden',
        enable: false,
      },
      {
        id: 'org.localsend.localsend_app',
        enable: false,
      },
      {
        id: 'moe.shizuku.privileged.api',
        enable: false,
      },
      {
        id: 'com.ktls.automation',
        enable: false,
      },
      {
        id: 'com.deepl.mobiletranslator',
        enable: false,
      },
      {
        id: 'com.accessibilitymanager',
        enable: false,
      },
      {
        id: 'me.tasy5kg.cutegif',
        enable: false,
      },
      {
        id: 'com.absinthe.libchecker',
        enable: false,
      },
      {
        id: 'com.github.metacubex.clash.meta',
        enable: false,
      },
      {
        id: 'io.github.jd1378.otphelper',
        enable: false,
      },
      {
        id: 'com.valvesoftware.android.steam.community',
        enable: false,
      },
      {
        id: 'io.legado.app.release',
        enable: false,
      },
      {
        id: 'com.getsurfboard',
        enable: false,
      },
      {
        id: 'moe.nb4a',
        enable: false,
      },
      {
        id: 'com.v2ray.ang',
        enable: false,
      },
      {
        id: 'com.xiaoyv.bangumi',
        enable: false,
      },
      {
        id: 'com.funny.translation',
        enable: false,
      },
      {
        id: 'com.looker.droidify',
        enable: false,
      },
      {
        id: 'app.eleven.com.fastfiletransfer',
        enable: false,
      },
      {
        id: 'com.idaodan.clean.master',
        enable: false,
      },
      {
        id: 'com.samsung.agc.gcam84',
        enable: false,
      },
      {
        id: 'com.wsw.cospa',
        enable: false,
      },
      {
        id: 'app.mihon',
        enable: false,
      },
      {
        id: 'com.rosan.installer.x',
        enable: false,
      },
      {
        id: 'app.rikka.savecopy',
        enable: false,
      },
      {
        id: 'com.rosan.dhizuku',
        enable: false,
      },
      {
        id: 'com.rosan.accounts',
        enable: false,
      },
      {
        id: 'com.dv.adm',
        enable: false,
      },
      {
        id: 'com.assistant.ongoingclear',
        enable: false,
      },
      {
        id: 'org.koitharu.kotatsu',
        enable: false,
      },
      {
        id: 'me.ash.reader',
        enable: false,
      },
      {
        id: 'com.huanchengfly.tieba.post',
        enable: false,
      },
      {
        id: 'com.example.c001apk',
        enable: false,
      },
      {
        id: 'dev.anilbeesetti.nextplayer',
        enable: false,
      },
      {
        id: 'org.kde.kdeconnect_tp',
        enable: false,
      },
      {
        id: 'xyz.adproqwq.GKDTool',
        enable: false,
      },
      {
        id: 'com.alibaba.aliyun',
        enable: false,
      },
      {
        id: 'com.alicloud.databox',
        enable: false,
      },
      {
        id: 'xyz.nextalone.nagram',
        enable: false,
      },
      {
        id: 'com.openai.chatgpt',
        enable: false,
      },
      {
        id: 'org.telegram.group',
        enable: false,
      },
      {
        id: 'com.android.chrome',
        enable: false,
      },
      {
        id: 'org.mozilla.firefox',
        enable: false,
      },
      {
        id: 'org.mozilla.firefox_beta',
        enable: false,
      },
      {
        id: 'org.mozilla.fenix',
        enable: false,
      },
      {
        id: 'org.mozilla.focus',
        enable: false,
      },
      {
        id: 'com.google.android.youtube',
        enable: false,
      },
      {
        id: 'com.xunmeng.pinduoduo',
        enable: false,
      },
      {
        id: 'com.byyoung.setting',
        enable: false,
      },
      {
        id: 'com.mixplorer',
        enable: false,
      },
      {
        id: 'com.xjs.ehviewer',
        enable: false,
      },
      {
        id: 'rikka.appops',
        enable: false,
      },
      {
        id: 'com.vrem.wifianalyzer',
        enable: false,
      },
      {
        id: 'remix.myplayer',
        enable: false,
      },
      {
        id: 'com.arn.scrobble',
        enable: false,
      },
      {
        id: 'org.videolan.vlc',
        enable: false,
      },
      {
        id: 'org.geogebra.android.calculator.suite',
        enable: false,
      },
      {
        id: 'com.azure.authenticator',
        enable: false,
      },
      {
        id: 'com.microsoft.office.officehub',
        enable: false,
      },
      {
        id: 'com.microsoft.office.officehubrow',
        enable: false,
      },
      {
        id: 'com.microsoft.office.outlook',
        enable: false,
      },
      {
        id: 'com.microsoft.office.onenote',
        enable: false,
      },
      {
        id: 'com.sonkins.tguitar',
        enable: false,
      },
      {
        id: 'com.eumlab.android.prometronome',
        enable: false,
      },
      {
        id: 'cn.edu.buaa.wxwork',
        enable: false,
      },
      {
        id: 'io.github.muntashirakon.AppManager',
        enable: false,
      },
      {
        id: 'moe.shizuku.redirectstorage',
        enable: false,
      },
      {
        id: 'web1n.stopapp',
        enable: false,
      },
      {
        id: 'com.shatyuka.zhiliao',
        enable: false,
      },
      {
        id: 'com.adobe.reader',
        enable: false,
      },
      {
        id: 'org.wikipedia',
        enable: false,
      },
      {
        id: 'org.kiwix.kiwixmobile',
        enable: false,
      },
      {
        id: 'com.brakefield.painter',
        enable: false,
      },
      {
        id: 'me.iacn.biliroaming',
        enable: false,
      },
      {
        id: 'com.termux',
        enable: false,
      },
      {
        id: 'oss.krtirtho.spotube',
        enable: false,
      },
      {
        id: 'com.merxury.blocker',
        enable: false,
      },
      {
        id: 'moe.minamigo.miuigms',
        enable: false,
      },
      {
        id: 'mufanc.tools.applock',
        enable: false,
      },
      {
        id: 'com.gankes.tsbattery',
        enable: false,
      },
      {
        id: 'com.oasisfeng.nevo.xposed',
        enable: false,
      },
      {
        id: 'com.reddit.frontpage',
        enable: false,
      },
      {
        id: 'com.ghostflying.locationreportenabler',
        enable: false,
      },
      {
        id: 'com.zyc.zcontrol',
        enable: false,
      },
      {
        id: 'org.nobody.multitts',
        enable: false,
      },
      {
        id: 'deltazero.amarok',
        enable: false,
      },
      {
        id: 'com.canghai.haoka',
        enable: false,
      },
      {
        id: 'com.xy.td',
        enable: false,
      },
      {
        id: 'com.bug.hookvip',
        enable: false,
      },
      {
        id: 'one.yufz.hmspush',
        enable: false,
      },
      {
        id: 'io.github.huskydg.magisk',
        enable: false,
      },
      {
        id: 'xzr.konabess',
        enable: false,
      },
      {
        id: 'org.lsposed.manager',
        enable: false,
      },
      {
        id: 'bin.mt.plus',
        enable: false,
      },
      {
        id: 'tw.nekomimi.nekogram',
        enable: false,
      },
      {
        id: 'io.github.qauxv',
        enable: false,
      },
      {
        id: 'com.rezvorck.tiktokplugin',
        enable: false,
      },
      {
        id: 'com.zhiliaoapp.musically',
        enable: false,
      },
      {
        id: 'com.github.tianma8023.xposed.smscode',
        enable: false,
      },
      {
        id: 'Han.GJZS',
        enable: false,
      },
      {
        id: 'org.adblockplus.adblockplussbrowser',
        enable: false,
      },
      {
        id: 'com.viewblocker.jrsen',
        enable: false,
      },
      {
        id: 'com.tsng.hidemyapplist',
        enable: false,
      },
      {
        id: 'com.pittvandewitt.wavelet',
        enable: false,
      },
      {
        id: 'one.yufz.onebox',
        enable: false,
      },
      {
        id: 'com.Wecrane.Scar.pubg',
        enable: false,
      },
      {
        id: 'me.bmax.apatch',
        enable: false,
      },
      {
        id: 'com.tubevpn.client',
        enable: false,
      },
      {
        id: 'github.tornaco.android.thanos.pro',
        enable: false,
      },
      {
        id: 'com.omarea.vtools',
        enable: false,
      },
      {
        id: 'com.litebyte.samhelper',
        enable: false,
      },
      {
        id: 'com.nurke.perfectone',
        enable: false,
      },
      {
        id: 'qlenlen.OneDesign',
        enable: false,
      },
      {
        id: 'icu.nullptr.nativetest',
        enable: false,
      },
      {
        id: 'io.github.vvb2060.mahoshojo',
        enable: false,
      },
      {
        id: 'com.samsung.android.memoryguardian',
        enable: false,
      },
      {
        id: 'com.music.khkj',
        enable: false,
      },
      {
        id: 'Hook.JiuWu.Xp',
        enable: false,
      },
      {
        id: 'me.weishu.kernelsu',
        enable: false,
      },
      {
        id: 'com.franco.kernel',
        enable: false,
      },
      {
        id: 'com.samsung.android.themedesigner',
        enable: false,
      },
      {
        id: 'com.samsung.android.game.gamehome',
        enable: false,
      },
      {
        id: 'com.tencent.tmgp.sgame',
        enable: false,
      },
      {
        id: 'com.yangyanghuzhou.heijuan',
        enable: false,
      },
      {
        id: 'com.sec.android.app.sbrowser',
        enable: false,
      },
      {
        id: 'com.samsung.android.game.gamelab',
        enable: false,
      },
      {
        id: 'com.Twilight.tools',
        enable: false,
      },
      {
        id: 'com.miui.securitymanager',
        enable: false,
      },
      {
        id: 'com.google.android.documentsui',
        enable: false,
      },
      {
        id: 'com.android.settings',
        enable: false,
      },
      {
        id: 'com.miui.creation',
        enable: false,
      },
      {
        id: 'com.xiaomi.scanner',
        enable: false,
      },
      {
        id: 'com.miui.gallery',
        enable: false,
      },
      {
        id: 'com.yozo.office',
        enable: false,
      },
      {
        id: 'com.miui.video',
        enable: false,
      },
      {
        id: 'com.xiaomi.wpslauncher',
        enable: false,
      },
      {
        id: 'com.sevtinge.hyperceiler',
        enable: false,
      },
      {
        id: 'com.dna.tools',
        enable: false,
      },
      {
        id: 'flar2.devcheck',
        enable: false,
      },
      {
        id: 'com.gstarmc.android',
        enable: false,
      },
      {
        id: 'com.github.capntrips.kernelflasher',
        enable: false,
      },
      {
        id: 'com.google.android.googlequicksearchbox',
        enable: false,
      },
      {
        id: 'qyz.onedesign',
        enable: false,
      },
      {
        id: 'com.samsung.android.app.repaircal',
        enable: false,
      },
      {
        id: 'com.yhchat.app',
        enable: false,
      },
      {
        id: 'com.skyhand.sinahelper',
        enable: false,
      },
      {
        id: 'com.rong862.bear',
        enable: false,
      },
      {
        id: 'be.mygod.vpnhotspot',
        enable: false,
      },
      {
        id: 'com.samsung.android.bixby.agent',
        enable: false,
      },
      {
        id: 'com.miui.huanji',
        enable: false,
      },
      {
        id: 'com.miui.weather2',
        enable: false,
      },
      {
        id: 'com.miui.calculator',
        enable: false,
      },
      {
        id: 'com.android.soundrecorder',
        enable: false,
      },
      {
        id: 'com.android.email',
        enable: false,
      },
      {
        id: 'com.miui.screenrecorder',
        enable: false,
      },
      {
        id: 'com.android.deskclock',
        enable: false,
      },
      {
        id: 'com.miui.newmidrive',
        enable: false,
      },
      {
        id: 'cn.wps.moffice_eng.xiaomi.lite',
        enable: false,
      },
      {
        id: 'com.miui.mediaeditor',
        enable: false,
      },
      {
        id: 'com.miui.notes',
        enable: false,
      },
      {
        id: 'com.miui.cleanmaster',
        enable: false,
      },
      {
        id: 'com.miui.compass',
        enable: false,
      },
      {
        id: 'com.duokan.phone.remotecontroller',
        enable: false,
      },
      {
        id: 'com.mfashiongallery.emag',
        enable: false,
      },
      {
        id: 'com.miui.thirdappassistant',
        enable: false,
      },
      {
        id: 'com.xiaomi.cajlauncher',
        enable: false,
      },
      {
        id: 'com.mi.car.padapp',
        enable: false,
      },
      {
        id: 'com.android.calendar',
        enable: false,
      },
      {
        id: 'com.samsung.android.app.cameraassistant',
        enable: false,
      },
      {
        id: 'com.samsung.android.app.galaxyraw',
        enable: false,
      },
      {
        id: 'com.samsung.android.appbooster',
        enable: false,
      },
      {
        id: 'com.android.samsung.utilityapp',
        enable: false,
      },
      {
        id: 'com.samsung.android.goodlock',
        enable: false,
      },
      {
        id: 'com.samsung.android.thermalguardian',
        enable: false,
      },
      {
        id: 'com.samsung.android.calendar',
        enable: false,
      },
      {
        id: 'com.samsung.android.app.notes',
        enable: false,
      },
      {
        id: 'com.jv.samsungeshop',
        enable: false,
      },
      {
        id: 'com.samsung.android.app.sreminder',
        enable: false,
      },
      {
        id: 'com.samsung.android.app.watchmanager',
        enable: false,
      },
      {
        id: 'com.samsung.android.app.reminder',
        enable: false,
      },
      {
        id: 'com.adguard.android.contentblocker',
        enable: false,
      },
      {
        id: 'com.sec.android.app.music',
        enable: false,
      },
      {
        id: 'com.sec.android.app.voicenote',
        enable: false,
      },
      {
        id: 'com.futuremark.dmandroid.application',
        enable: false,
      },
      {
        id: 'com.sec.android.app.clockpackage',
        enable: false,
      },
      {
        id: 'mark.via',
        enable: false,
      },
      {
        id: 'mark.via.gp',
        enable: false,
      },
      {
        id: 'com.mmbox.xbrowser',
        enable: false,
      },
      {
        id: 'com.mmbox.xbrowser.pro',
        enable: false,
      },
      {
        id: 'com.mycompany.app.soulbrowser',
        enable: false,
      },
      {
        id: 'info.muge.appshare',
        enable: false,
      },
      {
        id: 'com.ylmf.androidclient',
        enable: false,
      },
      {
        id: 'net.csdn.csdnplus',
        enable: false,
      },
      {
        id: 'com.igpsport.igpsportandroid',
        enable: false,
      },
      {
        id: 'com.tencent.mobileqq',
        enable: false,
      },
      {
        id: 'com.taptap',
        enable: false,
      },
      {
        id: 'org.telegram.messenger.web',
        enable: false,
      },
      {
        id: 'cn.wps.moffice_eng',
        enable: false,
      },
      {
        id: 'com.alibaba.wireless',
        enable: false,
      },
      {
        id: 'com.giraffe',
        enable: false,
      },
      {
        id: 'com.baidu.searchbox',
        enable: false,
      },
      {
        id: 'com.baidu.BaiduMap',
        enable: false,
      },
      {
        id: 'com.boohee.one',
        enable: false,
      },
      {
        id: 'com.byd.aeri.caranywhere',
        enable: false,
      },
      {
        id: 'tv.danmaku.bili',
        enable: false,
      },
      {
        id: 'com.wibo.bigbang.ocr',
        enable: false,
      },
      {
        id: 'com.cainiao.wireless',
        enable: false,
      },
      {
        id: 'com.zmzx.college.search',
        enable: false,
      },
      {
        id: 'com.hpbr.directhires',
        enable: false,
      },
      {
        id: 'com.alibaba.android.rimet',
        enable: false,
      },
      {
        id: 'com.eastmoney.android.berlin',
        enable: false,
      },
      {
        id: 'com.dongqiudi.news',
        enable: false,
      },
      {
        id: 'com.cf.dubaji',
        enable: false,
      },
      {
        id: 'com.wm.dmall',
        enable: false,
      },
      {
        id: 'com.yaerxing.fkst',
        enable: false,
      },
      {
        id: 'com.autonavi.minimap',
        enable: false,
      },
      {
        id: 'com.guwendao.gwd',
        enable: false,
      },
      {
        id: 'com.cebbank.mobile.cemb',
        enable: false,
      },
      {
        id: 'com.jingyao.easybike',
        enable: false,
      },
      {
        id: 'com.haier.uhome.uplus',
        enable: false,
      },
      {
        id: 'com.xmcy.hykb',
        enable: false,
      },
      {
        id: 'com.redfinger.app',
        enable: false,
      },
      {
        id: 'com.duowan.kiwi',
        enable: false,
      },
      {
        id: 'com.huaban.android',
        enable: false,
      },
      {
        id: 'com.huawei.health',
        enable: false,
      },
      {
        id: 'com.huabenapp',
        enable: false,
      },
      {
        id: 'com.fileunzip.zxwknight',
        enable: false,
      },
      {
        id: 'com.ss.android.article.news',
        enable: false,
      },
      {
        id: 'com.jin10',
        enable: false,
      },
      {
        id: 'com.jingdong.pdj',
        enable: false,
      },
      {
        id: 'com.kugou.android.lite',
        enable: false,
      },
      {
        id: 'world.letsgo.booster.android.pro',
        enable: false,
      },
      {
        id: 'com.woapp.hebei',
        enable: false,
      },
      {
        id: 'com.lenovo.browser.hd',
        enable: false,
      },
      {
        id: 'com.lenovo.leos.appstore',
        enable: false,
      },
      {
        id: 'com.lolaage.tbulu.tools',
        enable: false,
      },
      {
        id: 'com.sankuai.movie',
        enable: false,
      },
      {
        id: 'com.mt.mtxx.mtxx',
        enable: false,
      },
      {
        id: 'com.sankuai.meituan',
        enable: false,
      },
      {
        id: 'com.sankuai.meituan.takeoutnew',
        enable: false,
      },
      {
        id: 'com.cmcc.cmvideo',
        enable: false,
      },
      {
        id: 'com.sjm.zhuanzhuan.mcy',
        enable: false,
      },
      {
        id: 'com.paokeji.yiqu',
        enable: false,
      },
      {
        id: 'com.csg.palmhall',
        enable: false,
      },
      {
        id: 'com.sup.android.superb',
        enable: false,
      },
      {
        id: 'com.dw.btime',
        enable: false,
      },
      {
        id: 'com.smzdm.client.android',
        enable: false,
      },
      {
        id: 'com.cnki.client',
        enable: false,
      },
      {
        id: 'com.sf.activity',
        enable: false,
      },
      {
        id: 'com.taobao.taobao',
        enable: false,
      },
      {
        id: 'com.tencent.docs',
        enable: false,
      },
      {
        id: 'com.alibaba.ailabs.tg',
        enable: false,
      },
      {
        id: 'com.eastmoney.android.fund',
        enable: false,
      },
      {
        id: 'com.cn21.ecloud',
        enable: false,
      },
      {
        id: 'com.wacai365',
        enable: false,
      },
      {
        id: 'cn.lezhi.speedtest',
        enable: false,
      },
      {
        id: 'cn.speedtest.lite',
        enable: false,
      },
      {
        id: 'com.netease.gl',
        enable: false,
      },
      {
        id: 'com.netease.newsreader.activity',
        enable: false,
      },
      {
        id: 'com.youdao.dict',
        enable: false,
      },
      {
        id: 'com.netease.cloudmusic',
        enable: false,
      },
      {
        id: 'cn.com.ruijie.magicbox',
        enable: false,
      },
      {
        id: 'com.ss.android.article.video',
        enable: false,
      },
      {
        id: 'com.daimajia.gold',
        enable: false,
      },
      {
        id: 'com.ximalaya.ting.android',
        enable: false,
      },
      {
        id: 'com.xingin.xhs',
        enable: false,
      },
      {
        id: 'com.xiaomi.vipaccount',
        enable: false,
      },
      {
        id: 'com.xiaomi.gamecenter.sdk.service',
        enable: false,
      },
      {
        id: 'com.okii.watch.global',
        enable: false,
      },
      {
        id: 'com.firebear.androil',
        enable: false,
      },
      {
        id: 'io.iftech.android.box',
        enable: false,
      },
      {
        id: 'ctrip.android.view',
        enable: false,
      },
      {
        id: 'com.baidu.youavideo',
        enable: false,
      },
      {
        id: 'com.heytap.music',
        enable: false,
      },
      {
        id: 'com.lphtsccft',
        enable: false,
      },
      {
        id: 'com.seebaby',
        enable: false,
      },
      {
        id: 'com.hanweb.android.zhejiang.activity',
        enable: false,
      },
      {
        id: 'com.zhihu.android',
        enable: false,
      },
      {
        id: 'com.cnki.view',
        enable: false,
      },
      {
        id: 'com.xiaolian.prometheus',
        enable: false,
      },
      {
        id: 'com.yipiao',
        enable: false,
      },
      {
        id: 'com.sinovatech.unicom.ui',
        enable: false,
      },
      {
        id: 'com.android.bankabc',
        enable: false,
      },
      {
        id: 'com.chinamobile.mcloud',
        enable: false,
      },
      {
        id: 'com.wuba.zhuanzhuan',
        enable: false,
      },
      {
        id: 'cn.xiaochuankeji.tieba',
        enable: false,
      },
      {
        id: 'com.heytap.market',
        enable: false,
      },
      {
        id: 'com.xyhui',
        enable: false,
      },
      {
        id: 'com.tencent.qqlite',
        enable: false,
      },
      {
        id: 'com.tencent.qqmusic',
        enable: false,
      },
      {
        id: 'com.qq.reader',
        enable: false,
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
        enable: false,
      },
      {
        id: 'li.songe.gkd',
        enable: false,
      },
      {
        id: 'com.eg.android.AlipayGphone',
        enable: false,
      },
      {
        id: 'com.tencent.wetype',
        enable: false,
      },
      {
        id: 'com.tmri.app.main',
        enable: false,
      },
      {
        id: 'com.github.android',
        enable: false,
      },
      {
        id: 'org.telegram.messenger',
        enable: false,
      },
      {
        id: 'com.twitter.android',
        enable: false,
      },
      {
        id: 'com.aistra.hail',
        enable: false,
      },
      {
        id: 'com.heyanle.easybangumi4',
        enable: false,
      },
      {
        id: 'com.perol.pixez',
        enable: false,
      },
      {
        id: 'com.perol.play.pixez',
        enable: false,
      },
      {
        id: 'com.magicalstory.videos',
        enable: false,
      },
      {
        id: 'com.magicalstory.installer',
        enable: false,
      },
      {
        id: 'com.guozhigq.pilipala',
        enable: false,
      },
      {
        id: 'com.salt.music',
        enable: false,
      },
      {
        id: 'com.xuncorp.qinalt.music',
        enable: false,
      },
      {
        id: 'com.github.wgh136.pica_comic',
        enable: false,
      },
      {
        id: 'com.yenaly.han1meviewer',
        enable: false,
      },
      {
        id: 'ru.zdevs.zarchiver',
        enable: false,
      },
      {
        id: 'ru.zdevs.zarchiver.pro',
        enable: false,
      },
      {
        id: 'me.zhanghai.android.files',
        enable: false,
      },
      {
        id: 'com.xjcheng.musictageditor',
        enable: false,
      },
      {
        id: 'com.lalilu.lmusic',
        enable: false,
      },
      {
        id: 'com.ktls.fileinfo',
        enable: false,
      },
      {
        id: 'idm.internet.download.manager',
        enable: false,
      },
      {
        id: 'idm.internet.download.manager.plus',
        enable: false,
      },
      {
        id: 'com.mxtech.videoplayer',
        enable: false,
      },
      {
        id: 'com.mxtech.videoplayer.pro',
        enable: false,
      },
      {
        id: 'com.github.kr328.clash',
        enable: false,
      },
      {
        id: 'com.x8bit.bitwarden',
        enable: false,
      },
      {
        id: 'org.localsend.localsend_app',
        enable: false,
      },
      {
        id: 'moe.shizuku.privileged.api',
        enable: false,
      },
      {
        id: 'com.ktls.automation',
        enable: false,
      },
      {
        id: 'com.deepl.mobiletranslator',
        enable: false,
      },
      {
        id: 'com.accessibilitymanager',
        enable: false,
      },
      {
        id: 'me.tasy5kg.cutegif',
        enable: false,
      },
      {
        id: 'com.absinthe.libchecker',
        enable: false,
      },
      {
        id: 'com.github.metacubex.clash.meta',
        enable: false,
      },
      {
        id: 'io.github.jd1378.otphelper',
        enable: false,
      },
      {
        id: 'com.valvesoftware.android.steam.community',
        enable: false,
      },
      {
        id: 'io.legado.app.release',
        enable: false,
      },
      {
        id: 'com.getsurfboard',
        enable: false,
      },
      {
        id: 'moe.nb4a',
        enable: false,
      },
      {
        id: 'com.v2ray.ang',
        enable: false,
      },
      {
        id: 'com.xiaoyv.bangumi',
        enable: false,
      },
      {
        id: 'com.funny.translation',
        enable: false,
      },
      {
        id: 'com.looker.droidify',
        enable: false,
      },
      {
        id: 'app.eleven.com.fastfiletransfer',
        enable: false,
      },
      {
        id: 'com.idaodan.clean.master',
        enable: false,
      },
      {
        id: 'com.samsung.agc.gcam84',
        enable: false,
      },
      {
        id: 'com.wsw.cospa',
        enable: false,
      },
      {
        id: 'app.mihon',
        enable: false,
      },
      {
        id: 'com.rosan.installer.x',
        enable: false,
      },
      {
        id: 'app.rikka.savecopy',
        enable: false,
      },
      {
        id: 'com.rosan.dhizuku',
        enable: false,
      },
      {
        id: 'com.rosan.accounts',
        enable: false,
      },
      {
        id: 'com.dv.adm',
        enable: false,
      },
      {
        id: 'com.assistant.ongoingclear',
        enable: false,
      },
      {
        id: 'org.koitharu.kotatsu',
        enable: false,
      },
      {
        id: 'me.ash.reader',
        enable: false,
      },
      {
        id: 'com.huanchengfly.tieba.post',
        enable: false,
      },
      {
        id: 'com.example.c001apk',
        enable: false,
      },
      {
        id: 'dev.anilbeesetti.nextplayer',
        enable: false,
      },
      {
        id: 'org.kde.kdeconnect_tp',
        enable: false,
      },
      {
        id: 'xyz.adproqwq.GKDTool',
        enable: false,
      },
      {
        id: 'com.alibaba.aliyun',
        enable: false,
      },
      {
        id: 'com.alicloud.databox',
        enable: false,
      },
      {
        id: 'xyz.nextalone.nagram',
        enable: false,
      },
      {
        id: 'com.openai.chatgpt',
        enable: false,
      },
      {
        id: 'org.telegram.group',
        enable: false,
      },
      {
        id: 'com.android.chrome',
        enable: false,
      },
      {
        id: 'org.mozilla.firefox',
        enable: false,
      },
      {
        id: 'org.mozilla.firefox_beta',
        enable: false,
      },
      {
        id: 'org.mozilla.fenix',
        enable: false,
      },
      {
        id: 'org.mozilla.focus',
        enable: false,
      },
      {
        id: 'com.google.android.youtube',
        enable: false,
      },
      {
        id: 'com.xunmeng.pinduoduo',
        enable: false,
      },
      {
        id: 'com.byyoung.setting',
        enable: false,
      },
      {
        id: 'com.mixplorer',
        enable: false,
      },
      {
        id: 'com.xjs.ehviewer',
        enable: false,
      },
      {
        id: 'rikka.appops',
        enable: false,
      },
      {
        id: 'com.vrem.wifianalyzer',
        enable: false,
      },
      {
        id: 'remix.myplayer',
        enable: false,
      },
      {
        id: 'com.arn.scrobble',
        enable: false,
      },
      {
        id: 'org.videolan.vlc',
        enable: false,
      },
      {
        id: 'org.geogebra.android.calculator.suite',
        enable: false,
      },
      {
        id: 'com.azure.authenticator',
        enable: false,
      },
      {
        id: 'com.microsoft.office.officehub',
        enable: false,
      },
      {
        id: 'com.microsoft.office.officehubrow',
        enable: false,
      },
      {
        id: 'com.microsoft.office.outlook',
        enable: false,
      },
      {
        id: 'com.microsoft.office.onenote',
        enable: false,
      },
      {
        id: 'com.sonkins.tguitar',
        enable: false,
      },
      {
        id: 'com.eumlab.android.prometronome',
        enable: false,
      },
      {
        id: 'cn.edu.buaa.wxwork',
        enable: false,
      },
      {
        id: 'io.github.muntashirakon.AppManager',
        enable: false,
      },
      {
        id: 'moe.shizuku.redirectstorage',
        enable: false,
      },
      {
        id: 'web1n.stopapp',
        enable: false,
      },
      {
        id: 'com.shatyuka.zhiliao',
        enable: false,
      },
      {
        id: 'com.adobe.reader',
        enable: false,
      },
      {
        id: 'org.wikipedia',
        enable: false,
      },
      {
        id: 'org.kiwix.kiwixmobile',
        enable: false,
      },
      {
        id: 'com.brakefield.painter',
        enable: false,
      },
      {
        id: 'me.iacn.biliroaming',
        enable: false,
      },
      {
        id: 'com.termux',
        enable: false,
      },
      {
        id: 'oss.krtirtho.spotube',
        enable: false,
      },
      {
        id: 'com.merxury.blocker',
        enable: false,
      },
      {
        id: 'moe.minamigo.miuigms',
        enable: false,
      },
      {
        id: 'mufanc.tools.applock',
        enable: false,
      },
      {
        id: 'com.gankes.tsbattery',
        enable: false,
      },
      {
        id: 'com.oasisfeng.nevo.xposed',
        enable: false,
      },
      {
        id: 'com.reddit.frontpage',
        enable: false,
      },
      {
        id: 'com.ghostflying.locationreportenabler',
        enable: false,
      },
      {
        id: 'com.zyc.zcontrol',
        enable: false,
      },
      {
        id: 'org.nobody.multitts',
        enable: false,
      },
      {
        id: 'deltazero.amarok',
        enable: false,
      },
      {
        id: 'com.canghai.haoka',
        enable: false,
      },
      {
        id: 'com.xy.td',
        enable: false,
      },
      {
        id: 'com.bug.hookvip',
        enable: false,
      },
      {
        id: 'one.yufz.hmspush',
        enable: false,
      },
      {
        id: 'io.github.huskydg.magisk',
        enable: false,
      },
      {
        id: 'xzr.konabess',
        enable: false,
      },
      {
        id: 'org.lsposed.manager',
        enable: false,
      },
      {
        id: 'bin.mt.plus',
        enable: false,
      },
      {
        id: 'tw.nekomimi.nekogram',
        enable: false,
      },
      {
        id: 'io.github.qauxv',
        enable: false,
      },
      {
        id: 'com.rezvorck.tiktokplugin',
        enable: false,
      },
      {
        id: 'com.zhiliaoapp.musically',
        enable: false,
      },
      {
        id: 'com.github.tianma8023.xposed.smscode',
        enable: false,
      },
      {
        id: 'Han.GJZS',
        enable: false,
      },
      {
        id: 'org.adblockplus.adblockplussbrowser',
        enable: false,
      },
      {
        id: 'com.viewblocker.jrsen',
        enable: false,
      },
      {
        id: 'com.tsng.hidemyapplist',
        enable: false,
      },
      {
        id: 'com.pittvandewitt.wavelet',
        enable: false,
      },
      {
        id: 'one.yufz.onebox',
        enable: false,
      },
      {
        id: 'com.Wecrane.Scar.pubg',
        enable: false,
      },
      {
        id: 'me.bmax.apatch',
        enable: false,
      },
      {
        id: 'com.tubevpn.client',
        enable: false,
      },
      {
        id: 'github.tornaco.android.thanos.pro',
        enable: false,
      },
      {
        id: 'com.omarea.vtools',
        enable: false,
      },
      {
        id: 'com.litebyte.samhelper',
        enable: false,
      },
      {
        id: 'com.nurke.perfectone',
        enable: false,
      },
      {
        id: 'qlenlen.OneDesign',
        enable: false,
      },
      {
        id: 'icu.nullptr.nativetest',
        enable: false,
      },
      {
        id: 'io.github.vvb2060.mahoshojo',
        enable: false,
      },
      {
        id: 'com.samsung.android.memoryguardian',
        enable: false,
      },
      {
        id: 'com.music.khkj',
        enable: false,
      },
      {
        id: 'Hook.JiuWu.Xp',
        enable: false,
      },
      {
        id: 'me.weishu.kernelsu',
        enable: false,
      },
      {
        id: 'com.franco.kernel',
        enable: false,
      },
      {
        id: 'com.samsung.android.themedesigner',
        enable: false,
      },
      {
        id: 'com.samsung.android.game.gamehome',
        enable: false,
      },
      {
        id: 'com.tencent.tmgp.sgame',
        enable: false,
      },
      {
        id: 'com.yangyanghuzhou.heijuan',
        enable: false,
      },
      {
        id: 'com.sec.android.app.sbrowser',
        enable: false,
      },
      {
        id: 'com.samsung.android.game.gamelab',
        enable: false,
      },
      {
        id: 'com.Twilight.tools',
        enable: false,
      },
      {
        id: 'com.miui.securitymanager',
        enable: false,
      },
      {
        id: 'com.google.android.documentsui',
        enable: false,
      },
      {
        id: 'com.android.settings',
        enable: false,
      },
      {
        id: 'com.miui.creation',
        enable: false,
      },
      {
        id: 'com.xiaomi.scanner',
        enable: false,
      },
      {
        id: 'com.miui.gallery',
        enable: false,
      },
      {
        id: 'com.yozo.office',
        enable: false,
      },
      {
        id: 'com.miui.video',
        enable: false,
      },
      {
        id: 'com.xiaomi.wpslauncher',
        enable: false,
      },
      {
        id: 'com.sevtinge.hyperceiler',
        enable: false,
      },
      {
        id: 'com.dna.tools',
        enable: false,
      },
      {
        id: 'flar2.devcheck',
        enable: false,
      },
      {
        id: 'com.gstarmc.android',
        enable: false,
      },
      {
        id: 'com.github.capntrips.kernelflasher',
        enable: false,
      },
      {
        id: 'com.google.android.googlequicksearchbox',
        enable: false,
      },
      {
        id: 'qyz.onedesign',
        enable: false,
      },
      {
        id: 'com.samsung.android.app.repaircal',
        enable: false,
      },
      {
        id: 'com.yhchat.app',
        enable: false,
      },
      {
        id: 'com.skyhand.sinahelper',
        enable: false,
      },
      {
        id: 'com.rong862.bear',
        enable: false,
      },
      {
        id: 'be.mygod.vpnhotspot',
        enable: false,
      },
      {
        id: 'com.samsung.android.bixby.agent',
        enable: false,
      },
      {
        id: 'com.miui.huanji',
        enable: false,
      },
      {
        id: 'com.miui.weather2',
        enable: false,
      },
      {
        id: 'com.miui.calculator',
        enable: false,
      },
      {
        id: 'com.android.soundrecorder',
        enable: false,
      },
      {
        id: 'com.android.email',
        enable: false,
      },
      {
        id: 'com.miui.screenrecorder',
        enable: false,
      },
      {
        id: 'com.android.deskclock',
        enable: false,
      },
      {
        id: 'com.miui.newmidrive',
        enable: false,
      },
      {
        id: 'cn.wps.moffice_eng.xiaomi.lite',
        enable: false,
      },
      {
        id: 'com.miui.mediaeditor',
        enable: false,
      },
      {
        id: 'com.miui.notes',
        enable: false,
      },
      {
        id: 'com.miui.cleanmaster',
        enable: false,
      },
      {
        id: 'com.miui.compass',
        enable: false,
      },
      {
        id: 'com.duokan.phone.remotecontroller',
        enable: false,
      },
      {
        id: 'com.mfashiongallery.emag',
        enable: false,
      },
      {
        id: 'com.miui.thirdappassistant',
        enable: false,
      },
      {
        id: 'com.xiaomi.cajlauncher',
        enable: false,
      },
      {
        id: 'com.mi.car.padapp',
        enable: false,
      },
      {
        id: 'com.android.calendar',
        enable: false,
      },
      {
        id: 'com.samsung.android.app.cameraassistant',
        enable: false,
      },
      {
        id: 'com.samsung.android.app.galaxyraw',
        enable: false,
      },
      {
        id: 'com.samsung.android.appbooster',
        enable: false,
      },
      {
        id: 'com.android.samsung.utilityapp',
        enable: false,
      },
      {
        id: 'com.samsung.android.goodlock',
        enable: false,
      },
      {
        id: 'com.samsung.android.thermalguardian',
        enable: false,
      },
      {
        id: 'com.samsung.android.calendar',
        enable: false,
      },
      {
        id: 'com.samsung.android.app.notes',
        enable: false,
      },
      {
        id: 'com.jv.samsungeshop',
        enable: false,
      },
      {
        id: 'com.samsung.android.app.sreminder',
        enable: false,
      },
      {
        id: 'com.samsung.android.app.watchmanager',
        enable: false,
      },
      {
        id: 'com.samsung.android.app.reminder',
        enable: false,
      },
      {
        id: 'com.adguard.android.contentblocker',
        enable: false,
      },
      {
        id: 'com.sec.android.app.music',
        enable: false,
      },
      {
        id: 'com.sec.android.app.voicenote',
        enable: false,
      },
      {
        id: 'com.futuremark.dmandroid.application',
        enable: false,
      },
      {
        id: 'com.sec.android.app.clockpackage',
        enable: false,
      },
      {
        id: 'mark.via',
        enable: false,
      },
      {
        id: 'mark.via.gp',
        enable: false,
      },
      {
        id: 'com.mmbox.xbrowser',
        enable: false,
      },
      {
        id: 'com.mmbox.xbrowser.pro',
        enable: false,
      },
      {
        id: 'com.mycompany.app.soulbrowser',
        enable: false,
      },
      {
        id: 'xxx.pornhub.fuck',
        enable: false,
      },
      {
        id: 'com.netease.cloudmusic',
        enable: false,
      },
      {
        id: 'com.zhihu.android',
        enable: false,
      },
      {
        id: 'com.luna.music',
        enable: false,
      },
      {
        id: 'com.taptap',
        enable: false,
      },
      {
        id: 'com.ss.android.ugc.aweme',
        enable: false,
      },
      {
        id: 'com.example.pptv',
        enable: false,
      },
      {
        id: 'com.ximalaya.ting.android',
        enable: false,
      },
      {
        id: 'com.qq.reader',
        enable: false,
      },
    ],
  },
]);
