"use client";
import React, { useState, useEffect } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { mergeClasses, renderIcon} from "@/utils/styling";

const SIZE_MAP = {
    sm: { containerPadding: "p-2", textSize: "text-sm", paddingNum: "2" },
    md: { containerPadding: "p-3", textSize: "text-base", paddingNum: "3" },
    lg: { containerPadding: "p-4", textSize: "text-lg", paddingNum: "4" },
};

export default function Input({
    id = "",
    label = "",
    labelMode = "none", // "none" | "above" | "float"
    labelBackground = "bg-white dark:bg-gray-900",
    size = "md",
    borderRadius = "md",
    shadow = "",
    leftIcon,
    rightIcon,
    leftIconOnClick,
    rightIconOnClick,
    secure = false,
    focus = true,
    activeColor = "primary",
    value: controlledValue,
    onChange,
    className = "",
    textClassName = "",
    ...props
}) {
    const [internalValue, setInternalValue] = useState(controlledValue || "");
    const isControlled = controlledValue !== undefined;

    useEffect(() => {
        if (isControlled) {
            setInternalValue(controlledValue);
        }
    }, [controlledValue, isControlled]);

    const handleChange = (e) => {
        if (!isControlled) {
            setInternalValue(e.target.value);
        }
        onChange?.(e);
    };

    // Password toggle
    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => setShowPassword(!showPassword);

    // Focus state
    const [isFocused, setIsFocused] = useState(false);
    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    const sizeConfig = SIZE_MAP[size] || SIZE_MAP.md;

    // Container classes
    const containerClasses = mergeClasses(
        "relative flex items-center border border-gray-500 dark:border-gray-700",
        borderRadius && `rounded-${borderRadius}`,
        shadow && `shadow-${shadow}`,
        sizeConfig.containerPadding,
        focus && `focus-within:border-${activeColor}-500 focus-within:ring-1 focus-within:ring-${activeColor}-500/30`,
        className
    );

    // Floating label classes (only used if labelMode="float")
    const isFloating = isFocused || Boolean(internalValue);
    const floatingLabelClasses = mergeClasses(
        "absolute cursor-text transition-all duration-200",
        sizeConfig.textSize,
        isFloating
            ? `-top-3.5 left-3 px-1 text-${activeColor}-500 text-opacity-80 ${labelBackground} rounded-sm`
            : `${sizeConfig.paddingNum} top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400`,
        labelMode === "float" && "pointer-events-none"
    );

    // Input classes
    const inputClasses = mergeClasses(
        "w-full bg-transparent border-none focus:outline-none focus:ring-0 dark:text-gray-100 p-0",
        sizeConfig.textSize,
        labelMode === "float" && "placeholder-transparent",
        textClassName
    );

    // Prepare icons
    const leftIconRendered = renderIcon(
        leftIcon,
        leftIconOnClick,
        "h-5 w-5 text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
    );
    const rightIconRendered = renderIcon(
        rightIcon,
        rightIconOnClick,
        "h-5 w-5 text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
    );

    return (
        <div className="flex w-full flex-col gap-1">
            {/* Above label */}
            {label && labelMode === "above" && (
                <label
                    className={mergeClasses(
                        "block text-gray-700 dark:text-gray-300",
                        sizeConfig.textSize
                    )}
                >
                    {label}
                </label>
            )}

            {/* Main input container */}
            <div className={containerClasses}>
                {/* Left icon */}
                {leftIconRendered && <span className="mr-2">{leftIconRendered}</span>}

                {/* Floating label (if enabled) */}
                {label && labelMode === "float" && (
                    <label
                        className={floatingLabelClasses}
                        onClick={() => props.id && document.getElementById(props.id).focus()}
                    >
                        {label}
                    </label>
                )}

                <input
                    {...props}
                    id={props.id}
                    type={secure ? (showPassword ? "text" : "password") : props.type || "text"}
                    className={inputClasses}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    value={internalValue}
                    onChange={handleChange}
                    autoComplete={props.autoComplete || "off"}
                    placeholder={labelMode === "float" ? label : props.placeholder}
                />

                {/* Password toggle */}
                {secure && (
                    <button
                        type="button"
                        onClick={togglePassword}
                        className="ml-1 focus:outline-none cursor-pointer"
                    >
                        {showPassword ? (
                            <EyeSlashIcon className="h-5 w-5 text-gray-600 dark:text-gray-400 hover:text-gray-500 dark:hover:text-gray-300" />
                        ) : (
                            <EyeIcon className="h-5 w-5 text-gray-600 dark:text-gray-400 hover:text-gray-500 dark:hover:text-gray-300" />
                        )}
                    </button>
                )}

                {/* Right icon */}
                {rightIconRendered && <span className="ml-2">{rightIconRendered}</span>}
            </div>
        </div>
    );
}
