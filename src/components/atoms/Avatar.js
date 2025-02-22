"use client";
import React, { useState } from "react";
import Image from "next/image";
import { mergeClasses } from "@/utils/classNames";

export default function Avatar({
    src,
    alt = "",
    letter = "",
    color = "gray",
    borderRadius = "full",
    size = "md",
    border = true,
    status,
    statusColor = "green",
    ringColor = "gray",
    onClick,
    className = "",
    ...props
}) {
    const [imgError, setImgError] = useState(false);

    // Size definitions
    const sizeStyles = {
        xs: "w-8 h-8 text-sm",
        sm: "w-10 h-10 text-base",
        md: "w-12 h-12 text-base",
        lg: "w-16 h-16 text-lg",
        xl: "w-20 h-20 text-xl",
    };

    const finalSize = sizeStyles[size] || sizeStyles.md;

    const containerClasses = mergeClasses(
        "relative inline-flex justify-center items-center",
        finalSize,
        borderRadius && `rounded-${borderRadius}`,
        border && `border-2 border-${color}-500 dark:border-${color}-600`,
        status && ringColor && `border-2 border-${ringColor}-500 dark:border-${ringColor}-500`,
        `bg-${color}-200 dark:bg-${color}-800 text-${color}-800 dark:text-${color}-200`,
        onClick && "cursor-pointer active:scale-95",
        className
    );

    const fallbackLetter = letter || (alt?.[0]?.toUpperCase() ?? "?");
    const showImage = src && !imgError;

    const handleImageError = () => setImgError(true);

    return (
        <div className={containerClasses} onClick={onClick} {...props} title={status} aria-label={alt}>
            {showImage ? (
                <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="100%"
                    className={`object-cover ${borderRadius && `rounded-${borderRadius}`}`}
                    onError={handleImageError}
                />
            ) : (
                <span className="font-semibold select-none">{fallbackLetter}</span>
            )}
            {status && (
                <span
                    className={mergeClasses(
                        "z-50 absolute w-3 h-3 rounded-full ring-2 ring-white dark:ring-gray-800 bottom-0 right-0 transform translate-x-1/4 translate-y-1/4",
                        statusColor  && `bg-${statusColor}-400`
                    )}
                />
            )}
        </div>
    );
}
