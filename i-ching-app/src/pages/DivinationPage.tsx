import React, { useState } from 'react';
import HexagramDisplay from '../components/HexagramDisplay';
import { 
    generateHexagram, 
    performEnhancedCoinDivination, 
    performYarrowDivination,
    DivinationResult 
} from '../services/divinationService';
import { saveDivination } from '../services/dataService';
import { Hexagram } from '../data/hexagrams';

const DivinationPage: React.FC = () => {
    const [divinationResult, setDivinationResult] = useState<DivinationResult | null>(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [question, setQuestion] = useState<string>('');

    const saveDivinationResult = (result: DivinationResult, question: string) => {
        saveDivination({
            id: Date.now().toString(),
            hexagram: result.hexagram,
            question: question || '未记录问题',
            date: new Date(),
            method: result.method,
            changingLines: result.changingLines,
            secondaryHexagram: result.secondaryHexagram
        });
    };

    const handleQuickDivination = () => {
        setIsDrawing(true);
        
        setTimeout(() => {
            const result: DivinationResult = {
                hexagram: generateHexagram(),
                method: 'random',
                changingLines: []
            };
            setDivinationResult(result);
            saveDivinationResult(result, question);
            setIsDrawing(false);
        }, 1500);
    };

    const handleCoinDivination = () => {
        setIsDrawing(true);
        
        setTimeout(() => {
            const result = performEnhancedCoinDivination();
            setDivinationResult(result);
            saveDivinationResult(result, question);
            setIsDrawing(false);
        }, 2000);
    };

    const handleYarrowDivination = () => {
        setIsDrawing(true);
        
        setTimeout(() => {
            const result = performYarrowDivination();
            setDivinationResult(result);
            saveDivinationResult(result, question);
            setIsDrawing(false);
        }, 3000);
    };

    return (
        <div className="container">
            <div className="divination-page">
                <h1>🎋 易经占卜</h1>
                <p>诚心求卦，静心思考你想要了解的问题，然后选择占卜方式：</p>
                
                <div className="question-input">
                    <label htmlFor="question">您的问题（可选）：</label>
                    <textarea
                        id="question"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        placeholder="请输入您想要询问的问题..."
                        rows={3}
                        disabled={isDrawing}
                    />
                </div>
                
                <div className="divination-buttons">
                    <button 
                        onClick={handleQuickDivination} 
                        disabled={isDrawing}
                        className="divination-btn quick"
                    >
                        {isDrawing ? "正在求卦..." : "📿 快速占卜"}
                    </button>
                    
                    <button 
                        onClick={handleCoinDivination} 
                        disabled={isDrawing}
                        className="divination-btn coin"
                    >
                        {isDrawing ? "投掷硬币中..." : "🪙 三币占卜"}
                    </button>

                    <button 
                        onClick={handleYarrowDivination} 
                        disabled={isDrawing}
                        className="divination-btn yarrow"
                    >
                        {isDrawing ? "蓍草演算中..." : "🌾 蓍草占卜"}
                    </button>
                </div>

                <div className="method-descriptions">
                    <div className="method-desc">
                        <strong>📿 快速占卜：</strong>简单快速，适合日常使用
                    </div>
                    <div className="method-desc">
                        <strong>🪙 三币占卜：</strong>传统方法，有机会产生变爻
                    </div>
                    <div className="method-desc">
                        <strong>🌾 蓍草占卜：</strong>最传统方法，变爻概率更符合古法
                    </div>
                </div>

                {isDrawing && (
                    <div className="drawing-animation">
                        <p>🔮 天机运转中，请稍候...</p>
                        <div className="loading-spinner"></div>
                    </div>
                )}

                {divinationResult && !isDrawing && (
                    <div className="divination-result">
                        <HexagramDisplay hexagram={divinationResult.hexagram} />
                        
                        {divinationResult.changingLines && divinationResult.changingLines.length > 0 && (
                            <div className="changing-lines">
                                <h3>🔄 变爻信息</h3>
                                <p>第 {divinationResult.changingLines.join(', ')} 爻为变爻</p>
                                {divinationResult.secondaryHexagram && (
                                    <div className="secondary-hexagram">
                                        <h4>变化后的卦象：</h4>
                                        <HexagramDisplay hexagram={divinationResult.secondaryHexagram} />
                                    </div>
                                )}
                            </div>
                        )}

                        <div className="method-info">
                            <small>占卜方法：{
                                divinationResult.method === 'random' ? '快速占卜' :
                                divinationResult.method === 'coin' ? '三币占卜' :
                                divinationResult.method === 'yarrow' ? '蓍草占卜' : '未知'
                            }</small>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DivinationPage;