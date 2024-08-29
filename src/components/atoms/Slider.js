'use client';

import React, { useState } from 'react';
import { makeClassNameImportant } from "@/utils/utils";

const Slider = ({
    className = '',
    min = 0,
    max = 100,
    step = 1,
    defaultValue = 50,
    onChange,
    valuePosition = 'top', // 'top', 'bottom', 'left', 'right'
    showValue = true,
    showLabels = true,
    trackColor = 'gray',
    thumbColor = 'primary',
}) => {
    const [value, setValue] = useState(defaultValue);

    const handleChange = (e) => {
        const newValue = Number(e.target.value);
        setValue(newValue);
        if (onChange) {
            onChange(newValue);
        }
    };

    const renderValue = () => {
        if (!showValue || valuePosition === 'thumb') return null;
        return <div className={`text-sm text-gray-600 dark:text-gray-400 text-center`}>{value}</div>;
    };

    const sliderColors = `bg-${trackColor}-200 dark:bg-${trackColor}-700 [&::-webkit-slider-thumb]:bg-${thumbColor}-500`

    const renderSlider = () => (
        <div className={`flex items-center w-full gap-2`}>
            {showLabels && valuePosition !== 'left' && valuePosition !== 'right' &&
                <span className={`text-sm text-gray-600 dark:text-gray-400 opacity-50`}>{min}</span>
            }
            <div className="relative flex-1">
                <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={value}
                    onChange={handleChange}
                    className={`
                       range w-full h-3
                       rounded-lg appearance-none cursor-pointer
                       [&::-webkit-slider-thumb]:w-4
                       [&::-webkit-slider-thumb]:h-4
                       [&::-webkit-slider-thumb]:rounded-full
                       [&::-webkit-slider-thumb]:appearance-none
                       ${sliderColors}
                    `}
                />
            </div>
            {showLabels && valuePosition !== 'right' && valuePosition !== 'left' &&
                <span className={`text-sm text-gray-600 dark:text-gray-400 opacity-50`}>{max}</span>
            }
        </div>
    );

    return (
        <div className={`flex flex-col w-full gap-2 ${makeClassNameImportant(className)}`}>
            {valuePosition === 'top' && renderValue()}
            {valuePosition === 'left' && (
                <div className={`flex items-center gap-2`}>
                    {renderValue()}
                    {renderSlider()}
                </div>
            )}
            {valuePosition !== 'left' && valuePosition !== 'right' && renderSlider()}
            {valuePosition === 'right' && (
                <div className={`flex items-center gap-2`}>
                    {renderSlider()}
                    {renderValue()}
                </div>
            )}
            {valuePosition === 'bottom' && renderValue()}
        </div>
    );
};

export default Slider;