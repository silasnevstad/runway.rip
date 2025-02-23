"use client";
import React, { useState, useEffect } from "react";
import { mergeClasses } from "@/utils/styling";

export default function Slider({
    // Range configuration
    min = 0,
    max = 100,
    step = 1,
    defaultValue = 50,

    // Whether to show the min and max labels
    showLabels = false,
    valuePosition = "follow",  // "left", "right", or "follow"

    // Thumb styling
    showThumb = true,
    thumbColor = "primary",
    thumbBorderColor = "gray",
    thumbBorderRadius = "lg",
    thumbSize = "5",
    thumbBorder = true,
    thumbScale = true,
    thumbClassName = "",

    // Track styling
    activeTrackColor = "primary",
    inactiveTrackColor = "gray",
    activeTrackWidth = "3",
    inactiveTrackWidth = "1",
    activeTrackBorderRadius = "full",
    inactiveTrackBorderRadius = "full",
    activeTrackClassName = "",
    inactiveTrackClassName = "",

    // Events
    onChange,
    className = "",
    ...props
}) {
    const [value, setValue] = useState(defaultValue);

    useEffect(() => {
        setValue(defaultValue);
    }, [defaultValue]);

    function handleChange(e) {
        const val = Number(e.target.value);
        setValue(val);
        onChange?.(val);
    }

    // Percentage of how far along the slider is
    const percentage = ((value - min) / (max - min)) * 100;

    // Offset to center the thumb (approx half the thumb width, in px)
    const thumbOffset = 10;

    // Inactive track style
    const inactiveTrackStyle = mergeClasses(
        "absolute top-1/2 -translate-y-1/2",
        `bg-${inactiveTrackColor}-300 dark:bg-${inactiveTrackColor}-600/50`,
        `w-full h-${inactiveTrackWidth}`,
        `rounded-${inactiveTrackBorderRadius}`,
        inactiveTrackClassName
    );

    // Active track style
    const activeTrackStyle = mergeClasses(
        "absolute top-1/2 -translate-y-1/2",
        `bg-${activeTrackColor}-500 dark:bg-${activeTrackColor}-600`,
        `h-${activeTrackWidth}`,
        `rounded-${activeTrackBorderRadius}`,
        activeTrackClassName
    );

    // Thumb style
    const thumbStyle = mergeClasses(
        "absolute top-1/2 -translate-y-1/2",
        `w-${thumbSize} h-${thumbSize}`,
        `bg-${thumbColor}-500 rounded-${thumbBorderRadius}`,
        thumbBorder && `border-2 border-${thumbBorderColor}-100 dark:border-${thumbBorderColor}-900`,
        "shadow-md transition-transform duration-150",
        thumbScale && "transform scale-100 hover:scale-110 active:scale-90",
        thumbClassName
    );

    return (
        <div className={mergeClasses("flex items-center gap-2 w-full", className)}>
            {/* LEFT LABEL: show either min or the current value (if valuePosition === "left") */}
            {showLabels ? (valuePosition === "left" ? (
                <span className="font-medium text-gray-700 dark:text-gray-200 min-w-[2rem] text-right">
                    {value}
                </span>
            ) : (
                <span className="text-xs text-gray-600 dark:text-gray-400 min-w-[2rem] text-right">
                    {min}
                </span>
            )) : (valuePosition === "left" && (
                <span className="font-medium text-gray-700 dark:text-gray-200 min-w-[2rem] text-right">
                    {value}
                </span>
            ))}



            {/* SLIDER TRACK + THUMB */}
            <div className="relative flex-1" style={{ height: "1.8rem" }}>
                {/* Inactive track */}
                <div className={inactiveTrackStyle} />

                {/* Active portion */}
                <div
                    className={activeTrackStyle}
                    style={{ width: `${percentage}%` }}
                />

                {/* Thumb */}
                {showThumb && (
                    <div
                        className={thumbStyle}
                        style={{ left: `calc(${percentage}% - ${thumbOffset}px)` }}
                    />
                )}

                {/* Invisible native range input */}
                <input
                    {...props}
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={value}
                    onChange={handleChange}
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                />

                {/* "Follow" put value above the thumb (valuePosition === "follow") */}
                {valuePosition === "follow" && (
                    <div
                        className="absolute text-sm
                       text-gray-700 dark:text-gray-100 font-medium
                       -translate-y-1/3 -translate-x-1/2 pointer-events-none"
                        style={{ left: `calc(${percentage}% )`, bottom: "100%" }}
                    >
                        {value}
                    </div>
                )}
            </div>

            {/* RIGHT LABEL: show either max or the current value (if valuePosition === "right") */}
            {showLabels ? (valuePosition === "right" ? (
                <span className="font-medium text-gray-700 dark:text-gray-200 min-w-[2rem]">
                    {value}
                </span>
            ) : (
                <span className="text-xs text-gray-600 dark:text-gray-400 min-w-[2rem]">
                    {max}
                </span>
            )) : (valuePosition === "right" && (
                <span className="font-medium text-gray-700 dark:text-gray-200 min-w-[2rem]">
                    {value}
                </span>
            ))}
        </div>
    );
}
