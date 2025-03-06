"use client";
import React, { useState, useEffect } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import {BORDER_RADIUS, COLOR_VARIANTS, getTextColorClass, mergeClasses, renderIcon, SIZE_MAP} from "@/utils/styling";
import FloatingLabelWrapper from "@/components/atoms/FloatingLabelWrapper";

export default function Input({
    id = "",
    label = "",
    labelMode = "above", // options: "none", "above", "float"
    labelBackground = "bg-bg-0 dark:bg-bg-900",
    size = "md",
    borderRadius = "lg",
    color = "gray",
    variant = "solid",
    border = true,
    shadow = false,
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

    // Styling
    const colorSet = COLOR_VARIANTS[color][variant] || COLOR_VARIANTS.gray.soft;
    const activeColorSet = COLOR_VARIANTS[activeColor][variant] || COLOR_VARIANTS.primary.soft;
    const borderRadiusClass = BORDER_RADIUS[borderRadius] || BORDER_RADIUS.md;
    const sizeConfig = SIZE_MAP[size] || SIZE_MAP.md;

    const containerClasses = mergeClasses(
        "relative flex items-center",
        variant === "soft" && colorSet.fadeBg,
        border && `border ${colorSet.border}`,
        borderRadius && borderRadiusClass,
        shadow && "shadow-md",
        focus && activeColorSet.focusWithin,
        sizeConfig.containerPadding,
        className
    );

    const inputClasses = mergeClasses(
        "w-full bg-transparent border-none focus:outline-none focus:ring-0 p-0",
        colorSet.text,
        sizeConfig.textSize,
        colorSet.placeholder,
        labelMode === "float" && "placeholder-transparent",
        textClassName
    );

    const iconClasses = `h-5 w-5 ${colorSet.text} opacity-50 hover:opacity-80 active:scale-97`;
    const leftIconRendered = renderIcon({
        icon: leftIcon,
        onClick: leftIconOnClick,
        extraClasses: iconClasses
    });
    const rightIconRendered = renderIcon({
        icon: rightIcon,
        onClick: rightIconOnClick,
        extraClasses: iconClasses
    });

    return (
        <div className="flex w-full flex-col gap-1">
            {/* Above label */}
            {label && labelMode === "above" && (
                <label
                    htmlFor={id}
                    className={mergeClasses(
                        `block ${getTextColorClass(color)} opacity-70`,
                        sizeConfig.textSize
                    )}
                >
                    {label}
                </label>
            )}

            <FloatingLabelWrapper
                id={id}
                label={label}
                labelMode={labelMode}
                labelBackground={labelBackground}
                color={color}
                activeColor={color}
                isFocused={isFocused}
                hasValue={internalValue !== ""}
                sizeConfig={sizeConfig}
                containerClasses={containerClasses}
            >
                {/* Left icon */}
                {leftIconRendered && <span className="mr-2">{leftIconRendered}</span>}

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
                    placeholder={labelMode === "float" ? "" : props.placeholder}
                />

                {/* Password toggle */}
                {secure && (
                    <button
                        type="button"
                        onClick={togglePassword}
                        className="ml-1 focus:outline-none cursor-pointer"
                    >
                        {showPassword ? (
                            <EyeSlashIcon className={iconClasses}/>
                        ) : (
                            <EyeIcon className={iconClasses}/>
                        )}
                    </button>
                )}

                {/* Right icon */}
                {rightIconRendered && <span className="ml-2">{rightIconRendered}</span>}
            </FloatingLabelWrapper>
        </div>
    );
}
