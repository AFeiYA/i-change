import { hexagrams } from '../data/hexagrams';
import { trigrams } from '../data/trigrams';

// 本地存储服务接口定义
export interface StoredDivination {
    id: string;
    date: Date;
    question: string;
    hexagram: any; // 完整的hexagram对象
    method: 'random' | 'coin' | 'yarrow';
    changingLines?: number[];
    secondaryHexagram?: any; // 变化后的hexagram对象
}

export interface UserPreferences {
    theme: 'light' | 'dark' | 'auto';
    language: 'zh-CN' | 'zh-TW' | 'en';
    autoSave: boolean;
}

export interface UserStats {
    totalDivinations: number;
    methodCounts: { [key: string]: number };
    favoriteMethods: string[];
}

// 原有的数据查询函数
export const getHexagramByNumber = (number: number) => {
    return hexagrams.find(hexagram => hexagram.number === number);
};

export const getTrigramByName = (name: string) => {
    return trigrams.find(trigram => trigram.name === name);
};

export const getAllHexagrams = () => {
    return hexagrams;
};

export const getAllTrigrams = () => {
    return trigrams;
};

// 导出简化的函数接口
export const saveDivination = (divination: StoredDivination): void => {
    const history = getDivinationHistory();
    history.unshift(divination);
    
    // 保持最多100条记录
    if (history.length > 100) {
        history.splice(100);
    }
    
    localStorage.setItem('i-ching-divination-history', JSON.stringify(history));
    updateUserStats();
};

export const getDivinationHistory = (): StoredDivination[] => {
    const stored = localStorage.getItem('i-ching-divination-history');
    if (!stored) return [];
    
    try {
        const history = JSON.parse(stored);
        return history.map((item: any) => ({
            ...item,
            date: new Date(item.date)
        }));
    } catch {
        return [];
    }
};

export const clearDivinationHistory = (): void => {
    localStorage.removeItem('i-ching-divination-history');
    updateUserStats();
};

export const deleteDivination = (id: string): void => {
    const history = getDivinationHistory();
    const filtered = history.filter(item => item.id !== id);
    localStorage.setItem('i-ching-divination-history', JSON.stringify(filtered));
    updateUserStats();
};

export const getUserPreferences = (): UserPreferences => {
    const stored = localStorage.getItem('i-ching-preferences');
    const defaults: UserPreferences = {
        theme: 'light',
        language: 'zh-CN',
        autoSave: true
    };

    if (!stored) return defaults;

    try {
        return { ...defaults, ...JSON.parse(stored) };
    } catch {
        return defaults;
    }
};

export const saveUserPreferences = (preferences: UserPreferences): void => {
    localStorage.setItem('i-ching-preferences', JSON.stringify(preferences));
};

export const getUserStats = (): UserStats => {
    const history = getDivinationHistory();
    const methodCounts: { [key: string]: number } = {};
    
    history.forEach(d => {
        methodCounts[d.method] = (methodCounts[d.method] || 0) + 1;
    });
    
    const favoriteMethods = Object.entries(methodCounts)
        .sort(([,a], [,b]) => b - a)
        .map(([method]) => method);

    return {
        totalDivinations: history.length,
        methodCounts,
        favoriteMethods
    };
};

const updateUserStats = (): void => {
    // 统计信息会实时计算，不需要单独存储
};

export const exportUserData = () => {
    return {
        history: getDivinationHistory(),
        preferences: getUserPreferences(),
        stats: getUserStats(),
        exportDate: new Date().toISOString()
    };
};

export const importUserData = (data: any): void => {
    if (data.history) {
        localStorage.setItem('i-ching-divination-history', JSON.stringify(data.history));
    }
    if (data.preferences) {
        localStorage.setItem('i-ching-preferences', JSON.stringify(data.preferences));
    }
};