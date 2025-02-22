'use client';

import { useState, useRef } from 'react';
import { mergeClasses } from '@/utils/styling';

const Tooltip = ({
    children,
    text,
    className = '',
    position = 'top',
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const tooltipRef = useRef(null);

    const handleMouseEnter = () => {
        setIsVisible(true);
    };

    const handleMouseLeave = () => {
        setIsVisible(false);
    };

    const getPositionClasses = () => {
        switch (position) {
            case 'top':
                return "bottom-full mb-2 left-1/2 transform -translate-x-1/2";
            case 'bottom':
                return "top-full mt-2 left-1/2 transform -translate-x-1/2";
            case 'left':
                return "right-full mr-2 top-1/2 transform -translate-y-1/2";
            case 'right':
                return "left-full ml-2 top-1/2 transform -translate-y-1/2";
            default:
                return "bottom-full mb-2"; // Default to top if no valid position is provided
        }
    };

    return (
        <div className={mergeClasses("relative flex", className)}>
            <div
                ref={tooltipRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="cursor-pointer w-full"
            >
                {children}
            </div>
            {isVisible && text && (
                <div
                    className={mergeClasses(
                        getPositionClasses(),
                        "absolute px-3 py-1 bg-bg-600 dark:bg-bg-900 text-white text-sm rounded-lg shadow-sm whitespace-nowrap"
                    )}
                >
                    {text}
                </div>
            )}
        </div>
    );
};

export default Tooltip;
