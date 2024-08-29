'use client'

import React from 'react';
import { makeClassNameImportant } from "@/utils/utils";

const Checkbox = ({
    className = '',
    id,
    name,
    label,
    checked = false,
    onChange,
    labelPosition = 'left',
    color = 'primary',
    disabled = false,
    ripple = false,
    circle = false,
}) => {
    const labelClasses = `mx-3 font-medium`;
    const checkboxClasses = `checkbox h-4 w-4 border-gray-300 text-${color}-500 
        ${circle ? 'rounded-full' : 'rounded'} 
        ${ripple ? 'ripple' : ''} 
        ${makeClassNameImportant(className)}`

    return (
        <div className={`flex ${labelPosition === 'left' ? 'flex-row-reverse' : 'flex-row'} items-center justify-center 
            ${disabled ? 'opacity-50' : ''} ${makeClassNameImportant(className)}`}>
            <input
                className={checkboxClasses}
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