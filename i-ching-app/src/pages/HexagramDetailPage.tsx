import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { hexagrams } from '../data/hexagrams';
import { getHexagramById } from '../services/divinationService';
import InteractiveHexagram from '../components/InteractiveHexagram';

const HexagramDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const hexagram = getHexagramById(parseInt(id || '1'));

    if (!hexagram) {
        return (
            <div className="container">
                <div className="detail">
                    <h1>卦象未找到</h1>
                    <p>抱歉，您请求的卦象不存在。</p>
                    <Link to="/classics">返回卦象列表</Link>
                </div>
            </div>
        );
    }

    // 查找相关卦象 - 使用 Hexagram 接口中已定义的属性
    const oppositeHexagram = hexagrams.find(h => h.chineseName === hexagram.oppositeHexagram);
    const reverseHexagram = hexagrams.find(h => h.chineseName === hexagram.reverseHexagram);
    const nuclearHexagram = hexagrams.find(h => h.chineseName === hexagram.nuclearHexagram);

    if (!hexagram) {
        return (
            <div className="container">
                <div className="detail">
                    <h1>卦象未找到</h1>
                    <p>抱歉，您请求的卦象不存在。</p>
                    <Link to="/classics">返回卦象列表</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="hexagram-detail">
                <Link to="/classics" className="back-link">← 返回卦象列表</Link>
                
                <div className="detail">
                    <div className="hexagram">
                        <h1>第{hexagram.number}卦 - {hexagram.chineseName}</h1>
                        <h2>{hexagram.name}</h2>
                        
                        {/* 交互式卦象显示 - 可点击爻线查看详细解析 */}
                        <div className="interactive-hexagram-section">
                            <div className="interaction-hint">
                                💡 <strong>提示：</strong>点击任意爻线可查看该爻的详细含义和解析
                            </div>
                            <InteractiveHexagram
                                hexagram={hexagram}
                                enableLineClick={true}
                                showChangingLines={false}
                            />
                        </div>                        <div className="trigram-info">
                            <p><strong>上卦:</strong> {hexagram.trigrams.upper} | <strong>下卦:</strong> {hexagram.trigrams.lower}</p>
                        </div>
                          {/* 相关卦象导航按钮 */}
                        <div className="hexagram-relations">
                            <h3>🔄 相关卦象</h3>
                            <div className="relation-buttons">
                                {oppositeHexagram && (
                                    <Link 
                                        to={`/hexagram/${oppositeHexagram.number}`} 
                                        className="relation-btn inverse"
                                        title={`错卦 - 第${oppositeHexagram.number}卦 ${oppositeHexagram.chineseName}`}
                                    >
                                        <span className="btn-label">错</span>
                                        <span className="btn-detail">第{oppositeHexagram.number}卦<br/>{oppositeHexagram.chineseName}</span>
                                    </Link>
                                )}
                                {reverseHexagram && (
                                    <Link 
                                        to={`/hexagram/${reverseHexagram.number}`} 
                                        className="relation-btn complement"
                                        title={`综卦 - 第${reverseHexagram.number}卦 ${reverseHexagram.chineseName}`}
                                    >
                                        <span className="btn-label">综</span>
                                        <span className="btn-detail">第{reverseHexagram.number}卦<br/>{reverseHexagram.chineseName}</span>
                                    </Link>
                                )}
                                {nuclearHexagram && (
                                    <Link 
                                        to={`/hexagram/${nuclearHexagram.number}`} 
                                        className="relation-btn nuclear"
                                        title={`互卦 - 第${nuclearHexagram.number}卦 ${nuclearHexagram.chineseName}`}
                                    >
                                        <span className="btn-label">互</span>
                                        <span className="btn-detail">第{nuclearHexagram.number}卦<br/>{nuclearHexagram.chineseName}</span>
                                    </Link>
                                )}
                            </div>
                        </div>
                        
                        <div className="hexagram-content">
                            <section>
                                <h3>🎋 卦象描述</h3>
                                <p>{hexagram.description}</p>
                            </section>
                            
                            <section>
                                <h3>📜 卦辞</h3>
                                <p>{hexagram.interpretation}</p>
                            </section>
                            
                            <section>
                                <h3>💡 人生建议</h3>
                                <p>{hexagram.advice}</p>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HexagramDetailPage;