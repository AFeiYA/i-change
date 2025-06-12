import React from 'react';

export interface BackgroundDecorationType {
    symbols: string[];
    count?: number;
    className?: string;
}

const BackgroundDecoration: React.FC<BackgroundDecorationType> = ({ 
    symbols, 
    count = 12, 
    className = '' 
}) => {
    return (
        <div className={`background-decoration ${className}`}>
            {Array.from({ length: count }, (_, i) => (
                <div key={i} className={`floating-symbol symbol-${i + 1}`}>
                    {symbols[i % symbols.length]}
                </div>
            ))}
        </div>
    );
};

export default BackgroundDecoration;
