"use client";
import React, { useState, useEffect } from "react";
import {BORDER_RADIUS, COLOR_VARIANTS, mergeClasses} from "@/utils/styling";

export default function Slider({
    // Range configuration
    min = 0,
    max = 100,
    step = 1,
    defaultValue = 50,

    // Whether to show the min and max labels
    showLabels = false,
    valuePosition = "follow",  // "left", "right", or "follow"

    // Styling
    color = "primary",
    inactiveColor = "gray",
    variant = "solid",
    showThumb = true,
    thumbBorderColor = "gray",
    thumbBorderRadius = "lg",
    thumbSize = "5",
    thumbBorder = true,
    thumbScale = true,
    thumbClassName = "",

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

    // Styling
    const percentage = ((value - min) / (max - min)) * 100;
    const thumbOffset = 10;

    const colorSet = COLOR_VARIANTS[color][variant] || COLOR_VARIANTS.primary.soft;
    const inactiveTrackColor = COLOR_VARIANTS[inactiveColor][variant] || COLOR_VARIANTS.gray.soft;
    const thumbBorderColorSet = COLOR_VARIANTS[thumbBorderColor][variant] || COLOR_VARIANTS.gray.soft;
    const thumbBorderRadiusClass = BORDER_RADIUS[thumbBorderRadius] || BORDER_RADIUS.lg;
    const activeTrackBorderRadiusClass = BORDER_RADIUS[activeTrackBorderRadius] || BORDER_RADIUS.full;
    const inactiveTrackBorderRadiusClass = BORDER_RADIUS[inactiveTrackBorderRadius] || BORDER_RADIUS.full;

    // Inactive track style
    const inactiveTrackStyle = mergeClasses(
        "absolute top-1/2 -translate-y-1/2",
        inactiveTrackColor.bg,
        `w-full h-${inactiveTrackWidth}`,
        inactiveTrackBorderRadiusClass,
        inactiveTrackClassName
    );

    // Active track style
    const activeTrackStyle = mergeClasses(
        "absolute top-1/2 -translate-y-1/2",
        colorSet.bg,
        `h-${activeTrackWidth}`,
        activeTrackBorderRadiusClass,
        activeTrackClassName
    );

    // Thumb style
    const thumbStyle = mergeClasses(
        "absolute top-1/2 -translate-y-1/2",
        `w-${thumbSize} h-${thumbSize}`,
        thumbBorderRadiusClass,
        colorSet.activeBg,
        thumbBorder && `border-2 ${thumbBorderColorSet.border}`,
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
