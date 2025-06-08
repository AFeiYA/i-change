export interface Hexagram {
  number: number;
  name: string;
  chineseName: string;
  description: string;
  lines: ('yin' | 'yang')[];
  unicode: string;
  interpretation: string;
  advice: string;
  trigrams: {
    upper: string;
    lower: string;
  };
  oppositeHexagram: string;
  reverseHexagram: string;
  nuclearHexagram: string;
  lineTexts: {
    line1: string;
    line2: string;
    line3: string;
    line4: string;
    line5: string;
    line6: string;
  };
}

// 将二进制码转换为线条数组的辅助函数
function convertBinaryToLines(binary: string): ('yin' | 'yang')[] {
  return binary.split('').map(bit => bit === '1' ? 'yang' : 'yin');
}

// 中文名称到英文名称的映射
const englishNames: { [key: string]: string } = {
    "乾": "The Creative",
    "坤": "The Receptive",
    "屯": "Difficulty at the Beginning",
    "蒙": "Youthful Folly",
    "需": "Waiting",
    "讼": "Conflict",
    "师": "The Army",
    "比": "Holding Together",
    "小畜": "Small Taming Power",
    "履": "Treading",
    "泰": "Peace",
    "否": "Standstill",
    "同人": "Fellowship",
    "大有": "Great Possession",
    "谦": "Modesty",
    "豫": "Enthusiasm",
    "随": "Following",
    "蛊": "Work on the Decayed",
    "临": "Approach",
    "观": "Contemplation",
    "噬嗑": "Biting Through",
    "贲": "Grace",
    "剥": "Splitting Apart",
    "复": "Return",
    "无妄": "Innocence",
    "大畜": "Great Taming Power",
    "颐": "Nourishment",
    "大过": "Great Exceeding",
    "坎": "The Abysmal Water",
    "离": "The Clinging Fire",
    "咸": "Influence",
    "恒": "Duration",
    "遁": "Retreat",
    "大壮": "Great Power",
    "晋": "Progress",
    "明夷": "Darkening of the Light",
    "家人": "The Family",
    "睽": "Opposition",
    "蹇": "Obstruction",
    "解": "Deliverance",
    "损": "Decrease",
    "益": "Increase",
    "夬": "Breakthrough",
    "姤": "Coming to Meet",
    "萃": "Gathering Together",
    "升": "Pushing Upward",
    "困": "Oppression",
    "井": "The Well",
    "革": "Revolution",
    "鼎": "The Cauldron",
    "震": "The Arousing Thunder",
    "艮": "Keeping Still Mountain",
    "渐": "Development",
    "归妹": "The Marrying Maiden",
    "丰": "Abundance",
    "旅": "The Wanderer",
    "巽": "The Gentle Wind",
    "兑": "The Joyous Lake",
    "涣": "Dispersion",
    "节": "Limitation",
    "中孚": "Inner Truth",
    "小过": "Small Exceeding",
    "既济": "After Completion",
    "未济": "Before Completion",
};

export const hexagrams: Hexagram[] = [
  {
    number: 1,
    name: 'The Creative',
    chineseName: '乾',
    description: '元，亨，利，贞。',
    lines: convertBinaryToLines('111111'),
    unicode: '䷀',
    interpretation: '纯阳之象，天行健，象征刚健进取的力量，代表创始、领导、权威',
    advice: '建立威信，积极进取，发挥领导才能，以德服人',
    trigrams: {
      upper: '乾',
      lower: '乾'
    },
    oppositeHexagram: '坤',
    reverseHexagram: '乾',
    nuclearHexagram: '乾',
    lineTexts: {
      line1: '初九：潜龙，勿用。',
      line2: '九二：见龙在田，利见大人。',
      line3: '九三：君子终日乾乾，夕惕若，厉无咎。',
      line4: '九四：或跃在渊，无咎。',
      line5: '九五：飞龙在天，利见大人。',
      line6: '上九：亢龙有悔。'
    }
  },
  {
    number: 2,
    name: 'The Receptive',
    chineseName: '坤',
    description: '元，亨，利牝马之贞。',
    lines: convertBinaryToLines('000000'),
    unicode: '䷁',
    interpretation: '纯阴之象，地势坤，象征包容承载的力量，代表顺从、养育、厚德',
    advice: '厚德载物，包容宽恕，以柔克刚，顺应时势',
    trigrams: {
      upper: '坤',
      lower: '坤'
    },
    oppositeHexagram: '乾',
    reverseHexagram: '坤',
    nuclearHexagram: '坤',
    lineTexts: {
      line1: '初六：履霜，坚冰至。',
      line2: '六二：直，方，大，不习无不利。',
      line3: '六三：含章可贞。或从王事，无成有终。',
      line4: '六四：括囊；无咎，无誉。',
      line5: '六五：黄裳，元吉。',
      line6: '上六：龙战于野，其血玄黄。'
    }
  },
  {
    number: 3,
    name: 'Difficulty at the Beginning',
    chineseName: '屯',
    description: '元，亨，利，贞，勿用，有攸往，利建侯。',
    lines: convertBinaryToLines('100010'),
    unicode: '䷂',
    interpretation: '雷水相济，屯积待发，象征创业初期的困难与机遇并存',
    advice: '艰难创业，寻找贵人，积累实力，不可急躁',
    trigrams: {
      upper: '坎',
      lower: '震'
    },
    oppositeHexagram: '鼎',
    reverseHexagram: '蒙',
    nuclearHexagram: '剥',
    lineTexts: {
      line1: '初九：磐桓；利居贞，利建侯。',
      line2: '六二：屯如邅如，乘马班如。匪寇婚媾，女子贞不字，十年乃字。',
      line3: '六三：即鹿无虞，惟入于林中，君子几不如舍，往吝。',
      line4: '六四：乘马班如，求婚媾，往吉，无不利。',
      line5: '九五：屯其膏，小贞吉，大贞凶。',
      line6: '上六：乘马班如，泣血涟如。'
    }
  },
  {
    number: 4,
    name: 'Youthful Folly',
    chineseName: '蒙',
    description: '亨。匪我求童蒙，童蒙求我。',
    lines: convertBinaryToLines('010001'),
    unicode: '䷃',
    interpretation: '山下有水，蒙昧无知，象征教育启蒙和知识的重要性',
    advice: '虚心求教，诚心请益，启发智慧，循循善诱',
    trigrams: {
      upper: '艮',
      lower: '坎'
    },
    oppositeHexagram: '革',
    reverseHexagram: '屯',
    nuclearHexagram: '复',
    lineTexts: {
      line1: '初六：发蒙，利用刑人，用说桎梏，以往吝。',
      line2: '九二：包蒙吉；纳妇吉；子克家。',
      line3: '六三：勿用娶女；见金夫，不有躬，无攸利。',
      line4: '六四：困蒙，吝。',
      line5: '六五：童蒙，吉。',
      line6: '上九：击蒙；不利为寇，利御寇。'
    }
  },
  {
    number: 5,
    name: 'Waiting',
    chineseName: '需',
    description: '有孚，利涉大川，利贞。',
    lines: convertBinaryToLines('111010'),
    unicode: '䷄',
    interpretation: '云上于天，需要等待，象征耐心等待时机成熟',
    advice: '耐心等待，充实自己，时机未到勿强求',
    trigrams: {
      upper: '坎',
      lower: '乾'
    },
    oppositeHexagram: '晋',
    reverseHexagram: '讼',
    nuclearHexagram: '睽',
    lineTexts: {
      line1: '初九：需于郊。利用恒，无咎。',
      line2: '九二：需于沙。小有言，终吉。',
      line3: '九三：需于泥，致寇至。',
      line4: '六四：需于血，出自穴。',
      line5: '九五：需于酒食，贞吉。',
      line6: '上六：入于穴，有不速之客三人来，敬之终吉。'
    }
  },
  {
    number: 6,
    name: 'Conflict',
    chineseName: '讼',
    description: '有孚，窒惕，中吉，终凶。利见大人，不利涉大川。',
    lines: convertBinaryToLines('010111'),
    unicode: '䷅',
    interpretation: '天水相背，争讼不休，象征冲突和是非纷争',
    advice: '避免争执，化解纷争，以和为贵，寻求调解',
    trigrams: {
      upper: '乾',
      lower: '坎'
    },
    oppositeHexagram: '明夷',
    reverseHexagram: '需',
    nuclearHexagram: '家人',
    lineTexts: {
      line1: '初六：不永所事，小有言，终吉。',
      line2: '九二：不克讼，归而逋，其邑人三百户，无眚。',
      line3: '六三：食旧德，贞厉，终吉，或从王事，无成。',
      line4: '九四：不克讼，复即命，渝安贞，吉。',
      line5: '九五：讼元吉。',
      line6: '上九：或锡之鞶带，终朝三褫之。'
    }
  },
  {
    number: 7,
    name: 'The Army',
    chineseName: '师',
    description: '贞丈人吉，无咎。',
    lines: convertBinaryToLines('010000'),
    unicode: '䷆',
    interpretation: '地中有水，师，君子以容民畜众，象征军队与领导统御的智慧',
    advice: '建立威信，严明纪律，以德服众，公正治理',
    trigrams: {
      upper: '坤',
      lower: '坎'
    },
    oppositeHexagram: '同人',
    reverseHexagram: '比',
    nuclearHexagram: '复',
    lineTexts: {
      line1: '初六：师出以律，否臧凶。',
      line2: '九二：在师中，吉无咎，王三锡命。',
      line3: '六三：师或舆尸，凶。',
      line4: '六四：师左次，无咎。',
      line5: '六五：田有禽，利执言，无咎。长子帅师，弟子舆尸，贞凶。',
      line6: '上六：大君有命，开国承家，小人勿用。'
    }
  },
  {
    number: 8,
    name: 'Holding Together',
    chineseName: '比',
    description: '吉，原筮元永贞，无咎。不宁方来，后夫凶。',
    lines: convertBinaryToLines('000010'),
    unicode: '䷇',
    interpretation: '水在地上，亲密比邻，象征团结合作和亲密关系',
    advice: '亲近贤人，团结合作，以诚待人，互助互利',
    trigrams: {
      upper: '坎',
      lower: '坤'
    },
    oppositeHexagram: '大有',
    reverseHexagram: '师',
    nuclearHexagram: '剥',
    lineTexts: {
      line1: '初六：有孚，比之，无咎。有孚盈缶，终来有他，吉。',
      line2: '六二：比之自内，贞吉。',
      line3: '六三：比之匪人。',
      line4: '六四：外比之，贞吉。',
      line5: '九五：显比，王用三驱，失前禽。邑人不诫，吉。',
      line6: '上六：比之无首，凶。'
    }
  },
  {
    number: 9,
    name: 'Small Taming Power',
    chineseName: '小畜',
    description: '亨，密云不雨，自我西郊。',
    lines: convertBinaryToLines('111011'),
    unicode: '䷈',
    interpretation: '风行天上，小有储蓄，象征积少成多的力量',
    advice: '积少成多，勤俭持家，培养实力，蓄势待发',
    trigrams: {
      upper: '巽',
      lower: '乾'
    },
    oppositeHexagram: '豫',
    reverseHexagram: '履',
    nuclearHexagram: '睽',
    lineTexts: {
      line1: '初九：复自道，何其咎，吉。',
      line2: '九二：牵复，吉。',
      line3: '九三：舆说辐，夫妻反目。',
      line4: '六四：有孚，血去惕出，无咎。',
      line5: '九五：有孚挛如，富以其邻。',
      line6: '上九：既雨既处，尚德载，妇贞厉。月几望，君子征凶。'
    }
  },
  {
    number: 10,
    name: 'Treading',
    chineseName: '履',
    description: '履虎尾，不咥人，亨。',
    lines: convertBinaryToLines('110111'),
    unicode: '䷉',
    interpretation: '天下有泽，履虎尾，象征谨慎行事和礼制规范',
    advice: '谨言慎行，遵守礼制，步步为营，化险为夷',
    trigrams: {
      upper: '乾',
      lower: '兑'
    },
    oppositeHexagram: '谦',
    reverseHexagram: '小畜',
    nuclearHexagram: '家人',
    lineTexts: {
      line1: '初九：素履，往无咎。',
      line2: '九二：履道坦坦，幽人贞吉。',
      line3: '六三：眇能视，跛能履，履虎尾，咥人，凶。武人为于大君。',
      line4: '九四：履虎尾，愬愬，终吉。',
      line5: '九五：夬履，贞厉。',
      line6: '上九：视履考祥，其旋元吉。'
    }
  },
  {
    number: 11,
    name: 'Peace',
    chineseName: '泰',
    description: '小往大来，吉亨。',
    lines: convertBinaryToLines('111000'),
    unicode: '䷊',
    interpretation: '天地交泰，阴阳调和，象征和谐通达的盛世',
    advice: '把握机遇，发挥才能，协调关系，创造和谐',
    trigrams: {
      upper: '坤',
      lower: '乾'
    },
    oppositeHexagram: '否',
    reverseHexagram: '否',
    nuclearHexagram: '归妹',
    lineTexts: {
      line1: '初九：拔茅茹，以其汇，征吉。',
      line2: '九二：包荒，用冯河，不遐遗，朋亡，得尚于中行。',
      line3: '九三：无平不陂，无往不复，艰贞无咎。勿恤其孚，于食有福。',
      line4: '六四：翩翩不富，以其邻，不戒以孚。',
      line5: '六五：帝乙归妹，以祉元吉。',
      line6: '上六：城复于隍，勿用师。自邑告命，贞吝。'
    }
  },
  {
    number: 12,
    name: 'Standstill',
    chineseName: '否',
    description: '否之匪人，不利君子贞，大往小来。',
    lines: convertBinaryToLines('000111'),
    unicode: '䷋',
    interpretation: '天地不交，闭塞不通，象征困顿和停滞状态',
    advice: '韬光养晦，等待时机，保存实力，谨慎行事',
    trigrams: {
      upper: '乾',
      lower: '坤'
    },
    oppositeHexagram: '泰',
    reverseHexagram: '泰',
    nuclearHexagram: '渐',
    lineTexts: {
      line1: '初六：拔茅茹，以其汇，贞吉亨。',
      line2: '六二：包承。小人吉，大人否亨。',
      line3: '六三：包羞。',
      line4: '九四：有命无咎，畴离祉。',
      line5: '九五：休否，大人吉。其亡其亡，系于苞桑。',
      line6: '上九：倾否，先否后喜。'
    }
  },
  {
    number: 13,
    name: 'Fellowship',
    chineseName: '同人',
    description: '同人于野，亨，利涉大川，利君子贞。',
    lines: convertBinaryToLines('101111'),
    unicode: '䷌',
    interpretation: '天与火同，同心协力，象征志同道合的团结',
    advice: '志同道合，团结协作，开诚布公，互信互助',
    trigrams: {
      upper: '乾',
      lower: '离'
    },
    oppositeHexagram: '师',
    reverseHexagram: '大有',
    nuclearHexagram: '姤',
    lineTexts: {
      line1: '初九：同人于门，无咎。',
      line2: '六二：同人于宗，吝。',
      line3: '九三：伏戎于莽，升其高陵，三岁不兴。',
      line4: '九四：乘其墉，弗克攻，吉。',
      line5: '九五：同人，先号啕而后笑。大师克相遇。',
      line6: '上九：同人于郊，无悔。'
    }
  },
  {
    number: 14,
    name: 'Great Possession',
    chineseName: '大有',
    description: '元亨。',
    lines: convertBinaryToLines('111101'),
    unicode: '䷍',
    interpretation: '火在天上，大有收获，象征丰收和成功',
    advice: '感恩知足，善用资源，发挥优势，回馈社会',
    trigrams: {
      upper: '离',
      lower: '乾'
    },
    oppositeHexagram: '比',
    reverseHexagram: '同人',
    nuclearHexagram: '夬',
    lineTexts: {
      line1: '初九：无交害，匪咎，艰则无咎。',
      line2: '九二：大车以载，有攸往，无咎。',
      line3: '九三：公用亨于天子，小人弗克。',
      line4: '九四：匪其彭，无咎。',
      line5: '六五：厥孚交如，威如；吉。',
      line6: '上九：自天佑之，吉无不利。'
    }
  },
  {
    number: 15,
    name: 'Modesty',
    chineseName: '谦',
    description: '亨，君子有终。',
    lines: convertBinaryToLines('001000'),
    unicode: '䷎',
    interpretation: '地中有山，谦逊自持，象征谦虚和自我约束',
    advice: '谦虚谨慎，不骄不躁，虚心学习，自我约束',
    trigrams: {
      upper: '坤',
      lower: '艮'
    },
    oppositeHexagram: '履',
    reverseHexagram: '豫',
    nuclearHexagram: '解',
    lineTexts: {
      line1: '初六：谦谦君子，用涉大川，吉。',
      line2: '六二：鸣谦，贞吉。',
      line3: '九三：劳谦，君子有终，吉。',
      line4: '六四：无不利，撝谦。',
      line5: '六五：不富，以其邻，利用侵伐，无不利。',
      line6: '上六：鸣谦，利用行师，征邑国。'
    }
  },
  {
    number: 16,
    name: 'Enthusiasm',
    chineseName: '豫',
    description: '豫，利建侯行师。',
    lines: convertBinaryToLines('000100'),
    unicode: '䷏',
    interpretation: '雷出地奋，豫悦和乐，象征快乐和顺应天时',
    advice: '顺应天时，乐观积极，把握机遇，享受过程',
    trigrams: {
      upper: '震',
      lower: '坤'
    },
    oppositeHexagram: '小畜',
    reverseHexagram: '谦',
    nuclearHexagram: '蹇',
    lineTexts: {
      line1: '初六：鸣豫，凶。',
      line2: '六二：介于石，不终日，贞吉。',
      line3: '六三：盱豫，悔。迟有悔。',
      line4: '九四：由豫，大有得。勿疑。朋盍簪。',
      line5: '六五：贞疾，恒不死。',
      line6: '上六：冥豫，成有渝，无咎。'
    }
  },
  {
    number: 17,
    name: 'Following',
    chineseName: '随',
    description: '随，元亨利贞，无咎。',
    lines: convertBinaryToLines('100110'),
    unicode: '䷐',
    interpretation: '泽中有雷，随顺时势，象征适应变化和跟随潮流',
    advice: '顺应潮流，灵活应变，跟随形势，适时调整',
    trigrams: {
      upper: '兑',
      lower: '震'
    },
    oppositeHexagram: '蛊',
    reverseHexagram: '蛊',
    nuclearHexagram: '渐',
    lineTexts: {
      line1: '初九：官有渝，贞吉。出门交有功。',
      line2: '六二：系小子，失丈夫。',
      line3: '六三：系丈夫，失小子。随有求得，利居贞。',
      line4: '九四：随有获，贞凶。有孚在道，以明，何咎。',
      line5: '九五：孚于嘉，吉。',
      line6: '上六：拘系之，乃从维之。王用亨于西山。'
    }
  },
  {
    number: 18,
    name: 'Work on the Decayed',
    chineseName: '蛊',
    description: '蛊，元亨，利涉大川，先甲三日，后甲三日。',
    lines: convertBinaryToLines('011001'),
    unicode: '䷑',
    interpretation: '山下有风，蛊惑堕落，象征腐败需要整顿',
    advice: '整顿腐败，革新改革，正本清源，重建秩序',
    trigrams: {
      upper: '艮',
      lower: '巽'
    },
    oppositeHexagram: '随',
    reverseHexagram: '随',
    nuclearHexagram: '归妹',
    lineTexts: {
      line1: '初六：干父之蛊，有子，考无咎，厉终吉。',
      line2: '九二：干母之蛊，不可贞。',
      line3: '九三：干父之蛊，小有悔，无大咎。',
      line4: '六四：裕父之蛊，往见吝。',
      line5: '六五：干父之蛊，用誉。',
      line6: '上九：不事王侯，高尚其事。'
    }
  },
  {
    number: 19,
    name: 'Approach',
    chineseName: '临',
    description: '临，元亨利贞，至于八月有凶。',
    lines: convertBinaryToLines('110000'),
    unicode: '䷒',
    interpretation: '地上有泽，临近观察，象征监督和亲临指导',
    advice: '亲临现场，了解实情，关怀下属，以身作则',
    trigrams: {
      upper: '坤',
      lower: '兑'
    },
    oppositeHexagram: '遁',
    reverseHexagram: '观',
    nuclearHexagram: '复',
    lineTexts: {
      line1: '初九：咸临，贞吉。',
      line2: '九二：咸临，吉无不利。',
      line3: '六三：甘临，无攸利。既忧之，无咎。',
      line4: '六四：至临，无咎。',
      line5: '六五：知临，大君之宜，吉。',
      line6: '上六：敦临，吉无咎。'
    }
  },
  {
    number: 20,
    name: 'Contemplation',
    chineseName: '观',
    description: '观，盥而不荐，有孚颙若。',
    lines: convertBinaryToLines('000011'),
    unicode: '䷓',
    interpretation: '风行地上，观察学习，象征观摩和审视现状',
    advice: '观察学习，审视现状，汲取经验，明辨是非',
    trigrams: {
      upper: '巽',
      lower: '坤'
    },
    oppositeHexagram: '大壮',
    reverseHexagram: '临',
    nuclearHexagram: '剥',
    lineTexts: {
      line1: '初六：童观，小人无咎，君子吝。',
      line2: '六二：窥观，利女贞。',
      line3: '六三：观我生，进退。',
      line4: '六四：观国之光，利用宾于王。',
      line5: '九五：观我生，君子无咎。',
      line6: '上九：观其生，君子无咎。'
    }
  },
  {
    number: 21,
    name: 'Biting Through',
    chineseName: '噬嗑',
    description: '噬嗑，亨，利用狱。',
    lines: convertBinaryToLines('100101'),
    unicode: '䷔',
    interpretation: '火雷噬嗑，明断刑罚，象征正义和法律制裁',
    advice: '维护正义，明断是非，执法公正，惩恶扬善',
    trigrams: {
      upper: '离',
      lower: '震'
    },
    oppositeHexagram: '井',
    reverseHexagram: '贲',
    nuclearHexagram: '蹇',
    lineTexts: {
      line1: '初九：屦校灭趾，无咎。',
      line2: '六二：噬肤灭鼻，无咎。',
      line3: '六三：噬腊肉，遇毒；小吝，无咎。',
      line4: '九四：噬干胏，得金矢，利艰贞，吉。',
      line5: '六五：噬干肉，得黄金，贞厉，无咎。',
      line6: '上九：何校灭耳，凶。'
    }
  },
  {
    number: 22,
    name: 'Grace',
    chineseName: '贲',
    description: '贲，亨，小利有攸往。',
    lines: convertBinaryToLines('101001'),
    unicode: '䷕',
    interpretation: '山下有火，文饰美化，象征文化修养和装饰',
    advice: '重视文化，提升修养，美化环境，内外兼修',
    trigrams: {
      upper: '艮',
      lower: '离'
    },
    oppositeHexagram: '困',
    reverseHexagram: '噬嗑',
    nuclearHexagram: '解',
    lineTexts: {
      line1: '初九：贲其趾，舍车而徒。',
      line2: '六二：贲其须。',
      line3: '九三：贲如濡如，永贞吉。',
      line4: '六四：贲如皤如，白马翰如，匪寇婚媾。',
      line5: '六五：贲于丘园，束帛戋戋，吝，终吉。',
      line6: '上九：白贲，无咎。'
    }
  },
  {
    number: 23,
    name: 'Splitting Apart',
    chineseName: '剥',
    description: '剥，不利有攸往。',
    lines: convertBinaryToLines('000001'),
    unicode: '䷖',
    interpretation: '山附于地，剥落衰败，象征衰落和崩坏',
    advice: '预防衰败，加强根基，居安思危，防患未然',
    trigrams: {
      upper: '艮',
      lower: '坤'
    },
    oppositeHexagram: '夬',
    reverseHexagram: '复',
    nuclearHexagram: '坤',
    lineTexts: {
      line1: '初六：剥床以足，蔑贞凶。',
      line2: '六二：剥床以辨，蔑贞凶。',
      line3: '六三：剥之，无咎。',
      line4: '六四：剥床以肤，凶。',
      line5: '六五：贯鱼，以宫人宠，无不利。',
      line6: '上九：硕果不食，君子得舆，小人剥庐。'
    }
  },
  {
    number: 24,
    name: 'Return',
    chineseName: '复',
    description: '复，亨，出入无疾，朋来无咎。',
    lines: convertBinaryToLines('100000'),
    unicode: '䷗',
    interpretation: '雷在地中，复归正道，象征恢复和重新开始',
    advice: '重新开始，恢复元气，回归正道，从头再来',
    trigrams: {
      upper: '坤',
      lower: '震'
    },
    oppositeHexagram: '姤',
    reverseHexagram: '剥',
    nuclearHexagram: '坤',
    lineTexts: {
      line1: '初九：不远复，无祗悔，元吉。',
      line2: '六二：休复，吉。',
      line3: '六三：频复，厉无咎。',
      line4: '六四：中行独复。',
      line5: '六五：敦复，无悔。',
      line6: '上六：迷复，凶，有灾眚。用行师，终有大败，以其国君，凶；至于十年，不克征。'
    }
  },
  {
    number: 25,
    name: 'Innocence',
    chineseName: '无妄',
    description: '无妄，元亨利贞，其匪正有眚，不利有攸往。',
    lines: convertBinaryToLines('100111'),
    unicode: '䷘',
    interpretation: '天下雷行，无妄天真，象征纯真和自然',
    advice: '保持天真，顺应自然，不刻意造作，纯朴无邪',
    trigrams: {
      upper: '乾',
      lower: '震'
    },
    oppositeHexagram: '升',
    reverseHexagram: '大畜',
    nuclearHexagram: '渐',
    lineTexts: {
      line1: '初九：无妄，往吉。',
      line2: '六二：不耕获，不菑畲，则利有攸往。',
      line3: '六三：无妄之灾，或系之牛，行人之得，邑人之灾。',
      line4: '九四：可贞，无咎。',
      line5: '九五：无妄之疾，勿药有喜。',
      line6: '上九：无妄，行有眚，无攸利。'
    }
  },
  {
    number: 26,
    name: 'Great Taming Power',
    chineseName: '大畜',
    description: '大畜，利贞，不家食吉，利涉大川。',
    lines: convertBinaryToLines('111001'),
    unicode: '䷙',
    interpretation: '山在天下，大有畜积，象征大力蓄养和积累',
    advice: '积累实力，储备人才，培养根基，厚积薄发',
    trigrams: {
      upper: '艮',
      lower: '乾'
    },
    oppositeHexagram: '萃',
    reverseHexagram: '无妄',
    nuclearHexagram: '归妹',
    lineTexts: {
      line1: '初九：有厉利已。',
      line2: '九二：舆说辐。',
      line3: '九三：良马逐，利艰贞。曰闲舆卫，利有攸往。',
      line4: '六四：童牛之牿，元吉。',
      line5: '六五：豮豕之牙，吉。',
      line6: '上九：何天之衢，亨。'
    }
  },
  {
    number: 27,
    name: 'Nourishment',
    chineseName: '颐',
    description: '颐，贞吉，观颐，自求口实。',
    lines: convertBinaryToLines('100001'),
    unicode: '䷚',
    interpretation: '山下有雷，颐养生命，象征养育和自我修养',
    advice: '注重养生，调养身心，合理饮食，颐养天年',
    trigrams: {
      upper: '艮',
      lower: '震'
    },
    oppositeHexagram: '大过',
    reverseHexagram: '颐',
    nuclearHexagram: '坤',
    lineTexts: {
      line1: '初九：舍尔灵龟，观我朵颐，凶。',
      line2: '六二：颠颐，拂经，于丘颐，征凶。',
      line3: '六三：拂颐，贞凶，十年勿用，无攸利。',
      line4: '六四：颠颐吉，虎视眈眈，其欲逐逐，无咎。',
      line5: '六五：拂经，居贞吉，不可涉大川。',
      line6: '上九：由颐，厉吉，利涉大川。'
    }
  },
  {
    number: 28,
    name: 'Great Exceeding',
    chineseName: '大过',
    description: '大过，栋挠，利有攸往，亨。',
    lines: convertBinaryToLines('011110'),
    unicode: '䷛',
    interpretation: '泽灭木，大过度，象征超越常规和极端状态',
    advice: '慎重处理，避免极端，权衡利弊，适可而止',
    trigrams: {
      upper: '兑',
      lower: '巽'
    },
    oppositeHexagram: '颐',
    reverseHexagram: '大过',
    nuclearHexagram: '乾',
    lineTexts: {
      line1: '初六：藉用白茅，无咎。',
      line2: '九二：枯杨生稊，老夫得其女妻，无不利。',
      line3: '九三：栋桡，凶。',
      line4: '九四：栋隆，吉；有它吝。',
      line5: '九五：枯杨生华，老妇得士夫，无咎无誉。',
      line6: '上六：过涉灭顶，凶，无咎。'
    }
  },
  {
    number: 29,
    name: 'The Abysmal Water',
    chineseName: '坎',
    description: '习坎，有孚，维心亨，行有尚。',
    lines: convertBinaryToLines('010010'),
    unicode: '䷜',
    interpretation: '水洊至，坎陷危险，象征困难险阻和挑战',
    advice: '勇面困难，化险为夷，坚持不懈，寻找出路',
    trigrams: {
      upper: '坎',
      lower: '坎'
    },
    oppositeHexagram: '离',
    reverseHexagram: '坎',
    nuclearHexagram: '颐',
    lineTexts: {
      line1: '初六：习坎，入于坎窞，凶。',
      line2: '九二：坎有险，求小得。',
      line3: '六三：来之坎坎，险且枕，入于坎窞，勿用。',
      line4: '六四：樽酒簋贰，用缶，纳约自牖，终无咎。',
      line5: '九五：坎不盈，祗既平，无咎。',
      line6: '上六：系用徽纆，寘于丛棘，三岁不得，凶。'
    }
  },
  {
    number: 30,
    name: 'The Clinging Fire',
    chineseName: '离',
    description: '离，利贞，亨，畜牝牛吉。',
    lines: convertBinaryToLines('101101'),
    unicode: '䷝',
    interpretation: '明两作，离附光明，象征光明智慧和依附',
    advice: '追求光明，依附正道，发挥智慧，照亮他人',
    trigrams: {
      upper: '离',
      lower: '离'
    },
    oppositeHexagram: '坎',
    reverseHexagram: '离',
    nuclearHexagram: '大过',
    lineTexts: {
      line1: '初九：履错然，敬之无咎。',
      line2: '六二：黄离，元吉。',
      line3: '九三：日昃之离，不鼓缶而歌，则大耋之嗟，凶。',
      line4: '九四：突如其来如，焚如，死如，弃如。',
      line5: '六五：出涕沱若，戚嗟若，吉。',
      line6: '上九：王用出征，有嘉折首，获匪其丑，无咎。'
    }
  },
  {
    number: 31,
    name: 'Influence',
    chineseName: '咸',
    description: '咸，亨，利贞，取女吉。',
    lines: convertBinaryToLines('001110'),
    unicode: '䷞',
    interpretation: '山上有泽，咸感相应，象征感应和相互吸引',
    advice: '真诚相待，心心相印，培养感情，和谐相处',
    trigrams: {
      upper: '兑',
      lower: '艮'
    },
    oppositeHexagram: '损',
    reverseHexagram: '恒',
    nuclearHexagram: '姤',
    lineTexts: {
      line1: '初六：咸其拇。',
      line2: '六二：咸其腓，凶，居吉。',
      line3: '九三：咸其股，执其随，往吝。',
      line4: '九四：贞吉悔亡，憧憧往来，朋从尔思。',
      line5: '九五：咸其脢，无悔。',
      line6: '上六：咸其辅，颊，舌。'
    }
  },
  {
    number: 32,
    name: 'Duration',
    chineseName: '恒',
    description: '恒，亨，无咎，利贞，利有攸往。',
    lines: convertBinaryToLines('011100'),
    unicode: '䷟',
    interpretation: '雷风恒，持久不变，象征恒心和持续',
    advice: '持之以恒，坚持不懈，专一不移，恒心毅力',
    trigrams: {
      upper: '震',
      lower: '巽'
    },
    oppositeHexagram: '益',
    reverseHexagram: '咸',
    nuclearHexagram: '夬',
    lineTexts: {
      line1: '初六：浚恒，贞凶，无攸利。',
      line2: '九二：悔亡。',
      line3: '九三：不恒其德，或承之羞，贞吝。',
      line4: '九四：田无禽。',
      line5: '六五：恒其德，贞，妇人吉，夫子凶。',
      line6: '上六：振恒，凶。'
    }
  },
  {
    number: 33,
    name: 'Retreat',
    chineseName: '遁',
    description: '遁，亨，小利贞。',
    lines: convertBinaryToLines('001111'),
    unicode: '䷠',
    interpretation: '天下有山，遁避隐退，象征退避和保存实力',
    advice: '明哲保身，适时退避，保存实力，待机而动',
    trigrams: {
      upper: '乾',
      lower: '艮'
    },
    oppositeHexagram: '临',
    reverseHexagram: '大壮',
    nuclearHexagram: '姤',
    lineTexts: {
      line1: '初六：遁尾，厉，勿用有攸往。',
      line2: '六二：执之用黄牛之革，莫之胜说。',
      line3: '九三：系遁，有疾厉，畜臣妾吉。',
      line4: '九四：好遁君子吉，小人否。',
      line5: '九五：嘉遁，贞吉。',
      line6: '上九：肥遁，无不利。'
    }
  },
  {
    number: 34,
    name: 'Great Power',
    chineseName: '大壮',
    description: '大壮，利贞。',
    lines: convertBinaryToLines('111100'),
    unicode: '䷡',
    interpretation: '雷在天上，大壮威猛，象征强大力量和威势',
    advice: '发挥实力，展现才能，但需谨慎，避免过刚',
    trigrams: {
      upper: '震',
      lower: '乾'
    },
    oppositeHexagram: '观',
    reverseHexagram: '遁',
    nuclearHexagram: '夬',
    lineTexts: {
      line1: '初九：壮于趾，征凶，有孚。',
      line2: '九二：贞吉。',
      line3: '九三：小人用壮，君子用罔，贞厉。羝羊触藩，羸其角。',
      line4: '九四：贞吉悔亡，藩决不羸，壮于大舆之輹。',
      line5: '六五：丧羊于易，无悔。',
      line6: '上六：羝羊触藩，不能退，不能遂，无攸利，艰则吉。'
    }
  },
  {
    number: 35,
    name: 'Progress',
    chineseName: '晋',
    description: '晋，康侯用锡马蕃庶，昼日三接。',
    lines: convertBinaryToLines('000101'),
    unicode: '䷢',
    interpretation: '火出地上，晋升发展，象征进步和光明前途',
    advice: '积极进取，追求发展，前程光明，勇往直前',
    trigrams: {
      upper: '离',
      lower: '坤'
    },
    oppositeHexagram: '需',
    reverseHexagram: '明夷',
    nuclearHexagram: '蹇',
    lineTexts: {
      line1: '初六：晋如，摧如，贞吉。罔孚，裕无咎。',
      line2: '六二：晋如，愁如，贞吉。受兹介福，于其王母。',
      line3: '六三：众允，悔亡。',
      line4: '九四：晋如硕鼠，贞厉。',
      line5: '六五：悔亡，失得勿恤，往吉无不利。',
      line6: '上九：晋其角，维用伐邑，厉吉无咎，贞吝。'
    }
  },
  {
    number: 36,
    name: 'Darkening of the Light',
    chineseName: '明夷',
    description: '明夷，利艰贞。',
    lines: convertBinaryToLines('101000'),
    unicode: '䷣',
    interpretation: '地中有火，明夷受伤，象征光明受损和逆境',
    advice: '韬光养晦，保护光明，在逆境中坚持，等待时机',
    trigrams: {
      upper: '坤',
      lower: '离'
    },
    oppositeHexagram: '讼',
    reverseHexagram: '晋',
    nuclearHexagram: '解',
    lineTexts: {
      line1: '初九：明夷于飞，垂其翼。君子于行，三日不食，有攸往，主人有言。',
      line2: '六二：明夷，夷于左股，用拯马壮，吉。',
      line3: '九三：明夷于南狩，得其大首，不可疾贞。',
      line4: '六四：入于左腹，获明夷之心，出于门庭。',
      line5: '六五：箕子之明夷，利贞。',
      line6: '上六：不明晦，初登于天，后入于地。'
    }
  },
  {
    number: 37,
    name: 'The Family',
    chineseName: '家人',
    description: '家人，利女贞。',
    lines: convertBinaryToLines('101011'),
    unicode: '䷤',
    interpretation: '风自火出，家人和睦，象征家庭和谐和教化',
    advice: '重视家庭，教化家人，建立和谐，以家为本',
    trigrams: {
      upper: '巽',
      lower: '离'
    },
    oppositeHexagram: '解',
    reverseHexagram: '睽',
    nuclearHexagram: '未济',
    lineTexts: {
      line1: '初九：闲有家，悔亡。',
      line2: '六二：无攸遂，在中馈，贞吉。',
      line3: '九三：家人嗃嗃，悔厉吉；妇子嘻嘻，终吝。',
      line4: '六四：富家，大吉。',
      line5: '九五：王假有家，勿恤吉。',
      line6: '上九：有孚威如，终吉。'
    }
  },
  {
    number: 38,
    name: 'Opposition',
    chineseName: '睽',
    description: '睽，小事吉。',
    lines: convertBinaryToLines('110101'),
    unicode: '䷥',
    interpretation: '上火下泽，睽违分离，象征背离和不和',
    advice: '化解矛盾，求同存异，包容理解，重修旧好',
    trigrams: {
      upper: '离',
      lower: '兑'
    },
    oppositeHexagram: '蹇',
    reverseHexagram: '家人',
    nuclearHexagram: '既济',
    lineTexts: {
      line1: '初九：悔亡，丧马勿逐，自复；见恶人无咎。',
      line2: '九二：遇主于巷，无咎。',
      line3: '六三：见舆曳，其牛掣，其人天且劓，无初有终。',
      line4: '九四：睽孤，遇元夫，交孚，厉无咎。',
      line5: '六五：悔亡，厥宗噬肤，往何咎。',
      line6: '上九：睽孤，见豕负涂，载鬼一车，先张之弧，后说之弧，匪寇婚媾，往遇雨则吉。'
    }
  },
  {
    number: 39,
    name: 'Obstruction',
    chineseName: '蹇',
    description: '蹇，利西南，不利东北，利见大人，贞吉。',
    lines: convertBinaryToLines('001010'),
    unicode: '䷦',
    interpretation: '水在山上，蹇难阻碍，象征困难和行进艰难',
    advice: '面对困难，坚持不懈，寻求帮助，克服障碍',
    trigrams: {
      upper: '坎',
      lower: '艮'
    },
    oppositeHexagram: '睽',
    reverseHexagram: '解',
    nuclearHexagram: '未济',
    lineTexts: {
      line1: '初六：往蹇，来誉。',
      line2: '六二：王臣蹇蹇，匪躬之故。',
      line3: '九三：往蹇来反。',
      line4: '六四：往蹇来连。',
      line5: '九五：大蹇朋来。',
      line6: '上六：往蹇来硕，吉；利见大人。'
    }
  },
  {
    number: 40,
    name: 'Deliverance',
    chineseName: '解',
    description: '解，利西南，无所往，其来复吉，有攸往，夙吉。',
    lines: convertBinaryToLines('010100'),
    unicode: '䷧',
    interpretation: '雷雨作，解除困难，象征解脱和困难的解除',
    advice: '解决问题，化解困难，雨过天晴，重获自由',
    trigrams: {
      upper: '震',
      lower: '坎'
    },
    oppositeHexagram: '家人',
    reverseHexagram: '蹇',
    nuclearHexagram: '既济',
    lineTexts: {
      line1: '初六：无咎。',
      line2: '九二：田获三狐，得黄矢，贞吉。',
      line3: '六三：负且乘，致寇至，贞吝。',
      line4: '九四：解而拇，朋至斯孚。',
      line5: '六五：君子维有解，吉；有孚于小人。',
      line6: '上六：公用射隼，于高墉之上，获之，无不利。'
    }
  },
  {
    number: 41,
    name: 'Decrease',
    chineseName: '损',
    description: '损，有孚，元吉，无咎，可贞，利有攸往，曷之用，二簋可用享。',
    lines: convertBinaryToLines('110001'),
    unicode: '䷨',
    interpretation: '山下有泽，损益得失，象征减少和牺牲',
    advice: '适当损失，成全大局，牺牲小利，获得大益',
    trigrams: {
      upper: '艮',
      lower: '兑'
    },
    oppositeHexagram: '咸',
    reverseHexagram: '益',
    nuclearHexagram: '复',
    lineTexts: {
      line1: '初九：已事遄往，无咎，酌损之。',
      line2: '九二：利贞，征凶，弗损益之。',
      line3: '六三：三人行，则损一人；一人行，则得其友。',
      line4: '六四：损其疾，使遄有喜，无咎。',
      line5: '六五：或益之，十朋之龟弗克违，元吉。',
      line6: '上九：弗损益之，无咎，贞吉，利有攸往，得臣无家。'
    }
  },
  {
    number: 42,
    name: 'Increase',
    chineseName: '益',
    description: '益，利有攸往，利涉大川。',
    lines: convertBinaryToLines('100011'),
    unicode: '䷩',
    interpretation: '风雷益，增益发展，象征增进和获得益处',
    advice: '增进发展，获得益处，互利共赢，共同进步',
    trigrams: {
      upper: '巽',
      lower: '震'
    },
    oppositeHexagram: '恒',
    reverseHexagram: '损',
    nuclearHexagram: '剥',
    lineTexts: {
      line1: '初九：利用为大作，元吉，无咎。',
      line2: '六二：或益之，十朋之龟弗克违，永贞吉。王用享于帝，吉。',
      line3: '六三：益之用凶事，无咎。有孚中行，告公用圭。',
      line4: '六四：中行，告公从。利用为依迁国。',
      line5: '九五：有孚惠心，勿问元吉。有孚惠我德。',
      line6: '上九：莫益之，或击之，立心勿恒，凶。'
    }
  },
  {
    number: 43,
    name: 'Breakthrough',
    chineseName: '夬',
    description: '夬，扬于王庭，孚号，有厉，告自邑，不利即戎，利有攸往。',
    lines: convertBinaryToLines('111110'),
    unicode: '䷪',
    interpretation: '泽上于天，夬决断，象征果断决定和突破',
    advice: '果断决定，当机立断，突破困境，勇于选择',
    trigrams: {
      upper: '兑',
      lower: '乾'
    },
    oppositeHexagram: '剥',
    reverseHexagram: '姤',
    nuclearHexagram: '乾',
    lineTexts: {
      line1: '初九：壮于前趾，往不胜为咎。',
      line2: '九二：惕号，莫夜有戎，勿恤。',
      line3: '九三：壮于頄，有凶。君子夬夬，独行遇雨，若濡有愠，无咎。',
      line4: '九四：臀无肤，其行次且。牵羊悔亡，闻言不信。',
      line5: '九五：苋陆夬夬，中行无咎。',
      line6: '上六：无号，终有凶。'
    }
  },
  {
    number: 44,
    name: 'Coming to Meet',
    chineseName: '姤',
    description: '姤，女壮，勿用取女。',
    lines: convertBinaryToLines('011111'),
    unicode: '䷫',
    interpretation: '天下有风，姤遇相遇，象征意外相遇和机会',
    advice: '把握机会，随遇而安，不强求，顺其自然',
    trigrams: {
      upper: '乾',
      lower: '巽'
    },
    oppositeHexagram: '复',
    reverseHexagram: '夬',
    nuclearHexagram: '乾',
    lineTexts: {
      line1: '初六：系于金柅，贞吉，有攸往，见凶，羸豕孚蹢躅。',
      line2: '九二：包有鱼，无咎，不利宾。',
      line3: '九三：臀无肤，其行次且，厉，无大咎。',
      line4: '九四：包无鱼，起凶。',
      line5: '九五：以杞包瓜，含章，有陨自天。',
      line6: '上九：姤其角，吝，无咎。'
    }
  },
  {
    number: 45,
    name: 'Gathering Together',
    chineseName: '萃',
    description: '萃，亨，王假有庙，利见大人，亨，利贞，用大牲吉，利有攸往。',
    lines: convertBinaryToLines('000110'),
    unicode: '䷬',
    interpretation: '泽上于地，萃聚集，象征聚集和团聚',
    advice: '团结众人，集中力量，群策群力，共同目标',
    trigrams: {
      upper: '兑',
      lower: '坤'
    },
    oppositeHexagram: '大畜',
    reverseHexagram: '升',
    nuclearHexagram: '渐',
    lineTexts: {
      line1: '初六：有孚不终，乃乱乃萃，若号一握为笑，勿恤，往无咎。',
      line2: '六二：引吉，无咎，孚乃利用禴。',
      line3: '六三：萃如，嗟如，无攸利，往无咎，小吝。',
      line4: '九四：大吉，无咎。',
      line5: '九五：萃有位，无咎。匪孚，元永贞，悔亡。',
      line6: '上六：赍咨涕洟，无咎。'
    }
  },
  {
    number: 46,
    name: 'Pushing Upward',
    chineseName: '升',
    description: '升，元亨，用见大人，勿恤，南征吉。',
    lines: convertBinaryToLines('011000'),
    unicode: '䷭',
    interpretation: '地中生木，升进上升，象征上升和成长',
    advice: '稳步上升，循序渐进，脚踏实地，持续发展',
    trigrams: {
      upper: '坤',
      lower: '巽'
    },
    oppositeHexagram: '无妄',
    reverseHexagram: '萃',
    nuclearHexagram: '归妹',
    lineTexts: {
      line1: '初六：允升，大吉。',
      line2: '九二：孚乃利用禴，无咎。',
      line3: '九三：升虚邑。',
      line4: '六四：王用亨于岐山，吉无咎。',
      line5: '六五：贞吉，升阶。',
      line6: '上六：冥升，利于不息之贞。'
    }
  },
  {
    number: 47,
    name: 'Oppression',
    chineseName: '困',
    description: '困，亨，贞，大人吉，无咎，有言不信。',
    lines: convertBinaryToLines('010110'),
    unicode: '䷮',
    interpretation: '泽无水，困顿窘迫，象征困境和资源匮乏',
    advice: '在困境中坚持，寻找出路，化困难为机遇',
    trigrams: {
      upper: '兑',
      lower: '坎'
    },
    oppositeHexagram: '贲',
    reverseHexagram: '井',
    nuclearHexagram: '家人',
    lineTexts: {
      line1: '初六：臀困于株木，入于幽谷，三岁不觌。',
      line2: '九二：困于酒食，朱绂方来，利用享祀，征凶，无咎。',
      line3: '六三：困于石，据于蒺蔾，入于其宫，不见其妻，凶。',
      line4: '九四：来徐徐，困于金车，吝，有终。',
      line5: '九五：劓刖，困于赤绂，乃徐有说，利用祭祀。',
      line6: '上六：困于葛藟，于臲卼，曰动悔。有悔，征吉。'
    }
  },
  {
    number: 48,
    name: 'The Well',
    chineseName: '井',
    description: '井，改邑不改井，无丧无得，往来井井，汔至，亦未繘井，羸其瓶，凶。',
    lines: convertBinaryToLines('011010'),
    unicode: '䷯',
    interpretation: '木上有水，井，君子以劳民劝相，象征井水不竭和德泽长流',
    advice: '泽及他人，源源不断，德泽长流，惠及众生',
    trigrams: {
      upper: '坎',
      lower: '巽'
    },
    oppositeHexagram: '噬嗑',
    reverseHexagram: '困',
    nuclearHexagram: '睽',
    lineTexts: {
      line1: '初六：井泥不食，旧井无禽。',
      line2: '九二：井谷射鲋，瓮敝漏。',
      line3: '九三：井渫不食，为我心恻，可用汲，王明，并受其福。',
      line4: '六四：井甃，无咎。',
      line5: '九五：井冽，寒泉食。',
      line6: '上六：井收勿幕，有孚元吉。'
    }
  },
  {
    number: 49,
    name: 'Revolution',
    chineseName: '革',
    description: '革，己日乃孚，元亨利贞，悔亡。',
    lines: convertBinaryToLines('101110'),
    unicode: '䷰',
    interpretation: '泽中有火，革新变化，象征变革和更新',
    advice: '革故鼎新，顺应变化，改革创新，与时俱进',
    trigrams: {
      upper: '兑',
      lower: '离'
    },
    oppositeHexagram: '蒙',
    reverseHexagram: '鼎',
    nuclearHexagram: '姤',
    lineTexts: {
      line1: '初九：巩用黄牛之革。',
      line2: '六二：己日乃革之，征吉，无咎。',
      line3: '九三：征凶，贞厉，革言三就，有孚。',
      line4: '九四：悔亡，有孚改命，吉。',
      line5: '九五：大人虎变，未占有孚。',
      line6: '上六：君子豹变，小人革面，征凶，居贞吉。'
    }
  },
  {
    number: 50,
    name: 'The Cauldron',
    chineseName: '鼎',
    description: '鼎，元吉，亨。',
    lines: convertBinaryToLines('011101'),
    unicode: '䷱',
    interpretation: '木上有火，鼎新立制，象征鼎盛和新的秩序',
    advice: '建立新制，稳定秩序，承担责任，开创新局',
    trigrams: {
      upper: '离',
      lower: '巽'
    },
    oppositeHexagram: '屯',
    reverseHexagram: '革',
    nuclearHexagram: '夬',
    lineTexts: {
      line1: '初六：鼎颠趾，利出否，得妾以其子，无咎。',
      line2: '九二：鼎有实，我仇有疾，不我能即，吉。',
      line3: '九三：鼎耳革，其行塞，雉膏不食，方雨亏悔，终吉。',
      line4: '九四：鼎折足，覆公餗，其形渥，凶。',
      line5: '六五：鼎黄耳，金铉，利贞。',
      line6: '上九：鼎玉铉，大吉，无不利。'
    }
  },
  {
    number: 51,
    name: 'The Arousing Thunder',
    chineseName: '震',
    description: '震，亨，震来虩虩，笑言哑哑，震惊百里，不丧匕鬯。',
    lines: convertBinaryToLines('100100'),
    unicode: '䷲',
    interpretation: '洊雷震，震动警醒，象征震撼和觉醒',
    advice: '警醒自己，震撼心灵，勇于面对，改过自新',
    trigrams: {
      upper: '震',
      lower: '震'
    },
    oppositeHexagram: '巽',
    reverseHexagram: '艮',
    nuclearHexagram: '蹇',
    lineTexts: {
      line1: '初九：震来虩虩，后笑言哑哑，吉。',
      line2: '六二：震来厉，亿丧贝，跻于九陵，勿逐，七日得。',
      line3: '六三：震苏苏，震行无眚。',
      line4: '九四：震遂泥。',
      line5: '六五：震往来厉，亿无丧，有事。',
      line6: '上六：震索索，视矍矍，征凶。震不于其躬，于其邻，无咎。婚媾有言。'
    }
  },
  {
    number: 52,
    name: 'Keeping Still Mountain',
    chineseName: '艮',
    description: '艮，艮其背，不获其身，行其庭，不见其人，无咎。',
    lines: convertBinaryToLines('001001'),
    unicode: '䷳',
    interpretation: '兼山艮，止于其所，象征停止和稳定',
    advice: '适可而止，知足常乐，稳定发展，不急不躁',
    trigrams: {
      upper: '艮',
      lower: '艮'
    },
    oppositeHexagram: '兑',
    reverseHexagram: '震',
    nuclearHexagram: '解',
    lineTexts: {
      line1: '初六：艮其趾，无咎，利永贞。',
      line2: '六二：艮其腓，不拯其随，其心不快。',
      line3: '九三：艮其限，列其夤，厉熏心。',
      line4: '六四：艮其身，无咎。',
      line5: '六五：艮其辅，言有序，悔亡。',
      line6: '上九：敦艮，吉。'
    }
  },
  {
    number: 53,
    name: 'Development',
    chineseName: '渐',
    description: '渐，女归吉，利贞。',
    lines: convertBinaryToLines('001011'),
    unicode: '䷴',
    interpretation: '山上有风，渐进发展，象征循序渐进和稳步发展',
    advice: '循序渐进，稳步发展，慢工出细活，欲速则不达',
    trigrams: {
      upper: '巽',
      lower: '艮'
    },
    oppositeHexagram: '归妹',
    reverseHexagram: '归妹',
    nuclearHexagram: '未济',
    lineTexts: {
      line1: '初六：鸿渐于干，小子厉，有言，无咎。',
      line2: '六二：鸿渐于磐，饮食衎衎，吉。',
      line3: '九三：鸿渐于陆，夫征不复，妇孕不育，凶；利御寇。',
      line4: '六四：鸿渐于木，或得其桷，无咎。',
      line5: '九五：鸿渐于陵，妇三岁不孕，终莫之胜，吉。',
      line6: '上九：鸿渐于逵，其羽可用为仪，吉。'
    }
  },
  {
    number: 54,
    name: 'The Marrying Maiden',
    chineseName: '归妹',
    description: '归妹，征凶，无攸利。',
    lines: convertBinaryToLines('110100'),
    unicode: '䷵',
    interpretation: '泽上有雷，归妹出嫁，象征归宿和结合',
    advice: '慎重选择，考虑后果，顺其自然，不强求完美',
    trigrams: {
      upper: '震',
      lower: '兑'
    },
    oppositeHexagram: '渐',
    reverseHexagram: '渐',
    nuclearHexagram: '既济',
    lineTexts: {
      line1: '初九：归妹以娣，跛能履，征吉。',
      line2: '九二：眇能视，利幽人之贞。',
      line3: '六三：归妹以须，反归以娣。',
      line4: '九四：归妹愆期，迟归有时。',
      line5: '六五：帝乙归妹，其君之袂，不如其娣之袂良，月几望，吉。',
      line6: '上六：女承筐无实，士刲羊无血，无攸利。'
    }
  },
  {
    number: 55,
    name: 'Abundance',
    chineseName: '丰',
    description: '丰，亨，王假之，勿忧，宜日中。',
    lines: convertBinaryToLines('101100'),
    unicode: '䷶',
    interpretation: '雷电皆至，丰盛繁荣，象征繁荣和充实',
    advice: '享受繁荣，感恩知足，居安思危，保持谦逊',
    trigrams: {
      upper: '震',
      lower: '离'
    },
    oppositeHexagram: '涣',
    reverseHexagram: '旅',
    nuclearHexagram: '大过',
    lineTexts: {
      line1: '初九：遇其配主，虽旬无咎，往有尚。',
      line2: '六二：丰其蔀，日中见斗，往得疑疾，有孚发若，吉。',
      line3: '九三：丰其沛，日中见沫，折其右肱，无咎。',
      line4: '九四：丰其蔀，日中见斗，遇其夷主，吉。',
      line5: '六五：来章，有庆誉，吉。',
      line6: '上六：丰其屋，蔀其家，窥其户，阒其无人，三岁不觌，凶。'
    }
  },
  {
    number: 56,
    name: 'The Wanderer',
    chineseName: '旅',
    description: '旅，小亨，旅贞吉。',
    lines: convertBinaryToLines('001101'),
    unicode: '䷷',
    interpretation: '山上有火，旅途行旅，象征漂泊和旅行',
    advice: '适应环境，灵活应变，保持谦逊，小心谨慎',
    trigrams: {
      upper: '离',
      lower: '艮'
    },
    oppositeHexagram: '节',
    reverseHexagram: '丰',
    nuclearHexagram: '大过',
    lineTexts: {
      line1: '初六：旅琐琐，斯其所取灾。',
      line2: '六二：旅即次，怀其资，得童仆贞。',
      line3: '九三：旅焚其次，丧其童仆，贞厉。',
      line4: '九四：旅于处，得其资斧，我心不快。',
      line5: '六五：射雉一矢亡，终以誉命。',
      line6: '上九：鸟焚其巢，旅人先笑后号啕。丧牛于易，凶。'
    }
  },
  {
    number: 57,
    name: 'The Gentle Wind',
    chineseName: '巽',
    description: '巽，小亨，利有攸往，利见大人。',
    lines: convertBinaryToLines('011011'),
    unicode: '䷸',
    interpretation: '随风巽，柔顺深入，象征渗透和顺从',
    advice: '深入了解，柔顺处事，谦逊有礼，循循善诱',
    trigrams: {
      upper: '巽',
      lower: '巽'
    },
    oppositeHexagram: '震',
    reverseHexagram: '兑',
    nuclearHexagram: '睽',
    lineTexts: {
      line1: '初六：进退，利武人之贞。',
      line2: '九二：巽在床下，用史巫纷若，吉无咎。',
      line3: '九三：频巽，吝。',
      line4: '六四：悔亡，田获三品。',
      line5: '九五：贞吉悔亡，无不利。无初有终，先庚三日，后庚三日，吉。',
      line6: '上九：巽在床下，丧其资斧，贞凶。'
    }
  },
  {
    number: 58,
    name: 'The Joyous Lake',
    chineseName: '兑',
    description: '兑，亨，利贞。',
    lines: convertBinaryToLines('110110'),
    unicode: '䷹',
    interpretation: '兑泽，喜悦和谐，象征快乐和言辞',
    advice: '保持喜悦，善于沟通，以诚待人，和谐相处',
    trigrams: {
      upper: '兑',
      lower: '兑'
    },
    oppositeHexagram: '艮',
    reverseHexagram: '巽',
    nuclearHexagram: '家人',
    lineTexts: {
      line1: '初九：和兑，吉。',
      line2: '九二：孚兑，吉，悔亡。',
      line3: '六三：来兑，凶。',
      line4: '九四：商兑，未宁，介疾有喜。',
      line5: '九五：孚于剥，有厉。',
      line6: '上六：引兑。'
    }
  },
  {
    number: 59,
    name: 'Dispersion',
    chineseName: '涣',
    description: '涣，亨，王假有庙，利涉大川，利贞。',
    lines: convertBinaryToLines('010011'),
    unicode: '䷺',
    interpretation: '风行水上，涣散分离，象征离散和化解',
    advice: '化解分歧，团结众人，包容理解，重建和谐',
    trigrams: {
      upper: '巽',
      lower: '坎'
    },
    oppositeHexagram: '丰',
    reverseHexagram: '节',
    nuclearHexagram: '颐',
    lineTexts: {
      line1: '初六：用拯马壮，吉。',
      line2: '九二：涣奔其机，悔亡。',
      line3: '六三：涣其躬，无悔。',
      line4: '六四：涣其群，元吉。涣有丘，匪夷所思。',
      line5: '九五：涣汗其大号，涣王居，无咎。',
      line6: '上九：涣其血，去逖出，无咎。'
    }
  },
  {
    number: 60,
    name: 'Limitation',
    chineseName: '节',
    description: '节，亨，苦节不可贞。',
    lines: convertBinaryToLines('110010'),
    unicode: '䷻',
    interpretation: '水上有泽，节制调节，象征节制和适度',
    advice: '适度节制，把握分寸，不过度不不及，中庸之道',
    trigrams: {
      upper: '坎',
      lower: '兑'
    },
    oppositeHexagram: '旅',
    reverseHexagram: '涣',
    nuclearHexagram: '颐',
    lineTexts: {
      line1: '初九：不出户庭，无咎。',
      line2: '九二：不出门庭，凶。',
      line3: '六三：不节若，则嗟若，无咎。',
      line4: '六四：安节，亨。',
      line5: '九五：甘节，吉；往有尚。',
      line6: '上六：苦节，贞凶，悔亡。'
    }
  },
  {
    number: 61,
    name: 'Inner Truth',
    chineseName: '中孚',
    description: '中孚，豚鱼吉，利涉大川，利贞。',
    lines: convertBinaryToLines('110011'),
    unicode: '䷼',
    interpretation: '泽上有风，中孚诚信，象征诚信和信用',
    advice: '诚信待人，说话算数，建立信用，以诚感人',
    trigrams: {
      upper: '巽',
      lower: '兑'
    },
    oppositeHexagram: '小过',
    reverseHexagram: '中孚',
    nuclearHexagram: '颐',
    lineTexts: {
      line1: '初九：虞吉，有它不燕。',
      line2: '九二：鸣鹤在阴，其子和之。我有好爵，吾与尔靡之。',
      line3: '六三：得敌，或鼓或罢，或泣或歌。',
      line4: '六四：月几望，马匹亡，无咎。',
      line5: '九五：有孚挛如，无咎。',
      line6: '上九：翰音登于天，贞凶。'
    }
  },
  {
    number: 62,
    name: 'Small Exceeding',
    chineseName: '小过',
    description: '小过，亨，利贞，可小事，不可大事，飞鸟遗之音，不宜上，宜下，大吉。',
    lines: convertBinaryToLines('001100'),
    unicode: '䷽',
    interpretation: '雷在山上，小过轻微，象征轻微过失和小心谨慎',
    advice: '小心谨慎，避免过失，谦逊有礼，细致入微',
    trigrams: {
      upper: '震',
      lower: '艮'
    },
    oppositeHexagram: '中孚',
    reverseHexagram: '小过',
    nuclearHexagram: '大过',
    lineTexts: {
      line1: '初六：飞鸟以凶。',
      line2: '六二：过其祖，遇其妣；不及其君，遇其臣；无咎。',
      line3: '九三：弗过防之，从或戕之，凶。',
      line4: '九四：无咎，弗过遇之。往厉必戒，勿用永贞。',
      line5: '六五：密云不雨，自我西郊，公弋取彼在穴。',
      line6: '上六：弗遇过之，飞鸟离之，凶，是谓灾眚。'
    }
  },
  {
    number: 63,
    name: 'After Completion',
    chineseName: '既济',
    description: '既济，亨小，利贞，初吉终乱。',
    lines: convertBinaryToLines('101010'),
    unicode: '䷾',
    interpretation: '水在火上，既济完成，象征成功完成和完美',
    advice: '功成身退，保持完美，居安思危，防止倒退',
    trigrams: {
      upper: '坎',
      lower: '离'
    },
    oppositeHexagram: '未济',
    reverseHexagram: '未济',
    nuclearHexagram: '未济',
    lineTexts: {
      line1: '初九：曳其轮，濡其尾，无咎。',
      line2: '六二：妇丧其茀，勿逐，七日得。',
      line3: '九三：高宗伐鬼方，三年克之，小人勿用。',
      line4: '六四：繻有衣袽，终日戒。',
      line5: '九五：东邻杀牛，不如西邻之禴祭，实受其福。',
      line6: '上六：濡其首，厉。'
    }
  },
  {
    number: 64,
    name: 'Before Completion',
    chineseName: '未济',
    description: '未济，亨，小狐汔济，濡其尾，无攸利。',
    lines: convertBinaryToLines('010101'),
    unicode: '䷿',
    interpretation: '火在水上，未济未完，象征未完成和继续努力',
    advice: '继续努力，坚持不懈，未完成的事业需要坚持',
    trigrams: {
      upper: '离',
      lower: '坎'
    },
    oppositeHexagram: '既济',
    reverseHexagram: '既济',
    nuclearHexagram: '既济',
    lineTexts: {
      line1: '初六：濡其尾，吝。',
      line2: '九二：曳其轮，贞吉。',
      line3: '六三：未济，征凶，利涉大川。',
      line4: '九四：贞吉，悔亡，震用伐鬼方，三年有赏于大国。',
      line5: '六五：贞吉，无悔，君子之光，有孚，吉。',
      line6: '上九：有孚于饮酒，无咎，濡其首，有孚失是。'
    }
  }
];