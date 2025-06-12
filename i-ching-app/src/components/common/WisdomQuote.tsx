import React from 'react';

export interface WisdomQuoteProps {
    quote: string;
    author: string;
    icon?: string;
    className?: string;
}

const WisdomQuote: React.FC<WisdomQuoteProps> = ({ 
    quote, 
    author, 
    icon = '✨', 
    className = '' 
}) => {
    return (
        <div className={`wisdom-quote ${className}`}>
            <div className="quote-icon">{icon}</div>
            <blockquote>
                <p>"{quote}"</p>
                <footer>—— {author}</footer>
            </blockquote>
        </div>
    );
};

export default WisdomQuote;
