"use client";
import React from 'react';
import { mergeClasses } from "@/utils/classNames";
import { getHoverClasses } from "@/utils/classes";

export default function Card({
    children,
    size = "md",
    color = "bg",
    borderRadius = "2xl",
    shadow = false,
    hoverBg = false,
    lift = false,
    scale = false,
    active = false,
    outline = false,
    border = true,
    href = "",
    onClick,
    className = "",
    ...props
}) {
    // Size definitions
    const sizeStyles = {
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
    }

    // Merge all classes
    const finalClasses = mergeClasses(
        `relative bg-${color}-50 dark:bg-${color}-800`,
        hoverBg && `hover:bg-${color}-100 dark:hover:bg-${color}-900`,
        sizeStyles[size] || sizeStyles.md,
        borderRadius && `rounded-${borderRadius}`,
        border && `border border-${color}-300 dark:border-${color}-700/40`,
        shadow && "hover:shadow-md",
        outline && "hover:border-black hover:bg-bg-0 dark:hover:bg-bg-800 dark:hover:border-gray-700",
        href && "cursor-pointer",
        onClick && "cursor-pointer",
        getHoverClasses({ lift, scale, active }),
        className
    );

    return (
        <div
            className={finalClasses}
            onClick={href ? () => window.location.href = href : onClick}
            {...props}
            aria-label={children}
        >
            {children}
        </div>
    );
};