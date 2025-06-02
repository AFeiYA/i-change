export interface Hexagram {
    number: number;
    name: string;
    chineseName: string;
    description: string;
    lines: string[];
    unicode: string; // Unicode字符表示
    interpretation: string;
    advice: string;
    upperTrigram: string;
    lowerTrigram: string;
}

export const hexagrams: Hexagram[] = [
    // 第1卦 - 乾为天
    {
        number: 1,
        name: "The Creative",
        chineseName: "乾",
        description: "天行健，君子以自强不息。纯阳之卦，象征创造力与领导力。",
        lines: ["━━━", "━━━", "━━━", "━━━", "━━━", "━━━"],
        unicode: "䷀",
        interpretation: "六龙御天，刚健中正。象征强健的创造力和不懈的进取精神。",
        advice: "发挥领导才能，保持正直品格，但要防止过于刚强。",
        upperTrigram: "乾",
        lowerTrigram: "乾"
    },
    // 第2卦 - 坤为地
    {
        number: 2,
        name: "The Receptive",
        chineseName: "坤",
        description: "地势坤，君子以厚德载物。纯阴之卦，象征包容与承载。",
        lines: ["━ ━", "━ ━", "━ ━", "━ ━", "━ ━", "━ ━"],
        unicode: "䷁",
        interpretation: "柔顺利贞，厚德载物。以柔克刚，包容万物的品德。",
        advice: "保持谦逊包容，发挥配合与支持的作用，以德服人。",
        upperTrigram: "坤",
        lowerTrigram: "坤"
    },
    // 第3卦 - 水雷屯
    {
        number: 3,
        name: "Difficulty at the Beginning",
        chineseName: "屯",
        description: "云雷屯，君子以经纶。万事开头难，需要坚持和智慧。",
        lines: ["━ ━", "━━━", "━ ━", "━ ━", "━━━", "━ ━"],
        unicode: "䷂",
        interpretation: "屯难之时，需要坚守正道，寻求贤人相助。",
        advice: "面对困难要有耐心，寻求帮助，稳扎稳打地前进。",
        upperTrigram: "坎",
        lowerTrigram: "震"
    },
    // 第4卦 - 山水蒙
    {
        number: 4,
        name: "Youthful Folly",
        chineseName: "蒙",
        description: "山下出泉，蒙。君子以果行育德。启蒙教育的重要性。",
        lines: ["━━━", "━ ━", "━ ━", "━━━", "━ ━", "━ ━"],
        unicode: "䷃",
        interpretation: "童蒙求我，我不求童蒙。教育要因材施教，循循善诱。",
        advice: "保持学习的谦逊态度，寻求良师，培养正确的品德。",
        upperTrigram: "艮",
        lowerTrigram: "坎"
    },
    // 第5卦 - 水天需
    {
        number: 5,
        name: "Waiting",
        chineseName: "需",
        description: "云上于天，需。君子以饮食宴乐。等待时机，养精蓄锐。",
        lines: ["━━━", "━━━", "━ ━", "━━━", "━ ━", "━ ━"],
        unicode: "䷄",
        interpretation: "需于郊，利用恒，无咎。耐心等待，时机自来。",
        advice: "保持信心和耐心，充实自己，等待合适的时机。",
        upperTrigram: "坎",
        lowerTrigram: "乾"
    },
    // 第6卦 - 天水讼
    {
        number: 6,
        name: "Conflict",
        chineseName: "讼",
        description: "天与水违行，讼。君子以作事谋始。争端与调解。",
        lines: ["━━━", "━━━", "━━━", "━ ━", "━━━", "━ ━"],
        unicode: "䷅",
        interpretation: "讼不可长，必须寻求和解。避免争端，以和为贵。",
        advice: "避免争执，寻求调解，退一步海阔天空。",
        upperTrigram: "乾",
        lowerTrigram: "坎"
    },
    // 第7卦 - 地水师
    {
        number: 7,
        name: "The Army",
        chineseName: "师",
        description: "地中有水，师。君子以容民畜众。军队与领导。",
        lines: ["━ ━", "━ ━", "━ ━", "━ ━", "━━━", "━ ━"],
        unicode: "䷆",
        interpretation: "师出以律，否臧凶。军队要有纪律，领导要有方。",
        advice: "建立威信，严明纪律，以德服众，公正治理。",
        upperTrigram: "坤",
        lowerTrigram: "坎"
    },
    // 第8卦 - 水地比
    {
        number: 8,
        name: "Holding Together",
        chineseName: "比",
        description: "地上有水，比。先王以建万国，亲诸侯。团结协作。",
        lines: ["━ ━", "━━━", "━ ━", "━ ━", "━ ━", "━ ━"],
        unicode: "䷇",
        interpretation: "比之匪人，不亦伤乎。选择正确的伙伴很重要。",
        advice: "团结合作，选择合适的伙伴，建立良好的关系。",
        upperTrigram: "坎",
        lowerTrigram: "坤"
    },
    // 第9卦 - 风天小畜
    {
        number: 9,
        name: "Small Accumulation",
        chineseName: "小畜",
        description: "风行天上，小畜。君子以懿文德。积少成多。",
        lines: ["━━━", "━━━", "━ ━", "━━━", "━━━", "━━━"],
        unicode: "䷈",
        interpretation: "密云不雨，自我西郊。积蓄力量，等待时机。",
        advice: "耐心积累，不急于求成，培养自身的实力。",
        upperTrigram: "巽",
        lowerTrigram: "乾"
    },
    // 第10卦 - 天泽履
    {
        number: 10,
        name: "Treading",
        chineseName: "履",
        description: "上天下泽，履。君子以辨上下，定民志。行为规范。",
        lines: ["━━━", "━━━", "━━━", "━━━", "━ ━", "━━━"],
        unicode: "䷉",
        interpretation: "履虎尾，不咥人，亨。谨慎行事，遵循礼制。",
        advice: "谨慎行事，遵守规则，保持适当的距离和尊重。",
        upperTrigram: "乾",
        lowerTrigram: "兑"
    },
    // 第11卦 - 地天泰
    {
        number: 11,
        name: "Peace",
        chineseName: "泰",
        description: "天地交，泰。后以财成天地之道，辅相天地之宜。和谐繁荣。",
        lines: ["━ ━", "━ ━", "━ ━", "━━━", "━━━", "━━━"],
        unicode: "䷊",
        interpretation: "小往大来，吉亨。阴阳调和，万物兴盛。",
        advice: "把握机遇，促进合作，营造和谐的环境。",
        upperTrigram: "坤",
        lowerTrigram: "乾"
    },
    // 第12卦 - 天地否
    {
        number: 12,
        name: "Standstill",
        chineseName: "否",
        description: "天地不交，否。君子以俭德辟难，不可荣以禄。闭塞不通。",
        lines: ["━━━", "━━━", "━━━", "━ ━", "━ ━", "━ ━"],
        unicode: "䷋",
        interpretation: "否之匪人，不利君子贞。时运不济，需要谨慎。",
        advice: "保持节俭，避开危险，等待时机的转变。",
        upperTrigram: "乾",
        lowerTrigram: "坤"
    },
    // 第13卦 - 天火同人
    {
        number: 13,
        name: "Fellowship",
        chineseName: "同人",
        description: "天与火，同人。君子以类族辨物。团结合作。",
        lines: ["━━━", "━━━", "━━━", "━━━", "━ ━", "━━━"],
        unicode: "䷌",
        interpretation: "同人于野，亨。与人合作，志同道合。",
        advice: "寻找志同道合的伙伴，开诚布公地合作。",
        upperTrigram: "乾",
        lowerTrigram: "离"
    },
    // 第14卦 - 火天大有
    {
        number: 14,
        name: "Great Possession",
        chineseName: "大有",
        description: "火在天上，大有。君子以遏恶扬善，顺天休命。富足兴盛。",
        lines: ["━━━", "━ ━", "━━━", "━━━", "━━━", "━━━"],
        unicode: "䷍",
        interpretation: "元亨。光明在上，万物归从。事业兴盛。",
        advice: "发挥优势，扬善抑恶，保持谦逊的品德。",
        upperTrigram: "离",
        lowerTrigram: "乾"
    },
    // 第15卦 - 地山谦
    {
        number: 15,
        name: "Modesty",
        chineseName: "谦",
        description: "地中有山，谦。君子以裒多益寡，称物平施。谦逊美德。",
        lines: ["━ ━", "━ ━", "━ ━", "━━━", "━ ━", "━ ━"],
        unicode: "䷎",
        interpretation: "谦谦君子，卑以自牧。谦逊是最大的智慧。",
        advice: "保持谦逊，不骄不躁，以德服人。",
        upperTrigram: "坤",
        lowerTrigram: "艮"
    },
    // 第16卦 - 雷地豫
    {
        number: 16,
        name: "Enthusiasm",
        chineseName: "豫",
        description: "雷出地奋，豫。先王以作乐崇德。快乐与预备。",
        lines: ["━ ━", "━━━", "━ ━", "━ ━", "━ ━", "━ ━"],
        unicode: "䷏",
        interpretation: "利建侯行师。顺应自然，预为之备。",
        advice: "保持乐观，提前准备，顺势而为。",
        upperTrigram: "震",
        lowerTrigram: "坤"
    },
    // 第17卦 - 泽雷随
    {
        number: 17,
        name: "Following",
        chineseName: "随",
        description: "泽中有雷，随。君子以向晦入宴息。跟随与适应。",
        lines: ["━━━", "━ ━", "━━━", "━ ━", "━━━", "━ ━"],
        unicode: "䷐",
        interpretation: "元亨利贞，无咎。适时而动，因势利导。",
        advice: "灵活适应，审时度势，跟随正确的方向。",
        upperTrigram: "兑",
        lowerTrigram: "震"
    },
    // 第18卦 - 山风蛊
    {
        number: 18,
        name: "Work on the Decayed",
        chineseName: "蛊",
        description: "山下有风，蛊。君子以振民育德。整治与重建。",
        lines: ["━━━", "━ ━", "━ ━", "━━━", "━━━", "━ ━"],
        unicode: "䷑",
        interpretation: "元亨，利涉大川。整治腐败，重振家风。",
        advice: "勇于改革，整治弊端，重建良好的秩序。",
        upperTrigram: "艮",
        lowerTrigram: "巽"
    },
    // 第19卦 - 地泽临
    {
        number: 19,
        name: "Approach",
        chineseName: "临",
        description: "泽上有地，临。君子以教思无穷，容保民无疆。接近与管理。",
        lines: ["━ ━", "━ ━", "━━━", "━━━", "━ ━", "━━━"],
        unicode: "䷒",
        interpretation: "元亨利贞。至于八月有凶。接近成功，要有准备。",
        advice: "抓住机遇，加强管理，居安思危。",
        upperTrigram: "坤",
        lowerTrigram: "兑"
    },
    // 第20卦 - 风地观
    {
        number: 20,
        name: "Contemplation",
        chineseName: "观",
        description: "风行地上，观。先王以省方观民设教。观察与学习。",
        lines: ["━━━", "━━━", "━ ━", "━ ━", "━ ━", "━ ━"],
        unicode: "䷓",
        interpretation: "盥而不荐，有孚颙若。观察学习，以身作则。",
        advice: "仔细观察，深入学习，以正确的方式示范。",
        upperTrigram: "巽",
        lowerTrigram: "坤"
    },
    // 第21卦 - 火雷噬嗑
    {
        number: 21,
        name: "Biting Through",
        chineseName: "噬嗑",
        description: "雷电噬嗑。先王以明罚敕法。执法与惩戒。",
        lines: ["━━━", "━ ━", "━━━", "━ ━", "━━━", "━ ━"],
        unicode: "䷔",
        interpretation: "亨。利用狱。明法执行，惩恶扬善。",
        advice: "坚持原则，公正执法，清除障碍。",
        upperTrigram: "离",
        lowerTrigram: "震"
    },
    // 第22卦 - 山火贲
    {
        number: 22,
        name: "Grace",
        chineseName: "贲",
        description: "山下有火，贲。君子以明庶政，无敢折狱。文饰与美化。",
        lines: ["━━━", "━ ━", "━ ━", "━━━", "━ ━", "━━━"],
        unicode: "䷕",
        interpretation: "亨。小利有攸往。文质并茂，内外兼修。",
        advice: "注重仪表，修饰外在，但不可舍本逐末。",
        upperTrigram: "艮",
        lowerTrigram: "离"
    },
    // 第23卦 - 山地剥
    {
        number: 23,
        name: "Splitting Apart",
        chineseName: "剥",
        description: "山附于地，剥。上以厚下安宅。衰败与剥落。",
        lines: ["━━━", "━ ━", "━ ━", "━ ━", "━ ━", "━ ━"],
        unicode: "䷖",
        interpretation: "不利有攸往。小人道长，君子道消。",
        advice: "保持低调，等待时机，避免冒险行动。",
        upperTrigram: "艮",
        lowerTrigram: "坤"
    },
    // 第24卦 - 地雷复
    {
        number: 24,
        name: "Return",
        chineseName: "复",
        description: "雷在地中，复。先王以至日闭关，商旅不行。回归与复始。",
        lines: ["━ ━", "━ ━", "━ ━", "━ ━", "━ ━", "━━━"],
        unicode: "䷗",
        interpretation: "亨。出入无疾，朋来无咎。一阳来复，生机重现。",
        advice: "认识错误，回归正道，重新开始。",
        upperTrigram: "坤",
        lowerTrigram: "震"
    },
    // 第25卦 - 天雷无妄
    {
        number: 25,
        name: "Innocence",
        chineseName: "无妄",
        description: "天下雷行，物与无妄。先王以茂对时，育万物。纯真无邪。",
        lines: ["━━━", "━━━", "━━━", "━ ━", "━━━", "━ ━"],
        unicode: "䷘",
        interpretation: "元亨利贞。其匪正有眚，不利有攸往。",
        advice: "保持纯真，行事正直，不要妄为。",
        upperTrigram: "乾",
        lowerTrigram: "震"
    },
    // 第26卦 - 山天大畜
    {
        number: 26,
        name: "Great Accumulation",
        chineseName: "大畜",
        description: "天在山中，大畜。君子以多识前言往行，以畜其德。积累储备。",
        lines: ["━━━", "━ ━", "━ ━", "━━━", "━━━", "━━━"],
        unicode: "䷙",
        interpretation: "利贞，不家食吉，利涉大川。大有积蓄，厚德载物。",
        advice: "积累知识，储备实力，培养德行。",
        upperTrigram: "艮",
        lowerTrigram: "乾"
    },
    // 第27卦 - 山雷颐
    {
        number: 27,
        name: "Nourishment",
        chineseName: "颐",
        description: "山下有雷，颐。君子以慎言语，节饮食。滋养与养护。",
        lines: ["━━━", "━ ━", "━ ━", "━ ━", "━━━", "━ ━"],
        unicode: "䷚",
        interpretation: "贞吉。观颐，自求口实。注重养生，谨慎言行。",
        advice: "注重养生，节制饮食，谨慎言语。",
        upperTrigram: "艮",
        lowerTrigram: "震"
    },
    // 第28卦 - 泽风大过
    {
        number: 28,
        name: "Great Exceeding",
        chineseName: "大过",
        description: "泽灭木，大过。君子以独立不惧，遁世无闷。过度与极限。",
        lines: ["━━━", "━ ━", "━━━", "━━━", "━━━", "━ ━"],
        unicode: "䷛",
        interpretation: "栋桡，利有攸往，亨。承受过重，需要减负。",
        advice: "量力而行，避免过度，寻求平衡。",
        upperTrigram: "兑",
        lowerTrigram: "巽"
    },
    // 第29卦 - 坎为水
    {
        number: 29,
        name: "The Abysmal Water",
        chineseName: "坎",
        description: "水洊至，习坎。君子以常德行，习教事。险阻重重。",
        lines: ["━ ━", "━━━", "━ ━", "━ ━", "━━━", "━ ━"],
        unicode: "䷜",
        interpretation: "习坎，有孚，维心亨，行有尚。险中求胜，坚持信念。",
        advice: "保持信念，勇敢面对困难，坚持不懈。",
        upperTrigram: "坎",
        lowerTrigram: "坎"
    },
    // 第30卦 - 离为火
    {
        number: 30,
        name: "The Clinging Fire",
        chineseName: "离",
        description: "明两作，离。大人以继明照于四方。光明与依附。",
        lines: ["━━━", "━ ━", "━━━", "━━━", "━ ━", "━━━"],
        unicode: "䷝",
        interpretation: "利贞，亨。畜牝牛，吉。光明正大，柔顺中正。",
        advice: "保持光明正大，依附正确的事物。",
        upperTrigram: "离",
        lowerTrigram: "离"
    },
    // 第31卦 - 泽山咸
    {
        number: 31,
        name: "Influence",
        chineseName: "咸",
        description: "山上有泽，咸。君子以虚受人。感应与影响。",
        lines: ["━━━", "━ ━", "━━━", "━━━", "━ ━", "━ ━"],
        unicode: "䷞",
        interpretation: "亨，利贞，取女吉。感应相通，和谐相处。",
        advice: "保持开放的心态，真诚相待，建立良好关系。",
        upperTrigram: "兑",
        lowerTrigram: "艮"
    },
    // 第32卦 - 雷风恒
    {
        number: 32,
        name: "Duration",
        chineseName: "恒",
        description: "雷风，恒。君子以立不易方。持久与恒常。",
        lines: ["━ ━", "━━━", "━ ━", "━━━", "━━━", "━ ━"],
        unicode: "䷟",
        interpretation: "亨，无咎，利贞，利有攸往。恒久不变，坚持到底。",
        advice: "保持恒心，坚持原则，持之以恒。",
        upperTrigram: "震",
        lowerTrigram: "巽"
    },
    // 第33卦 - 天山遁
    {
        number: 33,
        name: "Retreat",
        chineseName: "遁",
        description: "天下有山，遁。君子以远小人，不恶而严。退避与隐遁。",
        lines: ["━━━", "━━━", "━━━", "━━━", "━ ━", "━ ━"],
        unicode: "䷠",
        interpretation: "亨，小利贞。识时务者为俊杰，适时退避。",
        advice: "识时务，适时退让，远离小人。",
        upperTrigram: "乾",
        lowerTrigram: "艮"
    },
    // 第34卦 - 雷天大壮
    {
        number: 34,
        name: "Great Power",
        chineseName: "大壮",
        description: "雷在天上，大壮。君子以非礼弗履。强大的力量。",
        lines: ["━ ━", "━━━", "━ ━", "━━━", "━━━", "━━━"],
        unicode: "䷡",
        interpretation: "利贞。阳气盛大，但要守礼制。",
        advice: "发挥实力，但要遵守规则，不可滥用权力。",
        upperTrigram: "震",
        lowerTrigram: "乾"
    },
    // 第35卦 - 火地晋
    {
        number: 35,
        name: "Progress",
        chineseName: "晋",
        description: "明出地上，晋。君子以自昭明德。前进与上升。",
        lines: ["━━━", "━ ━", "━━━", "━ ━", "━ ━", "━ ━"],
        unicode: "䷢",
        interpretation: "康侯用锡马蕃庶，昼日三接。光明上进，蒸蒸日上。",
        advice: "积极进取，展现才能，获得认可和提升。",
        upperTrigram: "离",
        lowerTrigram: "坤"
    },
    // 第36卦 - 地火明夷
    {
        number: 36,
        name: "Darkening of the Light",
        chineseName: "明夷",
        description: "明入地中，明夷。君子以莅众，用晦而明。光明受阻。",
        lines: ["━ ━", "━ ━", "━ ━", "━━━", "━ ━", "━━━"],
        unicode: "䷣",
        interpretation: "利艰贞。光明受阻，需要韬光养晦。",
        advice: "在困难时期保持内心光明，韬光养晦。",
        upperTrigram: "坤",
        lowerTrigram: "离"
    },
    // 第37卦 - 风火家人
    {
        number: 37,
        name: "The Family",
        chineseName: "家人",
        description: "风自火出，家人。君子以言有物而行有恒。家庭和睦。",
        lines: ["━━━", "━━━", "━ ━", "━━━", "━ ━", "━━━"],
        unicode: "䷤",
        interpretation: "利女贞。齐家治国，从家庭做起。",
        advice: "重视家庭和睦，言行一致，以身作则。",
        upperTrigram: "巽",
        lowerTrigram: "离"
    },
    // 第38卦 - 火泽睽
    {
        number: 38,
        name: "Opposition",
        chineseName: "睽",
        description: "上火下泽，睽。君子以同而异。分歧与对立。",
        lines: ["━━━", "━ ━", "━━━", "━━━", "━ ━", "━━━"],
        unicode: "䷥",
        interpretation: "小事吉。求同存异，化解矛盾。",
        advice: "求同存异，理解差异，寻求和解。",
        upperTrigram: "离",
        lowerTrigram: "兑"
    },
    // 第39卦 - 水山蹇
    {
        number: 39,
        name: "Obstruction",
        chineseName: "蹇",
        description: "山上有水，蹇。君子以反身修德。困难与阻碍。",
        lines: ["━ ━", "━━━", "━ ━", "━━━", "━ ━", "━ ━"],
        unicode: "䷦",
        interpretation: "利西南，不利东北。反省自身，修养品德。",
        advice: "面对困难要反省自己，修养品德，寻求帮助。",
        upperTrigram: "坎",
        lowerTrigram: "艮"
    },
    // 第40卦 - 雷水解
    {
        number: 40,
        name: "Deliverance",
        chineseName: "解",
        description: "雷雨作，解。君子以赦过宥罪。解脱与释放。",
        lines: ["━ ━", "━━━", "━ ━", "━ ━", "━━━", "━ ━"],
        unicode: "䷧",
        interpretation: "利西南，无所往，其来复吉。化解困难，获得解脱。",
        advice: "宽容待人，化解恩怨，给人以新的机会。",
        upperTrigram: "震",
        lowerTrigram: "坎"
    },
    // 第41卦 - 山泽损
    {
        number: 41,
        name: "Decrease",
        chineseName: "损",
        description: "山下有泽，损。君子以惩忿窒欲。减少与损耗。",
        lines: ["━━━", "━ ━", "━ ━", "━━━", "━ ━", "━━━"],
        unicode: "䷨",
        interpretation: "有孚，元吉，无咎，可贞，利有攸往。适当减少，控制欲望。",
        advice: "控制欲望，减少不必要的消耗，专注重点。",
        upperTrigram: "艮",
        lowerTrigram: "兑"
    },
    // 第42卦 - 风雷益
    {
        number: 42,
        name: "Increase",
        chineseName: "益",
        description: "风雷，益。君子以见善则迁，有过则改。增益与发展。",
        lines: ["━━━", "━━━", "━ ━", "━ ━", "━━━", "━ ━"],
        unicode: "䷩",
        interpretation: "利有攸往，利涉大川。助人为乐，自得其益。",
        advice: "帮助他人，见善就做，不断改进自己。",
        upperTrigram: "巽",
        lowerTrigram: "震"
    },
    // 第43卦 - 泽天夬
    {
        number: 43,
        name: "Breakthrough",
        chineseName: "夬",
        description: "泽上于天，夬。君子以施禄及下，居德则忌。决断与突破。",
        lines: ["━━━", "━ ━", "━━━", "━━━", "━━━", "━━━"],
        unicode: "䷪",
        interpretation: "扬于王庭，孚号有厉。刚决的突破，但要谨慎。",
        advice: "果断决策，突破困境，但要避免过于激进。",
        upperTrigram: "兑",
        lowerTrigram: "乾"
    },
    // 第44卦 - 天风姤
    {
        number: 44,
        name: "Coming to Meet",
        chineseName: "姤",
        description: "天下有风，姤。后以施命诰四方。相遇与邂逅。",
        lines: ["━━━", "━━━", "━━━", "━━━", "━━━", "━ ━"],
        unicode: "䷫",
        interpretation: "女壮，勿用取女。防范小人，保持警觉。",
        advice: "保持警觉，防范小人，不要轻信他人。",
        upperTrigram: "乾",
        lowerTrigram: "巽"
    },
    // 第45卦 - 泽地萃
    {
        number: 45,
        name: "Gathering Together",
        chineseName: "萃",
        description: "泽上于地，萃。君子以除戎器，戒不虞。聚集与团结。",
        lines: ["━━━", "━ ━", "━━━", "━ ━", "━ ━", "━ ━"],
        unicode: "䷬",
        interpretation: "亨。王假有庙，利见大人，亨，利贞。聚集众人，共同目标。",
        advice: "团结众人，凝聚力量，但要有所防备。",
        upperTrigram: "兑",
        lowerTrigram: "坤"
    },
    // 第46卦 - 地风升
    {
        number: 46,
        name: "Pushing Upward",
        chineseName: "升",
        description: "地中生木，升。君子以顺德，积小以高大。上升与成长。",
        lines: ["━ ━", "━ ━", "━ ━", "━━━", "━━━", "━ ━"],
        unicode: "䷭",
        interpretation: "元亨，用见大人，勿恤，南征吉。循序渐进，稳步上升。",
        advice: "稳步前进，积少成多，寻求贵人相助。",
        upperTrigram: "坤",
        lowerTrigram: "巽"
    },
    // 第47卦 - 泽水困
    {
        number: 47,
        name: "Oppression",
        chineseName: "困",
        description: "泽无水，困。君子以致命遂志。困顿与压迫。",
        lines: ["━━━", "━ ━", "━━━", "━ ━", "━━━", "━ ━"],
        interpretation: "亨，贞，大人吉，无咎，有言不信。在困境中坚持信念。",
        unicode: "䷮",
        advice: "在困境中保持信念，坚持原则，等待转机。",
        upperTrigram: "兑",
        lowerTrigram: "坎"
    },
    // 第48卦 - 水风井
    {
        number: 48,
        name: "The Well",
        chineseName: "井",
        description: "木上有水，井。君子以劳民劝相。水井与滋养。",
        lines: ["━ ━", "━━━", "━ ━", "━━━", "━━━", "━ ━"],
        unicode: "䷯",
        interpretation: "改邑不改井，无丧无得，往来井井。服务他人，滋养万物。",
        advice: "为他人服务，不求回报，持续提供帮助。",
        upperTrigram: "坎",
        lowerTrigram: "巽"
    },
    // 第49卦 - 泽火革
    {
        number: 49,
        name: "Revolution",
        chineseName: "革",
        description: "泽中有火，革。君子以治历明时。变革与改革。",
        lines: ["━━━", "━ ━", "━━━", "━━━", "━ ━", "━━━"],
        unicode: "䷰",
        interpretation: "巳日乃孚，元亨利贞，悔亡。适时变革，推陈出新。",
        advice: "审时度势，适时变革，但要慎重考虑。",
        upperTrigram: "兑",
        lowerTrigram: "离"
    },
    // 第50卦 - 火风鼎
    {
        number: 50,
        name: "The Cauldron",
        chineseName: "鼎",
        description: "木上有火，鼎。君子以正位凝命。鼎器与变革。",
        lines: ["━━━", "━ ━", "━━━", "━━━", "━━━", "━ ━"],
        unicode: "䷱",
        interpretation: "元吉，亨。革故鼎新，成就大业。",
        advice: "革故鼎新，建立新的秩序，承担重任。",
        upperTrigram: "离",
        lowerTrigram: "巽"
    },
    // 第51卦 - 震为雷
    {
        number: 51,
        name: "The Arousing Thunder",
        chineseName: "震",
        description: "洊雷，震。君子以恐惧修省。震动与警醒。",
        lines: ["━ ━", "━━━", "━ ━", "━ ━", "━━━", "━ ━"],
        unicode: "䷲",
        interpretation: "亨。震来虩虩，笑言哑哑。震动带来警醒和反省。",
        advice: "保持警觉，从震动中学习，修正自己的行为。",
        upperTrigram: "震",
        lowerTrigram: "震"
    },
    // 第52卦 - 艮为山
    {
        number: 52,
        name: "Keeping Still Mountain",
        chineseName: "艮",
        description: "兼山，艮。君子以思不出其位。静止与沉稳。",
        lines: ["━━━", "━ ━", "━ ━", "━━━", "━ ━", "━ ━"],
        unicode: "䷳",
        interpretation: "艮其背，不获其身，行其庭，不见其人，无咎。止于该止之处。",
        advice: "知道何时停止，保持内心的平静和稳定。",
        upperTrigram: "艮",
        lowerTrigram: "艮"
    },
    // 第53卦 - 风山渐
    {
        number: 53,
        name: "Development",
        chineseName: "渐",
        description: "山上有木，渐。君子以居贤德善俗。渐进与发展。",
        lines: ["━━━", "━━━", "━ ━", "━━━", "━ ━", "━ ━"],
        unicode: "䷴",
        interpretation: "女归吉，利贞。循序渐进，稳步发展。",
        advice: "不急不躁，循序渐进，稳扎稳打地发展。",
        upperTrigram: "巽",
        lowerTrigram: "艮"
    },
    // 第54卦 - 雷泽归妹
    {
        number: 54,
        name: "The Marrying Maiden",
        chineseName: "归妹",
        description: "泽上有雷，归妹。君子以永终知敝。归宿与嫁娶。",
        lines: ["━ ━", "━━━", "━ ━", "━━━", "━ ━", "━━━"],
        unicode: "䷵",
        interpretation: "征凶，无攸利。需要谨慎处理关系问题。",
        advice: "处理关系要谨慎，不可冲动行事。",
        upperTrigram: "震",
        lowerTrigram: "兑"
    },
    // 第55卦 - 雷火丰
    {
        number: 55,
        name: "Abundance",
        chineseName: "丰",
        description: "雷电皆至，丰。君子以折狱致刑。丰盛与繁荣。",
        lines: ["━ ━", "━━━", "━ ━", "━━━", "━ ━", "━━━"],
        unicode: "䷶",
        interpretation: "亨。王假之，勿忧，宜日中。盛极必衰，要居安思危。",
        advice: "在繁荣时期要保持清醒，居安思危。",
        upperTrigram: "震",
        lowerTrigram: "离"
    },
    // 第56卦 - 火山旅
    {
        number: 56,
        name: "The Wanderer",
        chineseName: "旅",
        description: "山上有火，旅。君子以明慎用刑而不留狱。旅行与漂泊。",
        lines: ["━━━", "━ ━", "━━━", "━━━", "━ ━", "━ ━"],
        unicode: "䷷",
        interpretation: "小亨，旅贞吉。旅途中要小心谨慎。",
        advice: "在变动中保持谨慎，适应环境的变化。",
        upperTrigram: "离",
        lowerTrigram: "艮"
    },
    // 第57卦 - 巽为风
    {
        number: 57,
        name: "The Gentle Wind",
        chineseName: "巽",
        description: "随风，巽。君子以申命行事。温和与顺从。",
        lines: ["━━━", "━━━", "━ ━", "━━━", "━━━", "━ ━"],
        unicode: "䷸",
        interpretation: "小亨，利有攸往，利见大人。温和而坚持，柔顺而有力。",
        advice: "保持温和的态度，坚持不懈地努力。",
        upperTrigram: "巽",
        lowerTrigram: "巽"
    },
    // 第58卦 - 兑为泽
    {
        number: 58,
        name: "The Joyous Lake",
        chineseName: "兑",
        description: "丽泽，兑。君子以朋友讲习。喜悦与交流。",
        lines: ["━━━", "━ ━", "━━━", "━━━", "━ ━", "━━━"],
        unicode: "䷹",
        interpretation: "亨，利贞。和悦交流，相互学习。",
        advice: "保持快乐的心情，与人友善交流。",
        upperTrigram: "兑",
        lowerTrigram: "兑"
    },
    // 第59卦 - 风水涣
    {
        number: 59,
        name: "Dispersion",
        chineseName: "涣",
        description: "风行水上，涣。先王以享于帝立庙。分散与疏通。",
        lines: ["━━━", "━━━", "━ ━", "━ ━", "━━━", "━ ━"],
        unicode: "䷺",
        interpretation: "亨。王假有庙，利涉大川，利贞。化解分散，重新聚合。",
        advice: "化解分歧，疏通关系，重新团结。",
        upperTrigram: "巽",
        lowerTrigram: "坎"
    },
    // 第60卦 - 水泽节
    {
        number: 60,
        name: "Limitation",
        chineseName: "节",
        description: "泽上有水，节。君子以制数度，议德行。节制与约束。",
        lines: ["━ ━", "━━━", "━ ━", "━━━", "━ ━", "━━━"],
        unicode: "䷻",
        interpretation: "亨。苦节不可贞。适度节制，不可过分。",
        advice: "凡事要有节制，过犹不及。",
        upperTrigram: "坎",
        lowerTrigram: "兑"
    },
    // 第61卦 - 风泽中孚
    {
        number: 61,
        name: "Inner Truth",
        chineseName: "中孚",
        description: "泽上有风，中孚。君子以议狱缓死。内心的诚信。",
        lines: ["━━━", "━━━", "━ ━", "━━━", "━ ━", "━━━"],
        unicode: "䷼",
        interpretation: "豚鱼吉，利涉大川，利贞。内心诚信，感化他人。",
        advice: "保持内心的诚信，以诚待人。",
        upperTrigram: "巽",
        lowerTrigram: "兑"
    },
    // 第62卦 - 雷山小过
    {
        number: 62,
        name: "Small Exceeding",
        chineseName: "小过",
        description: "山上有雷，小过。君子以行过乎恭，丧过乎哀，用过乎俭。小的过失。",
        lines: ["━ ━", "━━━", "━ ━", "━━━", "━ ━", "━ ━"],
        unicode: "䷽",
        interpretation: "亨，利贞，可小事，不可大事。小心处理，避免大错。",
        advice: "谨慎行事，从小事做起，避免重大错误。",
        upperTrigram: "震",
        lowerTrigram: "艮"
    },
    // 第63卦 - 水火既济
    {
        number: 63,
        name: "After Completion",
        chineseName: "既济",
        description: "水在火上，既济。君子以思患而豫防之。完成与成功。",
        lines: ["━ ━", "━━━", "━ ━", "━━━", "━ ━", "━━━"],
        unicode: "䷾",
        interpretation: "亨，小利贞，初吉终乱。成功后要居安思危。",
        advice: "成功后要保持警觉，防止功败垂成。",
        upperTrigram: "坎",
        lowerTrigram: "离"
    },
    // 第64卦 - 火水未济
    {
        number: 64,
        name: "Before Completion",
        chineseName: "未济",
        description: "火在水上，未济。君子以慎辨物居方。尚未完成。",
        lines: ["━━━", "━ ━", "━━━", "━ ━", "━━━", "━ ━"],
        unicode: "䷿",
        interpretation: "亨，小狐汔济，濡其尾，无攸利。接近成功，要持续努力。",
        advice: "坚持到底，不要在最后关头放松。",
        upperTrigram: "离",
        lowerTrigram: "坎"
    }
];