"use client";
import React, { useState, useEffect, useRef } from "react";
import { mergeClasses } from "@/utils/styling";

export default function TextArea({
    /* Label & messages */
    label = "",
    helperText = "",
    error = "",

    /* Numeric padding for container (in px) */
    padding = 8,

    /* Font & border styling */
    textSize = "md",
    borderRadius = "md",
    focus = true,
    activeColor = "primary",

    /* Auto-grow behavior */
    autoGrow = true,
    minRows = 2,
    maxRows = 8,

    /* Slots */
    topRightSlot,     // Renders to the right of the text area
    bottomLeftSlot,   // Below, on the left
    bottomRightSlot,  // Below, on the right

    /* Controlled/uncontrolled value */
    value: controlledValue,
    onChange,

    /* Tailwind classes, etc. */
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

    // Styles for the outer container
    const containerClasses = mergeClasses(
        "border border-gray-300 dark:border-gray-700 rounded",
        `rounded-${borderRadius}`,
        focus &&
        `focus-within:border-${activeColor}-500 
       focus-within:ring-1 focus-within:ring-${activeColor}-500/30`,
        className
    );

    // TextArea classes
    const textAreaClasses = mergeClasses(
        "w-full bg-transparent border-none focus:outline-none focus:ring-0 dark:text-gray-100 resize-none p-0",
        `text-${textSize}`,
        "items-start justify-start text-left border"
    );

    // Error styling
    const isErrored = Boolean(error);
    const labelColorClasses = isErrored
        ? "text-red-600 dark:text-red-400"
        : "text-gray-700 dark:text-gray-300";
    const messageColorClasses = isErrored
        ? "text-red-600 dark:text-red-400"
        : "text-gray-500 dark:text-gray-400";

    return (
        <div className="flex w-full flex-col gap-1">
            {/* Label */}
            {label && (
                <label
                    htmlFor={props.id}
                    className={mergeClasses("block font-medium", `text-${textSize}`, labelColorClasses)}
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

            {/* Error or helper text */}
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
