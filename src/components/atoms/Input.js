"use client";
import React, { useState, useEffect } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { mergeClasses } from "@/utils/classNames";

const SIZE_MAP = {
    sm: { containerPadding: "p-2", textSize: "text-sm", labelLeftPadding: "left-2", },
    md: { containerPadding: "p-3", textSize: "text-md", labelLeftPadding: "left-3", },
    lg: { containerPadding: "p-4", textSize: "text-lg", labelLeftPadding: "left-4", },
};

export default function Input({
    label = "",
    floatingLabel = false,
    labelBackground = "bg-bg-50 dark:bg-bg-900",  // NOTE: This is a bit hacky (need to tweak when background changes)
    size = "md",
    borderRadius = "md",
    leftIcon: LeftIcon,
    rightIcon: RightIcon,
    leftIconOnClick,
    rightIconOnClick,
    secure = false,
    focus    = true,
    activeColor = "primary",
    value: controlledValue,
    onChange,
    className = "",
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

    // Focus
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    // Build classes inline
    const sizeConfig = SIZE_MAP[size] || SIZE_MAP.md;

    // Container
    const containerClasses = mergeClasses(
        "relative flex items-center ",
        `rounded-${borderRadius}`,
        "border border-gray-500 dark:border-gray-700",
        sizeConfig.containerPadding,
        focus && `focus-within:border-${activeColor}-500 focus-within:ring-1 focus-within:ring-${activeColor}-500/30`,
        className
    );

    // Floating label classes
    const isFloating = isFocused || Boolean(internalValue);
    const labelClasses = mergeClasses(
        floatingLabel ? "absolute cursor-text transition-all duration-200" : "hidden",
        sizeConfig.textSize,
        isFloating
            ? `-top-3.5 left-3 px-1 text-${activeColor}-500 text-opacity-80 ${labelBackground} rounded-sm`
            : `${sizeConfig.labelLeftPadding} top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-500`
    );

    // Input classes
    const inputClasses = mergeClasses(
        "w-full bg-transparent border-none focus:outline-none focus:ring-0 dark:text-gray-100 p-0",
        sizeConfig.textSize,
        floatingLabel && "placeholder-transparent"
    );

    return (
        <div className="flex w-full flex-col gap-2">
            <div className={containerClasses}>
                {LeftIcon && (
                    <LeftIcon
                        onClick={leftIconOnClick}
                        className={mergeClasses(
                            "ml-1 h-5 w-5 shrink-0 text-gray-600 dark:text-gray-400",
                            leftIconOnClick && "cursor-pointer hover:text-current"
                        )}
                    />
                )}

                {label && (
                    <label
                        className={labelClasses}
                        onClick={() => {
                            if (props.id) {
                                const el = document.getElementById(props.id);
                                el?.focus();
                            }
                        }}
                    >
                        {label}
                    </label>
                )}

                <input
                    {...props}
                    id={props.id}
                    type={secure ? (showPassword ? "text" : "password") : "text"}
                    className={inputClasses}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    value={internalValue}
                    onChange={handleChange}
                    autoComplete={props.autoComplete || "off"}
                    placeholder={floatingLabel ? label : props.placeholder}
                />

                {secure && (
                    <button
                        type="button"
                        onClick={togglePassword}
                        className="ml-1 focus:outline-none cursor-pointer"
                    >
                        {showPassword ? (
                            <EyeSlashIcon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                        ) : (
                            <EyeIcon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                        )}
                    </button>
                )}

                {RightIcon && (
                    <RightIcon
                        onClick={rightIconOnClick}
                        className={mergeClasses(
                            "mr-1 h-5 w-5 shrink-0 text-gray-600 dark:text-gray-400",
                            rightIconOnClick && "cursor-pointer hover:text-current"
                        )}
                    />
                )}
            </div>
        </div>
    );
}
