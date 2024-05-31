import React from 'react';

const Indicator = ({
    children,
    position,
    content,
    ping = false
}) => {
    const positionClasses = {
        'top-right': 'top-0 right-0 translate-x-1/2 -translate-y-1/2',
        'top-left': 'top-0 left-0 -translate-x-1/2 -translate-y-1/2',
        'bottom-right': 'bottom-0 right-0 translate-x-1/2 translate-y-1/2',
        'bottom-left': 'bottom-0 left-0 -translate-x-1/2 translate-y-1/2',
        'top-center': 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2',
        'bottom-center': 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2',
        'center-right': 'top-1/2 right-0 translate-x-1/2 -translate-y-1/2',
        'center-left': 'top-1/2 left-0 -translate-x-1/2 -translate-y-1/2',
        'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
    };

    // Apply default position if not specified or if specified position is not defined
    const positionClass = positionClasses[position] || 'top-right';

    return (
        <div className="relative">
            {children}
            <div className={`absolute ${positionClass} p-1 bg-red-500 text-white rounded-full text-sm ${ping ? 'animate-ping' : ''}`}>
                {content}
            </div>
        </div>
    );
};

export default Indicator;
