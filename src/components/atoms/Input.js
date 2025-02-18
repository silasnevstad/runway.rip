'use client';

import React, { useState, useEffect } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import {mergeClasses} from "@/utils/classNames";

const Input = ({
    className,
    label,
    leftIcon: LeftIcon,
    rightIcon: RightIcon,
    leftIconOnClick,
    rightIconOnClick,
    focus,
    secure,
    textSize = "text-lg",
    value: controlledValue,
    onChange,
    ...props
}) => {
    const isControlled = controlledValue !== undefined;
    const [internalValue, setInternalValue] = useState(controlledValue || '');

    // Update internal state when the controlled value changes.
    useEffect(() => {
        if (isControlled) {
            setInternalValue(controlledValue);
        }
    }, [controlledValue, isControlled]);

    const handleChange = (e) => {
        if (!isControlled) {
            setInternalValue(e.target.value);
        }
        if (onChange) {
            onChange(e);
        }
    };

    const [showPassword, setShowPassword] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <div className="flex flex-col w-full gap-2">
            <div className={
                mergeClasses(
                    `relative flex items-center rounded-lg border border-gray-500 p-1 dark:border-gray-700`,
                    `${focus ? 'focus-within:border-primary-500 focus-within:ring-[1px] focus-within:ring-primary-500/30' : ''}`,
                    className
                )
            }>
                {LeftIcon && (
                    <LeftIcon
                        className={`shrink-0 w-5 h-5 text-gray-600 opacity-75 dark:text-gray-500 ml-2 ${leftIconOnClick ? 'cursor-pointer hover:scale-103 hover:text-primary-500' : ''}`}
                        onClick={leftIconOnClick}
                    />
                )}
                {label && (!internalValue || isFocused) && (
                    <label
                        onClick={() => document.getElementById(props.id).focus()}
                        className={`absolute transition-all duration-200 cursor-text ${
                            isFocused || controlledValue
                                ? '-top-3.5 left-2 px-2 bg-bg-50 dark:bg-bg-900 text-primary-500 text-opacity-80'
                                : 'text-lg left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-600'
                        }`}
                    >
                        {label}
                    </label>
                )}
                <input
                    {...props}
                    type={secure ? (showPassword ? 'text' : 'password') : 'text'}
                    id={props.id}
                    className={`border-transparent focus:border-transparent focus:ring-0 grow ${textSize} border-none focus:outline-hidden bg-transparent dark:text-gray-100 ${label ? "placeholder-transparent" : ""}`}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    value={internalValue}
                    onChange={handleChange}
                    autoComplete={props.autoComplete || "off"}
                />
                {secure && (
                    <button className="focus:outline-hidden" onClick={togglePassword}>
                        {showPassword ? (
                            <EyeSlashIcon className="mr-2 w-5 h-5 text-gray-600 opacity-75 dark:text-gray-500" />
                        ) : (
                            <EyeIcon className="mr-2 w-5 h-5 text-gray-600 opacity-75 dark:text-gray-500" />
                        )}
                    </button>
                )}
                {RightIcon && (
                    <RightIcon
                        className={`mr-2 w-5 h-5 text-gray-600 opacity-75 dark:text-gray-500 ${rightIconOnClick ? 'cursor-pointer hover:scale-103 hover:text-primary-500' : ''}`}
                        onClick={rightIconOnClick}
                    />
                )}
            </div>
        </div>
    );
};

export default Input;
