"use client";
import React, { useState } from "react";
import Image from "next/image";
import {BORDER_RADIUS, COLOR_VARIANTS, mergeClasses} from "@/utils/styling";

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
    const {
        bgClasses,
        borderClasses,
        textClasses,
    } = COLOR_VARIANTS[color];
    const ringClasses = COLOR_VARIANTS[ringColor].activeBorderClasses;
    const statusColorClasses = COLOR_VARIANTS[statusColor].activeBgClasses;
    const borderRadiusClass = BORDER_RADIUS[borderRadius];

    const containerClasses = mergeClasses(
        "relative inline-flex justify-center items-center",
        finalSize,
        borderRadius && borderRadiusClass,
        border && `border-2 ${borderClasses}`,
        status && ringColor && `border-2 ${ringClasses}`,
        bgClasses,
        textClasses,
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
                    className={`object-cover ${borderRadius && borderRadiusClass}`}
                    onError={handleImageError}
                />
            ) : (
                <span className="font-semibold select-none">{fallbackLetter}</span>
            )}
            {status && (
                <span
                    className={mergeClasses(
                        "z-50 absolute w-3 h-3 rounded-full ring-2 ring-white dark:ring-gray-800 bottom-0 right-0 transform translate-x-1/4 translate-y-1/4",
                        statusColorClasses
                    )}
                />
            )}
        </div>
    );
}
