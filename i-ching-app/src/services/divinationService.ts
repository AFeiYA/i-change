import { hexagrams, Hexagram } from '../data/hexagrams';

export const generateHexagram = (): Hexagram => {
    const randomIndex = Math.floor(Math.random() * hexagrams.length);
    return hexagrams[randomIndex];
};

export const getHexagramById = (id: number): Hexagram | undefined => {
    return hexagrams.find(hexagram => hexagram.number === id);
};

export const interpretHexagram = (hexagram: Hexagram): string => {
    return hexagram.interpretation;
};

// 模拟传统的三币占卜法
export const performCoinDivination = (): Hexagram => {
    const lines: string[] = [];
    
    // 生成6爻
    for (let i = 0; i < 6; i++) {
        const coins = [
            Math.random() < 0.5 ? 2 : 3, // 正面2分，反面3分
            Math.random() < 0.5 ? 2 : 3,
            Math.random() < 0.5 ? 2 : 3
        ];
        
        const sum = coins.reduce((a, b) => a + b, 0);
        
        if (sum === 6 || sum === 9) {
            lines.push("━━━"); // 阳爻
        } else {
            lines.push("━ ━"); // 阴爻
        }
    }
    
    // 根据生成的爻查找对应的卦象（简化版本）
    return generateHexagram();
};