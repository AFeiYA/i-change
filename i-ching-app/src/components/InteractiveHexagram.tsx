import React, { useState, useCallback } from 'react';
import { Hexagram } from '../data/hexagrams';

interface InteractiveHexagramProps {
    hexagram: Hexagram;
    onLineClick?: (lineIndex: number) => void;
    changingLines?: number[];
    showChangingLines?: boolean;
    showLineDetails?: boolean; // 添加这个属性以保持兼容性
}

const InteractiveHexagram: React.FC<InteractiveHexagramProps> = ({
    hexagram,
    onLineClick,
    changingLines = [],
    showChangingLines = false,
    showLineDetails = false
}) => {
    const [hoveredLine, setHoveredLine] = useState<number | null>(null);

    const handleLineClick = useCallback((lineIndex: number) => {
        if (onLineClick) {
            onLineClick(lineIndex);
        }    }, [onLineClick]);

    const renderLine = (lineStr: string, index: number) => {
        // 将字符串形式的爻线转换为数字（1为阳爻，0为阴爻）
        const line = lineStr.includes(' ') ? 0 : 1; // 包含空格的是阴爻，实线是阳爻
        const isChanging = changingLines.includes(index + 1);
        const isHovered = hoveredLine === index;
        const isClickable = !!onLineClick;
        const shouldShowChanging = showChangingLines || showLineDetails;

        return (<div
                key={index}
                className={`hexagram-line ${line === 1 ? 'yang' : 'yin'} ${
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
                {line === 1 ? (
                    // 阳爻 - 实线
                    <div className="line-solid" />
                ) : (
                    // 阴爻 - 虚线
                    <div className="line-broken">
                        <div className="line-segment" />
                        <div className="line-gap" />
                        <div className="line-segment" />
                    </div>                )}
                {isChanging && shouldShowChanging && (
                    <div className="changing-indicator">○</div>
                )}
            </div>
        );
    };

    return (
        <div className="interactive-hexagram">
            <div className="hexagram-container">                <div className="hexagram-lines">
                    {/* 从上到下渲染爻线（第6爻到第1爻） */}
                    {hexagram.lines.slice().reverse().map((line, index) => 
                        renderLine(line, 5 - index)
                    )}
                </div>
                <div className="hexagram-info">
                    <div className="hexagram-number">第{hexagram.number}卦</div>
                    <div className="hexagram-name">{hexagram.name}</div>
                    <div className="hexagram-unicode">{hexagram.unicode}</div>
                </div>
            </div>
        </div>
    );
};

export default InteractiveHexagram;
