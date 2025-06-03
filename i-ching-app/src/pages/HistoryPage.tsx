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
    };

    return (
        <div className="container">
            <div className="history-page">
                <h1>📜 占卜历史</h1>
                
                {history.length === 0 ? (
                    <div className="empty-history">
                        <p>还没有任何占卜记录</p>
                        <p>去<a href="/divination">占卜页面</a>开始您的第一次占卜吧！</p>
                    </div>
                ) : (
                    <>
                        <div className="history-controls">
                            <div className="filter-sort">                                <select 
                                    value={sortBy} 
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        setSortBy(value === 'method' ? 'method' : 'date');
                                    }}
                                    className="control-select"
                                >
                                    <option value="date">按日期排序</option>
                                    <option value="method">按方法排序</option>
                                </select>
                                
                                <select 
                                    value={filterMethod} 
                                    onChange={(e) => setFilterMethod(e.target.value)}
                                    className="control-select"
                                >
                                    <option value="all">所有方法</option>
                                    <option value="random">快速占卜</option>
                                    <option value="coin">三币占卜</option>
                                    <option value="yarrow">蓍草占卜</option>
                                </select>
                            </div>
                            
                            <button 
                                onClick={handleClearHistory}
                                className="clear-btn"
                            >
                                🗑️ 清空历史
                            </button>
                        </div>

                        <div className="history-layout">
                            <div className="history-list">
                                <h3>历史记录 ({filteredHistory.length})</h3>
                                {sortedHistory.map((divination) => (
                                    <div 
                                        key={divination.id}
                                        className={`history-item ${selectedDivination?.id === divination.id ? 'selected' : ''}`}
                                        onClick={() => setSelectedDivination(divination)}
                                    >
                                        <div className="history-item-header">
                                            <span className="hexagram-unicode">{divination.hexagram.unicode}</span>
                                            <span className="hexagram-name">{divination.hexagram.name}</span>
                                            <button 
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleDeleteDivination(divination.id);
                                                }}
                                                className="delete-btn"
                                                title="删除"
                                            >
                                                ❌
                                            </button>
                                        </div>
                                        <div className="history-item-info">
                                            <div className="date">{formatDate(divination.date)}</div>
                                            <div className="method">{getMethodName(divination.method)}</div>
                                            {divination.changingLines && divination.changingLines.length > 0 && (
                                                <div className="changing-lines-info">
                                                    变爻: {divination.changingLines.join(', ')}
                                                </div>
                                            )}
                                        </div>
                                        <div className="question-preview">
                                            {divination.question}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="history-detail">
                                {selectedDivination ? (
                                    <div className="divination-detail">
                                        <h3>占卜详情</h3>
                                        <div className="detail-info">
                                            <p><strong>时间:</strong> {formatDate(selectedDivination.date)}</p>
                                            <p><strong>方法:</strong> {getMethodName(selectedDivination.method)}</p>
                                            <p><strong>问题:</strong> {selectedDivination.question}</p>
                                        </div>
                                        
                                        <HexagramDisplay hexagram={selectedDivination.hexagram} />
                                        
                                        {selectedDivination.changingLines && selectedDivination.changingLines.length > 0 && (
                                            <div className="changing-lines-detail">
                                                <h4>🔄 变爻信息</h4>
                                                <p>第 {selectedDivination.changingLines.join(', ')} 爻为变爻</p>
                                                {selectedDivination.secondaryHexagram && (
                                                    <div className="secondary-hexagram">
                                                        <h4>变化后的卦象：</h4>
                                                        <HexagramDisplay hexagram={selectedDivination.secondaryHexagram} />
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <div className="no-selection">
                                        <p>选择左侧的历史记录查看详情</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default HistoryPage;
