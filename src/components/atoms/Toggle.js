"use client";
import React from 'react';
import {BORDER_RADIUS, COLOR_VARIANTS, mergeClasses} from "@/utils/styling";

const Toggle = ({
    label = "",
    labelPosition = "left",  // left or right
    color = "primary",
    inactiveColor = "gray",
    variant = "solid",
    borderRadius = "full",
    showIcon = false,
    disabled = false,
    checked = false,
    onChange,
    className = '',
}) => {
    const colorSet = COLOR_VARIANTS[color][variant] || COLOR_VARIANTS.primary.soft;
    const inactiveColorSet = COLOR_VARIANTS[inactiveColor][variant] || COLOR_VARIANTS.gray.soft;
    const borderRadiusClass = BORDER_RADIUS[borderRadius] || BORDER_RADIUS.md;

    const containerClasses = mergeClasses(
        `flex items-center justify-between 
        ${labelPosition === 'right' ? 'flex-row-reverse' : 'flex-row'} 
        ${disabled ? 'opacity-50' : ''}`,
        className
    );

    const focusClasses = `
    ${checked ? 'translate-x-5' : 'translate-x-0'} 
    ${borderRadiusClass}
    pointer-events-none inline-block h-5 w-5 
    transform bg-white shadow-sm ring-0 
    transition duration-200 ease-in-out
    `;

    const buttonClasses = mergeClasses(
        checked ? colorSet.bg : inactiveColorSet.bg,
        borderRadiusClass,
        `relative inline-flex h-6 w-11 shrink-0 cursor-pointer`,
        `border-2 border-transparent transition-colors duration-200 ease-in-out`,
    );

    return (
        <div className={containerClasses}>
            <label
                htmlFor="toggle"
                className={labelPosition === 'right' ? 'ml-3' : 'mr-3'}
            >
                {label}
            </label>
            <button
                type="button"
                onClick={onChange}
                className={buttonClasses}
                role="switch"
                aria-checked={checked}
                disabled={disabled}
            >
                <span className="sr-only">Use setting</span>
                <span
                    className={focusClasses}
                    aria-hidden="true"
                >
                    {showIcon && (checked ? (
                        <span
                            className="opacity-60 duration-100 ease-out absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
                            aria-hidden="true">
                            <svg className="h-3 w-3 text-gray-600" fill="currentColor" viewBox="0 0 12 12">
                                <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"/>
                            </svg>
                        </span>
                    ) : (
                        <span
                            className="opacity-100 duration-200 ease-in absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
                            aria-hidden="true">
                            <svg className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 12 12">
                                <path d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2" stroke="currentColor" strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"/>
                            </svg>
                        </span>
                    ))}
                </span>
            </button>
        </div>
    );
};

export default Toggle;
