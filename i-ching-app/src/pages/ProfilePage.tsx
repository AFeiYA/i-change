import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { SoundEffects } from '../utils/soundEffects';
import { 
    getUserStats, 
    getUserPreferences, 
    saveUserPreferences, 
    getDivinationHistory, 
    exportUserData, 
    importUserData 
} from '../services/dataService';
import { UserStats, UserPreferences } from '../services/dataService';

const ProfilePage: React.FC = () => {
    const { theme, setTheme } = useTheme();
    const [stats, setStats] = useState<UserStats>({ totalDivinations: 0, methodCounts: {}, favoriteMethods: [] });
    const [preferences, setPreferences] = useState<UserPreferences>({ theme: 'light', language: 'zh-CN', autoSave: true });
    const [isExporting, setIsExporting] = useState(false);

    useEffect(() => {
        loadUserData();
    }, []);

    const loadUserData = () => {
        setStats(getUserStats());
        const userPrefs = getUserPreferences();
        setPreferences(userPrefs);
        
        // 同步音效设置
        SoundEffects.setEnabled(userPrefs.soundEnabled !== false);
    };

    const handlePreferenceChange = (key: string, value: any) => {
        const newPreferences = { ...preferences, [key]: value };
        setPreferences(newPreferences);
        saveUserPreferences(newPreferences);
        
        // 同步主题设置
        if (key === 'theme') {
            setTheme(value);
        }
        
        // 同步音效设置
        if (key === 'soundEnabled') {
            SoundEffects.setEnabled(value);
        }
    };

    const handleExportData = async () => {
        setIsExporting(true);
        try {
            const data = exportUserData();
            const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `易经数据备份_${new Date().toISOString().split('T')[0]}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            alert('数据导出成功！');
        } catch (error) {
            alert('导出失败，请重试。');
        } finally {
            setIsExporting(false);
        }
    };

    const handleImportData = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const result = e.target && e.target.result;
                    const data = JSON.parse(String(result));
                    if (window.confirm('导入数据将覆盖现有数据，确定继续吗？')) {
                        importUserData(data);
                        loadUserData();
                        alert('数据导入成功！');
                    }
                } catch (error) {
                    alert('导入失败，文件格式不正确。');
                }
            };
            reader.readAsText(file);
        }
    };

    const getMethodName = (method: string) => {
        switch (method) {
            case 'random': return '快速占卜';
            case 'coin': return '三币占卜';
            case 'yarrow': return '蓍草占卜';
            default: return method;
        }
    };

    return (
        <div className="container">
            <div className="profile-page">
                <h1>👤 我的易经</h1>
                
                <div className="profile-sections">
                    {/* 统计信息部分 */}
                    <section className="stats-section">
                        <h2>📊 占卜统计</h2>
                        <div className="stats-grid">
                            <div className="stat-card">
                                <div className="stat-number">{stats.totalDivinations}</div>
                                <div className="stat-label">总占卜次数</div>
                            </div>
                            
                            {Object.entries(stats.methodCounts).length > 0 && (
                                <div className="method-stats">
                                    <h3>各方法使用统计：</h3>
                                    {Object.entries(stats.methodCounts).map(([method, count]) => (
                                        <div key={method} className="method-stat">
                                            <span className="method-name">{getMethodName(method)}</span>
                                            <span className="method-count">{count} 次</span>
                                            <div className="method-bar">
                                                <div 
                                                    className="method-progress" 
                                                    style={{ width: `${(count / stats.totalDivinations) * 100}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {stats.favoriteMethods.length > 0 && (
                                <div className="favorite-methods">
                                    <h3>常用方法：</h3>
                                    <div className="favorite-list">
                                        {stats.favoriteMethods.map((method, index) => (
                                            <span key={method} className="favorite-method">
                                                {index + 1}. {getMethodName(method)}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </section>

                    {/* 用户偏好设置 */}
                    <section className="preferences-section">
                        <h2>⚙️ 偏好设置</h2>
                        <div className="preference-item">
                            <label htmlFor="theme">主题：</label>
                            <select 
                                id="theme"
                                value={preferences.theme} 
                                onChange={(e) => handlePreferenceChange('theme', e.target.value)}
                                className="preference-select"
                            >
                                <option value="light">浅色主题</option>
                                <option value="dark">深色主题</option>
                                <option value="auto">跟随系统</option>
                            </select>
                        </div>

                        <div className="preference-item">
                            <label htmlFor="language">语言：</label>
                            <select 
                                id="language"
                                value={preferences.language} 
                                onChange={(e) => handlePreferenceChange('language', e.target.value)}
                                className="preference-select"
                            >
                                <option value="zh-CN">简体中文</option>
                                <option value="zh-TW">繁体中文</option>
                                <option value="en">English</option>
                            </select>
                        </div>

                        <div className="preference-item">
                            <label>
                                <input 
                                    type="checkbox" 
                                    checked={preferences.autoSave} 
                                    onChange={(e) => handlePreferenceChange('autoSave', e.target.checked)}
                                />
                                自动保存占卜记录
                            </label>
                        </div>

                        <div className="preference-item">
                            <label>
                                <input 
                                    type="checkbox" 
                                    checked={preferences.soundEnabled !== false} 
                                    onChange={(e) => handlePreferenceChange('soundEnabled', e.target.checked)}
                                />
                                启用音效
                            </label>
                        </div>
                    </section>

                    {/* 数据管理 */}
                    <section className="data-section">
                        <h2>💾 数据管理</h2>
                        <div className="data-actions">
                            <button 
                                onClick={handleExportData}
                                disabled={isExporting}
                                className="export-btn"
                            >
                                {isExporting ? '导出中...' : '📤 导出数据'}
                            </button>
                            
                            <label className="import-btn">
                                📥 导入数据
                                <input 
                                    type="file" 
                                    accept=".json"
                                    onChange={handleImportData}
                                    style={{ display: 'none' }}
                                />
                            </label>
                        </div>
                        <p className="data-info">
                            导出的数据包含您的占卜历史、偏好设置等信息，可用于备份或在其他设备上恢复。
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;