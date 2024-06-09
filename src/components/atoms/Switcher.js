'use client'

import React from 'react';
import Tooltip from "@/components/atoms/Tooltip";

const Switcher = ({
    options,
    selected,
    onChange,
    activeColor = ' dark:text-white',
    inactiveColor = 'text-gray-500',
    activeBgColor = 'bg-bg-200 dark:bg-bg-800',
    inactiveBgColor = 'bg-bg-100 dark:bg-bg-900',
    activeBorderColor = 'border-primary-100 dark:border-primary-500',
    inactiveBorderColor = 'border-gray-200',
    border,
    hover,
    tooltip,
    vertical,
    className,
    ...props
}) => {
    return (
        <div className={`flex items-center rounded-full p-1 gap-1 ${border ? 'border' : ''} ${inactiveBgColor} ${className}`} {...props}>
            {options.map((option, index) => (
                <Tooltip key={index} text={tooltip && option.name} position="top">
                    <button
                        key={index}
                        className={`whitespace-nowrap flex items-center gap-2 py-2 px-5 text-center font-medium rounded-full ${vertical ? 'flex-col' : 'flex-row'} ${hover && 'hover:bg-bg-100 dark:hover:bg-bg-800'} ${border && 'border'} ${selected === option.value ? activeBorderColor : inactiveBorderColor} ${selected === option.value ? activeBgColor : inactiveBgColor} ${selected === option.value ? activeColor : inactiveColor}`}
                        onClick={() => onChange(option.value)}
                    >
                        {option.Icon && <option.Icon className="w-4 h-4" />}
                        {option.name && option.name}
                    </button>
                </Tooltip>
            ))}
        </div>
    )
}

export default Switcher;