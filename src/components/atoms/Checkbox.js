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
    disabled = false,
    ripple = false,
    circle = false
}) => {
    const labelClasses = `mx-3 font-medium`;

    return (
        <div className={`flex ${labelPosition === 'left' ? 'flex-row-reverse' : 'flex-row'} items-center justify-center ${disabled ? 'opacity-50' : ''}`}>
            <input
                className={`checkbox h-4 w-4 ${circle ? 'rounded-full' : 'rounded'} border-gray-300 text-primary-500 ${ripple ? 'ripple' : ''} ${makeClassNameImportant(className)}`}
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