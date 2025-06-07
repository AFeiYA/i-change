// 错卦关系数据 - 每一爻都相反的关系
import { HexagramNode, HexagramEdge, RelationType } from '../utils/hexagramRelations';

// 64卦的节点数据
export const networkNodes: HexagramNode[] = [
    { id: 1, name: "The Creative", chineseName: "乾", symbol: "䷀", lines: [true, true, true, true, true, true], upperTrigram: "乾", lowerTrigram: "乾", group: 0 },
    { id: 2, name: "The Receptive", chineseName: "坤", symbol: "䷁", lines: [false, false, false, false, false, false], upperTrigram: "坤", lowerTrigram: "坤", group: 0 },
    { id: 3, name: "Difficulty at the Beginning", chineseName: "屯", symbol: "䷂", lines: [false, false, false, false, true, false], upperTrigram: "坎", lowerTrigram: "震", group: 0 },
    { id: 4, name: "Youthful Folly", chineseName: "蒙", symbol: "䷃", lines: [false, true, false, false, false, false], upperTrigram: "艮", lowerTrigram: "坎", group: 0 },
    { id: 5, name: "Waiting", chineseName: "需", symbol: "䷄", lines: [true, true, true, false, false, false], upperTrigram: "坎", lowerTrigram: "乾", group: 0 },
    { id: 6, name: "Conflict", chineseName: "讼", symbol: "䷅", lines: [false, false, false, true, true, true], upperTrigram: "乾", lowerTrigram: "坎", group: 0 },
    { id: 7, name: "The Army", chineseName: "师", symbol: "䷆", lines: [false, false, false, false, false, true], upperTrigram: "坤", lowerTrigram: "坎", group: 0 },
    { id: 8, name: "Holding Together", chineseName: "比", symbol: "䷇", lines: [true, false, false, false, false, false], upperTrigram: "坎", lowerTrigram: "坤", group: 1 },
    { id: 9, name: "Small Taming", chineseName: "小畜", symbol: "䷈", lines: [true, true, true, false, true, true], upperTrigram: "巽", lowerTrigram: "乾", group: 1 },
    { id: 10, name: "Treading", chineseName: "履", symbol: "䷉", lines: [true, true, false, true, true, true], upperTrigram: "乾", lowerTrigram: "兑", group: 1 },
    { id: 11, name: "Peace", chineseName: "泰", symbol: "䷊", lines: [false, false, false, true, true, true], upperTrigram: "坤", lowerTrigram: "乾", group: 1 },
    { id: 12, name: "Standstill", chineseName: "否", symbol: "䷋", lines: [true, true, true, false, false, false], upperTrigram: "乾", lowerTrigram: "坤", group: 1 },
    { id: 13, name: "Fellowship", chineseName: "同人", symbol: "䷌", lines: [true, false, true, true, true, true], upperTrigram: "乾", lowerTrigram: "离", group: 1 },
    { id: 14, name: "Great Possession", chineseName: "大有", symbol: "䷍", lines: [true, true, true, true, false, true], upperTrigram: "离", lowerTrigram: "乾", group: 1 },
    { id: 15, name: "Modesty", chineseName: "谦", symbol: "䷎", lines: [false, false, false, true, false, false], upperTrigram: "坤", lowerTrigram: "艮", group: 1 },
    { id: 16, name: "Enthusiasm", chineseName: "豫", symbol: "䷏", lines: [false, false, true, false, false, false], upperTrigram: "震", lowerTrigram: "坤", group: 2 },
    { id: 17, name: "Following", chineseName: "随", symbol: "䷐", lines: [true, false, false, false, false, true], upperTrigram: "兑", lowerTrigram: "震", group: 2 },
    { id: 18, name: "Work on the Decayed", chineseName: "蛊", symbol: "䷑", lines: [false, false, true, false, false, false], upperTrigram: "艮", lowerTrigram: "巽", group: 2 },
    { id: 19, name: "Approach", chineseName: "临", symbol: "䷒", lines: [true, true, false, false, false, false], upperTrigram: "坤", lowerTrigram: "兑", group: 2 },
    { id: 20, name: "Contemplation", chineseName: "观", symbol: "䷓", lines: [false, false, false, false, true, true], upperTrigram: "巽", lowerTrigram: "坤", group: 2 },
    { id: 21, name: "Biting Through", chineseName: "噬嗑", symbol: "䷔", lines: [true, false, false, true, false, true], upperTrigram: "离", lowerTrigram: "震", group: 2 },
    { id: 22, name: "Grace", chineseName: "贲", symbol: "䷕", lines: [true, false, true, false, false, true], upperTrigram: "艮", lowerTrigram: "离", group: 2 },
    { id: 23, name: "Splitting Apart", chineseName: "剥", symbol: "䷖", lines: [true, false, false, false, false, false], upperTrigram: "艮", lowerTrigram: "坤", group: 2 },
    { id: 24, name: "Return", chineseName: "复", symbol: "䷗", lines: [false, false, false, false, false, true], upperTrigram: "坤", lowerTrigram: "震", group: 3 },
    { id: 25, name: "Innocence", chineseName: "无妄", symbol: "䷘", lines: [true, false, false, true, true, true], upperTrigram: "乾", lowerTrigram: "震", group: 3 },
    { id: 26, name: "Great Taming", chineseName: "大畜", symbol: "䷙", lines: [true, true, true, false, false, true], upperTrigram: "艮", lowerTrigram: "乾", group: 3 },
    { id: 27, name: "Nourishment", chineseName: "颐", symbol: "䷚", lines: [true, false, false, false, false, true], upperTrigram: "艮", lowerTrigram: "震", group: 3 },
    { id: 28, name: "Great Excess", chineseName: "大过", symbol: "䷛", lines: [false, true, true, true, true, false], upperTrigram: "兑", lowerTrigram: "巽", group: 3 },
    { id: 29, name: "The Abysmal", chineseName: "坎", symbol: "䷜", lines: [false, true, false, false, true, false], upperTrigram: "坎", lowerTrigram: "坎", group: 3 },
    { id: 30, name: "The Clinging", chineseName: "离", symbol: "䷝", lines: [true, false, true, true, false, true], upperTrigram: "离", lowerTrigram: "离", group: 3 },
    { id: 31, name: "Influence", chineseName: "咸", symbol: "䷞", lines: [false, false, true, true, true, false], upperTrigram: "兑", lowerTrigram: "艮", group: 3 },
    { id: 32, name: "Duration", chineseName: "恒", symbol: "䷟", lines: [false, true, true, true, false, false], upperTrigram: "震", lowerTrigram: "巽", group: 4 },
    { id: 33, name: "Retreat", chineseName: "遁", symbol: "䷠", lines: [false, false, true, true, true, true], upperTrigram: "乾", lowerTrigram: "艮", group: 4 },
    { id: 34, name: "Great Power", chineseName: "大壮", symbol: "䷡", lines: [true, true, true, true, false, false], upperTrigram: "震", lowerTrigram: "乾", group: 4 },
    { id: 35, name: "Progress", chineseName: "晋", symbol: "䷢", lines: [false, false, false, true, false, true], upperTrigram: "离", lowerTrigram: "坤", group: 4 },
    { id: 36, name: "Darkening of the Light", chineseName: "明夷", symbol: "䷣", lines: [true, false, true, false, false, false], upperTrigram: "坤", lowerTrigram: "离", group: 4 },
    { id: 37, name: "Family", chineseName: "家人", symbol: "䷤", lines: [true, false, true, false, true, true], upperTrigram: "巽", lowerTrigram: "离", group: 4 },
    { id: 38, name: "Opposition", chineseName: "睽", symbol: "䷥", lines: [true, true, false, true, false, true], upperTrigram: "离", lowerTrigram: "兑", group: 4 },
    { id: 39, name: "Obstruction", chineseName: "蹇", symbol: "䷦", lines: [false, false, true, false, true, false], upperTrigram: "坎", lowerTrigram: "艮", group: 4 },
    { id: 40, name: "Deliverance", chineseName: "解", symbol: "䷧", lines: [false, true, false, true, false, false], upperTrigram: "震", lowerTrigram: "坎", group: 5 },
    { id: 41, name: "Decrease", chineseName: "损", symbol: "䷨", lines: [true, true, false, false, false, true], upperTrigram: "艮", lowerTrigram: "兑", group: 5 },
    { id: 42, name: "Increase", chineseName: "益", symbol: "䷩", lines: [true, false, false, false, true, true], upperTrigram: "巽", lowerTrigram: "震", group: 5 },
    { id: 43, name: "Breakthrough", chineseName: "夬", symbol: "䷪", lines: [true, true, true, true, true, false], upperTrigram: "兑", lowerTrigram: "乾", group: 5 },
    { id: 44, name: "Coming to Meet", chineseName: "姤", symbol: "䷫", lines: [false, true, true, true, true, true], upperTrigram: "乾", lowerTrigram: "巽", group: 5 },
    { id: 45, name: "Gathering Together", chineseName: "萃", symbol: "䷬", lines: [false, false, false, true, true, false], upperTrigram: "兑", lowerTrigram: "坤", group: 5 },
    { id: 46, name: "Pushing Upward", chineseName: "升", symbol: "䷭", lines: [false, true, true, false, false, false], upperTrigram: "坤", lowerTrigram: "巽", group: 5 },
    { id: 47, name: "Oppression", chineseName: "困", symbol: "䷮", lines: [false, true, false, true, true, false], upperTrigram: "兑", lowerTrigram: "坎", group: 5 },
    { id: 48, name: "The Well", chineseName: "井", symbol: "䷯", lines: [false, true, true, false, true, false], upperTrigram: "坎", lowerTrigram: "巽", group: 6 },
    { id: 49, name: "Revolution", chineseName: "革", symbol: "䷰", lines: [true, false, true, true, true, false], upperTrigram: "兑", lowerTrigram: "离", group: 6 },
    { id: 50, name: "The Cauldron", chineseName: "鼎", symbol: "䷱", lines: [false, true, true, true, false, true], upperTrigram: "离", lowerTrigram: "巽", group: 6 },
    { id: 51, name: "The Arousing", chineseName: "震", symbol: "䷲", lines: [false, false, true, false, false, true], upperTrigram: "震", lowerTrigram: "震", group: 6 },
    { id: 52, name: "Keeping Still", chineseName: "艮", symbol: "䷳", lines: [false, false, true, true, false, false], upperTrigram: "艮", lowerTrigram: "艮", group: 6 },
    { id: 53, name: "Development", chineseName: "渐", symbol: "䷴", lines: [false, false, true, false, true, true], upperTrigram: "巽", lowerTrigram: "艮", group: 6 },
    { id: 54, name: "The Marrying Maiden", chineseName: "归妹", symbol: "䷵", lines: [true, true, false, true, false, false], upperTrigram: "震", lowerTrigram: "兑", group: 6 },
    { id: 55, name: "Abundance", chineseName: "丰", symbol: "䷶", lines: [false, false, true, true, false, true], upperTrigram: "震", lowerTrigram: "离", group: 7 },
    { id: 56, name: "The Wanderer", chineseName: "旅", symbol: "䷷", lines: [true, false, true, false, false, true], upperTrigram: "离", lowerTrigram: "艮", group: 7 },
    { id: 57, name: "The Gentle", chineseName: "巽", symbol: "䷸", lines: [false, true, true, false, true, true], upperTrigram: "巽", lowerTrigram: "巽", group: 7 },
    { id: 58, name: "The Joyous", chineseName: "兑", symbol: "䷹", lines: [true, true, false, true, true, false], upperTrigram: "兑", lowerTrigram: "兑", group: 7 },
    { id: 59, name: "Dispersion", chineseName: "涣", symbol: "䷺", lines: [false, true, false, false, true, true], upperTrigram: "坎", lowerTrigram: "巽", group: 7 },
    { id: 60, name: "Limitation", chineseName: "节", symbol: "䷻", lines: [true, true, false, false, true, false], upperTrigram: "坎", lowerTrigram: "兑", group: 7 },
    { id: 61, name: "Inner Truth", chineseName: "中孚", symbol: "䷼", lines: [true, true, false, false, true, true], upperTrigram: "巽", lowerTrigram: "兑", group: 7 },
    { id: 62, name: "Small Excess", chineseName: "小过", symbol: "䷽", lines: [false, false, true, true, false, false], upperTrigram: "震", lowerTrigram: "艮", group: 7 },
    { id: 63, name: "After Completion", chineseName: "既济", symbol: "䷾", lines: [true, false, true, false, true, false], upperTrigram: "坎", lowerTrigram: "离", group: 7 },
    { id: 64, name: "Before Completion", chineseName: "未济", symbol: "䷿", lines: [false, true, false, true, false, true], upperTrigram: "离", lowerTrigram: "坎", group: 7 }
];

// 错卦关系数据 - 32对错卦关系（每一爻都相反）
export const networkEdges: HexagramEdge[] = [
    // 第1对：乾(1) ←→ 坤(2)
    { source: 1, target: 2, relation: RelationType.INVERSE, weight: 8, description: "乾与坤互为错卦（每爻相反）" },
    { source: 2, target: 1, relation: RelationType.INVERSE, weight: 8, description: "坤与乾互为错卦（每爻相反）" },
    
    // 第2对：屯(3) ←→ 鼎(50) 
    { source: 3, target: 50, relation: RelationType.INVERSE, weight: 8, description: "屯与鼎互为错卦（每爻相反）" },
    { source: 50, target: 3, relation: RelationType.INVERSE, weight: 8, description: "鼎与屯互为错卦（每爻相反）" },
    
    // 第3对：蒙(4) ←→ 革(49)
    { source: 4, target: 49, relation: RelationType.INVERSE, weight: 8, description: "蒙与革互为错卦（每爻相反）" },
    { source: 49, target: 4, relation: RelationType.INVERSE, weight: 8, description: "革与蒙互为错卦（每爻相反）" },
    
    // 第4对：需(5) ←→ 晋(35)
    { source: 5, target: 35, relation: RelationType.INVERSE, weight: 8, description: "需与晋互为错卦（每爻相反）" },
    { source: 35, target: 5, relation: RelationType.INVERSE, weight: 8, description: "晋与需互为错卦（每爻相反）" },
    
    // 第5对：讼(6) ←→ 明夷(36)
    { source: 6, target: 36, relation: RelationType.INVERSE, weight: 8, description: "讼与明夷互为错卦（每爻相反）" },
    { source: 36, target: 6, relation: RelationType.INVERSE, weight: 8, description: "明夷与讼互为错卦（每爻相反）" },
    
    // 第6对：师(7) ←→ 家人(37)
    { source: 7, target: 37, relation: RelationType.INVERSE, weight: 8, description: "师与家人互为错卦（每爻相反）" },
    { source: 37, target: 7, relation: RelationType.INVERSE, weight: 8, description: "家人与师互为错卦（每爻相反）" },
    
    // 第7对：比(8) ←→ 睽(38)
    { source: 8, target: 38, relation: RelationType.INVERSE, weight: 8, description: "比与睽互为错卦（每爻相反）" },
    { source: 38, target: 8, relation: RelationType.INVERSE, weight: 8, description: "睽与比互为错卦（每爻相反）" },
    
    // 第8对：小畜(9) ←→ 蹇(39)
    { source: 9, target: 39, relation: RelationType.INVERSE, weight: 8, description: "小畜与蹇互为错卦（每爻相反）" },
    { source: 39, target: 9, relation: RelationType.INVERSE, weight: 8, description: "蹇与小畜互为错卦（每爻相反）" },
    
    // 第9对：履(10) ←→ 解(40)
    { source: 10, target: 40, relation: RelationType.INVERSE, weight: 8, description: "履与解互为错卦（每爻相反）" },
    { source: 40, target: 10, relation: RelationType.INVERSE, weight: 8, description: "解与履互为错卦（每爻相反）" },
    
    // 第10对：泰(11) ←→ 损(41)
    { source: 11, target: 41, relation: RelationType.INVERSE, weight: 8, description: "泰与损互为错卦（每爻相反）" },
    { source: 41, target: 11, relation: RelationType.INVERSE, weight: 8, description: "损与泰互为错卦（每爻相反）" },
    
    // 第11对：否(12) ←→ 益(42)
    { source: 12, target: 42, relation: RelationType.INVERSE, weight: 8, description: "否与益互为错卦（每爻相反）" },
    { source: 42, target: 12, relation: RelationType.INVERSE, weight: 8, description: "益与否互为错卦（每爻相反）" },
    
    // 第12对：同人(13) ←→ 夬(43)
    { source: 13, target: 43, relation: RelationType.INVERSE, weight: 8, description: "同人与夬互为错卦（每爻相反）" },
    { source: 43, target: 13, relation: RelationType.INVERSE, weight: 8, description: "夬与同人互为错卦（每爻相反）" },
    
    // 第13对：大有(14) ←→ 姤(44)
    { source: 14, target: 44, relation: RelationType.INVERSE, weight: 8, description: "大有与姤互为错卦（每爻相反）" },
    { source: 44, target: 14, relation: RelationType.INVERSE, weight: 8, description: "姤与大有互为错卦（每爻相反）" },
    
    // 第14对：谦(15) ←→ 萃(45)
    { source: 15, target: 45, relation: RelationType.INVERSE, weight: 8, description: "谦与萃互为错卦（每爻相反）" },
    { source: 45, target: 15, relation: RelationType.INVERSE, weight: 8, description: "萃与谦互为错卦（每爻相反）" },
    
    // 第15对：豫(16) ←→ 升(46)
    { source: 16, target: 46, relation: RelationType.INVERSE, weight: 8, description: "豫与升互为错卦（每爻相反）" },
    { source: 46, target: 16, relation: RelationType.INVERSE, weight: 8, description: "升与豫互为错卦（每爻相反）" },
    
    // 第16对：随(17) ←→ 困(47)
    { source: 17, target: 47, relation: RelationType.INVERSE, weight: 8, description: "随与困互为错卦（每爻相反）" },
    { source: 47, target: 17, relation: RelationType.INVERSE, weight: 8, description: "困与随互为错卦（每爻相反）" },
    
    // 第17对：蛊(18) ←→ 井(48)
    { source: 18, target: 48, relation: RelationType.INVERSE, weight: 8, description: "蛊与井互为错卦（每爻相反）" },
    { source: 48, target: 18, relation: RelationType.INVERSE, weight: 8, description: "井与蛊互为错卦（每爻相反）" },
    
    // 第18对：临(19) ←→ 震(51)
    { source: 19, target: 51, relation: RelationType.INVERSE, weight: 8, description: "临与震互为错卦（每爻相反）" },
    { source: 51, target: 19, relation: RelationType.INVERSE, weight: 8, description: "震与临互为错卦（每爻相反）" },
    
    // 第19对：观(20) ←→ 艮(52)
    { source: 20, target: 52, relation: RelationType.INVERSE, weight: 8, description: "观与艮互为错卦（每爻相反）" },
    { source: 52, target: 20, relation: RelationType.INVERSE, weight: 8, description: "艮与观互为错卦（每爻相反）" },
    
    // 第20对：噬嗑(21) ←→ 渐(53)
    { source: 21, target: 53, relation: RelationType.INVERSE, weight: 8, description: "噬嗑与渐互为错卦（每爻相反）" },
    { source: 53, target: 21, relation: RelationType.INVERSE, weight: 8, description: "渐与噬嗑互为错卦（每爻相反）" },
    
    // 第21对：贲(22) ←→ 归妹(54)
    { source: 22, target: 54, relation: RelationType.INVERSE, weight: 8, description: "贲与归妹互为错卦（每爻相反）" },
    { source: 54, target: 22, relation: RelationType.INVERSE, weight: 8, description: "归妹与贲互为错卦（每爻相反）" },
    
    // 第22对：剥(23) ←→ 丰(55)
    { source: 23, target: 55, relation: RelationType.INVERSE, weight: 8, description: "剥与丰互为错卦（每爻相反）" },
    { source: 55, target: 23, relation: RelationType.INVERSE, weight: 8, description: "丰与剥互为错卦（每爻相反）" },
    
    // 第23对：复(24) ←→ 旅(56)
    { source: 24, target: 56, relation: RelationType.INVERSE, weight: 8, description: "复与旅互为错卦（每爻相反）" },
    { source: 56, target: 24, relation: RelationType.INVERSE, weight: 8, description: "旅与复互为错卦（每爻相反）" },
    
    // 第24对：无妄(25) ←→ 巽(57)
    { source: 25, target: 57, relation: RelationType.INVERSE, weight: 8, description: "无妄与巽互为错卦（每爻相反）" },
    { source: 57, target: 25, relation: RelationType.INVERSE, weight: 8, description: "巽与无妄互为错卦（每爻相反）" },
    
    // 第25对：大畜(26) ←→ 兑(58)
    { source: 26, target: 58, relation: RelationType.INVERSE, weight: 8, description: "大畜与兑互为错卦（每爻相反）" },
    { source: 58, target: 26, relation: RelationType.INVERSE, weight: 8, description: "兑与大畜互为错卦（每爻相反）" },
    
    // 第26对：颐(27) ←→ 涣(59)
    { source: 27, target: 59, relation: RelationType.INVERSE, weight: 8, description: "颐与涣互为错卦（每爻相反）" },
    { source: 59, target: 27, relation: RelationType.INVERSE, weight: 8, description: "涣与颐互为错卦（每爻相反）" },
    
    // 第27对：大过(28) ←→ 节(60)
    { source: 28, target: 60, relation: RelationType.INVERSE, weight: 8, description: "大过与节互为错卦（每爻相反）" },
    { source: 60, target: 28, relation: RelationType.INVERSE, weight: 8, description: "节与大过互为错卦（每爻相反）" },
    
    // 第28对：坎(29) ←→ 离(30)
    { source: 29, target: 30, relation: RelationType.INVERSE, weight: 8, description: "坎与离互为错卦（每爻相反）" },
    { source: 30, target: 29, relation: RelationType.INVERSE, weight: 8, description: "离与坎互为错卦（每爻相反）" },
    
    // 第29对：咸(31) ←→ 中孚(61)
    { source: 31, target: 61, relation: RelationType.INVERSE, weight: 8, description: "咸与中孚互为错卦（每爻相反）" },
    { source: 61, target: 31, relation: RelationType.INVERSE, weight: 8, description: "中孚与咸互为错卦（每爻相反）" },
    
    // 第30对：恒(32) ←→ 小过(62)
    { source: 32, target: 62, relation: RelationType.INVERSE, weight: 8, description: "恒与小过互为错卦（每爻相反）" },
    { source: 62, target: 32, relation: RelationType.INVERSE, weight: 8, description: "小过与恒互为错卦（每爻相反）" },
    
    // 第31对：遁(33) ←→ 既济(63)
    { source: 33, target: 63, relation: RelationType.INVERSE, weight: 8, description: "遁与既济互为错卦（每爻相反）" },
    { source: 63, target: 33, relation: RelationType.INVERSE, weight: 8, description: "既济与遁互为错卦（每爻相反）" },
      // 第32对：大壮(34) ←→ 未济(64)
    { source: 34, target: 64, relation: RelationType.INVERSE, weight: 8, description: "大壮与未济互为错卦（每爻相反）" },
    { source: 64, target: 34, relation: RelationType.INVERSE, weight: 8, description: "未济与大壮互为错卦（每爻相反）" },
    
    // 相综关系（卦象上下颠倒/左右翻转180度）
    // 乾、坤、坎、离、震、艮、巽、兑 这8个卦是自己的相综
    
    // 屯(3) ←→ 蒙(4)
    { source: 3, target: 4, relation: RelationType.COMPLEMENT, weight: 8, description: "屯与蒙互为相综卦（上下颠倒）" },
    { source: 4, target: 3, relation: RelationType.COMPLEMENT, weight: 8, description: "蒙与屯互为相综卦（上下颠倒）" },
    
    // 需(5) ←→ 讼(6)
    { source: 5, target: 6, relation: RelationType.COMPLEMENT, weight: 8, description: "需与讼互为相综卦（上下颠倒）" },
    { source: 6, target: 5, relation: RelationType.COMPLEMENT, weight: 8, description: "讼与需互为相综卦（上下颠倒）" },
    
    // 师(7) ←→ 比(8)
    { source: 7, target: 8, relation: RelationType.COMPLEMENT, weight: 8, description: "师与比互为相综卦（上下颠倒）" },
    { source: 8, target: 7, relation: RelationType.COMPLEMENT, weight: 8, description: "比与师互为相综卦（上下颠倒）" },
    
    // 小畜(9) ←→ 履(10)
    { source: 9, target: 10, relation: RelationType.COMPLEMENT, weight: 8, description: "小畜与履互为相综卦（上下颠倒）" },
    { source: 10, target: 9, relation: RelationType.COMPLEMENT, weight: 8, description: "履与小畜互为相综卦（上下颠倒）" },
    
    // 泰(11) ←→ 否(12)
    { source: 11, target: 12, relation: RelationType.COMPLEMENT, weight: 8, description: "泰与否互为相综卦（上下颠倒）" },
    { source: 12, target: 11, relation: RelationType.COMPLEMENT, weight: 8, description: "否与泰互为相综卦（上下颠倒）" },
    
    // 同人(13) ←→ 大有(14)
    { source: 13, target: 14, relation: RelationType.COMPLEMENT, weight: 8, description: "同人与大有互为相综卦（上下颠倒）" },
    { source: 14, target: 13, relation: RelationType.COMPLEMENT, weight: 8, description: "大有与同人互为相综卦（上下颠倒）" },
    
    // 谦(15) ←→ 豫(16)
    { source: 15, target: 16, relation: RelationType.COMPLEMENT, weight: 8, description: "谦与豫互为相综卦（上下颠倒）" },
    { source: 16, target: 15, relation: RelationType.COMPLEMENT, weight: 8, description: "豫与谦互为相综卦（上下颠倒）" },
    
    // 随(17) ←→ 蛊(18)
    { source: 17, target: 18, relation: RelationType.COMPLEMENT, weight: 8, description: "随与蛊互为相综卦（上下颠倒）" },
    { source: 18, target: 17, relation: RelationType.COMPLEMENT, weight: 8, description: "蛊与随互为相综卦（上下颠倒）" },
    
    // 临(19) ←→ 观(20)
    { source: 19, target: 20, relation: RelationType.COMPLEMENT, weight: 8, description: "临与观互为相综卦（上下颠倒）" },
    { source: 20, target: 19, relation: RelationType.COMPLEMENT, weight: 8, description: "观与临互为相综卦（上下颠倒）" },
    
    // 噬嗑(21) ←→ 贲(22)
    { source: 21, target: 22, relation: RelationType.COMPLEMENT, weight: 8, description: "噬嗑与贲互为相综卦（上下颠倒）" },
    { source: 22, target: 21, relation: RelationType.COMPLEMENT, weight: 8, description: "贲与噬嗑互为相综卦（上下颠倒）" },
    
    // 剥(23) ←→ 复(24)
    { source: 23, target: 24, relation: RelationType.COMPLEMENT, weight: 8, description: "剥与复互为相综卦（上下颠倒）" },
    { source: 24, target: 23, relation: RelationType.COMPLEMENT, weight: 8, description: "复与剥互为相综卦（上下颠倒）" },
    
    // 无妄(25) ←→ 大畜(26)
    { source: 25, target: 26, relation: RelationType.COMPLEMENT, weight: 8, description: "无妄与大畜互为相综卦（上下颠倒）" },
    { source: 26, target: 25, relation: RelationType.COMPLEMENT, weight: 8, description: "大畜与无妄互为相综卦（上下颠倒）" },
    
    // 颐(27) ←→ 大过(28)
    { source: 27, target: 28, relation: RelationType.COMPLEMENT, weight: 8, description: "颐与大过互为相综卦（上下颠倒）" },
    { source: 28, target: 27, relation: RelationType.COMPLEMENT, weight: 8, description: "大过与颐互为相综卦（上下颠倒）" },
    
    // 咸(31) ←→ 恒(32)
    { source: 31, target: 32, relation: RelationType.COMPLEMENT, weight: 8, description: "咸与恒互为相综卦（上下颠倒）" },
    { source: 32, target: 31, relation: RelationType.COMPLEMENT, weight: 8, description: "恒与咸互为相综卦（上下颠倒）" },
    
    // 遁(33) ←→ 大壮(34)
    { source: 33, target: 34, relation: RelationType.COMPLEMENT, weight: 8, description: "遁与大壮互为相综卦（上下颠倒）" },
    { source: 34, target: 33, relation: RelationType.COMPLEMENT, weight: 8, description: "大壮与遁互为相综卦（上下颠倒）" },
    
    // 晋(35) ←→ 明夷(36)
    { source: 35, target: 36, relation: RelationType.COMPLEMENT, weight: 8, description: "晋与明夷互为相综卦（上下颠倒）" },
    { source: 36, target: 35, relation: RelationType.COMPLEMENT, weight: 8, description: "明夷与晋互为相综卦（上下颠倒）" },
    
    // 家人(37) ←→ 睽(38)
    { source: 37, target: 38, relation: RelationType.COMPLEMENT, weight: 8, description: "家人与睽互为相综卦（上下颠倒）" },
    { source: 38, target: 37, relation: RelationType.COMPLEMENT, weight: 8, description: "睽与家人互为相综卦（上下颠倒）" },
    
    // 蹇(39) ←→ 解(40)
    { source: 39, target: 40, relation: RelationType.COMPLEMENT, weight: 8, description: "蹇与解互为相综卦（上下颠倒）" },
    { source: 40, target: 39, relation: RelationType.COMPLEMENT, weight: 8, description: "解与蹇互为相综卦（上下颠倒）" },
    
    // 损(41) ←→ 益(42)
    { source: 41, target: 42, relation: RelationType.COMPLEMENT, weight: 8, description: "损与益互为相综卦（上下颠倒）" },
    { source: 42, target: 41, relation: RelationType.COMPLEMENT, weight: 8, description: "益与损互为相综卦（上下颠倒）" },
    
    // 夬(43) ←→ 姤(44)
    { source: 43, target: 44, relation: RelationType.COMPLEMENT, weight: 8, description: "夬与姤互为相综卦（上下颠倒）" },
    { source: 44, target: 43, relation: RelationType.COMPLEMENT, weight: 8, description: "姤与夬互为相综卦（上下颠倒）" },
    
    // 萃(45) ←→ 升(46)
    { source: 45, target: 46, relation: RelationType.COMPLEMENT, weight: 8, description: "萃与升互为相综卦（上下颠倒）" },
    { source: 46, target: 45, relation: RelationType.COMPLEMENT, weight: 8, description: "升与萃互为相综卦（上下颠倒）" },
    
    // 困(47) ←→ 井(48)
    { source: 47, target: 48, relation: RelationType.COMPLEMENT, weight: 8, description: "困与井互为相综卦（上下颠倒）" },
    { source: 48, target: 47, relation: RelationType.COMPLEMENT, weight: 8, description: "井与困互为相综卦（上下颠倒）" },
    
    // 革(49) ←→ 鼎(50)
    { source: 49, target: 50, relation: RelationType.COMPLEMENT, weight: 8, description: "革与鼎互为相综卦（上下颠倒）" },
    { source: 50, target: 49, relation: RelationType.COMPLEMENT, weight: 8, description: "鼎与革互为相综卦（上下颠倒）" },
    
    // 渐(53) ←→ 归妹(54)
    { source: 53, target: 54, relation: RelationType.COMPLEMENT, weight: 8, description: "渐与归妹互为相综卦（上下颠倒）" },
    { source: 54, target: 53, relation: RelationType.COMPLEMENT, weight: 8, description: "归妹与渐互为相综卦（上下颠倒）" },
    
    // 丰(55) ←→ 旅(56)
    { source: 55, target: 56, relation: RelationType.COMPLEMENT, weight: 8, description: "丰与旅互为相综卦（上下颠倒）" },
    { source: 56, target: 55, relation: RelationType.COMPLEMENT, weight: 8, description: "旅与丰互为相综卦（上下颠倒）" },
    
    // 涣(59) ←→ 节(60)
    { source: 59, target: 60, relation: RelationType.COMPLEMENT, weight: 8, description: "涣与节互为相综卦（上下颠倒）" },
    { source: 60, target: 59, relation: RelationType.COMPLEMENT, weight: 8, description: "节与涣互为相综卦（上下颠倒）" },
    
    // 中孚(61) ←→ 小过(62)
    { source: 61, target: 62, relation: RelationType.COMPLEMENT, weight: 8, description: "中孚与小过互为相综卦（上下颠倒）" },
    { source: 62, target: 61, relation: RelationType.COMPLEMENT, weight: 8, description: "小过与中孚互为相综卦（上下颠倒）" },
    
    // 既济(63) ←→ 未济(64)
    { source: 63, target: 64, relation: RelationType.COMPLEMENT, weight: 8, description: "既济与未济互为相综卦（上下颠倒）" },
    { source: 64, target: 63, relation: RelationType.COMPLEMENT, weight: 8, description: "未济与既济互为相综卦（上下颠倒）" }
];
