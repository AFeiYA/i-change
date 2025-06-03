// 占卜结果类型定义
export interface DivinationResult {
    mainHexagram: number;
    changingLines: number[]; // 变爻位置 (1-6)
    changedHexagram?: number; // 变卦
    method: 'quick' | 'coin' | 'yarrow';
    timestamp: Date;
}

export interface ChangingLine {
    position: number; // 1-6 (从下到上)
    description: string;
    advice: string;
}

export interface LineInterpretation {
    position: number;
    text: string;
    meaning: string;
    isChanging: boolean;
}
