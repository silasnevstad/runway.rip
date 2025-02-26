"use client";
import React, { useState, useEffect } from "react";
import {BORDER_RADIUS, COLOR_VARIANTS, mergeClasses, SIZE_MAP} from "@/utils/styling";
import FloatingLabelWrapper from "@/components/atoms/FloatingLabelWrapper";

export default function Select({
    id = "",
    label = "",
    labelMode = "none",  // "none" | "inside" | "above" | "float"
    labelBackground = "bg-bg-0 dark:bg-bg-900",

    // Styling
    size = "md",
    borderRadius = "md",
    color = "gray",
    variant = "soft",
    activeColor = "primary",
    shadow = false,
    focus = true,
    includeEmptyOption = false,

    // Controlled/uncontrolled value
    value: controlledValue,
    onChange,

    // Array of { value, label }
    options = [],

    className = "",
    textClassName = "",
    ...props
}) {
    const [internalValue, setInternalValue] = useState(controlledValue || !includeEmptyOption ? options[0]?.value : "");
    const isControlled = controlledValue !== undefined;

    useEffect(() => {
        if (isControlled) {
            setInternalValue(controlledValue);
        }
    }, [controlledValue, isControlled]);

    function handleChange(e) {
        if (!isControlled) {
            setInternalValue(e.target.value);
        }
        onChange?.(e);
    }

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
        variant === "soft" && labelMode !== "float" && colorSet.fadeBg,
        `border ${colorSet.border}`,
        borderRadius && borderRadiusClass,
        shadow && "shadow-md",
        focus && activeColorSet.focusWithin,
        sizeConfig.containerPadding,
        className
    );

    const selectClasses = mergeClasses(
        "w-full bg-transparent border-none focus:outline-none focus:ring-0 p-0",
        colorSet.text,
        sizeConfig.textSize,
        colorSet.placeholder,
        labelMode === "float" && "placeholder-transparent",
        textClassName
    );

    return (
        <div className="flex w-full flex-col gap-1">
            {label && labelMode === "above" && (
                <label
                    htmlFor={id}
                    className={mergeClasses(
                        `block`,
                        colorSet.text,
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
                <select
                    id={id}
                    className={selectClasses}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    value={internalValue}
                    onChange={handleChange}
                    {...props}
                >
                    {labelMode === "inside" && (
                        <option value="" disabled selected>
                            {label}
                        </option>
                    )}
                    {includeEmptyOption && <option value=""></option>}
                    {options.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                    ))}
                </select>
            </FloatingLabelWrapper>
        </div>
    );
}
