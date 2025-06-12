import React from 'react';

export interface ContentSectionProps {
    icon: string;
    title: string;
    children: React.ReactNode;
    className?: string;
}

const ContentSection: React.FC<ContentSectionProps> = ({ 
    icon, 
    title, 
    children, 
    className = '' 
}) => {
    return (
        <div className={`content-section ${className}`}>
            <div className="section-header">
                <span className="section-icon">{icon}</span>
                <h2>{title}</h2>
            </div>
            <div className="section-content">
                {children}
            </div>
        </div>
    );
};

export default ContentSection;
