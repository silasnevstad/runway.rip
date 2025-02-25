"use client";
import React from 'react';
import {mergeClasses, getHoverClasses, COLOR_VARIANTS, BORDER_RADIUS} from "@/utils/styling";

export default function Card({
    children,
    size = "md",
    color = "bg",
    variant = "soft",
    borderRadius = "2xl",
    shadow = false,
    hoverShadow = false,
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

    const colorSet = COLOR_VARIANTS[color][variant] || COLOR_VARIANTS.bg.soft;
    const borderRadiusClass = BORDER_RADIUS[borderRadius] || BORDER_RADIUS.xl;

    // Merge all classes
    const finalClasses = mergeClasses(
        colorSet.bg,
        hoverBg && colorSet.hoverBg,
        sizeStyles[size] || sizeStyles.md,
        borderRadiusClass,
        border && `border ${colorSet.border}`,
        shadow && "shadow-md",
        hoverShadow && "hover:shadow-md",
        outline && "hover:border-black hover:bg-bg-0 dark:hover:bg-bg-900 dark:hover:border-gray-700",
        href && "cursor-pointer",
        onClick | href && "cursor-pointer active:scale-95",
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