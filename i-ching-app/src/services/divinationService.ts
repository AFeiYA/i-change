import { hexagrams, Hexagram } from '../data/hexagrams';

// 占卜结果接口
export interface DivinationResult {
    hexagram: Hexagram;
    changingLines: number[]; // 变爻位置 (1-6)
    secondaryHexagram?: Hexagram; // 变卦
    method: 'random' | 'coin' | 'yarrow';
}

// 根据爻线数组获取卦象编号
const getHexagramByLines = (lines: number[]): Hexagram => {
    // 二进制转换为十进制来匹配卦象
    const binaryString = lines.join('');
    const decimal = parseInt(binaryString, 2);
    
    // 简化版本：根据特征模式匹配
    for (let hexagram of hexagrams) {
        const hexagramBinary = hexagram.lines.map(line => line === "━━━" ? 1 : 0);
        if (JSON.stringify(hexagramBinary) === JSON.stringify(lines)) {
            return hexagram;
        }
    }
    
    // 如果没有精确匹配，返回随机卦象
    const randomIndex = Math.floor(Math.random() * hexagrams.length);
    const selectedHexagram = hexagrams[randomIndex];
    if (!selectedHexagram) {
        // 应该不会发生，但为了类型安全，返回第一个卦象
        const firstHexagram = hexagrams[0];
        if (!firstHexagram) {
            throw new Error('hexagrams array is empty');
        }
        return firstHexagram;
    }
    return selectedHexagram;
};

export const generateHexagram = (): Hexagram => {
    const randomIndex = Math.floor(Math.random() * hexagrams.length);
    const selectedHexagram = hexagrams[randomIndex];
    if (!selectedHexagram) {
        const firstHexagram = hexagrams[0];
        if (!firstHexagram) {
            throw new Error('hexagrams array is empty');
        }
        return firstHexagram;
    }
    return selectedHexagram;
};

export const getHexagramById = (id: number): Hexagram | undefined => {
    return hexagrams.find(hexagram => hexagram.number === id);
};

export const interpretHexagram = (hexagram: Hexagram): string => {
    return hexagram.interpretation;
};

// 快速占卜法（原有的简单随机方法）
export const quickDivination = (): DivinationResult => {
    const hexagram = generateHexagram();
    return {
        hexagram,
        changingLines: [],
        method: 'random'
    };
};

// 传统蓍草占卜法
export const performYarrowDivination = (): DivinationResult => {
    const lines: number[] = [];
    const changingLines: number[] = [];
    
    for (let i = 0; i < 6; i++) {
        // 模拟蓍草占卜的复杂过程
        const firstDivision = Math.floor(Math.random() * 49) + 1;
        const secondDivision = Math.floor(Math.random() * (firstDivision - 1)) + 1;
        const thirdDivision = Math.floor(Math.random() * (secondDivision - 1)) + 1;
        
        // 计算余数确定爻的性质
        const remainder = (firstDivision + secondDivision + thirdDivision) % 4;
        
        if (remainder === 0) { // 老阳 - 阳爻变阴爻
            lines.push(1);
            changingLines.push(i + 1);
        } else if (remainder === 1) { // 少阴 - 阴爻不变
            lines.push(0);
        } else if (remainder === 2) { // 少阳 - 阳爻不变
            lines.push(1);
        } else { // 老阴 - 阴爻变阳爻
            lines.push(0);
            changingLines.push(i + 1);
        }
    }
    
    const hexagram = getHexagramByLines(lines);
    let secondaryHexagram: Hexagram | undefined;
    
    if (changingLines.length > 0) {
        const changedLines = [...lines];
        changingLines.forEach(pos => {
            changedLines[pos - 1] = changedLines[pos - 1] === 1 ? 0 : 1;
        });
        secondaryHexagram = getHexagramByLines(changedLines);
    }
    
    return {
        hexagram,
        changingLines,
        secondaryHexagram,
        method: 'yarrow'
    };
};

// 模拟传统的三币占卜法（增强版）
export const performEnhancedCoinDivination = (): DivinationResult => {
    const lines: number[] = [];
    const changingLines: number[] = [];
    
    // 生成6爻
    for (let i = 0; i < 6; i++) {
        const coins = [
            Math.random() < 0.5 ? 'heads' : 'tails',
            Math.random() < 0.5 ? 'heads' : 'tails',
            Math.random() < 0.5 ? 'heads' : 'tails'
        ];
        
        const headsCount = coins.filter(coin => coin === 'heads').length;
        
        if (headsCount === 3) { // 老阳
            lines.push(1);
            changingLines.push(i + 1);
        } else if (headsCount === 2) { // 少阴
            lines.push(0);
        } else if (headsCount === 1) { // 少阳
            lines.push(1);
        } else { // 老阴
            lines.push(0);
            changingLines.push(i + 1);
        }
    }
    
    const hexagram = getHexagramByLines(lines);
    let secondaryHexagram: Hexagram | undefined;
    
    if (changingLines.length > 0) {
        const changedLines = [...lines];
        changingLines.forEach(pos => {
            changedLines[pos - 1] = changedLines[pos - 1] === 1 ? 0 : 1;
        });
        secondaryHexagram = getHexagramByLines(changedLines);
    }
    
    return {
        hexagram,
        changingLines,
        secondaryHexagram,
        method: 'coin'
    };
};