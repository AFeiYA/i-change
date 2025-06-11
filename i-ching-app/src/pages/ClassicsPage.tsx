import React from 'react';
import { Link } from 'react-router-dom';
import { hexagrams } from '../data/hexagrams';

const ClassicsPage: React.FC = () => {
    return (
        <div className="container">
            <h1>📚 易经六十四卦</h1>
            <p>探索易经的经典卦象，了解古老的智慧</p>

            <div className="hexagram-grid">
                {hexagrams.map((hexagram) => (
                    <Link
                        key={hexagram.number}
                        to={`/hexagram/${hexagram.number}`}
                        className="hexagram-card"
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
        </div>
    );
};

export default ClassicsPage;