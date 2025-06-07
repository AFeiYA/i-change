// 预定义的卦象关系网络数据
import { HexagramNode, HexagramEdge, RelationType } from '../utils/hexagramRelations';

// 64卦的节点数据
export const networkNodes: HexagramNode[] = [
    { id: 1, name: "The Creative", chineseName: "乾", symbol: "䷀", lines: [true, true, true, true, true, true], upperTrigram: "乾", lowerTrigram: "乾", group: 0 },
    { id: 2, name: "The Receptive", chineseName: "坤", symbol: "䷁", lines: [false, false, false, false, false, false], upperTrigram: "坤", lowerTrigram: "坤", group: 0 },
    { id: 3, name: "Difficulty at the Beginning", chineseName: "屯", symbol: "䷂", lines: [false, true, false, false, true, false], upperTrigram: "坎", lowerTrigram: "震", group: 0 },
    { id: 4, name: "Youthful Folly", chineseName: "蒙", symbol: "䷃", lines: [false, true, false, true, false, false], upperTrigram: "艮", lowerTrigram: "坎", group: 0 },
    { id: 5, name: "Waiting", chineseName: "需", symbol: "䷄", lines: [false, true, false, true, true, true], upperTrigram: "坎", lowerTrigram: "乾", group: 0 },
    { id: 6, name: "Conflict", chineseName: "讼", symbol: "䷅", lines: [true, true, true, false, true, false], upperTrigram: "乾", lowerTrigram: "坎", group: 0 },
    { id: 7, name: "The Army", chineseName: "师", symbol: "䷆", lines: [false, false, false, false, true, false], upperTrigram: "坤", lowerTrigram: "坎", group: 0 },
    { id: 8, name: "Holding Together", chineseName: "比", symbol: "䷇", lines: [false, true, false, false, false, false], upperTrigram: "坎", lowerTrigram: "坤", group: 0 },
    
    { id: 9, name: "Small Taming", chineseName: "小畜", symbol: "䷈", lines: [true, true, false, true, true, true], upperTrigram: "巽", lowerTrigram: "乾", group: 1 },
    { id: 10, name: "Treading", chineseName: "履", symbol: "䷉", lines: [true, true, true, false, true, true], upperTrigram: "乾", lowerTrigram: "兑", group: 1 },
    { id: 11, name: "Peace", chineseName: "泰", symbol: "䷊", lines: [false, false, false, true, true, true], upperTrigram: "坤", lowerTrigram: "乾", group: 1 },
    { id: 12, name: "Standstill", chineseName: "否", symbol: "䷋", lines: [true, true, true, false, false, false], upperTrigram: "乾", lowerTrigram: "坤", group: 1 },
    { id: 13, name: "Fellowship", chineseName: "同人", symbol: "䷌", lines: [true, false, true, true, true, true], upperTrigram: "乾", lowerTrigram: "离", group: 1 },
    { id: 14, name: "Great Possession", chineseName: "大有", symbol: "䷍", lines: [true, true, true, true, false, true], upperTrigram: "离", lowerTrigram: "乾", group: 1 },
    { id: 15, name: "Modesty", chineseName: "谦", symbol: "䷎", lines: [false, false, false, true, false, false], upperTrigram: "坤", lowerTrigram: "艮", group: 1 },
    { id: 16, name: "Enthusiasm", chineseName: "豫", symbol: "䷏", lines: [false, true, false, false, false, false], upperTrigram: "震", lowerTrigram: "坤", group: 1 },
    
    { id: 17, name: "Following", chineseName: "随", symbol: "䷐", lines: [false, true, true, false, true, false], upperTrigram: "兑", lowerTrigram: "震", group: 2 },
    { id: 18, name: "Work on the Decayed", chineseName: "蛊", symbol: "䷑", lines: [false, true, false, true, true, false], upperTrigram: "艮", lowerTrigram: "巽", group: 2 },
    { id: 19, name: "Approach", chineseName: "临", symbol: "䷒", lines: [false, false, false, false, true, true], upperTrigram: "坤", lowerTrigram: "兑", group: 2 },
    { id: 20, name: "Contemplation", chineseName: "观", symbol: "䷓", lines: [true, true, false, false, false, false], upperTrigram: "巽", lowerTrigram: "坤", group: 2 },
    { id: 21, name: "Biting Through", chineseName: "噬嗑", symbol: "䷔", lines: [true, false, false, false, true, false], upperTrigram: "离", lowerTrigram: "震", group: 2 },
    { id: 22, name: "Grace", chineseName: "贲", symbol: "䷕", lines: [false, true, false, true, false, true], upperTrigram: "艮", lowerTrigram: "离", group: 2 },
    { id: 23, name: "Splitting Apart", chineseName: "剥", symbol: "䷖", lines: [false, false, false, true, false, true], upperTrigram: "坤", lowerTrigram: "艮", group: 2 },
    { id: 24, name: "Return", chineseName: "复", symbol: "䷗", lines: [true, false, false, false, false, false], upperTrigram: "震", lowerTrigram: "坤", group: 2 },
    
    { id: 25, name: "Innocence", chineseName: "无妄", symbol: "䷘", lines: [true, false, false, true, true, true], upperTrigram: "乾", lowerTrigram: "震", group: 3 },
    { id: 26, name: "Great Taming", chineseName: "大畜", symbol: "䷙", lines: [true, true, true, true, false, false], upperTrigram: "艮", lowerTrigram: "乾", group: 3 },
    { id: 27, name: "Nourishment", chineseName: "颐", symbol: "䷚", lines: [true, false, false, false, false, true], upperTrigram: "艮", lowerTrigram: "震", group: 3 },
    { id: 28, name: "Great Exceeding", chineseName: "大过", symbol: "䷛", lines: [false, true, true, true, true, false], upperTrigram: "兑", lowerTrigram: "巽", group: 3 },
    { id: 29, name: "The Abysmal", chineseName: "坎", symbol: "䷜", lines: [false, true, false, false, true, false], upperTrigram: "坎", lowerTrigram: "坎", group: 3 },
    { id: 30, name: "The Clinging", chineseName: "离", symbol: "䷝", lines: [true, false, true, true, false, true], upperTrigram: "离", lowerTrigram: "离", group: 3 },
    { id: 31, name: "Influence", chineseName: "咸", symbol: "䷞", lines: [false, true, true, true, false, false], upperTrigram: "兑", lowerTrigram: "艮", group: 3 },
    { id: 32, name: "Duration", chineseName: "恒", symbol: "䷟", lines: [false, false, true, true, true, false], upperTrigram: "震", lowerTrigram: "巽", group: 3 },
    
    { id: 33, name: "Retreat", chineseName: "遁", symbol: "䷠", lines: [false, false, true, true, true, true], upperTrigram: "乾", lowerTrigram: "艮", group: 4 },
    { id: 34, name: "Great Power", chineseName: "大壮", symbol: "䷡", lines: [true, true, true, true, false, false], upperTrigram: "震", lowerTrigram: "乾", group: 4 },
    { id: 35, name: "Progress", chineseName: "晋", symbol: "䷢", lines: [false, false, false, true, false, true], upperTrigram: "离", lowerTrigram: "坤", group: 4 },
    { id: 36, name: "Darkening of the Light", chineseName: "明夷", symbol: "䷣", lines: [true, false, true, false, false, false], upperTrigram: "坤", lowerTrigram: "离", group: 4 },
    { id: 37, name: "The Family", chineseName: "家人", symbol: "䷤", lines: [true, false, true, true, true, false], upperTrigram: "巽", lowerTrigram: "离", group: 4 },
    { id: 38, name: "Opposition", chineseName: "睽", symbol: "䷥", lines: [false, true, true, true, false, true], upperTrigram: "离", lowerTrigram: "兑", group: 4 },
    { id: 39, name: "Obstruction", chineseName: "蹇", symbol: "䷦", lines: [false, false, true, false, true, false], upperTrigram: "坎", lowerTrigram: "艮", group: 4 },
    { id: 40, name: "Deliverance", chineseName: "解", symbol: "䷧", lines: [false, true, false, true, false, false], upperTrigram: "震", lowerTrigram: "坎", group: 4 },
    
    { id: 41, name: "Decrease", chineseName: "损", symbol: "䷨", lines: [true, true, false, false, false, true], upperTrigram: "艮", lowerTrigram: "兑", group: 5 },
    { id: 42, name: "Increase", chineseName: "益", symbol: "䷩", lines: [true, false, false, false, true, true], upperTrigram: "巽", lowerTrigram: "震", group: 5 },
    { id: 43, name: "Breakthrough", chineseName: "夬", symbol: "䷪", lines: [false, true, true, true, true, true], upperTrigram: "兑", lowerTrigram: "乾", group: 5 },
    { id: 44, name: "Coming to Meet", chineseName: "姤", symbol: "䷫", lines: [true, true, true, true, true, false], upperTrigram: "乾", lowerTrigram: "巽", group: 5 },
    { id: 45, name: "Gathering Together", chineseName: "萃", symbol: "䷬", lines: [false, false, false, false, true, true], upperTrigram: "兑", lowerTrigram: "坤", group: 5 },
    { id: 46, name: "Pushing Upward", chineseName: "升", symbol: "䷭", lines: [true, true, false, false, false, false], upperTrigram: "坤", lowerTrigram: "巽", group: 5 },
    { id: 47, name: "Oppression", chineseName: "困", symbol: "䷮", lines: [false, true, true, false, true, false], upperTrigram: "兑", lowerTrigram: "坎", group: 5 },
    { id: 48, name: "The Well", chineseName: "井", symbol: "䷯", lines: [false, true, false, true, true, false], upperTrigram: "坎", lowerTrigram: "巽", group: 5 },
    
    { id: 49, name: "Revolution", chineseName: "革", symbol: "䷰", lines: [false, true, true, true, false, true], upperTrigram: "兑", lowerTrigram: "离", group: 6 },
    { id: 50, name: "The Cauldron", chineseName: "鼎", symbol: "䷱", lines: [true, false, true, true, true, false], upperTrigram: "离", lowerTrigram: "巽", group: 6 },
    { id: 51, name: "The Arousing", chineseName: "震", symbol: "䷲", lines: [false, true, false, false, true, false], upperTrigram: "震", lowerTrigram: "震", group: 6 },
    { id: 52, name: "Keeping Still", chineseName: "艮", symbol: "䷳", lines: [true, false, false, true, false, false], upperTrigram: "艮", lowerTrigram: "艮", group: 6 },
    { id: 53, name: "Development", chineseName: "渐", symbol: "䷴", lines: [true, true, false, true, false, false], upperTrigram: "巽", lowerTrigram: "艮", group: 6 },
    { id: 54, name: "The Marrying Maiden", chineseName: "归妹", symbol: "䷵", lines: [false, false, true, false, true, true], upperTrigram: "震", lowerTrigram: "兑", group: 6 },
    { id: 55, name: "Abundance", chineseName: "丰", symbol: "䷶", lines: [false, false, true, true, false, true], upperTrigram: "震", lowerTrigram: "离", group: 6 },
    { id: 56, name: "The Wanderer", chineseName: "旅", symbol: "䷷", lines: [true, false, true, false, false, true], upperTrigram: "离", lowerTrigram: "艮", group: 6 },
    
    { id: 57, name: "The Gentle", chineseName: "巽", symbol: "䷸", lines: [true, true, false, true, true, false], upperTrigram: "巽", lowerTrigram: "巽", group: 7 },
    { id: 58, name: "The Joyous", chineseName: "兑", symbol: "䷹", lines: [false, true, true, false, true, true], upperTrigram: "兑", lowerTrigram: "兑", group: 7 },
    { id: 59, name: "Dispersion", chineseName: "涣", symbol: "䷺", lines: [false, true, false, true, true, false], upperTrigram: "坎", lowerTrigram: "巽", group: 7 },
    { id: 60, name: "Limitation", chineseName: "节", symbol: "䷻", lines: [false, true, true, false, true, false], upperTrigram: "坎", lowerTrigram: "兑", group: 7 },
    { id: 61, name: "Inner Truth", chineseName: "中孚", symbol: "䷼", lines: [true, true, false, false, true, true], upperTrigram: "巽", lowerTrigram: "兑", group: 7 },
    { id: 62, name: "Small Exceeding", chineseName: "小过", symbol: "䷽", lines: [false, false, true, true, false, false], upperTrigram: "震", lowerTrigram: "艮", group: 7 },
    { id: 63, name: "After Completion", chineseName: "既济", symbol: "䷾", lines: [false, true, false, true, false, true], upperTrigram: "坎", lowerTrigram: "离", group: 7 },
    { id: 64, name: "Before Completion", chineseName: "未济", symbol: "䷿", lines: [true, false, true, false, true, false], upperTrigram: "离", lowerTrigram: "坎", group: 7 }
];

// 预定义的基本关系（相错、相综、互卦等）
export const networkEdges: HexagramEdge[] = [
    // 相错关系（上下颠倒）
    { source: 1, target: 2, relation: RelationType.INVERSE, weight: 8, description: "乾与坤互为相错卦" },
    { source: 2, target: 1, relation: RelationType.INVERSE, weight: 8, description: "坤与乾互为相错卦" },
    { source: 3, target: 50, relation: RelationType.INVERSE, weight: 8, description: "屯与鼎互为相错卦" },
    { source: 4, target: 49, relation: RelationType.INVERSE, weight: 8, description: "蒙与革互为相错卦" },
    { source: 5, target: 35, relation: RelationType.INVERSE, weight: 8, description: "需与晋互为相错卦" },
    { source: 6, target: 36, relation: RelationType.INVERSE, weight: 8, description: "讼与明夷互为相错卦" },
    
    // 相综关系（阴阳互换）
    { source: 3, target: 4, relation: RelationType.COMPLEMENT, weight: 8, description: "屯与蒙互为相综卦" },
    { source: 4, target: 3, relation: RelationType.COMPLEMENT, weight: 8, description: "蒙与屯互为相综卦" },
    { source: 5, target: 6, relation: RelationType.COMPLEMENT, weight: 8, description: "需与讼互为相综卦" },
    { source: 6, target: 5, relation: RelationType.COMPLEMENT, weight: 8, description: "讼与需互为相综卦" },
    { source: 7, target: 8, relation: RelationType.COMPLEMENT, weight: 8, description: "师与比互为相综卦" },
    { source: 8, target: 7, relation: RelationType.COMPLEMENT, weight: 8, description: "比与师互为相综卦" },
    
    // 互卦关系（2-5爻组成新卦）
    { source: 1, target: 1, relation: RelationType.NUCLEAR, weight: 6, description: "乾的互卦是自己" },
    { source: 2, target: 2, relation: RelationType.NUCLEAR, weight: 6, description: "坤的互卦是自己" },
    { source: 3, target: 23, relation: RelationType.NUCLEAR, weight: 6, description: "剥是屯的互卦" },
    { source: 4, target: 2, relation: RelationType.NUCLEAR, weight: 6, description: "坤是蒙的互卦" },
    { source: 5, target: 11, relation: RelationType.NUCLEAR, weight: 6, description: "泰是需的互卦" },
    { source: 6, target: 12, relation: RelationType.NUCLEAR, weight: 6, description: "否是讼的互卦" },
    
    // 变卦关系（一爻变化）
    { source: 1, target: 44, relation: RelationType.CHANGING, weight: 5, description: "乾变一爻得姤" },
    { source: 1, target: 33, relation: RelationType.CHANGING, weight: 5, description: "乾变二爻得遁" },
    { source: 1, target: 13, relation: RelationType.CHANGING, weight: 5, description: "乾变三爻得同人" },
    { source: 1, target: 10, relation: RelationType.CHANGING, weight: 5, description: "乾变四爻得履" },
    { source: 1, target: 9, relation: RelationType.CHANGING, weight: 5, description: "乾变五爻得小畜" },
    { source: 1, target: 14, relation: RelationType.CHANGING, weight: 5, description: "乾变六爻得大有" },
    
    { source: 2, target: 24, relation: RelationType.CHANGING, weight: 5, description: "坤变一爻得复" },
    { source: 2, target: 19, relation: RelationType.CHANGING, weight: 5, description: "坤变二爻得临" },
    { source: 2, target: 36, relation: RelationType.CHANGING, weight: 5, description: "坤变三爻得明夷" },
    { source: 2, target: 16, relation: RelationType.CHANGING, weight: 5, description: "坤变四爻得豫" },
    { source: 2, target: 35, relation: RelationType.CHANGING, weight: 5, description: "坤变五爻得晋" },
    { source: 2, target: 45, relation: RelationType.CHANGING, weight: 5, description: "坤变六爻得萃" },
    
    // 八卦关系（共享相同的上卦或下卦）
    { source: 1, target: 11, relation: RelationType.TRIGRAM, weight: 3, description: "乾与泰共享下卦乾" },
    { source: 1, target: 34, relation: RelationType.TRIGRAM, weight: 3, description: "乾与大壮共享下卦乾" },
    { source: 1, target: 5, relation: RelationType.TRIGRAM, weight: 3, description: "乾与需共享下卦乾" },
    { source: 1, target: 26, relation: RelationType.TRIGRAM, weight: 3, description: "乾与大畜共享下卦乾" },
    { source: 1, target: 9, relation: RelationType.TRIGRAM, weight: 3, description: "乾与小畜共享下卦乾" },
    { source: 1, target: 14, relation: RelationType.TRIGRAM, weight: 3, description: "乾与大有共享下卦乾" },
    { source: 1, target: 43, relation: RelationType.TRIGRAM, weight: 3, description: "乾与夬共享下卦乾" },
    
    { source: 2, target: 12, relation: RelationType.TRIGRAM, weight: 3, description: "坤与否共享上卦乾" },
    { source: 2, target: 35, relation: RelationType.TRIGRAM, weight: 3, description: "坤与晋共享上卦离" },
    { source: 2, target: 16, relation: RelationType.TRIGRAM, weight: 3, description: "坤与豫共享上卦震" },
    { source: 2, target: 20, relation: RelationType.TRIGRAM, weight: 3, description: "坤与观共享上卦巽" },
    { source: 2, target: 8, relation: RelationType.TRIGRAM, weight: 3, description: "坤与比共享上卦坎" },
    { source: 2, target: 23, relation: RelationType.TRIGRAM, weight: 3, description: "坤与剥共享上卦坤" },
    { source: 2, target: 45, relation: RelationType.TRIGRAM, weight: 3, description: "坤与萃共享上卦兑" },
    
    // 震卦相关
    { source: 51, target: 16, relation: RelationType.TRIGRAM, weight: 3, description: "震与豫共享下卦震" },
    { source: 51, target: 40, relation: RelationType.TRIGRAM, weight: 3, description: "震与解共享上卦震" },
    { source: 51, target: 32, relation: RelationType.TRIGRAM, weight: 3, description: "震与恒共享上卦震" },
    { source: 51, target: 34, relation: RelationType.TRIGRAM, weight: 3, description: "震与大壮共享上卦震" },
    { source: 51, target: 42, relation: RelationType.TRIGRAM, weight: 3, description: "震与益共享上卦巽" },
    { source: 51, target: 21, relation: RelationType.TRIGRAM, weight: 3, description: "震与噬嗑共享下卦震" },
    { source: 51, target: 17, relation: RelationType.TRIGRAM, weight: 3, description: "震与随共享下卦震" },
    
    // 坎卦相关
    { source: 29, target: 3, relation: RelationType.TRIGRAM, weight: 3, description: "坎与屯共享上卦坎" },
    { source: 29, target: 5, relation: RelationType.TRIGRAM, weight: 3, description: "坎与需共享上卦坎" },
    { source: 29, target: 39, relation: RelationType.TRIGRAM, weight: 3, description: "坎与蹇共享上卦坎" },
    { source: 29, target: 48, relation: RelationType.TRIGRAM, weight: 3, description: "坎与井共享上卦坎" },
    { source: 29, target: 59, relation: RelationType.TRIGRAM, weight: 3, description: "坎与涣共享上卦坎" },
    { source: 29, target: 60, relation: RelationType.TRIGRAM, weight: 3, description: "坎与节共享上卦坎" },
    { source: 29, target: 63, relation: RelationType.TRIGRAM, weight: 3, description: "坎与既济共享上卦坎" },
    
    // 离卦相关
    { source: 30, target: 13, relation: RelationType.TRIGRAM, weight: 3, description: "离与同人共享下卦离" },
    { source: 30, target: 14, relation: RelationType.TRIGRAM, weight: 3, description: "离与大有共享上卦离" },
    { source: 30, target: 21, relation: RelationType.TRIGRAM, weight: 3, description: "离与噬嗑共享上卦离" },
    { source: 30, target: 22, relation: RelationType.TRIGRAM, weight: 3, description: "离与贲共享下卦离" },
    { source: 30, target: 35, relation: RelationType.TRIGRAM, weight: 3, description: "离与晋共享上卦离" },
    { source: 30, target: 36, relation: RelationType.TRIGRAM, weight: 3, description: "离与明夷共享下卦离" },
    { source: 30, target: 37, relation: RelationType.TRIGRAM, weight: 3, description: "离与家人共享下卦离" },
    { source: 30, target: 38, relation: RelationType.TRIGRAM, weight: 3, description: "离与睽共享上卦离" }
];
