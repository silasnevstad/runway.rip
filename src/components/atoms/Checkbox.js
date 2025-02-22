"use client";
import React from "react";
import { mergeClasses } from "@/utils/classNames";
import { getHoverClasses } from "@/utils/classes";

const Checkbox = ({
    name,
    label,
    helperText,
    labelPosition = "right", // "left" or "right"
    size = "md",
    color = "primary",
    borderRadius = "sm",
    border = false,
    lift = false,
    scale = false,
    active = true,
    disabled = false,
    checked = false,
    onChange,
    className = "",
    ...props
}) => {
    const sizeStyles = {
        sm: "h-3 w-3",
        md: "h-4 w-4",
        lg: "h-5 w-5",
    }

    // Container styles
    const containerClasses = mergeClasses(
        "flex items-center justify-center",
        labelPosition === "left" ? "flex-row-reverse" : "flex-row",
        disabled && "opacity-50",
        className
    );

    // Input checkbox styles:
    const inputClasses = mergeClasses(
        "checkbox",
        sizeStyles[size] || sizeStyles.md,
        `text-${color}-500`,
        border && `border border-${color}-800 dark:border-${color}-200`,
        borderRadius && `rounded-${borderRadius}`,
        getHoverClasses({ lift, scale, active }),
        className
    );

    // Label container
    const labelContainerClasses = mergeClasses(
        "flex flex-col items-center justify-start",
        helperText && "mt-4"
    );

    return (
        <div className={containerClasses}>
            <input
                className={inputClasses}
                type="checkbox"
                name={name}
                checked={checked}
                onChange={onChange}
                disabled={disabled}
                aria-label={label}
                {...props}
            />
            <div className={labelContainerClasses}>
                <label className="mx-3 font-medium">
                    {label}
                </label>
                {helperText && <p className="text-xs text-gray-500">{helperText}</p>}
            </div>
        </div>
    );
};

export default Checkbox;
