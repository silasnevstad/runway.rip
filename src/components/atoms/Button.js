"use client";
import React from "react";
import Link from "next/link";
import Loader from "@/components/atoms/Loader";
import {mergeClasses, getHoverClasses, COLOR_VARIANTS, BORDER_RADIUS, renderIcon} from "@/utils/styling";

export default function Button({
    children,
    size = "md",
    color = "primary",
    borderColor = "gray",
    variant = "solid",
    borderRadius = "md",
    hoverBg = true,
    scale = false,
    lift = false,
    active = true,
    border = false,
    shadow = false,
    loading = false,
    disabled = false,
    icon,
    iconSrc = "",
    href = "",
    onClick,
    className = "",
    ...props
}) {
    const sizeStyles = {
        xs: `px-2 py-1 text-xs`,
        sm: `px-3 py-1.5 text-sm`,
        md: `px-4 py-2.5 text-md`,
        lg: `px-5 py-3 text-lg`,
        xl: `px-6 py-4 text-xl`,
    };
    const iconSizes = {
        xs: "w-3 h-3",
        sm: "w-4 h-4",
        md: "w-5 h-5",
        lg: "w-6 h-6",
        xl: "w-7 h-7",
    }

    const colorSet = COLOR_VARIANTS[color][variant] || COLOR_VARIANTS.primary.solid;
    const borderSet = COLOR_VARIANTS[borderColor][variant] || COLOR_VARIANTS.gray.solid;
    const borderRadiusClass = BORDER_RADIUS[borderRadius] || BORDER_RADIUS.lg;

    const finalClasses = mergeClasses(
        "inline-flex items-center justify-center font-medium transition-colors gap-2",
        sizeStyles[size] || sizeStyles.md,
        colorSet.bg,
        colorSet.text,
        hoverBg && colorSet.hoverBg,
        border && `border ${borderSet.border}`,
        borderRadius && borderRadiusClass,
        shadow && "shadow-md",
        getHoverClasses({ lift, scale, active }),
        disabled || loading ? "cursor-not-allowed opacity-50" : "cursor-pointer",
        className
    );

    const iconClasses = `
        ${iconSizes[size] || iconSizes.md}
        ${colorSet.text}
    `;

    // Loading vs. normal content
    const content = loading ? (
        <>
            <Loader className={`text-${color}-900`} />
            {children}
        </>
    ) : (
        <>
            {icon && renderIcon({icon: icon, extraClasses: iconClasses})}
            {iconSrc && (
                <Image
                    src={iconSrc}
                    alt={children}
                    className="w-4 h-4"
                />
            )}
            {children}
        </>
    );

    // If `href` is provided, render as a Next.js Link
    if (href) {
        return (
            <Link href={href} className={finalClasses} {...props}>
                {content}
            </Link>
        );
    }

    // Otherwise a standard <button>
    return (
        <button
            onClick={onClick}
            disabled={disabled || loading}
            className={finalClasses}
            {...props}
            aria-label={children}
        >
            {content}
        </button>
    );
}
