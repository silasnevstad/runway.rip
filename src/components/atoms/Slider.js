"use client";
import React, { useState, useEffect } from "react";
import { mergeClasses } from "@/utils/styling";

export default function BetterSlider({
    // Range
    min = 0,
    max = 100,
    step = 1,
    defaultValue = 50,

    // Show min/max
    showLabels = true,
    // Show current value
    showValue = true,
    valuePosition = "top", // 'top' | 'bottom' | 'left' | 'right'

    // Inactive vs. active track
    inactiveColor = "#999",
    inactiveThickness = 4,
    activeColor = "#4287f5",
    activeThickness = 4,
    trackBorderRadius = 8,

    // Thumb
    thumbColor = "#4287f5",
    thumbSize = 16,
    thumbBorderRadius = "50%",
    thumbBorderWidth = 0,
    thumbBorderColor = "#0000",
    glow = true,
    collapseOnHover = true,

    // Badge
    badge = "",
    // Handler
    onChange,
    // Extra classes
    className = "",
    ...props
}) {
    const [value, setValue] = useState(defaultValue);

    useEffect(() => {
        setValue(defaultValue);
    }, [defaultValue]);

    const handleChange = (e) => {
        const newValue = Number(e.target.value);
        setValue(newValue);
        onChange?.(newValue);
    };

    const percentage = ((value - min) / (max - min)) * 100;

    // Optional label and value
    const renderValue = () => {
        if (!showValue) return null;
        return (
            <div className="text-gray-800 dark:text-gray-200 text-center whitespace-nowrap">
                {value}
            </div>
        );
    };

    // Left or right label
    const labelMin = showLabels ? <span>{min}</span> : null;
    const labelMax = showLabels ? <span>{max}</span> : null;

    const thumbGlowStyle = glow ? `0 0 8px ${thumbColor}` : "none";

    // CSS variables for the thumb
    const thumbVarStyle = {
        "--my-thumb-color": thumbColor,
        "--my-thumb-size": `${thumbSize}px`,
        "--my-thumb-radius": thumbBorderRadius,
        "--my-thumb-border-width": `${thumbBorderWidth}px`,
        "--my-thumb-border-color": thumbBorderColor,
        "--my-thumb-shadow": thumbGlowStyle,
    };

    const rangeInputClasses = mergeClasses(
        "absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer appearance-none",
        // WebKit
        `[&::-webkit-slider-thumb]:appearance-none
     [&::-webkit-slider-thumb]:border-[20px] 
     [&::-webkit-slider-thumb]:border-solid 
     [&::-webkit-slider-thumb]:border-[var(--my-thumb-border-color)]
     [&::-webkit-slider-thumb]:bg-[#ffffff]
     [&::-webkit-slider-thumb]:w-[var(--my-thumb-size)]
     [&::-webkit-slider-thumb]:h-[var(--my-thumb-size)]
     [&::-webkit-slider-thumb]:rounded-[var(--my-thumb-radius)]
     [&::-webkit-slider-thumb]:shadow-[var(--my-thumb-shadow)]
     ${collapseOnHover && "[&:hover::-webkit-slider-thumb]:scale-125"}`,
        // Firefox
        `[&::-moz-range-thumb]:border-[var(--my-thumb-border-width)] 
     [&::-moz-range-thumb]:border-solid 
     [&::-moz-range-thumb]:border-[var(--my-thumb-border-color)]
     [&::-moz-range-thumb]:bg-[var(--my-thumb-color)]
     [&::-moz-range-thumb]:w-[var(--my-thumb-size)]
     [&::-moz-range-thumb]:h-[var(--my-thumb-size)]
     [&::-moz-range-thumb]:rounded-[var(--my-thumb-radius)]
     [&::-moz-range-thumb]:shadow-[var(--my-thumb-shadow)]
     ${collapseOnHover && "[&:hover::-moz-range-thumb]:scale-125"}`,
        // MS
        `[&::-ms-thumb]:border-[var(--my-thumb-border-width)] 
     [&::-ms-thumb]:border-solid 
     [&::-ms-thumb]:border-[var(--my-thumb-border-color)]
     [&::-ms-thumb]:bg-[var(--my-thumb-color)]
     [&::-ms-thumb]:w-[var(--my-thumb-size)]
     [&::-ms-thumb]:h-[var(--my-thumb-size)]
     [&::-ms-thumb]:rounded-[var(--my-thumb-radius)]
     [&::-ms-thumb]:shadow-[var(--my-thumb-shadow)]
     ${collapseOnHover && "[&:hover::-ms-thumb]:scale-125"}`
    );

    const trackStyleInactive = {
        height: `${inactiveThickness}px`,
        borderRadius: `${trackBorderRadius}px`,
        backgroundColor: inactiveColor,
        width: "100%",
    };

    const trackStyleActive = {
        height: `${activeThickness}px`,
        borderRadius: `${trackBorderRadius}px`,
        backgroundColor: activeColor,
        width: `${percentage}%`,
    };

    const sliderBody = (
        <div className="flex items-center gap-2 w-full">
            {showLabels && (
                <span className="text-sm text-gray-600 dark:text-gray-400 opacity-70">
                    {labelMin}
                </span>
            )}

            <div className="relative flex-1">
                {/* Inactive track */}
                <div
                    className="absolute top-1/2 -translate-y-1/2 left-0"
                    style={trackStyleInactive}
                />

                {/* Active track */}
                <div
                    className="absolute top-1/2 -translate-y-1/2 left-0"
                    style={trackStyleActive}
                />

                <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={value}
                    onChange={handleChange}
                    style={thumbVarStyle}
                    className={rangeInputClasses}
                    {...props}
                />

                {/* Optional badge */}
                {badge && (
                    <div
                        className="absolute px-2 py-1 text-sm whitespace-nowrap rounded-md shadow bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600"
                        style={{
                            bottom: `${Math.max(inactiveThickness, activeThickness) + 12}px`,
                            left: `${percentage}%`,
                            transform: "translateX(-50%)",
                            pointerEvents: "none",
                            zIndex: 10,
                        }}
                    >
                        {badge}
                    </div>
                )}
            </div>

            {showLabels && (
                <span className="text-sm text-gray-600 dark:text-gray-400 opacity-70">
                  {labelMax}
                </span>
            )}
        </div>
    );

    return (
        <div className={mergeClasses("flex flex-col w-full gap-2", className)}>
            {valuePosition === "top" && (
                <div className="flex flex-col items-center gap-2">
                    {renderValue()}
                    {sliderBody}
                </div>
            )}
            {valuePosition === "left" && (
                <div className="flex items-center gap-2">
                    {renderValue()}
                    {sliderBody}
                </div>
            )}
            {valuePosition !== "left" && valuePosition !== "right" &&
                valuePosition !== "top" && valuePosition !== "bottom" && sliderBody}
            {valuePosition === "right" && (
                <div className="flex items-center gap-2">
                    {sliderBody}
                    {renderValue()}
                </div>
            )}
            {valuePosition === "bottom" && (
                <div className="flex flex-col items-center gap-2">
                    {sliderBody}
                    {renderValue()}
                </div>
            )}
        </div>
    );
}
