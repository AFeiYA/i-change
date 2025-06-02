import React, { useState } from 'react';
import HexagramDisplay from '../components/HexagramDisplay';
import { generateHexagram, performCoinDivination } from '../services/divinationService';
import { Hexagram } from '../data/hexagrams';

const DivinationPage: React.FC = () => {
    const [hexagram, setHexagram] = useState<Hexagram | null>(null);
    const [isDrawing, setIsDrawing] = useState(false);

    const handleQuickDivination = () => {
        setIsDrawing(true);
        
        // 添加一些延迟效果，模拟占卜过程
        setTimeout(() => {
            const newHexagram = generateHexagram();
            setHexagram(newHexagram);
            setIsDrawing(false);
            
            // 更新占卜次数统计
            const currentCount = parseInt(localStorage.getItem('divinationCount') || '0');
            localStorage.setItem('divinationCount', (currentCount + 1).toString());
        }, 1500);
    };

    const handleCoinDivination = () => {
        setIsDrawing(true);
        
        setTimeout(() => {
            const newHexagram = performCoinDivination();
            setHexagram(newHexagram);
            setIsDrawing(false);
            
            // 更新占卜次数统计
            const currentCount = parseInt(localStorage.getItem('divinationCount') || '0');
            localStorage.setItem('divinationCount', (currentCount + 1).toString());
        }, 2000);
    };

    return (
        <div className="container">
            <div className="divination-page">
                <h1>🎋 易经占卜</h1>
                <p>诚心求卦，静心思考你想要了解的问题，然后选择占卜方式：</p>
                
                <div className="divination-buttons">
                    <button 
                        onClick={handleQuickDivination} 
                        disabled={isDrawing}
                        className="divination-btn"
                    >
                        {isDrawing ? "正在求卦..." : "📿 快速占卜"}
                    </button>
                    
                    <button 
                        onClick={handleCoinDivination} 
                        disabled={isDrawing}
                        className="divination-btn"
                    >
                        {isDrawing ? "投掷硬币中..." : "🪙 三币占卜"}
                    </button>
                </div>

                {isDrawing && (
                    <div className="drawing-animation">
                        <p>🔮 天机运转中，请稍候...</p>
                    </div>
                )}

                {hexagram && !isDrawing && <HexagramDisplay hexagram={hexagram} />}
            </div>
        </div>
    );
};

export default DivinationPage;