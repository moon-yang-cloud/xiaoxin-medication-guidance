/*
 * 小欣的用药指南 - 药物数据库
 * 所有推荐已针对小欣的身体情况优化
 */

const DB = {
"风寒感冒": {
    symptoms: ["怕冷","流清鼻涕","打喷嚏","身体酸痛","无汗","鼻塞","清鼻涕"],
    combo: {
        name: "风寒感冒组合",
        meds: ["荆防颗粒","玉屏风颗粒"],
        note: "荆防颗粒祛寒解表，比较温和；玉屏风帮小欣巩固免疫力防反复。症状很明显的话可以换成感冒清热颗粒+玉屏风。",
        warn: ""
    },
    medicines: [
        {name:"荆防颗粒",priority:1,usage:"每次1袋，每日3次",scene:"体虚风寒首选，温和",speed:"慢(1-2天)",toxicity:"极低",side:"极少",contra:""},
        {name:"感冒清热颗粒",priority:1,usage:"每次1袋，每日2次",scene:"怕冷流涕症状明显时",speed:"慢(1-2天)",toxicity:"极低",side:"偶有轻微胃肠不适",contra:""},
        {name:"玉屏风颗粒",priority:1,usage:"每次1袋，每日3次",scene:"固表防反复，感冒好了也继续吃",speed:"慢(坚持)",toxicity:"极低",side:"极少",contra:""},
        {name:"正柴胡饮颗粒",priority:2,usage:"每次1袋，每日3次",scene:"有点低烧+怕冷时加",speed:"中等",toxicity:"极低",side:"少见",contra:""}
    ],
    tips: "💕 多喝热水或者煮点姜汤喝，裹好被子出出汗。感冒好了之后玉屏风再吃1-2周，帮小欣把免疫力养回来~",
    contraindications: []
},
"风热感冒/咽痛+低热": {
    symptoms: ["喉咙痛","嗓子疼","发热","低烧","流黄鼻涕","口渴","咽痛","咽喉痛","嗓子痛","37度"],
    combo: {
        name: "咽痛+低热组合",
        meds: ["蓝芩口服液","小柴胡颗粒","蒲地蓝消炎口服液","玉屏风颗粒"],
        note: "蓝芩→对付咽痛的主力（消炎+抗病毒双管齐下，见效快）；小柴胡→专门治那种反反复复退不掉的低烧；蒲地蓝→嗓子红肿明显时配合蓝芩一起上；玉屏风→帮助恢复免疫力。如果超过一周还没好转，可能需要加抗生素了。",
        warn: "⚠️ 低烧超过一周的话小欣要去查个血常规哦，排除一下细菌感染。"
    },
    medicines: [
        {name:"蓝芩口服液",priority:1,usage:"每次20ml(2支)，每日3次",scene:"咽痛主力，抗病毒+消炎",speed:"快(当天缓解)",toxicity:"极低",side:"偶有轻微胃肠不适",contra:""},
        {name:"小柴胡颗粒",priority:1,usage:"每次1-2袋，每日3次",scene:"低热反复不退",speed:"中等(1-2天)",toxicity:"极低",side:"极少",contra:""},
        {name:"蒲地蓝消炎口服液",priority:1,usage:"每次1支，每日3次",scene:"咽部红肿/扁桃体肿大",speed:"中等",toxicity:"极低",side:"少见",contra:""},
        {name:"玉屏风颗粒",priority:1,usage:"每次1袋，每日3次",scene:"辅助恢复免疫力",speed:"慢(坚持)",toxicity:"极低",side:"极少",contra:""},
        {name:"银翘解毒片",priority:2,usage:"每次4片，每日3次",scene:"发热+咽痛经典方",speed:"中等",toxicity:"极低",side:"少见",contra:""},
        {name:"连花清瘟胶囊",priority:3,usage:"每次4粒，每日3次",scene:"全身酸痛流感样",speed:"中等",toxicity:"低",side:"脾虚者可能腹泻",contra:"脾胃虚寒慎用"}
    ],
    tips: "💕 多喝温水，吃清淡点。低烧一周说明小欣的身体在努力打仗呢，蓝芩+小柴胡帮忙对付症状，玉屏风给免疫力加油。好转了之后玉屏风再吃两周哦~",
    contraindications: ["如果同时用了抗生素（头孢类），千万千万不能碰酒精！"]
},
"高热(>38.5°C)": {
    symptoms: ["发烧","高烧","体温高","畏寒","全身酸痛","38度","39度","发热"],
    combo: {
        name: "退烧组合",
        meds: ["对乙酰氨基酚","小柴胡颗粒"],
        note: "对乙酰氨基酚温和退烧不伤胃；小柴胡辅助退热防反复。38.5以下先多喝水+物理降温+小柴胡观察就好。",
        warn: "⚠️ 对乙酰氨基酚绝对不能和酒一起！高烧超3天或者>39.5°C要去医院哦。"
    },
    medicines: [
        {name:"对乙酰氨基酚(泰诺林)",priority:1,usage:"每次0.5g，每4-6h一次，一天≤3次",scene:"温和退烧首选，不伤胃",speed:"快(30-60min)",toxicity:"低",side:"控量安全(日<2g)",contra:"⛔绝对禁酒"},
        {name:"小柴胡颗粒",priority:1,usage:"每次1-2袋，每日3次",scene:"辅助退热防反复",speed:"中等",toxicity:"极低",side:"极少",contra:""},
        {name:"布洛芬缓释胶囊",priority:3,usage:"每次1粒，必须饭后",scene:"高烧对乙酰氨基酚压不住时",speed:"快(30min)",toxicity:"低",side:"⚠️注意胃部反应，饭后吃",contra:"禁空腹/酒/咖啡"},
        {name:"柴桂退热颗粒",priority:3,usage:"每次1袋，每日3次",scene:"中成药退热辅助",speed:"中等",toxicity:"极低",side:"少见",contra:""},
        {name:"尼美舒利",priority:4,usage:"每次100mg，饭后，日≤2次",scene:"其他都不管用时才吃",speed:"快(15min)",toxicity:"中",side:"⚠️伤肝，不超5天",contra:"⛔禁酒，不和其他退烧药一起"}
    ],
    tips: "💕 发烧了要多多喝水呀！温水擦擦腋下额头帮助降温。对乙酰氨基酚和布洛芬可以交替吃（间隔4小时），但不能同时吃哦。烧了三天还不退就乖乖去医院~",
    contraindications: ["两种退烧药不能同时吃","对乙酰氨基酚⛔禁酒","很多感冒药里已经含对乙酰氨基酚了，注意别重复吃"]
},
"干咳无痰": {
    symptoms: ["干咳","喉咙痒","无痰","咽干","声音嘶哑","嗓子干"],
    combo: {
        name: "干咳组合",
        meds: ["川贝枇杷膏","蓝芩口服液(嗓子痛时加)"],
        note: "川贝枇杷膏润肺止咳；嗓子同时痛的话加蓝芩。咳了超2周好不了→换养阴清肺丸慢慢调。",
        warn: ""
    },
    medicines: [
        {name:"川贝枇杷膏",priority:1,usage:"每次15ml，每日3次",scene:"干咳喉痒首选",speed:"中等",toxicity:"极低",side:"含糖量高",contra:""},
        {name:"养阴清肺丸",priority:2,usage:"每次1丸，每日2次",scene:"久咳不好，偏阴虚体质适合",speed:"慢(坚持吃)",toxicity:"极低",side:"极少",contra:""},
        {name:"右美沙芬片",priority:2,usage:"每次15-30mg，每日3-4次",scene:"咳得厉害影响睡觉时",speed:"快(30min)",toxicity:"低",side:"可能头晕，别超7天",contra:""},
        {name:"蓝芩口服液",priority:2,usage:"每次20ml，每日3次",scene:"干咳+嗓子痛时加",speed:"快",toxicity:"极低",side:"偶有胃肠不适",contra:""}
    ],
    tips: "💕 煮点梨汤喝或者蜂蜜水，房间太干的话开个加湿器。干咳超过两周或者晚上特别严重，小欣要注意可能是过敏性咳嗽哦。",
    contraindications: []
},
"咳嗽有痰": {
    symptoms: ["咳嗽","有痰","痰多","白痰","黄痰","胸闷","咳痰"],
    combo: {
        name: "痰咳组合",
        meds: ["氨溴索片","橘红痰咳液"],
        note: "氨溴索化痰效果最好；橘红痰咳液止咳+化痰。记住有痰的时候不要吃止咳药哦，会把痰堵在里面。",
        warn: ""
    },
    medicines: [
        {name:"氨溴索片(沐舒坦)",priority:1,usage:"每次30mg，每日3次",scene:"化痰主力",speed:"快(1-2天)",toxicity:"低",side:"偶有胃肠不适",contra:""},
        {name:"橘红痰咳液",priority:1,usage:"每次20ml，每日3次",scene:"止咳+化痰",speed:"中等",toxicity:"极低",side:"极少",contra:""},
        {name:"复方鲜竹沥液",priority:2,usage:"每次1-2支，每日2-3次",scene:"痰黄粘稠",speed:"中等",toxicity:"极低",side:"少见",contra:""},
        {name:"蛇胆川贝液",priority:3,usage:"每次1支，每日2次",scene:"清热化痰",speed:"中等",toxicity:"极低",side:"少见",contra:"着凉的咳嗽不适合"}
    ],
    tips: "💕 多喝水帮助把痰稀释掉~如果痰是黄色而且超过5天，可能有细菌感染了，小欣要去看看医生哦。",
    contraindications: ["有痰不要吃止咳药（右美沙芬等），会把痰堵住更难受"]
},
"痛经": {
    symptoms: ["痛经","月经痛","经期腹痛","小腹痛","来月经痛","经期疼","来事儿痛"],
    combo: {
        name: "痛经组合",
        meds: ["元胡止痛片","益母草颗粒","艾附暖宫丸","对乙酰氨基酚(疼得受不了时)"],
        note: "元胡止痛→活血止痛不伤胃，痛的时候直接吃；益母草→帮助排血块；艾附暖宫丸→暖宫散寒从根源缓解（经前一周就开始吃效果最好）；对乙酰氨基酚→实在疼得受不了时救急用。平时坚持吃艾附暖宫丸，下次来的时候会好很多的~",
        warn: ""
    },
    medicines: [
        {name:"元胡止痛片",priority:1,usage:"每次4-6片，每日3次，痛的时候直接吃",scene:"活血止痛主力，不伤胃",speed:"中等(1-2h)",toxicity:"低",side:"少见",contra:""},
        {name:"益母草颗粒",priority:1,usage:"每次1袋，每日2次，经期+经后3天",scene:"活血排血块",speed:"中等",toxicity:"极低",side:"极少",contra:"量特别大时先别吃"},
        {name:"艾附暖宫丸",priority:1,usage:"每次6g，每日2-3次，经前1周就开始",scene:"暖宫散寒，长期调理",speed:"慢(坚持2-3个周期会改善)",toxicity:"极低",side:"极少",contra:""},
        {name:"田七痛经胶囊",priority:1,usage:"每次2-4粒，每日3次，经前2天起",scene:"活血化瘀止痛",speed:"中等",toxicity:"低",side:"少见",contra:"量多时慎用"},
        {name:"对乙酰氨基酚",priority:2,usage:"每次0.5g，每4-6h，一天≤3次",scene:"西药止痛备用，不伤胃",speed:"快(30min)",toxicity:"低",side:"控量安全",contra:"⛔禁酒"},
        {name:"布洛芬缓释胶囊",priority:4,usage:"每次1粒，必须饭后",scene:"强效但容易引起胃部不适",speed:"快(30min)",toxicity:"低",side:"⚠️容易恶心呕吐，慎用",contra:"胃敏感者慎用"},
        {name:"尼美舒利",priority:4,usage:"每次100mg，饭后，日≤2次",scene:"极严重时短期备用",speed:"快(15min)",toxicity:"中",side:"⚠️伤肝不超3天",contra:"⛔禁酒"}
    ],
    tips: "💕 痛的时候抱个暖宝宝敷小肚子，喝红糖姜水，千万别碰冷饮和咖啡。小欣平时也坚持吃艾附暖宫丸调理哦，坚持2-3个周期原发性痛经会明显好转的~",
    contraindications: ["对乙酰氨基酚⛔禁酒","尼美舒利不超3天","经期别喝咖啡（会加重痛感）"]
},
"月经不调": {
    symptoms: ["月经不准","月经推迟","经量少","经量多","月经不调","周期乱"],
    combo: {
        name: "调经组合",
        meds: ["逍遥丸","乌鸡白凤丸"],
        note: "逍遥丸疏肝理气（心情不好压力大影响月经时特别管用）；乌鸡白凤丸气血双补。可以一起吃，但要坚持2-3个月经周期才能看到效果哦~",
        warn: ""
    },
    medicines: [
        {name:"逍遥丸",priority:1,usage:"每次8丸，每日3次",scene:"压力/情绪影响月经",speed:"慢(2-3个周期)",toxicity:"极低",side:"极少",contra:""},
        {name:"乌鸡白凤丸",priority:1,usage:"每次1丸，每日2次",scene:"气血双补经典",speed:"慢(坚持)",toxicity:"极低",side:"极少",contra:"感冒时暂停"},
        {name:"当归补血口服液",priority:2,usage:"每次1支，每日2次",scene:"脸色不好偏血虚",speed:"慢",toxicity:"极低",side:"极少",contra:""},
        {name:"八珍益母丸",priority:2,usage:"每次6g，每日2次",scene:"气血两虚+量少",speed:"慢",toxicity:"极低",side:"少见",contra:""}
    ],
    tips: "💕 调经的药要有耐心呀，至少吃2-3个周期。保持好心情，早睡觉（小欣这点做得很好！）。月经乱了超过3个月建议去查查激素六项~",
    contraindications: ["调经中成药别和萝卜/绿豆/浓茶一起吃","感冒时暂停补益类的药"]
},
"过敏(鼻/皮肤)": {
    symptoms: ["打喷嚏","鼻痒","皮肤痒","荨麻疹","起疹子","眼睛痒","过敏","鼻子痒","风团","猫毛","狗毛"],
    combo: {
        name: "过敏组合",
        meds: ["氯雷他定片","炉甘石洗剂(皮肤痒时涂)"],
        note: "氯雷他定白天吃不会犯困；皮肤痒/起疹子就涂炉甘石。如果吃了还是不够→换西替利嗪（晚上吃，会稍微犯困）。",
        warn: "⚠️ 小欣买中成药时记得看成分表有没有丁香/丁香油哦！"
    },
    medicines: [
        {name:"氯雷他定片(开瑞坦)",priority:1,usage:"每次1片，每日1次",scene:"白天吃不犯困",speed:"快(1-3h)",toxicity:"极低",side:"极少",contra:"别和柚子一起吃"},
        {name:"西替利嗪片",priority:1,usage:"每次1片，晚上吃",scene:"效果更强，晚上吃",speed:"快(1h)",toxicity:"极低",side:"会有点困",contra:""},
        {name:"炉甘石洗剂",priority:1,usage:"涂在痒的地方，一天多次都行",scene:"止痒神器",speed:"马上见效",toxicity:"无",side:"无",contra:"破皮的地方别涂"},
        {name:"氯苯那敏(扑尔敏)",priority:3,usage:"每次4mg，每日3次",scene:"便宜但会很困",speed:"快",toxicity:"低",side:"很困、口干",contra:"要工作学习时别吃"},
        {name:"地奈德乳膏",priority:3,usage:"薄薄涂一层，每日1-2次",scene:"疹子很严重时短期用",speed:"快",toxicity:"低",side:"激素药膏！不超7天",contra:"不能涂脸上"}
    ],
    tips: "💕 小欣碰到猫猫狗狗之后记得赶紧洗手换衣服呀~远离过敏原才是根本办法。如果经常过敏可以去医院做个脱敏治疗。",
    contraindications: ["氯雷他定别和柚子/西柚一起吃","地奈德是激素药膏，最多7天，不涂脸","⚠️注意中成药成分里有没有丁香"]
},
"胃痛胃胀": {
    symptoms: ["胃痛","胃胀","反酸","嗳气","烧心","胃不舒服","胃酸"],
    combo: {
        name: "胃痛组合",
        meds: ["达喜(嚼着吃)","气滞胃痛颗粒"],
        note: "达喜嚼碎了吃可以快速中和胃酸（胃难受时应急）；气滞胃痛颗粒调理。反酸很严重→短期吃奥美拉唑（别超14天）。",
        warn: ""
    },
    medicines: [
        {name:"达喜(铝碳酸镁片)",priority:1,usage:"每次1-2片嚼碎，胃不舒服时吃",scene:"反酸烧心快速缓解",speed:"马上见效",toxicity:"极低",side:"偶尔便秘",contra:""},
        {name:"气滞胃痛颗粒",priority:1,usage:"每次1袋，每日3次",scene:"胀气/心情不好引起的胃痛",speed:"中等",toxicity:"极低",side:"少见",contra:""},
        {name:"奥美拉唑肠溶胶囊",priority:2,usage:"每次20mg，每天1次，早饭前吃",scene:"反酸特别严重时",speed:"快(1-2h)",toxicity:"低",side:"别连着吃超14天",contra:"长期吃影响钙吸收"},
        {name:"三九胃泰颗粒",priority:2,usage:"每次1袋，每日2次",scene:"一般胃痛",speed:"中等",toxicity:"极低",side:"少见",contra:""},
        {name:"摩罗丹",priority:3,usage:"每次9g，每日3次",scene:"胃胀吃不下东西",speed:"慢",toxicity:"极低",side:"极少",contra:""}
    ],
    tips: "💕 要按时吃饭呀小欣！少食多餐，别空着肚子喝咖啡。平时多吃点蛋白质（鸡蛋、鱼），少吃太多精制碳水可以减少胃酸分泌哦~",
    contraindications: ["奥美拉唑别连续吃超14天","达喜和其他药隔1小时吃"]
},
"腹泻": {
    symptoms: ["拉肚子","腹泻","水样便","腹痛","肠鸣","拉稀"],
    combo: {
        name: "腹泻组合",
        meds: ["蒙脱石散","口服补液盐","整肠生"],
        note: "蒙脱石散止泻（空腹吃）；口服补液盐防脱水（很重要！）；整肠生恢复肠道菌群。蒙脱石散和其他药要隔2小时吃！",
        warn: "⚠️ 小欣偏瘦拉肚子容易脱水，一定要及时喝补液盐！"
    },
    medicines: [
        {name:"蒙脱石散(思密达)",priority:1,usage:"每次1袋，每日3次，空腹",scene:"止泻首选",speed:"快",toxicity:"极低",side:"可能便秘",contra:"和其他药隔2小时！"},
        {name:"口服补液盐III",priority:1,usage:"冲好了小口小口频繁喝",scene:"防脱水必备",speed:"马上",toxicity:"无",side:"无",contra:""},
        {name:"整肠生",priority:2,usage:"每次2粒，每日3次",scene:"恢复肠道菌群",speed:"中等",toxicity:"极低",side:"极少",contra:"别和抗生素同时吃"},
        {name:"黄连素片",priority:2,usage:"每次2-3片，每日3次",scene:"吃坏肚子（细菌性）",speed:"快",toxicity:"低",side:"少见",contra:""},
        {name:"补脾益肠丸",priority:3,usage:"每次6g，每日3次",scene:"总是反复拉肚子调理",speed:"慢",toxicity:"极低",side:"极少",contra:""}
    ],
    tips: "💕 拉肚子最重要的是补水补水补水！先只吃白粥、面条、香蕉这些。别喝牛奶别吃油腻的。超过3天还不好或者有血便赶紧去医院！",
    contraindications: ["蒙脱石散会吸附其他药物→间隔2小时吃","抗生素和益生菌间隔2小时"]
},
"便秘": {
    symptoms: ["便秘","排便困难","大便干燥","腹胀","大便硬"],
    combo: {
        name: "便秘方案",
        meds: ["乳果糖口服液"],
        note: "乳果糖很温和很安全，可以连续吃。不过根本办法还是多吃蔬菜水果多喝水哦~",
        warn: ""
    },
    medicines: [
        {name:"乳果糖口服液",priority:1,usage:"每次15-30ml，每天1次(早上)",scene:"温和通便",speed:"8-12小时",toxicity:"极低",side:"刚开始可能胀气",contra:""},
        {name:"麻仁丸",priority:2,usage:"每次1-2丸，每日1-2次",scene:"润肠通便",speed:"中等",toxicity:"极低",side:"少见",contra:""},
        {name:"开塞露",priority:3,usage:"外用1支",scene:"实在拉不出来应急",speed:"快(5-15min)",toxicity:"极低",side:"别老用会依赖",contra:""}
    ],
    tips: "💕 多吃蔬菜呀小欣！火龙果、红薯、燕麦都很好~每天喝够1500ml水。多吃点纤维少吃精制碳水会改善很多的。",
    contraindications: []
},
"恶心呕吐": {
    symptoms: ["恶心","呕吐","想吐","反胃","吃不下"],
    combo: {
        name: "恶心组合",
        meds: ["多潘立酮(吗丁啉)"],
        note: "饭前吃帮助胃动起来。如果是吃太多了→保和丸。夏天中暑恶心→藿香正气胶囊。",
        warn: ""
    },
    medicines: [
        {name:"多潘立酮片(吗丁啉)",priority:1,usage:"每次1片，每日3次，饭前吃",scene:"促进胃动力止吐",speed:"快(30min)",toxicity:"低",side:"极少",contra:""},
        {name:"保和丸",priority:2,usage:"每次1-2丸，每日2次",scene:"吃撑了消化不良",speed:"中等",toxicity:"极低",side:"无",contra:""},
        {name:"藿香正气胶囊",priority:2,usage:"每次2-4粒，每日2次",scene:"夏天暑湿恶心",speed:"快",toxicity:"极低",side:"少见",contra:""}
    ],
    tips: "💕 先别勉强吃东西，小口小口喝点水。吐得厉害喝不下水的话要去医院输液哦。",
    contraindications: []
},
"失眠": {
    symptoms: ["失眠","睡不着","多梦","易醒","入睡困难","焦虑","浅眠"],
    combo: {
        name: "助眠组合",
        meds: ["酸枣仁颗粒","褪黑素(3mg)"],
        note: "酸枣仁养心安神比较温和；褪黑素调节生物钟（偶尔用就好别长期吃）。如果是压力大焦虑睡不着→加逍遥丸。",
        warn: ""
    },
    medicines: [
        {name:"酸枣仁颗粒",priority:1,usage:"每次1袋，睡前喝",scene:"养心安神",speed:"慢(坚持1-2周)",toxicity:"极低",side:"极少",contra:""},
        {name:"褪黑素片(3mg)",priority:1,usage:"睡前30分钟吃1片",scene:"偶尔睡不着时用",speed:"快(30min)",toxicity:"极低",side:"别长期吃(>3个月)",contra:"别喝咖啡茶"},
        {name:"逍遥丸",priority:2,usage:"每次8丸，每日3次",scene:"焦虑压力大睡不着",speed:"慢",toxicity:"极低",side:"极少",contra:""},
        {name:"安神补脑液",priority:2,usage:"每次1支，睡前",scene:"安神助眠",speed:"中等",toxicity:"极低",side:"少见",contra:""},
        {name:"百乐眠胶囊",priority:3,usage:"每次4粒，睡前",scene:"失眠比较严重时",speed:"中等",toxicity:"低",side:"第二天可能困",contra:""}
    ],
    tips: "💕 小欣作息本来就很好的~偶尔睡不着别焦虑（越焦虑越睡不着）。睡前泡泡脚，放下手机，让脑袋放空~",
    contraindications: ["褪黑素别长期吃(超3个月)","吃了褪黑素就别喝咖啡和茶了"]
},
"体虚乏力/免疫力差": {
    symptoms: ["没力气","容易累","乏力","气短","易感冒","免疫力差","体虚","疲劳","总生病"],
    combo: {
        name: "提升免疫力方案",
        meds: ["玉屏风颗粒","维生素C","乌鸡白凤丸"],
        note: "玉屏风是小欣最需要的（益气固表防感冒核心）；维C辅助免疫；乌鸡白凤丸气血双补。坚持至少1个月哦~",
        warn: ""
    },
    medicines: [
        {name:"玉屏风颗粒",priority:1,usage:"每次1袋，每日3次",scene:"★日常必备：防感冒提免疫",speed:"慢(坚持2周+)",toxicity:"极低",side:"极少",contra:"感冒发烧时先停"},
        {name:"维生素C片",priority:1,usage:"每次100mg，每天1次",scene:"辅助免疫",speed:"慢",toxicity:"极低",side:"吃太多可能结石",contra:"每天别超1000mg"},
        {name:"乌鸡白凤丸",priority:1,usage:"每次1丸，每日2次",scene:"气血双补",speed:"慢(坚持)",toxicity:"极低",side:"极少",contra:"感冒时暂停"},
        {name:"补中益气丸",priority:2,usage:"每次8-10丸，每日3次",scene:"总觉得没力气气短",speed:"慢",toxicity:"极低",side:"极少",contra:""},
        {name:"黄芪口服液",priority:2,usage:"每次1-2支，每日2次",scene:"补气",speed:"慢",toxicity:"极低",side:"极少",contra:"上火时先停"}
    ],
    tips: "💕 药只是帮忙的，根本还是要吃好！小欣记得多吃蛋白质呀~每天至少1个蛋+一份鱼/肉/豆腐，再配合散散步做做瑜伽，免疫力慢慢就上来了。",
    contraindications: ["感冒发烧时暂停补益的药","上火时别吃黄芪"]
},
"贫血气血不足": {
    symptoms: ["面色苍白","头晕","心慌","手脚冰凉","指甲没血色","气血不足","蹲下起来晕"],
    combo: {
        name: "补血组合",
        meds: ["复方阿胶浆","归脾丸"],
        note: "复方阿胶浆气血双补；归脾丸养心脾。如果去查了血确认是缺铁就吃铁剂。",
        warn: "⚠️ 吃铁剂的话：不能和茶/咖啡/牛奶/钙片一起吃（隔2小时），大便会变黑是正常的别担心~"
    },
    medicines: [
        {name:"复方阿胶浆",priority:1,usage:"每次1支，每日2次",scene:"气血双补",speed:"慢(2-4周)",toxicity:"极低",side:"含糖高",contra:""},
        {name:"右旋糖酐铁口服液",priority:1,usage:"每次1支，每日1-2次，饭后",scene:"确认缺铁后吃",speed:"慢(2-4周)",toxicity:"低",side:"便便变黑、胃肠不适",contra:"⚠️别和茶/咖啡/牛奶/钙片一起"},
        {name:"归脾丸",priority:2,usage:"每次8丸，每日3次",scene:"心脾两虚容易累",speed:"慢",toxicity:"极低",side:"极少",contra:""},
        {name:"阿胶补血口服液",priority:2,usage:"每次1支，每日2次",scene:"补血",speed:"慢",toxicity:"极低",side:"比较滋腻",contra:""}
    ],
    tips: "💕 多吃红肉、动物肝脏、菠菜、红枣呀~小欣平时蛋白质吃得偏少也会影响造血的，记得多吃鸡蛋鱼肉。经常头晕心慌的话去查查血常规哦。",
    contraindications: ["铁剂⚠️不能和茶/咖啡/牛奶/钙片一起吃（隔2小时）"]
},
"上火/口腔溃疡": {
    symptoms: ["口腔溃疡","上火","嘴巴起泡","牙龈肿痛","口臭","口疮"],
    combo: {
        name: "口腔溃疡组合",
        meds: ["溃疡贴膜","维生素B2","知柏地黄丸"],
        note: "贴膜贴上去马上不疼了；B2补着预防反复；知柏地黄丸滋阴降火（容易反复溃疡适合吃）。牛黄解毒片有用但有毒性不能超5天！",
        warn: "⚠️ 牛黄解毒片含砷，千万别超5天！"
    },
    medicines: [
        {name:"口腔溃疡散/贴膜",priority:1,usage:"贴在溃疡上，每天3-4次",scene:"止痛首选",speed:"马上不疼",toxicity:"无",side:"无",contra:""},
        {name:"维生素B2片",priority:1,usage:"每次10-20mg，每日3次",scene:"预防反复长溃疡",speed:"慢(预防用)",toxicity:"极低",side:"尿变黄(正常)",contra:""},
        {name:"知柏地黄丸",priority:2,usage:"每次8丸，每日3次",scene:"总是反复上火",speed:"慢(调理)",toxicity:"极低",side:"脾虚可能拉肚子",contra:""},
        {name:"牛黄解毒片",priority:3,usage:"每次3片，每日2次",scene:"上火严重时短期吃",speed:"1-2天",toxicity:"⚠️低-中",side:"含砷！有毒！",contra:"⛔不超5天！"},
        {name:"口炎清颗粒",priority:3,usage:"每次1袋，每日2次",scene:"口腔炎症",speed:"中等",toxicity:"极低",side:"少见",contra:""}
    ],
    tips: "💕 少吃辣的炸的，多吃水果蔬菜~ 小欣容易反复长溃疡的话日常吃点B族维生素预防。超过2周还不好的溃疡一定要去看看哦。",
    contraindications: ["牛黄解毒片⛔千万不超5天（砷中毒！）"]
},
"头痛": {
    symptoms: ["头痛","偏头痛","头胀","太阳穴痛","头疼"],
    combo: {
        name: "头痛方案",
        meds: ["对乙酰氨基酚"],
        note: "对乙酰氨基酚温和止痛。不过小欣先想想：是不是没吃饭？是不是喝水少了？是不是看屏幕太久了？这些原因的话吃点东西喝点水休息一下就好~",
        warn: ""
    },
    medicines: [
        {name:"对乙酰氨基酚",priority:1,usage:"每次0.5g，每4-6h，一天≤3次",scene:"温和止痛首选",speed:"快(30min)",toxicity:"低",side:"控量安全",contra:"⛔禁酒"},
        {name:"正天丸",priority:2,usage:"每次6g，每日2-3次",scene:"经常偏头痛调理",speed:"慢(坚持)",toxicity:"极低",side:"少见",contra:""},
        {name:"天麻头痛片",priority:2,usage:"每次4-6片，每日3次",scene:"头晕+头痛",speed:"中等",toxicity:"极低",side:"少见",contra:""},
        {name:"布洛芬缓释胶囊",priority:3,usage:"每次1粒，必须饭后",scene:"很痛时（注意胃）",speed:"快(30min)",toxicity:"低",side:"注意胃部反应",contra:"必须饭后吃"}
    ],
    tips: "💕 头痛先别急着吃药~喝杯水、吃点东西、闭眼休息10分钟试试。如果经常头痛（每个月超过4次）小欣要去检查一下哦。",
    contraindications: ["止痛药别连着吃超5天","对乙酰氨基酚⛔禁酒"]
},
"眼睛干涩": {
    symptoms: ["眼睛干","眼睛累","眼涩","眼干","视力疲劳"],
    combo: {
        name: "护眼方案",
        meds: ["玻璃酸钠滴眼液"],
        note: "人工泪液很安全，眼睛干了随时滴。记得20-20-20法则：看屏幕20分钟→看远处20秒~",
        warn: ""
    },
    medicines: [
        {name:"玻璃酸钠滴眼液",priority:1,usage:"每次1-2滴，随时用",scene:"干眼首选",speed:"马上舒服",toxicity:"无",side:"无",contra:""},
        {name:"珍珠明目滴眼液",priority:2,usage:"每次1-2滴，每天3-5次",scene:"清热明目",speed:"中等",toxicity:"极低",side:"少见",contra:""}
    ],
    tips: "💕 多眨眨眼睛呀~看手机看电脑的时候注意休息。小欣不熬夜这点很好，继续保持！",
    contraindications: []
},
"外伤擦伤": {
    symptoms: ["擦伤","割伤","磕碰","伤口","流血","摔伤"],
    combo: {
        name: "外伤处理",
        meds: ["清水冲→碘伏消毒→红霉素软膏→创可贴"],
        note: "按顺序来就好。伤口保持干净很重要，每天换药。",
        warn: "⚠️ 小欣的伤口愈合会比较慢，一定保持清洁！红肿发热有脓要赶紧去医院。破伤风疫苗超5年没打记得补~"
    },
    medicines: [
        {name:"碘伏",priority:1,usage:"涂在伤口上消毒",scene:"消毒首选",speed:"马上",toxicity:"无",side:"无",contra:"碘过敏不能用"},
        {name:"红霉素软膏",priority:1,usage:"薄薄涂一层，每天2次",scene:"防感染",speed:"持续",toxicity:"无",side:"极少",contra:""},
        {name:"创可贴/纱布",priority:1,usage:"盖住伤口",scene:"保持清洁",speed:"-",toxicity:"无",side:"无",contra:""},
        {name:"云南白药气雾剂",priority:2,usage:"先喷白瓶再喷红瓶",scene:"磕碰肿了痛了",speed:"快",toxicity:"低",side:"少见",contra:"破皮的地方别喷红瓶"}
    ],
    tips: "💕 小欣磕碰了要认真处理哦~保持干净每天换药，别让伤口感染了。伤口发红变热有脓就赶紧去医院！",
    contraindications: []
},
"尿路感染": {
    symptoms: ["尿频","尿急","尿痛","尿路感染","小便刺痛","尿道炎"],
    combo: {
        name: "尿路感染方案",
        meds: ["三金片","大量喝水"],
        note: "轻度的话三金片+拼命喝水冲刷就行。超3天没好或者腰痛发烧→必须去医院开抗生素了。",
        warn: "⚠️ 超过3天不好转或者腰痛/发烧→可能感染到肾了，一定要去医院！"
    },
    medicines: [
        {name:"三金片",priority:1,usage:"每次3片，每日3次",scene:"轻度尿路感染",speed:"中等(2-3天)",toxicity:"极低",side:"少见",contra:""},
        {name:"热淋清颗粒",priority:2,usage:"每次1袋，每日3次",scene:"清热利尿",speed:"中等",toxicity:"极低",side:"少见",contra:""},
        {name:"左氧氟沙星(要就医)",priority:3,usage:"每次0.5g，每日1次",scene:"中重度需要处方",speed:"快",toxicity:"低-中",side:"肌腱损伤、怕晒",contra:"别和牛奶钙片一起吃，别晒太阳"}
    ],
    tips: "💕 多喝水多喝水多排尿！注意个人卫生呀~ 小欣容易反复的话平时也要多喝水哦。",
    contraindications: ["左氧氟沙星别和牛奶/钙片一起吃，吃药期间别晒太阳"]
},
"抗生素(细菌感染)": {
    symptoms: ["感染","发炎","化脓","细菌感染","需要消炎","扁桃体化脓","伤口感染"],
    combo: {
        name: "抗生素方案（最好去看医生）",
        meds: ["阿莫西林(确认不过敏)","阿奇霉素(替代)"],
        note: "先确认不过敏青霉素→首选阿莫西林。过敏→用阿奇霉素。一定一定要吃满疗程5-7天不能提前停！",
        warn: "☠️ 头孢绝对不能碰酒！阿莫西林要确认没有青霉素过敏！建议在医生指导下用。"
    },
    medicines: [
        {name:"阿莫西林胶囊",priority:1,usage:"每次0.5g，每日3次，吃5-7天",scene:"咽炎/扁桃体炎/轻度感染",speed:"2-3天",toxicity:"低",side:"可能拉肚子",contra:"⛔青霉素过敏会休克！⚠️可能降低避孕药效"},
        {name:"头孢克肟分散片",priority:1,usage:"每次100mg，每日2次，5-7天",scene:"呼吸道/尿路/皮肤感染",speed:"2-3天",toxicity:"低-中",side:"肠胃不舒服",contra:"☠️绝对不能碰酒（前后7天）！"},
        {name:"阿奇霉素",priority:2,usage:"每次0.5g，每天1次，连吃3天",scene:"支原体/青霉素过敏替代",speed:"1-3天",toxicity:"低-中",side:"比较恶心",contra:"别和达喜一起吃"},
        {name:"罗红霉素",priority:2,usage:"每次150mg，每日2次，5-7天",scene:"呼吸道/皮肤感染",speed:"2-3天",toxicity:"低",side:"胃肠不适",contra:""},
        {name:"甲硝唑",priority:3,usage:"每次0.4g，每日3次，5-7天",scene:"牙周炎/妇科炎症",speed:"2-3天",toxicity:"中",side:"恶心+嘴里有金属味",contra:"☠️绝对不能碰酒！"}
    ],
    tips: "💕 小欣记住抗生素的铁律：①一定吃满疗程不能提前停！②吃头孢/甲硝唑前后7天绝对绝对不能碰酒！③吃抗生素的同时可以吃益生菌保护肠道（隔2小时吃）。感染了别拖哦，早治早好~",
    contraindications: ["头孢☠️禁酒（任何含酒精的东西都不行）","甲硝唑☠️禁酒","阿莫西林⛔青霉素过敏致命","一定要吃满疗程"]
}
};
