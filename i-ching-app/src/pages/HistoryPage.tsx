import React, { useState, useEffect } from 'react';
import { getDivinationHistory, clearDivinationHistory, deleteDivination } from '../services/dataService';
import { StoredDivination } from '../services/dataService';
import HexagramDisplay from '../components/HexagramDisplay';

const HistoryPage: React.FC = () => {
    const [history, setHistory] = useState<StoredDivination[]>([]);
    const [selectedDivination, setSelectedDivination] = useState<StoredDivination | null>(null);
    const [sortBy, setSortBy] = useState<'date' | 'method'>('date');
    const [filterMethod, setFilterMethod] = useState<string>('all');

    useEffect(() => {
        loadHistory();
    }, []);

    const loadHistory = () => {
        const historyData = getDivinationHistory();
        setHistory(historyData);
    };

    const handleClearHistory = () => {
        if (window.confirm('确定要清空所有占卜历史吗？此操作不可恢复。')) {
            clearDivinationHistory();
            setHistory([]);
            setSelectedDivination(null);
        }
    };

    const handleDeleteDivination = (id: string) => {
        if (window.confirm('确定要删除这条占卜记录吗？')) {
            deleteDivination(id);
            loadHistory();
            if (selectedDivination?.id === id) {
                setSelectedDivination(null);
            }
        }
    };

    const filteredHistory = history.filter(divination => 
        filterMethod === 'all' || divination.method === filterMethod
    );

    const sortedHistory = [...filteredHistory].sort((a, b) => {
        if (sortBy === 'date') {
            return new Date(b.date).getTime() - new Date(a.date).getTime();
        } else {
            return a.method.localeCompare(b.method);
        }
    });

    const getMethodName = (method: string) => {
        switch (method) {
            case 'random': return '快速占卜';
            case 'coin': return '三币占卜';
            case 'yarrow': return '蓍草占卜';
            default: return '未知方法';
        }
    };

    const formatDate = (date: Date | string) => {
        const d = new Date(date);
        return d.toLocaleString('zh-CN', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        });
    };    return (
        <div className="history-page">
            <div className="background-decoration">
                <div className="floating-symbols">
                    <span>☯</span>
                    <span>⚊</span>
                    <span>⚋</span>
                    <span>📜</span>
                    <span>🔮</span>
                </div>
            </div>            <div className="page-header">
                <div className="header-content">
                    <div className="title-section">
                        <h1>📜 占卜历史</h1>
                        <p className="subtitle">回顾您的占卜足迹，领悟智慧之路</p>
                    </div>
                </div>
            </div>
                
            {history.length === 0 ? (
                <div className="empty-state">
                    <div className="empty-content">
                        <div className="empty-icon">📚</div>
                        <h3>暂无占卜记录</h3>
                        <p>您还没有进行过占卜，快去开始您的第一次占卜之旅吧！</p>
                        <a href="/divination" className="cta-button">
                            🔮 开始占卜
                        </a>
                    </div>
                </div>
            ) : (                <>
                    <div className="history-layout">
                        <div className="history-list">
                            <div className="list-header">
                                <h3>历史记录</h3>
                                <span className="record-count">{filteredHistory.length} 条记录</span>
                            </div>
                            <div className="history-items">
                                {sortedHistory.map((divination) => (
                                    <div 
                                        key={divination.id}
                                        className={`history-item ${selectedDivination?.id === divination.id ? 'selected' : ''}`}
                                        onClick={() => setSelectedDivination(divination)}
                                    >
                                        <div className="item-main">
                                            <div className="hexagram-info">
                                                <span className="hexagram-unicode">{divination.hexagram.unicode}</span>
                                                <div className="hexagram-details">
                                                    <span className="hexagram-name">{divination.hexagram.name}</span>
                                                    <span className="hexagram-number">第{divination.hexagram.number}卦</span>
                                                </div>
                                            </div>
                                            <button 
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleDeleteDivination(divination.id);
                                                }}
                                                className="delete-button"
                                                title="删除这条记录"
                                            >
                                                🗑️
                                            </button>
                                        </div>
                                        
                                        <div className="item-meta">
                                            <div className="meta-item">
                                                <span className="meta-icon">📅</span>
                                                <span className="meta-text">{formatDate(divination.date)}</span>
                                            </div>
                                            <div className="meta-item">
                                                <span className="meta-icon">🔮</span>
                                                <span className="meta-text">{getMethodName(divination.method)}</span>
                                            </div>
                                            {divination.changingLines && divination.changingLines.length > 0 && (
                                                <div className="meta-item changing-lines">
                                                    <span className="meta-icon">🔄</span>
                                                    <span className="meta-text">变爻: {divination.changingLines.join(', ')}</span>
                                                </div>
                                            )}
                                        </div>
                                        
                                        <div className="question-preview">
                                            <span className="question-icon">❓</span>
                                            <span className="question-text">{divination.question}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="history-sidebar">
                            {/* 统计卡片区域 */}
                            <div className="stats-card">
                                <h3>📊 占卜统计</h3>
                                <div className="stats-grid">
                                    <div className="stat-item">
                                        <span className="stat-number">{history.length}</span>
                                        <span className="stat-label">总占卜次数</span>
                                    </div>
                                    <div className="stat-item">
                                        <span className="stat-number">{Object.keys(history.reduce((acc, item) => { acc[item.method] = true; return acc; }, {} as any)).length}</span>
                                        <span className="stat-label">使用方法数</span>
                                    </div>
                                    <div className="stat-item">
                                        <span className="stat-number">{history.filter(item => item.changingLines && item.changingLines.length > 0).length}</span>
                                        <span className="stat-label">有变爻次数</span>
                                    </div>                                                <div className="stat-item">
                                                    <span className="stat-number">{history.length > 0 ? formatDate(history.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0]?.date || new Date()).split(' ')[0] : '-'}</span>
                                                    <span className="stat-label">最近占卜</span>
                                                </div>
                                </div>
                            </div>

                            {/* 控制区域 */}
                            <div className="controls-section">
                                <h3>🎛️ 筛选控制</h3>
                                <div className="filters-group">
                                    <div className="filter-item">
                                        <label>排序方式</label>
                                        <select 
                                            value={sortBy} 
                                            onChange={(e) => {
                                                const value = e.target.value;
                                                setSortBy(value === 'method' ? 'method' : 'date');
                                            }}
                                            className="control-select"
                                        >
                                            <option value="date">📅 按日期排序</option>
                                            <option value="method">🔮 按方法排序</option>
                                        </select>
                                    </div>
                                    
                                    <div className="filter-item">
                                        <label>筛选方法</label>
                                        <select 
                                            value={filterMethod} 
                                            onChange={(e) => setFilterMethod(e.target.value)}
                                            className="control-select"
                                        >
                                            <option value="all">📋 所有方法</option>
                                            <option value="random">⚡ 快速占卜</option>
                                            <option value="coin">🪙 三币占卜</option>
                                            <option value="yarrow">🌾 蓍草占卜</option>
                                        </select>
                                    </div>
                                </div>
                                
                                <button 
                                    onClick={handleClearHistory}
                                    className="danger-button"
                                >
                                    🗑️ 清空历史
                                </button>
                            </div>

                            {/* 详情区域 */}
                            <div className="history-detail">                            {selectedDivination ? (
                                <div className="detail-content">
                                    <div className="detail-header">
                                        <h3>占卜详情</h3>
                                        <div className="detail-badge">
                                            {getMethodName(selectedDivination.method)}
                                        </div>
                                    </div>
                                    
                                    <div className="detail-info">
                                        <div className="info-grid">
                                            <div className="info-item">
                                                <span className="info-icon">📅</span>
                                                <div className="info-content">
                                                    <span className="info-label">占卜时间</span>
                                                    <span className="info-value">{formatDate(selectedDivination.date)}</span>
                                                </div>
                                            </div>
                                            <div className="info-item">
                                                <span className="info-icon">🔮</span>
                                                <div className="info-content">
                                                    <span className="info-label">占卜方法</span>
                                                    <span className="info-value">{getMethodName(selectedDivination.method)}</span>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="question-section">
                                            <span className="info-icon">❓</span>
                                            <div className="info-content">
                                                <span className="info-label">占卜问题</span>
                                                <div className="question-full">{selectedDivination.question}</div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="hexagram-section">
                                        <HexagramDisplay hexagram={selectedDivination.hexagram} />
                                    </div>
                                    
                                    {selectedDivination.changingLines && selectedDivination.changingLines.length > 0 && (
                                        <div className="changing-lines-section">
                                            <h4>🔄 变爻信息</h4>
                                            <div className="changing-info">
                                                <p>第 <strong>{selectedDivination.changingLines.join(', ')}</strong> 爻为变爻</p>
                                                <div className="changing-note">
                                                    变爻代表事态的转折点，需要特别关注这些爻的解释。
                                                </div>
                                            </div>
                                            {selectedDivination.secondaryHexagram && (
                                                <div className="secondary-hexagram">
                                                    <h5>变化后的卦象</h5>
                                                    <HexagramDisplay hexagram={selectedDivination.secondaryHexagram} />
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div className="no-selection">
                                    <div className="selection-placeholder">
                                        <div className="placeholder-icon">👈</div>
                                        <h4>选择历史记录</h4>
                                        <p>点击左侧的历史记录查看详细信息</p>
                                    </div>
                                </div>
                            )}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default HistoryPage;
