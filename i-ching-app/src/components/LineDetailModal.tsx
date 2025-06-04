import React, { useState } from 'react';
import { Hexagram } from '../data/hexagrams';

interface LineDetail {
    position: number; // 1-6，从下到上
    type: 'yin' | 'yang';
    name: string;
    description: string;
    meaning: string;
    advice: string;
}

interface LineDetailModalProps {
    hexagram: Hexagram;
    linePosition: number; // 1-6
    isOpen: boolean;
    onClose: () => void;
}

const LineDetailModal: React.FC<LineDetailModalProps> = ({
    hexagram,
    linePosition,
    isOpen,
    onClose
}) => {
    if (!isOpen) return null;    // 从hexagram.lines数组中获取对应爻线（注意索引转换）
    const lineIndex = linePosition - 1;
    const lineString = hexagram.lines[lineIndex];
    
    if (!lineString) {
        return null; // 如果没有找到对应的爻线，不显示模态框
    }
    
    const isYang = !lineString.includes(' '); // 实线为阳爻，虚线为阴爻

    // 生成爻线详细信息（这里是示例数据，实际应该从数据库获取）
    const getLineDetail = (): LineDetail => {
        const lineNames = ['初', '二', '三', '四', '五', '上'];
        const positionName = lineNames[linePosition - 1];
        
        return {
            position: linePosition,
            type: isYang ? 'yang' : 'yin',
            name: `${isYang ? '九' : '六'}${positionName}`,
            description: `第${linePosition}爻：${isYang ? '阳爻' : '阴爻'}`,
            meaning: getLineMeaning(hexagram.number, linePosition, isYang),
            advice: getLineAdvice(hexagram.number, linePosition, isYang)
        };
    };

    const lineDetail = getLineDetail();

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="line-detail-modal" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>
                        {hexagram.chineseName} • {lineDetail.name}
                    </h2>
                    <button className="close-btn" onClick={onClose}>✕</button>
                </div>
                
                <div className="modal-content">
                    <div className="line-visual">
                        <div className={`large-line ${lineDetail.type}`}>
                            {isYang ? (
                                <div className="line-solid" />
                            ) : (
                                <div className="line-broken">
                                    <div className="line-segment" />
                                    <div className="line-gap" />
                                    <div className="line-segment" />
                                </div>
                            )}
                        </div>
                        <div className="line-info">
                            <span className="line-position">第{linePosition}爻</span>
                            <span className="line-type">{isYang ? '阳爻 ☰' : '阴爻 ☷'}</span>
                        </div>
                    </div>

                    <div className="line-details">
                        <section>
                            <h3>📖 爻义</h3>
                            <p>{lineDetail.meaning}</p>
                        </section>

                        <section>
                            <h3>💡 启示</h3>
                            <p>{lineDetail.advice}</p>
                        </section>

                        <section>
                            <h3>🎯 位置含义</h3>
                            <p>{getPositionMeaning(linePosition)}</p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

// 获取爻线含义（基于卦象和位置）
function getLineMeaning(hexagramNumber: number, position: number, isYang: boolean): string {
    // 这里应该有完整的爻辞数据库，现在提供基础示例
    const generalMeanings = {
        1: isYang ? "初九：潜龙勿用。" : "初六：谦逊待时，不宜妄动。",
        2: isYang ? "九二：见龙在田，利见大人。" : "六二：顺从中正，得位得时。",
        3: isYang ? "九三：君子终日干干，夕惕若厉，无咎。" : "六三：处下卦之上，需谨慎行事。",
        4: isYang ? "九四：或跃在渊，无咎。" : "六四：近上位而有应，谦逊为宜。",
        5: isYang ? "九五：飞龙在天，利见大人。" : "六五：居尊位而中正，德行圆满。",
        6: isYang ? "上九：亢龙有悔。" : "上六：盈极必衰，宜知进退。"
    };
    
    return generalMeanings[position as keyof typeof generalMeanings] || "此爻需要具体分析。";
}

// 获取爻线建议
function getLineAdvice(hexagramNumber: number, position: number, isYang: boolean): string {
    const positionAdvice = [
        "初爻代表事物的开始，宜谨慎布局，不宜急进。",
        "二爻为内卦中位，宜秉持中正之道，稳步前行。", 
        "三爻处内卦之上，需防范风险，谨慎决策。",
        "四爻为外卦开始，时机渐熟，可适当进取。",
        "五爻为君位，宜发挥领导作用，统领全局。",
        "上爻为极位，宜知止知退，避免过度。"
    ];
    
    return positionAdvice[position - 1] || "此位置需要具体分析。";
}

// 获取位置含义
function getPositionMeaning(position: number): string {
    const meanings = [
        "初爻：事物的起始阶段，象征基础和潜能。",
        "二爻：内卦中位，象征内在的中正和谐。",
        "三爻：内外卦交界，象征变化和转折点。",
        "四爻：外卦开始，象征外在表现和行动。",
        "五爻：外卦中位，君位，象征权威和统领。",
        "上爻：最高位，象征极限和终结。"
    ];
    
    return meanings[position - 1] || "此位置需要具体分析。";
}

export default LineDetailModal;
