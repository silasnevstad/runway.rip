import React from 'react';

const Timeline = ({ children }) => {
    return (
        <div className="flow-root">
            <ul role="list" className="-mb-8">
                {children}
            </ul>
        </div>
    );
};

export default Timeline;