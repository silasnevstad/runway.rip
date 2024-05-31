'use client'

import React from 'react';

const Checkbox = ({
    id,
    name,
    label,
    checked = false,
    onChange,
    labelPosition = 'left', // can be 'left' or 'right'
    disabled = false,
    color = 'text-primary-500',
    ripple = false,
    circle = false
}) => {
    const labelClasses = `mx-3 font-medium`;

    return (
        <div className={`flex ${labelPosition === 'left' ? 'flex-row-reverse' : 'flex-row'} items-center justify-center ${disabled ? 'opacity-50' : ''}`}>
            <input
                className={`checkbox h-4 w-4 ${circle ? 'rounded-full' : 'rounded'} border-gray-300 ${color} ${ripple ? 'ripple' : ''}`}
                type="checkbox"
                id={id}
                name={name}
                checked={checked}
                onChange={onChange}
                disabled={disabled}
            />
            <label htmlFor={id} className={labelClasses}>
                {label}
            </label>
        </div>
    );
};

export default Checkbox;