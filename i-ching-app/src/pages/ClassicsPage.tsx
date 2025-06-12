import React from 'react';
import { Link } from 'react-router-dom';
import { hexagrams } from '../data/hexagrams';
import { PageHeader, ContentSection, BackgroundDecoration } from '../components/common';

const ClassicsPage: React.FC = () => {
    return (
        <div className="container">
            <BackgroundDecoration symbols={['☰', '☱', '☲', '☳', '☴', '☵', '☶', '☷']} />
            <div className="page-container classics-page">
                <PageHeader 
                    icon="📚"
                    title="易经六十四卦"
                    subtitle="探索易经的经典卦象，了解古老的智慧"
                />
                
                <ContentSection icon="🔮" title="六十四卦一览">
                    <div className="hexagram-grid">
                        {hexagrams.map((hexagram, index) => (
                            <Link 
                                key={hexagram.number} 
                                to={`/hexagram/${hexagram.number}`}
                                className="hexagram-card content-section"
                                style={{ animationDelay: `${0.1 + (index * 0.05)}s` }}
                            >
                                <div className="detail">
                                    <h3>第{hexagram.number}卦</h3>
                                    <div className="unicode-symbol">{hexagram.unicode}</div>
                                    <h4>{hexagram.chineseName}</h4>
                                    <p>{hexagram.name}</p>
                                    <div className="trigram-info">
                                        <small>{hexagram.trigrams.upper} ☰ {hexagram.trigrams.lower}</small>
                                    </div>
                                    <div className="hexagram-preview">
                                        {hexagram.lines.slice(0, 3).map((line, index) => (
                                            <div key={index} className="line-small">
                                                {line === '---' ? '━━━' : '━ ━'}
                                            </div>
                                        )).reverse()}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </ContentSection>
            </div>
        </div>
    );
};

export default ClassicsPage;