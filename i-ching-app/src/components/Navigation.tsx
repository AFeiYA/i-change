import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <div className="header">
      <h1>易经 I Ching</h1>
      <nav className="nav">
        <Link to="/">
          <span>🎋 占卜</span>
        </Link>
        <Link to="/classics">
          <span>📚 经典</span>
        </Link>
        <Link to="/about">
          <span>📖 传记</span>
        </Link>
        <Link to="/profile">
          <span>👤 我的</span>
        </Link>
      </nav>
    </div>
  );
};

export default Navigation;