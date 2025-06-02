import React, { useState } from 'react';

const ProfilePage: React.FC = () => {
    const [divinationCount, setDivinationCount] = useState(
        parseInt(localStorage.getItem('divinationCount') || '0')
    );
    
    const [favoriteHexagrams, setFavoriteHexagrams] = useState<number[]>(
        JSON.parse(localStorage.getItem('favoriteHexagrams') || '[]')
    );

    const clearHistory = () => {
        localStorage.removeItem('divinationCount');
        localStorage.removeItem('favoriteHexagrams');
        setDivinationCount(0);
        setFavoriteHexagrams([]);
        alert('历史记录已清除');
    };

    return (
        <div className="container">
            <div className="detail">
                <h1>👤 我的易经</h1>
                
                <section>
                    <h2>📊 占卜统计</h2>
                    <div className="stats">
                        <div className="stat-item">
                            <span className="stat-number">{divinationCount}</span>
                            <span className="stat-label">总占卜次数</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">{favoriteHexagrams.length}</span>
                            <span className="stat-label">收藏卦象</span>
                        </div>
                    </div>
                </section>

                <section>
                    <h2>⭐ 收藏的卦象</h2>
                    {favoriteHexagrams.length > 0 ? (
                        <div className="favorite-list">
                            {favoriteHexagrams.map(hexagramId => (
                                <div key={hexagramId} className="favorite-item">
                                    第{hexagramId}卦
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>暂无收藏的卦象</p>
                    )}
                </section>

                <section>
                    <h2>🛠️ 设置</h2>
                    <div className="settings">
                        <button onClick={clearHistory} className="btn-danger">
                            清除历史记录
                        </button>
                    </div>
                </section>

                <section>
                    <h2>📱 应用信息</h2>
                    <div className="app-info">
                        <p><strong>版本：</strong>1.0.0</p>
                        <p><strong>更新时间：</strong>2025年6月</p>
                        <p><strong>开发者：</strong>易经爱好者</p>
                    </div>
                </section>

                <section>
                    <h2>💝 支持我们</h2>
                    <p>
                        如果您喜欢这个应用，请分享给更多朋友。
                        让古老的智慧在现代生活中发光发热。
                    </p>
                </section>
            </div>
        </div>
    );
};

export default ProfilePage;