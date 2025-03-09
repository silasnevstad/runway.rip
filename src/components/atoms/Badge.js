"use client";
import React from "react";
import {mergeClasses, getHoverClasses, COLOR_VARIANTS, BORDER_RADIUS, BADGE_SIZES} from "@/utils/styling";

export default function Badge({
    children,
    color = "primary",
    variant = "soft",
    borderRadius = "full",
    size = "md",
    border = false,
    lift = false,
    scale = false,
    active = false,
    hoverBg = true,
    onClick,
    className = "",
    ...props
}) {
    const colorSet = COLOR_VARIANTS[color][variant];
    const borderRadiusClass = BORDER_RADIUS[borderRadius];

    // Final classes
    const finalClasses = mergeClasses(
        "inline-flex items-center justify-center font-medium whitespace-nowrap",
        borderRadiusClass,
        BADGE_SIZES[size] || BADGE_SIZES.md,
        colorSet.bg,
        colorSet.text,
        hoverBg && colorSet.hoverBg,
        border && `border ${colorSet.border}`,
        getHoverClasses({ lift, scale, active }),
        className
    );

    return (
        <div className={finalClasses} onClick={onClick} {...props} aria-label={children}>
            {children}
        </div>
    );
}
