'use client'

import React from 'react';
import Tooltip from "@/components/atoms/Tooltip";

const Switch = ({
    options,
    selected,
    onChange,
    activeColor = 'gray',
    inactiveColor = 'gray',
    activeBgColor = 'bg',
    inactiveBgColor = 'bg',
    hover = false,
    tooltip = false,
    vertical = false,
    shape = 'rounded-full',
    className = '',
    ...props
}) => {
    const colorStyles = (isSelected) => {
        const textColor = isSelected ? `text-${activeColor}-800 dark:text-${activeColor}-400` : `text-${inactiveColor}-500`;
        const bgColor = isSelected ? `bg-${activeBgColor}-200 dark:bg-${activeBgColor}-900` : `bg-${inactiveBgColor}-100 dark:bg-${inactiveBgColor}-800`;
        return `${textColor} ${bgColor}`;
    };

    const hoverStyle = hover ? `hover:bg-${inactiveBgColor}-200 dark:hover:bg-${inactiveBgColor}-900` : '';

    return (
        <div className={`flex items-center ${vertical ? 'rounded-xl' : shape} p-1 gap-1 bg-${inactiveBgColor}-100 dark:bg-${inactiveBgColor}-800 
            ${className} ${vertical ? 'flex-col' : 'flex-row'}`} {...props}>
            {options.map((option, index) => (
                <Tooltip key={index} text={tooltip ? option.name : ''} position="top">
                    <button
                        className={`
                            whitespace-nowrap flex items-center gap-2 py-2 px-4 
                            text-center ${vertical ? 'rounded-xl' : shape} ${hoverStyle} 
                            ${vertical ? 'flex-col' : 'flex-row'} 
                            ${colorStyles(selected === option.value)}
                            transition-all duration-200 ease-in-out
                        `}
                        onClick={() => onChange(option.value)}
                    >
                        {option.Icon && <option.Icon className="w-4 h-4" />}
                        {option.name}
                    </button>
                </Tooltip>
            ))}
        </div>
    )
}

export default Switch;