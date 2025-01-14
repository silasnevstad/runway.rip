"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Loader from "@/components/atoms/Loader";

const Button = ({
    // Core props
    children,
    onClick,
    href = "",
    className = "",
    disabled = false,
    loading = false,

    // Variant system
    variant = "primary",

    // Additional style props
    shape = "rounded-lg",         // e.g., "rounded-lg", "rounded-full", "rounded-none", etc.
    fontSize = "lg",              // e.g., "sm", "md", "lg", numeric size, etc.
    fontWeight = "semibold",
    textColor = "white",
    backgroundColor = "primary-500",
    hoverBackgroundColor = "primary-600",

    // Visual toggles
    border = false,
    shadow = false,
    ping = false,
    grow = false, // Example of "grow on hover" or "scale" usage if you want

    // Icon support
    icon: Icon = null,
    iconSrc = "",
    iconAlt = "",
    iconClassname = "",

    ...props
}) => {
    // Base classes for any button
    const baseStyles = [
        `text-${fontSize}`,           // dynamic text size
        `font-${fontWeight}`,         // dynamic font weight
        "py-2.5 px-12",
        shape,
        "flex items-center justify-center gap-2",
        "transition duration-200 ease-in-out",
        disabled || loading ? "cursor-not-allowed opacity-50" : "cursor-pointer",
        ping ? "animate-ping" : "",
        grow ? "transition-transform hover:scale-102" : "",
    ].join(" ");

    // Default dynamic styles (if no variant is matched)
    let variantStyles = [
        `text-${textColor}`,
        `bg-${backgroundColor}`,
        `hover:bg-${hoverBackgroundColor}`,
        border ? "border border-bg-500 dark:border-bg-300" : "",
        shadow ? "shadow-md" : "",
    ].join(" ");

    // Predefined variant classes
    // If the user passes `variant="primary"`, for instance, it overrides the dynamic approach above.
    const variantClasses = {
        primary:
            "text-white bg-primary-600 hover:bg-primary-700 " +
            "dark:bg-primary-600 dark:hover:bg-primary-500",
        soft:
            `text-${textColor} bg-${backgroundColor}/25 hover:bg-${hoverBackgroundColor}/50 ` +
            `dark:bg-${backgroundColor}/50 dark:hover:bg-${hoverBackgroundColor}/80 ` +
            "dark:text-bg-200",
        danger:
            "text-white bg-red-500 hover:bg-red-600 " +
            "dark:bg-red-600 dark:hover:bg-red-500",
        outline:
            "bg-transparent text-gray-800 hover:bg-bg-100 border border-gray-300 " +
            "dark:text-gray-200 dark:hover:bg-gray-700 dark:border-gray-600",
        underline:
            "relative bg-transparent text-primary-500 hover:bg-transparent " +
            "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 " +
            "after:bg-primary-500 after:transition-transform after:duration-300 after:scale-x-0 after:origin-left " +
            "hover:after:scale-x-100 dark:text-primary-400",
        warning:
            "text-white bg-yellow-500 hover:bg-yellow-600 " +
            "dark:bg-yellow-600 dark:hover:bg-yellow-500",
        success:
            "text-white bg-green-500 hover:bg-green-600 " +
            "dark:bg-green-600 dark:hover:bg-green-500",
        info:
            "text-white bg-blue-500 hover:bg-blue-600 " +
            "dark:bg-blue-600 dark:hover:bg-blue-500",
        transparent:
            "bg-transparent text-gray-800 hover:text-gray-900 hover:scale-105 " +
            "dark:text-gray-200 dark:hover:text-gray-200",
    };

    // If there is a matching variant, use it
    if (variantClasses[variant]) {
        variantStyles = variantClasses[variant];
    }

    // Construct the final className string
    const finalClassName = [
        "relative",
        baseStyles,
        variantStyles,
        className,
    ].join(" ");

    // Optional icon element
    const iconElement = Icon
        ? // If using a React icon component (e.g., Heroicons)
        React.createElement(Icon, { className: `w-5 h-5 ${iconClassname}` })
        : iconSrc
            ? // If using an external image
            <Image src={iconSrc} alt={iconAlt} width={30} height={30} />
            : null;

    // Loading content or normal content
    const content = loading ? (
        <Loader className="text-primary-900" />
    ) : (
        <>
            {iconElement}
            {children}
        </>
    );

    // If `href` is set, render as a Next.js Link
    if (href) {
        return (
            <Link href={href} className={finalClassName} {...props}>
                {content}
            </Link>
        );
    }

    return (
        <button
            onClick={onClick}
            disabled={disabled || loading}
            className={finalClassName}
            {...props}
        >
            {content}
        </button>
    );
};

export default Button;