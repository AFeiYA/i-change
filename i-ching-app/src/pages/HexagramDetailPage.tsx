import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { hexagrams } from '../data/hexagrams';
import { getHexagramById } from '../services/divinationService';
import InteractiveHexagram from '../components/InteractiveHexagram';

const HexagramDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const hexagram = getHexagramById(parseInt(id || '1'));

    // 查找相关卦象 - 使用 Hexagram 接口中已定义的属性
    const oppositeHexagram = hexagram ? hexagrams.find(h => h.chineseName === hexagram.oppositeHexagram) : null;
    const reverseHexagram = hexagram ? hexagrams.find(h => h.chineseName === hexagram.reverseHexagram) : null;
    const nuclearHexagram = hexagram ? hexagrams.find(h => h.chineseName === hexagram.nuclearHexagram) : null;

    if (!hexagram) {
        return (
            <div className="hexagram-detail-page">
                {/* 背景装饰 */}
                <div className="background-decoration">
                    {Array.from({ length: 8 }, (_, i) => (
                        <div key={i} className={`floating-symbol symbol-${i + 1}`}>
                            {['☰', '☱', '☲', '☳', '☴', '☵', '☶', '☷'][i]}
                        </div>
                    ))}
                </div>

                <div className="container">
                    <div className="error-state">
                        <div className="error-icon">🔍</div>
                        <h1>卦象未找到</h1>
                        <p>抱歉，您请求的卦象不存在。</p>
                        <Link to="/classics" className="back-btn">
                            <span className="back-icon">←</span>
                            返回卦象列表
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="hexagram-detail-page">
            {/* 背景装饰 */}
            <div className="background-decoration">
                {Array.from({ length: 8 }, (_, i) => (
                    <div key={i} className={`floating-symbol symbol-${i + 1}`}>
                        {['☰', '☱', '☲', '☳', '☴', '☵', '☶', '☷'][i]}
                    </div>
                ))}
            </div>

            <div className="container">
                {/* 返回导航 */}
                <Link to="/classics" className="back-btn">
                    <span className="back-icon">←</span>
                    返回卦象列表
                </Link>

                {/* 页面头部 */}
                <div className="detail-header">
                    <div className="hexagram-number">第{hexagram.number}卦</div>
                    <h1 className="hexagram-title">{hexagram.chineseName}</h1>
                    <h2 className="hexagram-name">{hexagram.name}</h2>
                </div>

                {/* 交互式卦象区域 */}
                <div className="interactive-hexagram-section">
                    <div className="interaction-hint">
                        <span className="hint-icon">💡</span>
                        <span><strong>提示：</strong>点击任意爻线可查看该爻的详细含义和解析</span>
                    </div>
                    <div className="hexagram-display">                        <InteractiveHexagram
                            hexagram={hexagram}
                            enableLineClick={true}
                            showChangingLines={false}
                            showRelatedHexagrams={true}
                            relatedHexagrams={{
                                opposite: oppositeHexagram || undefined,
                                reverse: reverseHexagram || undefined,
                                nuclear: nuclearHexagram || undefined
                            }}
                        />
                    </div>
                </div>

                {/* 八卦信息 */}
                <div className="trigram-info">
                    <div className="trigram-item">
                        <span className="trigram-label">上卦</span>
                        <span className="trigram-value">{hexagram.trigrams.upper}</span>
                    </div>
                    <div className="trigram-divider">|</div>
                    <div className="trigram-item">
                        <span className="trigram-label">下卦</span>
                        <span className="trigram-value">{hexagram.trigrams.lower}</span>
                    </div>
                </div>

                {/* 内容区域 */}
                <div className="content-sections">
                    <div className="content-section">
                        <div className="section-header">
                            <span className="section-icon">🎋</span>
                            <h3>卦象描述</h3>
                        </div>
                        <div className="section-content">
                            <p>{hexagram.description}</p>
                        </div>
                    </div>
                    
                    <div className="content-section">
                        <div className="section-header">
                            <span className="section-icon">📜</span>
                            <h3>卦辞</h3>
                        </div>
                        <div className="section-content">
                            <p>{hexagram.interpretation}</p>
                        </div>
                    </div>
                    
                    <div className="content-section">
                        <div className="section-header">
                            <span className="section-icon">💡</span>
                            <h3>人生建议</h3>
                        </div>
                        <div className="section-content">
                            <p>{hexagram.advice}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HexagramDetailPage;