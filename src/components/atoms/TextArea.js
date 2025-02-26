"use client";
import React, { useState, useEffect, useRef } from "react";
import {BORDER_RADIUS, COLOR_VARIANTS, mergeClasses} from "@/utils/styling";

export default function TextArea({
    // Label and helper/error text
    label = "",
    helperText = "",
    error = "",

    // Styling
    padding = 8,
    borderRadius = "md",
    focus = true,
    activeColor = "primary",

    // Auto-grow configuration
    autoGrow = true,
    minRows = 2,
    maxRows = 8,

    // Slots
    topRightSlot,     // Renders to the right of the text area
    bottomLeftSlot,   // Below, on the left
    bottomRightSlot,  // Below, on the right

    // Controlled/uncontrolled value
    value: controlledValue,
    onChange,

    // Other props
    className = "",
    ...props
}) {
    const [internalValue, setInternalValue] = useState(controlledValue || "");
    const isControlled = controlledValue !== undefined;

    useEffect(() => {
        if (isControlled) setInternalValue(controlledValue);
    }, [controlledValue, isControlled]);

    const textAreaRef = useRef(null);

    const handleChange = (e) => {
        if (!isControlled) {
            setInternalValue(e.target.value);
        }
        onChange?.(e);
    };

    // Focus state
    const [isFocused, setIsFocused] = useState(false);
    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    // Auto-grow logic
    useEffect(() => {
        if (autoGrow && textAreaRef.current) {
            textAreaRef.current.style.height = "auto"; // reset before measuring
            const lineHeight = parseFloat(
                window.getComputedStyle(textAreaRef.current).lineHeight
            );
            const minHeight = minRows * lineHeight;
            const maxHeight = maxRows * lineHeight;
            const scrollHeight = textAreaRef.current.scrollHeight;

            textAreaRef.current.style.height = `${Math.min(
                maxHeight,
                Math.max(scrollHeight, minHeight)
            )}px`;
        }
    }, [internalValue, autoGrow, minRows, maxRows]);

    // Styling
    const activeColorSet = COLOR_VARIANTS[activeColor].soft;
    const borderRadiusClass = BORDER_RADIUS[borderRadius] || BORDER_RADIUS.md;

    const containerClasses = mergeClasses(
        "border border-gray-300 dark:border-gray-700",
        borderRadiusClass,
        focus && activeColorSet.focusWithin,
        className
    );

    const textAreaClasses = mergeClasses(
        "w-full bg-transparent border-none focus:outline-none focus:ring-0 dark:text-gray-100 resize-none p-0",
        "items-start justify-start text-left border"
    );

    const isErrored = Boolean(error);
    const labelColorClasses = isErrored
        ? "text-red-600 dark:text-red-400"
        : "text-gray-700 dark:text-gray-300";
    const messageColorClasses = isErrored
        ? "text-red-600 dark:text-red-400"
        : "text-gray-500 dark:text-gray-400";

    return (
        <div className="flex w-full flex-col gap-1">
            {label && (
                <label
                    htmlFor={props.id}
                    className={mergeClasses("block font-medium", labelColorClasses)}
                >
                    {label}
                </label>
            )}

            <div
                className={containerClasses}
                style={{ padding: `${padding}px` }}
            >
                <div className="flex items-start justify-start gap-2">
                    {/* Text Area */}
                    <textarea
                        {...props}
                        id={props.id}
                        ref={textAreaRef}
                        rows={minRows}
                        className={textAreaClasses}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        value={internalValue}
                        onChange={handleChange}
                    />

                    {/* Optional top-right content, in same row */}
                    {topRightSlot && (
                        <div className="flex-none">{topRightSlot}</div>
                    )}
                </div>

                {/* Row below for bottom-left and bottom-right content */}
                {(bottomLeftSlot || bottomRightSlot) && (
                    <div className="flex items-end justify-between mt-2">
                        <div>{bottomLeftSlot}</div>
                        <div>{bottomRightSlot}</div>
                    </div>
                )}
            </div>

            {isErrored ? (
                <p className={mergeClasses("mt-1 text-sm", messageColorClasses)}>
                    {error}
                </p>
            ) : helperText ? (
                <p className={mergeClasses("mt-1 text-sm", messageColorClasses)}>
                    {helperText}
                </p>
            ) : null}
        </div>
    );
}
