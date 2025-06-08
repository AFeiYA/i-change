// 卦象关系分析工具
import { Hexagram } from '../data/hexagrams';

// 卦象节点接口
export interface HexagramNode {
    id: number;              // 卦序号 1-64
    name: string;            // 卦名
    chineseName: string;     // 中文名
    symbol: string;          // 卦象符号
    lines: boolean[];        // 爻线数组 [true=阳, false=阴]
    upperTrigram: string;    // 上卦
    lowerTrigram: string;    // 下卦
    x?: number;             // 节点坐标
    y?: number;
    fx?: number | null;     // 固定坐标 (D3.js 拖拽)
    fy?: number | null;     // 固定坐标 (D3.js 拖拽)
    group?: number;         // 分组
}

// 卦象关系接口
export interface HexagramEdge {
    source: number;          // 源卦ID
    target: number;          // 目标卦ID
    relation: RelationType;  // 关系类型
    weight: number;          // 关系权重 (1-10)
    description: string;     // 关系描述
}

// 关系类型枚举
export enum RelationType {
    INVERSE = 'inverse',         // 相错 (上下颠倒)
    COMPLEMENT = 'complement',   // 相综 (阴阳互换)
    NUCLEAR = 'nuclear',         // 互卦 (2-5爻组成新卦)
    CHANGING = 'changing',       // 变卦 (单爻变化)
    TRIGRAM = 'trigram'         // 八卦关系
}

// 获取爻线数组 (true=阳爻, false=阴爻)
export function getHexagramLines(hexagram: Hexagram): boolean[] {
    return hexagram.lines.map(line => line === '━━━'); // 实线━━━为阳爻(true)，虚线━ ━为阴爻(false)
}

// 将Hexagram转换为HexagramNode
export function hexagramToNode(hexagram: Hexagram): HexagramNode {
    return {
        id: hexagram.number,
        name: hexagram.name,
        chineseName: hexagram.chineseName || hexagram.name,
        symbol: hexagram.unicode,
        lines: getHexagramLines(hexagram),
        upperTrigram: hexagram.trigrams.upper,
        lowerTrigram: hexagram.trigrams.lower,
        group: Math.floor((hexagram.number - 1) / 8) // 按8个一组分类
    };
}

// 计算相错卦 (上下颠倒)
export function findInverseHexagram(lines: boolean[]): boolean[] {
    return [...lines].reverse();
}

// 计算相综卦 (阴阳互换)
export function findComplementHexagram(lines: boolean[]): boolean[] {
    return lines.map(line => !line);
}

// 计算互卦 (2-5爻组成新卦)
export function findNuclearHexagram(lines: boolean[]): boolean[] {
    if (lines.length !== 6) return lines;
    
    // 取2-4爻作为新的下卦，3-5爻作为新的上卦
    const lowerTrigram = [lines[1], lines[2], lines[3]]; // 2-4爻
    const upperTrigram = [lines[2], lines[3], lines[4]]; // 3-5爻
    
    // 确保所有元素都是有效的布尔值
    return [...lowerTrigram, ...upperTrigram].filter((x): x is boolean => typeof x === 'boolean');
}

// 根据爻线数组查找对应的卦象
export function findHexagramByLines(lines: boolean[], hexagrams: Hexagram[]): Hexagram | null {
    for (const hexagram of hexagrams) {
        const hexagramLines = getHexagramLines(hexagram);
        if (areLinesEqual(lines, hexagramLines)) {
            return hexagram;
        }
    }
    return null;
}

// 查找相错卦
export function findInverseHexagramById(hexagramId: number, hexagrams: Hexagram[]): Hexagram | null {
    const hexagram = hexagrams.find(h => h.number === hexagramId);
    if (!hexagram) return null;
    
    const lines = getHexagramLines(hexagram);
    const inverseLines = findInverseHexagram(lines);
    return findHexagramByLines(inverseLines, hexagrams);
}

// 查找相综卦
export function findComplementHexagramById(hexagramId: number, hexagrams: Hexagram[]): Hexagram | null {
    const hexagram = hexagrams.find(h => h.number === hexagramId);
    if (!hexagram) return null;
    
    const lines = getHexagramLines(hexagram);
    const complementLines = findComplementHexagram(lines);
    return findHexagramByLines(complementLines, hexagrams);
}

// 查找互卦
export function findNuclearHexagramById(hexagramId: number, hexagrams: Hexagram[]): Hexagram | null {
    const hexagram = hexagrams.find(h => h.number === hexagramId);
    if (!hexagram) return null;
    
    const lines = getHexagramLines(hexagram);
    const nuclearLines = findNuclearHexagram(lines);
    return findHexagramByLines(nuclearLines, hexagrams);
}

// 比较两个卦象是否相同
export function areLinesEqual(lines1: boolean[], lines2: boolean[]): boolean {
    if (lines1.length !== lines2.length) return false;
    return lines1.every((line, index) => line === lines2[index]);
}

// 计算两个卦象的相似度 (0-1)
export function calculateSimilarity(lines1: boolean[], lines2: boolean[]): number {
    if (lines1.length !== lines2.length) return 0;
    
    const matches = lines1.reduce((count, line, index) => {
        return count + (line === lines2[index] ? 1 : 0);
    }, 0);
    
    return matches / lines1.length;
}

// 分析两个卦象的关系
export function analyzeRelation(hex1: HexagramNode, hex2: HexagramNode): HexagramEdge | null {
    const lines1 = hex1.lines;
    const lines2 = hex2.lines;
    
    // 检查相错关系
    const inverse = findInverseHexagram(lines1);
    if (areLinesEqual(inverse, lines2)) {
        return {
            source: hex1.id,
            target: hex2.id,
            relation: RelationType.INVERSE,
            weight: 8,
            description: `${hex1.chineseName}与${hex2.chineseName}互为相错卦`
        };
    }
    
    // 检查相综关系
    const complement = findComplementHexagram(lines1);
    if (areLinesEqual(complement, lines2)) {
        return {
            source: hex1.id,
            target: hex2.id,
            relation: RelationType.COMPLEMENT,
            weight: 8,
            description: `${hex1.chineseName}与${hex2.chineseName}互为相综卦`
        };
    }
    
    // 检查互卦关系
    const nuclear = findNuclearHexagram(lines1);
    if (areLinesEqual(nuclear, lines2)) {
        return {
            source: hex1.id,
            target: hex2.id,
            relation: RelationType.NUCLEAR,
            weight: 6,
            description: `${hex2.chineseName}是${hex1.chineseName}的互卦`
        };
    }
    
    // 检查八卦关系 (上卦或下卦相同)
    if (hex1.upperTrigram === hex2.upperTrigram || 
        hex1.lowerTrigram === hex2.lowerTrigram) {
        return {
            source: hex1.id,
            target: hex2.id,
            relation: RelationType.TRIGRAM,
            weight: 3,
            description: `${hex1.chineseName}与${hex2.chineseName}共享相同的八卦`
        };
    }
    
    // 检查变爻关系 (只有一爻不同)
    const differences = lines1.reduce((count, line, index) => {
        return count + (line !== lines2[index] ? 1 : 0);
    }, 0);
    
    if (differences === 1) {
        return {
            source: hex1.id,
            target: hex2.id,
            relation: RelationType.CHANGING,
            weight: 5,
            description: `${hex1.chineseName}变一爻得${hex2.chineseName}`
        };
    }
    
    return null;
}

// 生成所有卦象的关系网络
export function generateHexagramNetwork(hexagrams: Hexagram[]): {
    nodes: HexagramNode[];
    edges: HexagramEdge[];
} {
    const nodes: HexagramNode[] = hexagrams.map(hexagramToNode);
    const edges: HexagramEdge[] = [];
      // 分析每对卦象的关系
    for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
            const node1 = nodes[i];
            const node2 = nodes[j];
            if (node1 && node2) {
                const relation = analyzeRelation(node1, node2);
                if (relation) {
                    edges.push(relation);
                    
                    // 添加反向关系 (如果是对称关系)
                    if (relation.relation === RelationType.INVERSE || 
                        relation.relation === RelationType.COMPLEMENT) {
                        edges.push({
                            source: relation.target,
                            target: relation.source,
                            relation: relation.relation,
                            weight: relation.weight,
                            description: relation.description
                        });
                    }
                }
            }
        }
    }
    
    return { nodes, edges };
}

// 按关系类型过滤边
export function filterEdgesByRelation(
    edges: HexagramEdge[], 
    relations: RelationType[]
): HexagramEdge[] {
    return edges.filter(edge => relations.includes(edge.relation));
}

// 查找特定卦象的所有关系
export function findHexagramRelations(
    hexagramId: number, 
    edges: HexagramEdge[]
): HexagramEdge[] {
    return edges.filter(edge => 
        edge.source === hexagramId || edge.target === hexagramId
    );
}

// 计算网络统计信息
export interface NetworkStats {
    totalNodes: number;
    totalEdges: number;
    relationCounts: Record<RelationType, number>;
    averageConnections: number;
    mostConnectedHexagram: { id: number; connections: number };
}

export function calculateNetworkStats(
    nodes: HexagramNode[], 
    edges: HexagramEdge[]
): NetworkStats {
    const relationCounts = Object.values(RelationType).reduce((acc, type) => {
        acc[type] = edges.filter(edge => edge.relation === type).length;
        return acc;
    }, {} as Record<RelationType, number>);
    
    // 计算每个卦象的连接数
    const connectionCounts = nodes.map(node => ({
        id: node.id,
        connections: edges.filter(edge => 
            edge.source === node.id || edge.target === node.id
        ).length
    }));
    
    const mostConnected = connectionCounts.reduce((max, current) => 
        current.connections > max.connections ? current : max
    );
    
    return {
        totalNodes: nodes.length,
        totalEdges: edges.length,
        relationCounts,
        averageConnections: edges.length * 2 / nodes.length,
        mostConnectedHexagram: mostConnected
    };
}
