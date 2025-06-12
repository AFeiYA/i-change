import React from 'react';

export interface ListItem {
    id: string | number;
    content: React.ReactNode;
    icon?: string;
    action?: () => void;
}

export interface ListProps {
    items: ListItem[];
    variant?: 'default' | 'method' | 'feature' | 'resource' | 'advice';
    className?: string;
}

const List: React.FC<ListProps> = ({ items, variant = 'default', className = '' }) => {
    const listClass = `list list-${variant} ${className}`;

    return (
        <ul className={listClass}>
            {items.map((item) => (
                <li 
                    key={item.id} 
                    className="list-item" 
                    onClick={item.action}
                    style={{ cursor: item.action ? 'pointer' : 'default' }}
                >
                    {item.icon && <span className="list-item-icon">{item.icon}</span>}
                    <div className="list-item-content">{item.content}</div>
                </li>
            ))}
        </ul>
    );
};

export default List;
