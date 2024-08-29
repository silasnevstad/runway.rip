'use client'

import React from 'react';
import { makeClassNameImportant } from "@/utils/utils";

const Checkbox = ({
    className = '',
    id,
    name,
    label,
    helperText,
    checked = false,
    onChange,
    labelPosition = 'right',
    color = 'primary',
    disabled = false,
    circle = false,
}) => {
    const checkboxClasses = `checkbox h-4 w-4 border-gray-300 text-${color}-500 
        ${circle ? 'rounded-full' : 'rounded'} 
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
            <div className={`flex flex-col items-center justify-start ${helperText && 'mt-4'}`}>
                <label htmlFor={id} className="mx-3 font-medium">
                    {label}
                </label>
                {helperText && <p className="text-xs text-gray-500">{helperText}</p>}
            </div>
        </div>
    );
};

export default Checkbox;