"use client";
import React from "react";
import { mergeClasses } from "@/utils/classNames";
import { getHoverClasses } from "@/utils/classes";

export default function Badge({
    children,
    className = "",
    borderRadius = "full",
    size = "md",
    variant = "soft",
    color = "primary",
    border = false,
    lift = false,
    scale = false,
    onClick,
    ...props
}) {
    // Size & shape definitions
    const sizeShapeStyles = {
        xs: `rounded-${borderRadius} px-1.5 py-1 text-xs`,
        sm: `rounded-${borderRadius} px-2 py-1 text-sm`,
        md: `rounded-${borderRadius} px-3 py-1 text-base`,
        lg: `rounded-${borderRadius} px-4 py-1.5 text-lg`,
    };

    // Color & variant definitions
    const colorStyles = {
        soft: `bg-${color}-100 dark:bg-${color}-600/25 text-${color}-800 dark:text-${color}-400`,
        solid: `bg-${color}-600 text-white`,
    };

    // Border logic
    const borderStyles = {
        soft: `border border-${color}-600 dark:border-${color}-600`,
        solid: `border border-${color}-600`,
    }

    // Final classes
    const finalClasses = mergeClasses(
        "inline-flex items-center justify-center font-medium",
        sizeShapeStyles[size] || sizeShapeStyles.md,
        colorStyles[variant] || colorStyles.soft,
        border && (borderStyles[variant] || borderStyles.soft),
        getHoverClasses({ lift, scale }),
        onClick && "cursor-pointer active:scale-95",
        className
    );

    return (
        <div className={finalClasses} onClick={onClick} {...props}>
            {children}
        </div>
    );
}
