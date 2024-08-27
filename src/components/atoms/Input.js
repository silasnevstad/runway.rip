'use client'

import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

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
    ...props
}) => {
    const [showPassword, setShowPassword] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [value, setValue] = useState(props.value || '');

    const togglePassword = () => {
        setShowPassword(!showPassword);
    }

    const handleFocus = () => {
        setIsFocused(true);
    }

    const handleBlur = () => {
        setIsFocused(false);
    }

    return (
        <div className="flex flex-col w-full gap-2">
            <div className={`relative flex items-center rounded-lg border border-gray-500 p-1 dark:border-gray-700 ${focus && 'focus-within:border-primary-500 focus-within:ring-1 focus-within:ring-primary-500'} ${className}`}>
                {LeftIcon &&
                    <LeftIcon
                        className={
                            `flex-shrink-0 w-5 h-5 text-gray-600 opacity-75 dark:text-gray-500 ml-2 
                            ${leftIconOnClick ? 'cursor-pointer hover:scale-103 hover:text-primary-500' : ''}`
                        }
                        onClick={leftIconOnClick}
                    />
                }
                {label && (!value || isFocused) &&
                    <label
                        onClick={() => document.getElementById(props.id).focus()}
                        className={`absolute transition-all duration-200 cursor-text ${
                            isFocused || props.value
                                ? '-top-3.5 left-2 px-2 bg-bg-50 dark:bg-bg-900 text-primary-500 text-opacity-80'
                                : 'text-lg left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-600'
                        }`}
                    >
                        {label}
                    </label>
                }
                <input
                    type={secure && !showPassword ? 'password' : 'text'}
                    id={props.id}
                    className={`border-transparent focus:border-transparent focus:ring-0 flex-grow ${textSize} border-none focus:outline-none bg-transparent dark:text-gray-100 ${label && "placeholder-transparent"}`}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    {...props}
                />
                {secure && (
                    <button className="focus:outline-none" onClick={togglePassword}>
                        {showPassword ? <EyeSlashIcon className="mr-2 w-5 h-5 text-gray-600 opacity-75 dark:text-gray-500"/> : <EyeIcon className="mr-2 w-5 h-5 text-gray-600 opacity-75 dark:text-gray-500"/>}
                    </button>
                )}
                {RightIcon &&
                    <RightIcon
                        className={
                            `mr-2 w-5 h-5 text-gray-600 opacity-75 dark:text-gray-500 
                            ${rightIconOnClick ? 'cursor-pointer hover:scale-103 hover:text-primary-500' : ''}`
                        }
                        onClick={rightIconOnClick}
                    />
                }
            </div>
        </div>
    );
}

export default Input;