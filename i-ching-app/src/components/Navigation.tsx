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
  };  return (
    <div className="header-wrapper">
      <div className="header">
        <div className="header-content">
          <button 
            className="theme-toggle-btn header-theme-toggle"
            onClick={toggleTheme}
            title={`切换到${currentTheme === 'light' ? '深色' : '浅色'}主题`}
          >
            {getThemeIcon()}
          </button>
          <h1>易经 I Ching</h1>
        </div>
      </div>
      <div className="nav-wrapper">
        <nav className="nav">
          <ul>
            <li>
              <Link to="/">
                <span>🎋 占卜</span>
              </Link>
            </li>
            <li>
              <Link to="/classics">
                <span>📚 经典</span>
              </Link>
            </li>
            <li>
              <Link to="/history">
                <span>📜 历史</span>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <span>📖 传记</span>
              </Link>
            </li>
            <li>
              <Link to="/profile">
                <span>👤 我的</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;