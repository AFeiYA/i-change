import React from 'react';

export interface PageHeaderProps {
    icon: string;
    title: string;
    subtitle?: string;
    className?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ 
    icon, 
    title, 
    subtitle, 
    className = '' 
}) => {
    return (
        <div className={`page-header ${className}`}>
            <div className="header-icon">{icon}</div>
            <h1>{title}</h1>
            {subtitle && <p className="header-subtitle">{subtitle}</p>}
        </div>
    );
};

export default PageHeader;
