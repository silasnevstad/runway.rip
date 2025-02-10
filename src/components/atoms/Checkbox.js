"use client";

import React from "react";
import { mergeClasses } from "@/utils/classNames";

const Checkbox = ({
    className = "",
    id,
    name,
    label,
    helperText,
    checked = false,
    onChange,
    labelPosition = "right", // "left" or "right"
    color = "primary",
    disabled = false,
    circle = false,
}) => {
    // Container styles: set layout and opacity if disabled.
    const containerClasses = mergeClasses(
        "flex items-center justify-center",
        labelPosition === "left" ? "flex-row-reverse" : "flex-row",
        disabled && "opacity-50",
        className
    );

    // Input checkbox styles: set size, border, color, and shape.
    const inputClasses = mergeClasses(
        "checkbox h-4 w-4 border-gray-300",
        `text-${color}-500`,
        circle ? "rounded-full" : "rounded-sm",
        className
    );

    // Label container: add margin-top if helper text is provided.
    const labelContainerClasses = mergeClasses(
        "flex flex-col items-center justify-start",
        helperText && "mt-4"
    );

    return (
        <div className={containerClasses}>
            <input
                className={inputClasses}
                type="checkbox"
                id={id}
                name={name}
                checked={checked}
                onChange={onChange}
                disabled={disabled}
            />
            <div className={labelContainerClasses}>
                <label htmlFor={id} className="mx-3 font-medium">
                    {label}
                </label>
                {helperText && <p className="text-xs text-gray-500">{helperText}</p>}
            </div>
        </div>
    );
};

export default Checkbox;
