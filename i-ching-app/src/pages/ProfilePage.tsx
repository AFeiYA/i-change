import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { SoundEffects } from '../utils/soundEffects';
import { 
    PageHeader, 
    StatCard,
    Button,
    BackgroundDecoration 
} from '../components/common';
import { 
    getUserStats, 
    getUserPreferences, 
    saveUserPreferences, 
    getDivinationHistory, 
    exportUserData, 
    importUserData 
} from '../services/dataService';
import { UserStats, UserPreferences } from '../services/dataService';

// Achievement system
interface Achievement {
    id: string;
    title: string;
    description: string;
    icon: string;
    unlocked: boolean;
    progress?: number;
    maxProgress?: number;
}

const ProfilePage: React.FC = () => {
    const { theme, setTheme } = useTheme();
    const [stats, setStats] = useState<UserStats>({ totalDivinations: 0, methodCounts: {}, favoriteMethods: [] });
    const [preferences, setPreferences] = useState<UserPreferences>({ theme: 'light', language: 'zh-CN', autoSave: true });
    const [isExporting, setIsExporting] = useState(false);
    const [achievements, setAchievements] = useState<Achievement[]>([]);
    const [recentActivity, setRecentActivity] = useState<any[]>([]);
    const [selectedTimePeriod, setSelectedTimePeriod] = useState<'week' | 'month' | 'year'>('month');

    useEffect(() => {
        loadUserData();
        loadAchievements();
        loadRecentActivity();
    }, []);

    const loadUserData = () => {
        const userStats = getUserStats();
        setStats(userStats);
        const userPrefs = getUserPreferences();
        setPreferences(userPrefs);
        
        // 同步音效设置
        SoundEffects.setEnabled(userPrefs.soundEnabled !== false);
    };

    const loadAchievements = () => {
        const userStats = getUserStats();
        const achievements: Achievement[] = [
            {
                id: 'first_divination',
                title: '初次问卜',
                description: '完成第一次占卜',
                icon: '🌱',
                unlocked: userStats.totalDivinations >= 1
            },
            {
                id: 'regular_user',
                title: '问卜达人',
                description: '完成10次占卜',
                icon: '⭐',
                unlocked: userStats.totalDivinations >= 10,
                progress: Math.min(userStats.totalDivinations, 10),
                maxProgress: 10
            },
            {
                id: 'master_seeker',
                title: '智慧求索者',
                description: '完成100次占卜',
                icon: '🏆',
                unlocked: userStats.totalDivinations >= 100,
                progress: Math.min(userStats.totalDivinations, 100),
                maxProgress: 100
            },
            {
                id: 'method_explorer',
                title: '方法探索者',
                description: '尝试所有占卜方法',
                icon: '🧭',
                unlocked: Object.keys(userStats.methodCounts).length >= 3,
                progress: Object.keys(userStats.methodCounts).length,
                maxProgress: 3
            },
            {
                id: 'daily_practice',
                title: '每日修行',
                description: '连续7天进行占卜',
                icon: '📿',
                unlocked: false, // TODO: implement streak tracking
                progress: 0,
                maxProgress: 7
            }
        ];
        setAchievements(achievements);
    };

    const loadRecentActivity = () => {
        const history = getDivinationHistory();
        const now = new Date();
        let cutoffDate = new Date();
        
        switch(selectedTimePeriod) {
            case 'week':
                cutoffDate.setDate(now.getDate() - 7);
                break;
            case 'month':
                cutoffDate.setMonth(now.getMonth() - 1);
                break;
            case 'year':
                cutoffDate.setFullYear(now.getFullYear() - 1);
                break;
        }

        const recentEntries = history
            .filter(entry => new Date(entry.date) >= cutoffDate)
            .slice(0, 10)
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        
        setRecentActivity(recentEntries);
    };

    useEffect(() => {
        loadRecentActivity();
    }, [selectedTimePeriod]);

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
                        loadAchievements();
                        loadRecentActivity();
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

    const getActivityTimeAgo = (date: Date) => {
        const now = new Date();
        const activity = new Date(date);
        const diffMs = now.getTime() - activity.getTime();
        const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
        const diffDays = Math.floor(diffHours / 24);
        
        if (diffDays > 0) {
            return `${diffDays}天前`;
        } else if (diffHours > 0) {
            return `${diffHours}小时前`;
        } else {
            return '刚刚';
        }
    };

    const getInsightText = () => {
        const totalDivinations = stats.totalDivinations;
        if (totalDivinations === 0) return "开始您的易经智慧之旅吧！";
        if (totalDivinations < 5) return "继续探索，智慧正在积累";
        if (totalDivinations < 20) return "您正在稳步前进在易经的道路上";
        if (totalDivinations < 50) return "您已经是一位有经验的求卜者了";
        return "您在易经修行的道路上已经颇有造诣";
    };

    return (
        <div className="container">
            <div className="profile-page">
                <div className="profile-header">
                    <h1>🔮 我的易经</h1>
                    <p className="profile-subtitle">探索智慧之路，记录心灵感悟</p>
                    <div className="profile-insight">
                        <span className="insight-text">{getInsightText()}</span>
                    </div>
                </div>
                
                <div className="profile-sections">
                    {/* 统计信息部分 */}
                    <section className="stats-section">
                        <h2>📊 占卜统计</h2>
                        <div className="stats-grid">
                            <div className="stat-card main-stat">
                                <div className="stat-icon">🎯</div>
                                <div className="stat-number">{stats.totalDivinations}</div>
                                <div className="stat-label">总占卜次数</div>
                            </div>
                            
                            {Object.entries(stats.methodCounts).length > 0 && (
                                <div className="stat-card secondary-stat">
                                    <div className="stat-icon">📈</div>
                                    <div className="stat-number">{Object.keys(stats.methodCounts).length}</div>
                                    <div className="stat-label">使用方法数</div>
                                </div>
                            )}

                            <div className="stat-card secondary-stat">
                                <div className="stat-icon">🔥</div>
                                <div className="stat-number">{achievements.filter(a => a.unlocked).length}</div>
                                <div className="stat-label">已解锁成就</div>
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

                    {/* 成就系统 */}
                    <section className="achievements-section">
                        <h2>🏆 成就徽章</h2>
                        <div className="achievements-grid">
                            {achievements.map(achievement => (
                                <div 
                                    key={achievement.id} 
                                    className={`achievement-card ${achievement.unlocked ? 'unlocked' : 'locked'}`}
                                >
                                    <div className="achievement-icon">{achievement.icon}</div>
                                    <div className="achievement-content">
                                        <h4 className="achievement-title">{achievement.title}</h4>
                                        <p className="achievement-description">{achievement.description}</p>
                                        {achievement.maxProgress && (
                                            <div className="achievement-progress">
                                                <div className="progress-bar">
                                                    <div 
                                                        className="progress-fill"
                                                        style={{ width: `${((achievement.progress || 0) / achievement.maxProgress) * 100}%` }}
                                                    ></div>
                                                </div>
                                                <span className="progress-text">
                                                    {achievement.progress || 0} / {achievement.maxProgress}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 最近活动 */}
                    <section className="activity-section">
                        <h2>📅 最近活动</h2>
                        <div className="activity-controls">
                            <select 
                                value={selectedTimePeriod} 
                                onChange={(e) => setSelectedTimePeriod(e.target.value as 'week' | 'month' | 'year')}
                                className="time-period-select"
                            >
                                <option value="week">最近一周</option>
                                <option value="month">最近一月</option>
                                <option value="year">最近一年</option>
                            </select>
                        </div>
                        <div className="activity-timeline">
                            {recentActivity.length > 0 ? (
                                recentActivity.map((activity, index) => (
                                    <div key={index} className="activity-item">
                                        <div className="activity-dot"></div>
                                        <div className="activity-content">
                                            <div className="activity-header">
                                                <span className="activity-method">{getMethodName(activity.method)}</span>
                                                <span className="activity-time">{getActivityTimeAgo(activity.date)}</span>
                                            </div>
                                            {activity.question && (
                                                <div className="activity-question">
                                                    问题：{activity.question.length > 30 ? activity.question.substring(0, 30) + '...' : activity.question}
                                                </div>
                                            )}
                                            {activity.hexagram && (
                                                <div className="activity-hexagram">
                                                    得卦：{activity.hexagram.name}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="no-activity">
                                    <span className="no-activity-icon">🌸</span>
                                    <p>该时期暂无占卜记录</p>
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