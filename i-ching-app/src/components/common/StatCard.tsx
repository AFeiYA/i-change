import React from 'react';

export interface StatCardProps {
    icon: string;
    value: number | string;
    label: string;
    className?: string;
    gradient?: string;
}

const StatCard: React.FC<StatCardProps> = ({ 
    icon, 
    value, 
    label, 
    className = '', 
    gradient 
}) => {
    const cardStyle = gradient ? { background: gradient } : {};
    
    return (
        <div className={`stat-card ${className}`} style={cardStyle}>
            <div className="stat-icon">{icon}</div>
            <div className="stat-number">{value}</div>
            <div className="stat-label">{label}</div>
        </div>
    );
};

export default StatCard;
