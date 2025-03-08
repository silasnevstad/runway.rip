"use client";
import React from 'react';
import {mergeClasses, getHoverClasses, COLOR_VARIANTS, BORDER_RADIUS} from "@/utils/styling";

export default function Card({
    children,
    padding = 24,  // in px
    paddingX, // in px
    paddingY, // in px
    color = "gray",
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
    const colorSet = COLOR_VARIANTS[color][variant] || COLOR_VARIANTS.bg.soft;
    const borderRadiusClass = BORDER_RADIUS[borderRadius] || BORDER_RADIUS.xl;

    // Merge all classes
    const finalClasses = mergeClasses(
        "relative",
        colorSet.bg,
        hoverBg && colorSet.hoverBg,
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

    // cleverly creat the style, by default use padding, but if paddingX or paddingY is set, use them, sometimes only one of them is set
    // and we need to use the other one from padding
    const style = {
        padding: (paddingX || paddingY) ? 0 : padding,
        paddingLeft: paddingX || padding,
        paddingRight: paddingX || padding,
        paddingTop: paddingY || padding,
        paddingBottom: paddingY || padding,
    };

    return (
        <div
            style={style}
            className={finalClasses}
            onClick={href ? () => window.location.href = href : onClick}
            {...props}
            aria-label={children}
        >
            {children}
        </div>
    );
};