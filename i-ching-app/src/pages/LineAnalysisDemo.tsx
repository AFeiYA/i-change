import React, { useState } from 'react';
import InteractiveHexagram from '../components/InteractiveHexagram';
import { hexagrams } from '../data/hexagrams';

const LineAnalysisDemo: React.FC = () => {
    const [selectedHexagram, setSelectedHexagram] = useState(hexagrams[0]!); // 默认选择乾卦，确保不为空
    
    const handleHexagramChange = (hexagramNumber: number) => {
        const hexagram = hexagrams.find(h => h.number === hexagramNumber);
        if (hexagram) {
            setSelectedHexagram(hexagram);
        }
    };
    
    // 确保有选中的卦象
    if (!selectedHexagram) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container">
            <div className="line-analysis-demo">
                <h1>🔍 六爻详细解析演示</h1>
                
                <div className="demo-description">
                    <p>
                        这里演示了六爻详细解析功能。点击任意爻线可以查看该爻的详细含义、位置解析和建议。
                    </p>
                </div>

                <div className="hexagram-selector">
                    <h3>选择卦象：</h3>
                    <select 
                        value={selectedHexagram.number} 
                        onChange={(e) => handleHexagramChange(parseInt(e.target.value))}
                        className="hexagram-select"
                    >
                        {hexagrams.slice(0, 8).map(hexagram => (
                            <option key={hexagram.number} value={hexagram.number}>
                                第{hexagram.number}卦 - {hexagram.chineseName} ({hexagram.name})
                            </option>
                        ))}
                    </select>
                </div>

                <div className="demo-content">
                    <div className="hexagram-display">
                        <InteractiveHexagram
                            hexagram={selectedHexagram}
                            enableLineClick={true}
                            showChangingLines={false}
                        />
                    </div>
                    
                    <div className="hexagram-info">
                        <h3>{selectedHexagram.chineseName} - {selectedHexagram.name}</h3>
                        <p><strong>描述：</strong>{selectedHexagram.description}</p>
                        <p><strong>释义：</strong>{selectedHexagram.interpretation}</p>
                        <p><strong>建议：</strong>{selectedHexagram.advice}</p>
                    </div>
                </div>

                <div className="usage-instructions">
                    <h3>💡 使用说明</h3>
                    <ul>
                        <li>点击卦象中的任意爻线（横线）</li>
                        <li>会弹出该爻的详细解析窗口</li>
                        <li>包含爻线含义、位置解析和具体建议</li>
                        <li>支持阳爻（实线）和阴爻（虚线）的不同解析</li>
                        <li>每个位置（初、二、三、四、五、上）都有特定含义</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default LineAnalysisDemo;
