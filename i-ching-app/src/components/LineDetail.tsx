import React from 'react';

interface LineDetailProps {
    lineNumber: number;
    description: string;
}

const LineDetail: React.FC<LineDetailProps> = ({ lineNumber, description }) => {
    return (
        <div className="line-detail">
            <h3>Line {lineNumber}</h3>
            <p>{description}</p>
        </div>
    );
};

export default LineDetail;