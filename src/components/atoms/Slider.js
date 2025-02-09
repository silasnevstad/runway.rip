'use client';

import React, { useState, useEffect } from 'react';
import {mergeClasses} from "@/utils/classNames";

const Slider = ({
    className = '',
    min = 0,
    max = 100,
    step = 1,
    defaultValue = 50,
    onChange,
    valuePosition = 'top',
    showValue = true,
    showLabels = true,
    trackColor = 'gray',
    thumbColor = 'primary',
}) => {
    const [value, setValue] = useState(defaultValue);

    useEffect(() => {
        setValue(defaultValue);
    }, [defaultValue]);

    const handleChange = (e) => {
        const newValue = Number(e.target.value);
        setValue(newValue);
        if (onChange) {
            onChange(newValue);
        }
    };

    const percentage = ((value - min) / (max - min)) * 100;

    const renderValue = () => {
        if (!showValue) return null;
        return <div className="text-gray-800 dark:text-gray-200 text-center">{value}</div>;
    };

    const renderSlider = () => (
        <div className="flex items-center w-full gap-2">
            {showLabels && <span className="text-sm text-gray-600 dark:text-gray-400 opacity-50 min-w-[20px]">{min}</span>}
            <div className="relative flex-1 h-3">
                <div
                    className={`absolute top-0 left-0 h-full rounded-full bg-${trackColor}-200 dark:bg-${trackColor}-700`}
                    style={{width: '100%'}}
                />
                <div
                    className={`absolute top-0 left-0 h-full rounded-full bg-${thumbColor}-500`}
                    style={{width: `${percentage}%`}}
                />
                <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={value}
                    onChange={handleChange}
                    className={`
                        absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer
                        [&::-webkit-slider-thumb]:appearance-none
                        [&::-webkit-slider-thumb]:w-4
                        [&::-webkit-slider-thumb]:h-4
                        [&::-webkit-slider-thumb]:rounded-full
                        [&::-webkit-slider-thumb]:bg-${thumbColor}-500
                        [&::-moz-range-thumb]:w-4
                        [&::-moz-range-thumb]:h-4
                        [&::-moz-range-thumb]:rounded-full
                        [&::-moz-range-thumb]:bg-${thumbColor}-500
                        [&::-ms-thumb]:w-4
                        [&::-ms-thumb]:h-4
                        [&::-ms-thumb]:rounded-full
                        [&::-ms-thumb]:bg-${thumbColor}-500
                    `}
                />
            </div>
            {showLabels && <span className="text-sm text-gray-600 dark:text-gray-400 opacity-50 min-w-[20px]">{max}</span>}
        </div>
    );

    return (
        <div className={mergeClasses(`flex flex-col w-full gap-2`, className)}>
            {valuePosition === 'top' && renderValue()}
            {valuePosition === 'left' && (
                <div className="flex items-center gap-2">
                    {renderValue()}
                    {renderSlider()}
                </div>
            )}
            {valuePosition !== 'left' && valuePosition !== 'right' && renderSlider()}
            {valuePosition === 'right' && (
                <div className="flex items-center gap-2">
                    {renderSlider()}
                    {renderValue()}
                </div>
            )}
            {valuePosition === 'bottom' && renderValue()}
        </div>
    );
};

export default Slider;