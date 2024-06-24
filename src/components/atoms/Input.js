'use client'

import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

const Input = ({ label, leftIcon: LeftIcon, rightIcon: RightIcon, secure, ...props }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

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
            <div className="relative flex items-center rounded-lg border border-gray-500 p-1 dark:border-gray-700 focus-within:border-primary-500 focus-within:ring-1 focus-within:ring-primary-500">
                {LeftIcon && <LeftIcon className="flex-shrink-0 w-5 h-5 text-gray-600 opacity-75 dark:text-gray-500 ml-2"/>}
                {label &&
                    <label
                        onClick={() => document.getElementById(props.id).focus()}
                        className={`absolute transition-all duration-200 cursor-text ${
                            isFocused || props.value 
                                ? '-top-3.5 left-2 px-2 bg-bg-50 dark:bg-bg-800 text-primary-500 text-opacity-80' 
                                : 'text-lg left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-600'
                        }`}
                    >
                        {label}
                    </label>
                }
                <input
                    type={secure && !showPassword ? 'password' : 'text'}
                    id={props.id}
                    className={`border-transparent focus:border-transparent focus:ring-0 flex-grow text-lg border-none focus:outline-none bg-transparent dark:text-gray-100 ${label && "placeholder-transparent"}`}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    {...props}
                />
                {secure && (
                    <button className="focus:outline-none" onClick={togglePassword}>
                        {showPassword ? <EyeSlashIcon className="mr-2 w-5 h-5 text-gray-600 opacity-75 dark:text-gray-500"/> : <EyeIcon className="mr-2 w-5 h-5 text-gray-600 opacity-75 dark:text-gray-500"/>}
                    </button>
                )}
                {RightIcon && <RightIcon className="mr-2 w-5 h-5 text-gray-600 opacity-75 dark:text-gray-500"/>}
            </div>
        </div>
    );
}

export default Input;