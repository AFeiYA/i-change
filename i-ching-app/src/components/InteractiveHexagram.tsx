import React, { useState, useCallback } from 'react';
import { Hexagram } from '../data/hexagrams';
import LineDetailModal from './LineDetailModal';

interface InteractiveHexagramProps {
    hexagram: Hexagram;
    onLineClick?: (lineIndex: number) => void;
    changingLines?: number[];
    showChangingLines?: boolean;
    showLineDetails?: boolean; // 添加这个属性以保持兼容性
    enableLineClick?: boolean; // 新增：是否启用爻线点击功能
}

const InteractiveHexagram: React.FC<InteractiveHexagramProps> = ({
    hexagram,
    onLineClick,
    changingLines = [],
    showChangingLines = false,
    showLineDetails = false,
    enableLineClick = true
}) => {
    const [hoveredLine, setHoveredLine] = useState<number | null>(null);
    const [selectedLine, setSelectedLine] = useState<number | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleLineClick = useCallback((lineIndex: number) => {
        if (onLineClick) {
            onLineClick(lineIndex);
        }
        
        // 如果启用了爻线详情功能，打开模态框
        if (enableLineClick) {
            setSelectedLine(lineIndex + 1); // 转换为1-6的位置
            setIsModalOpen(true);
        }
    }, [onLineClick, enableLineClick]);    const closeModal = useCallback(() => {
        setIsModalOpen(false);
        setSelectedLine(null);
    }, []);    const renderLine = (line: string, index: number) => {
        const isYang = line === '---';
        const isChanging = changingLines.includes(index + 1);
        const isHovered = hoveredLine === index;
        const isClickable = enableLineClick || !!onLineClick;
        const shouldShowChanging = showChangingLines || showLineDetails;

        return (
            <div
                key={index}
                className={`hexagram-line ${isYang ? 'yang' : 'yin'} ${
                    isChanging && shouldShowChanging ? 'changing' : ''
                } ${isHovered ? 'hovered' : ''} ${isClickable ? 'clickable' : ''}`}
                onClick={() => isClickable && handleLineClick(index)}
                onMouseEnter={() => isClickable && setHoveredLine(index)}
                onMouseLeave={() => setHoveredLine(null)}
                role={isClickable ? 'button' : undefined}
                tabIndex={isClickable ? 0 : undefined}
                onKeyDown={(e) => {
                    if (isClickable && (e.key === 'Enter' || e.key === ' ')) {
                        e.preventDefault();
                        handleLineClick(index);
                    }
                }}
            >
                {isYang ? (
                    // 阳爻 - 实线
                    <div className="line-solid" />
                ) : (
                    // 阴爻 - 虚线
                    <div className="line-broken">
                        <div className="line-segment" />
                        <div className="line-gap" />
                        <div className="line-segment" />
                    </div>
                )}
                {isChanging && shouldShowChanging && (
                    <div className="changing-indicator">○</div>
                )}
            </div>
        );
    };return (
        <div className="interactive-hexagram">
            <div className="hexagram-container">
                <div className="hexagram-info">
                    <div className="hexagram-number">第{hexagram.number}卦</div>
                    <div className="hexagram-name">{hexagram.chineseName || hexagram.name}</div>
                    <div className="hexagram-unicode">{hexagram.unicode}</div>
                    <div className="hexagram-english-name">{hexagram.name}</div>
                </div>
                <div className="hexagram-lines">
                    {/* 从上到下渲染爻线（第6爻到第1爻） */}
                    {hexagram.lines.slice().reverse().map((line, index) => 
                        renderLine(line, 5 - index)
                    )}
                </div>
            </div>
            
            {/* 爻线详细解析模态框 */}
            {selectedLine && (
                <LineDetailModal
                    hexagram={hexagram}
                    linePosition={selectedLine}
                    isOpen={isModalOpen}
                    onClose={closeModal}
                />
            )}
        </div>
    );
};

export default InteractiveHexagram;
