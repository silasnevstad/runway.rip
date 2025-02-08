'use client'

import React from 'react';
import {mergeClasses} from "@/utils/classNames";

const Toggle = ({
    checked = false,
    onChange = () => {},
    className = '',
    label = '',
    labelPosition = 'left', // 'left' or 'right'
    color = 'primary',
    icon = false,
    focus = false,
    disabled = false
}) => {
    return (
        <div className={`flex items-center justify-between ${labelPosition === 'right' ? 'flex-row-reverse' : 'flex-row'} ${disabled ? 'opacity-50' : ''}`}>
            <label htmlFor="toggle" className="font-medium mr-4">{label}</label>
            <button
                type="button"
                onClick={onChange}
                className={
                    mergeClasses(
                        `${checked ? `bg-${color}-500` : 'bg-gray-200'}`,
                        `relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out`,
                        `${focus && 'focus:ring-2 focus:ring-${color}-600 focus:ring-offset-2 focus:outline-none'}`,
                        className
                    )
            }
                role="switch"
                aria-checked={checked}
                disabled={disabled}
            >
                <span className="sr-only">Use setting</span>
                <span
                    className={`${checked ? 'translate-x-5' : 'translate-x-0'} pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
                    aria-hidden="true"
                >
                    {icon && (checked ? (
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
