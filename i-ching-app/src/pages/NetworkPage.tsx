import React, { useState } from 'react';
import { hexagrams } from '../data/hexagrams';
import HexagramNetwork from '../components/HexagramNetwork';
import { HexagramNode, RelationType } from '../utils/hexagramRelations';

const NetworkPage: React.FC = () => {
    const [selectedHexagram, setSelectedHexagram] = useState<HexagramNode | null>(null);

    const handleNodeClick = (node: HexagramNode) => {
        setSelectedHexagram(node);
    };

    const relationDescriptions = {
        [RelationType.INVERSE]: {
            name: '相错',
            description: '卦象上下完全颠倒的关系，阴阳完全相反',
            color: '#e74c3c'
        },
        [RelationType.COMPLEMENT]: {
            name: '相综',
            description: '卦象左右翻转180度的关系，体现对立统一',
            color: '#3498db'
        },
        [RelationType.NUCLEAR]: {
            name: '互卦',
            description: '由第2-5爻组成的内卦关系，揭示内在联系',
            color: '#2ecc71'
        },
        [RelationType.CHANGING]: {
            name: '变卦',
            description: '仅有一爻不同的相邻关系，显示渐进变化',
            color: '#f39c12'
        },
        [RelationType.TRIGRAM]: {
            name: '八卦',
            description: '共享相同上卦或下卦的关系，展现基础结构',
            color: '#9b59b6'
        }
    };

    return (
        <div className="network-page">
            <div className="container">
                <div className="network-header">
                    <h1>🕸️ 卦象关系网络图</h1>                    <p>
                        探索64卦之间的深层关系网络。通过交互式可视化图表，发现相错、相综、互卦、变卦和八卦关系，
                        理解易经卦象系统的内在联系和变化规律。点击节点查看详情并聚焦相关关系，拖拽节点调整布局，使用筛选器专注特定关系类型。
                    </p>
                </div>

                <div className="hexagram-network">
                    <HexagramNetwork
                        hexagrams={hexagrams}
                        onNodeClick={handleNodeClick}
                        width={1000}
                        height={600}
                        enableFilters={true}
                    />
                    
                    <div className="relation-legend">
                        <h4>🎨 关系类型说明</h4>
                        {Object.entries(relationDescriptions).map(([type, info]) => (
                            <div key={type} className="legend-item">
                                <div 
                                    className="legend-color" 
                                    style={{ backgroundColor: info.color }}
                                />
                                <div className="legend-text">
                                    <strong>{info.name}</strong>: {info.description}
                                </div>
                            </div>
                        ))}
                        
                        <div style={{ marginTop: '15px', padding: '10px', background: 'var(--bg-primary)', borderRadius: '6px' }}>
                            <h5 style={{ margin: '0 0 5px 0', color: 'var(--accent-blue)' }}>💡 使用提示</h5>                            <ul style={{ margin: 0, paddingLeft: '15px', fontSize: '0.8em', color: 'var(--text-secondary)' }}>
                                <li>鼠标滚轮缩放图表</li>
                                <li>拖拽空白区域平移视图</li>
                                <li>拖拽节点调整位置</li>
                                <li><strong>点击节点聚焦查看其相关关系</strong></li>
                                <li><strong>再次点击同一节点取消聚焦</strong></li>
                                <li>使用筛选器隐藏/显示特定关系</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {selectedHexagram && (
                    <div style={{ 
                        marginTop: '20px', 
                        padding: '20px', 
                        background: 'var(--bg-secondary)', 
                        borderRadius: '10px',
                        border: '2px solid var(--accent-blue)',
                        boxShadow: '0 4px 15px var(--shadow)'
                    }}>
                        <h3 style={{ color: 'var(--accent-blue)', marginBottom: '10px' }}>
                            📍 选中卦象：第{selectedHexagram.id}卦 - {selectedHexagram.chineseName}
                        </h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
                            <div>
                                <strong>英文名：</strong>{selectedHexagram.name}
                            </div>
                            <div>
                                <strong>卦象符号：</strong>{selectedHexagram.symbol}
                            </div>
                            <div>
                                <strong>上卦：</strong>{selectedHexagram.upperTrigram}
                            </div>
                            <div>
                                <strong>下卦：</strong>{selectedHexagram.lowerTrigram}
                            </div>
                        </div>
                        <div style={{ 
                            marginTop: '15px', 
                            textAlign: 'center' 
                        }}>
                            <a 
                                href={`/hexagram/${selectedHexagram.id}`}
                                style={{ 
                                    color: 'var(--accent-blue)', 
                                    textDecoration: 'none',
                                    padding: '8px 16px',
                                    border: '2px solid var(--accent-blue)',
                                    borderRadius: '6px',
                                    display: 'inline-block',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.background = 'var(--accent-blue)';
                                    e.currentTarget.style.color = 'white';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.background = 'transparent';
                                    e.currentTarget.style.color = 'var(--accent-blue)';
                                }}
                            >
                                查看详细解析 →
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NetworkPage;
