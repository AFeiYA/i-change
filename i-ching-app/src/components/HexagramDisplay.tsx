import React from 'react';
import { Hexagram } from '../data/hexagrams';

interface HexagramDisplayProps {
    hexagram: Hexagram;
}

const HexagramDisplay: React.FC<HexagramDisplayProps> = ({ hexagram }) => {
    return (
        <div className="detail">
            <div className="hexagram">
                <h2>第{hexagram.number}卦 - {hexagram.chineseName} ({hexagram.name})</h2>
                
                {/* Unicode字符表示 */}
                <div className="hexagram-unicode">
                    <span className="unicode-symbol">{hexagram.unicode}</span>
                </div>
                
                <div className="hexagram-lines">
                    {hexagram.lines.map((line, index) => (
                        <div key={index} className="line">
                            {line}
                        </div>
                    )).reverse()}
                </div>
                
                <div className="trigram-info">
                    <p><strong>上卦:</strong> {hexagram.upperTrigram} | <strong>下卦:</strong> {hexagram.lowerTrigram}</p>
                </div>
                
                <div className="hexagram-info">
                    <h3>卦象描述</h3>
                    <p>{hexagram.description}</p>
                    
                    <h3>卦辞</h3>
                    <p>{hexagram.interpretation}</p>
                    
                    <h3>建议</h3>
                    <p>{hexagram.advice}</p>
                </div>
            </div>
        </div>
    );
};

export default HexagramDisplay;