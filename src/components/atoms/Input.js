'use client'

import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

const Input = ({ label, leftIcon: LeftIcon, rightIcon: RightIcon, secure, ...props }) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div className="flex flex-col w-full gap-2">
            {label && <label className="text-lg font-semibold text-gray-800 opacity-60 pl-1">{label}</label>}
            <div
                className="flex items-center px-2 rounded-lg border border-gray-500 dark:border-gray-700 focus-within:border-primary-500 focus-within:ring-1 focus-within:ring-primary-500">
                {LeftIcon && <LeftIcon className="flex-shrink-0 w-5 h-5 text-gray-600 opacity-75 dark:text-gray-500"/>}
                <input
                    type={secure && !showPassword ? 'password' : 'text'}
                    className="border-transparent focus:border-transparent focus:ring-0 flex-grow text-xl border-none focus:outline-none bg-transparent dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-600"
                    {...props}
                />
                {secure && (
                    <button
                        className="focus:outline-none"
                        onClick={togglePassword}
                    >
                        {showPassword ? <EyeSlashIcon className="w-5 h-5 text-gray-600 opacity-75 dark:text-gray-500"/> : <EyeIcon className="w-5 h-5 text-gray-600 opacity-75 dark:text-gray-500"/>}
                    </button>
                )}
                {RightIcon && <RightIcon className="w-5 h-5 text-gray-600 opacity-75 dark:text-gray-500"/>}
            </div>
        </div>
    );
}

export default Input;