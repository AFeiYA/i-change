import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

const Navigation: React.FC = () => {
  const { theme, setTheme, currentTheme } = useTheme();

  const toggleTheme = () => {
    const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };

  const getThemeIcon = () => {
    return currentTheme === 'light' ? '🌙' : '☀️';
  };

  return (
    <div className="header">
      <h1>易经 I Ching</h1>
      <nav className="nav">
        <Link to="/">
          <span>🎋 占卜</span>
        </Link>        <Link to="/classics">
          <span>📚 经典</span>
        </Link>
        <Link to="/line-analysis-demo">
          <span>🔍 爻线解析</span>
        </Link>
        <Link to="/history">
          <span>📜 历史</span>
        </Link>
        <Link to="/about">
          <span>📖 传记</span>
        </Link>
        <Link to="/profile">
          <span>👤 我的</span>
        </Link>
        <button 
          className="theme-toggle-btn"
          onClick={toggleTheme}
          title={`切换到${currentTheme === 'light' ? '深色' : '浅色'}主题`}
        >
          {getThemeIcon()}
        </button>
      </nav>
    </div>
  );
};

export default Navigation;