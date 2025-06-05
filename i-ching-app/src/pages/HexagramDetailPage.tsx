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
                        </div>
                        
                        <div className="trigram-info">
                            <p><strong>上卦:</strong> {hexagram.upperTrigram} | <strong>下卦:</strong> {hexagram.lowerTrigram}</p>
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