"use client";
import { useState, useRef } from 'react';
import {BORDER_RADIUS, COLOR_VARIANTS, mergeClasses} from '@/utils/styling';

const Tooltip = ({
    children,
    text,
    position = "top",
    color = "gray",
    variant = "solid",
    borderRadius = "lg",
    border = false,
    className = "",
    ...props
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
                return "bottom-full mb-2"; // Default to top
        }
    };

    const colorSet = COLOR_VARIANTS[color][variant] || COLOR_VARIANTS.gray.solid;
    const borderRadiusClass = BORDER_RADIUS[borderRadius] || BORDER_RADIUS.lg;

    const tooltipClasses = mergeClasses(
        getPositionClasses(),
        `absolute px-3 py-1`,
        colorSet.bg,
        colorSet.text,
        borderRadiusClass,
        border && colorSet.border,
        `text-sm shadow-sm whitespace-nowrap z-50`
    );

    return (
        <div className={mergeClasses("relative flex", className)} {...props}>
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
                    className={tooltipClasses}
                >
                    {text}
                </div>
            )}
        </div>
    );
};

export default Tooltip;
