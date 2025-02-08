"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Loader from "@/components/atoms/Loader";
import {makeClassNameImportant, mergeClasses} from "@/utils/classNames";

const Button = ({
    // Core props
    children,
    onClick,
    href = "",
    className = "",
    disabled = false,
    loading = false,
    shadow = false,

    // Effects
    active = true,
    grow = false,
    lift = false,

    // Icon support
    icon: Icon = null,
    iconSrc = "",
    iconAlt = "",
    iconClassname = "",

    // Optional
    textColor = "",
    backgroundColor = "",
    hoverBackgroundColor = "",
    shape = "",

    ...props
}) => {
    const baseStyles = [
        `text-lg font-semibold py-2.5 px-12`,
        shape ? `${shape}` : "rounded-lg",
        textColor ?`text-${textColor}` : "text-white",
        backgroundColor ? `bg-${backgroundColor}` : "bg-primary-600",
        hoverBackgroundColor ? `hover:bg-${hoverBackgroundColor}` : "hover:bg-primary-600",
        `flex items-center justify-center gap-2 transition duration-200 ease-in-out`,
        // add effect where when you click the button it scales down and back up
        active ? `active:scale-95` : "",
        shadow ? "shadow-md" : "",
        disabled || loading ? "cursor-not-allowed opacity-50" : "cursor-pointer",
        grow ? "hover:scale-105" : "",
        lift ? "hover:-translate-y-1" : "",
    ].join(" ");

    const finalClassName = mergeClasses(
        "relative",
        baseStyles,
        className
    );

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