"use client";
import React from "react";
import Link from "next/link";
import Loader from "@/components/atoms/Loader";
import { mergeClasses } from "@/utils/classNames";
import { getHoverClasses } from "@/utils/classes";

export default function Button({
    children,
    size = "md",
    color = "primary",
    borderRadius = "md",
    hoverBg = true,
    scale = false,
    lift = false,
    active = true,
    border = false,
    shadow = false,
    loading = false,
    disabled = false,
    href = "",
    icon = null,
    onClick,
    className = "",
    ...props
}) {
    // Tailwind sizing
    const sizeStyles = {
        sm: `px-3 py-1.5 text-sm`,
        md: `px-4 py-2.5 text-md`,
        lg: `px-5 py-3 text-lg`,
    };

    // Color handling & hover background
    const colorClass = mergeClasses(
        `bg-${color}-500 text-white`,
        hoverBg && `hover:bg-${color}-600 dark:hover:bg-${color}-600`
    );

    // Merge all classes
    const finalClasses = mergeClasses(
        "inline-flex items-center justify-center font-medium transition-colors gap-2",
        sizeStyles[size] || sizeStyles.md,
        colorClass,
        border && `border border-bg-700 dark:border-bg-500`,
        borderRadius && `rounded-${borderRadius}`,
        shadow && "shadow-md",
        getHoverClasses({ lift, scale, active }),
        disabled || loading ? "cursor-not-allowed opacity-50" : "cursor-pointer",
        className
    );

    // Loading vs. normal content
    const content = loading ? (
        <Loader className={`text-${color}-900`} />
    ) : (
        <>
            {icon && icon}
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
        >
            {content}
        </button>
    );
}
