import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

const Navigation: React.FC = () => {
  const { theme, setTheme, currentTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => {
    const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };

  const getThemeIcon = () => {
    return currentTheme === 'light' ? '🌙' : '☀️';
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleMenuItemClick = () => {
    // 直接关闭菜单，播放退出动画
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
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
          <button className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Toggle menu" aria-expanded={isMenuOpen}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      <div className={`nav-wrapper ${isMenuOpen ? 'open' : ''}`}>
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <ul className={isMenuOpen ? 'nav-menu open' : 'nav-menu'}>
            <li>
              <Link to="/" onClick={handleMenuItemClick}>
                <span>🎋 占卜</span>
              </Link>
            </li>
            <li>
              <Link to="/classics" onClick={handleMenuItemClick}>
                <span>📚 经典</span>
              </Link>
            </li>
            <li>
              <Link to="/history" onClick={handleMenuItemClick}>
                <span>📜 历史</span>
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={handleMenuItemClick}>
                <span>📖 传记</span>
              </Link>
            </li>
            <li>
              <Link to="/profile" onClick={handleMenuItemClick}>
                <span>👤 我的</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {isMenuOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}
    </div>
  );
};

export default Navigation;