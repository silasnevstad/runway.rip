"use client";
import React, { useState } from "react";
import Image from "next/image";
import {AVATAR_SIZES, BORDER_RADIUS, COLOR_VARIANTS, mergeClasses} from "@/utils/styling";

export default function Avatar({
    src,
    alt = "",
    letter = "",
    color = "gray",
    variant = "solid",
    borderRadius = "full",
    size = "md",
    border = true,
    status,
    statusColor = "green",
    showRing = true,
    onClick,
    className = "",
    ...props
}) {
    const [imgError, setImgError] = useState(false);

    const colorSet = COLOR_VARIANTS[color][variant] || COLOR_VARIANTS.gray.soft;
    const statusColorSet = COLOR_VARIANTS[statusColor].solid || COLOR_VARIANTS.green.solid;
    const borderRadiusClass = BORDER_RADIUS[borderRadius] || BORDER_RADIUS.full;

    const containerClasses = mergeClasses(
        "relative inline-flex justify-center items-center",
        AVATAR_SIZES[size] || AVATAR_SIZES.md,
        border && `border-2 ${colorSet.border}`,
        status && showRing && `border-2 ${statusColorSet.activeBorder}`,
        colorSet.bg,
        colorSet.text,
        borderRadiusClass,
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
                        statusColorSet.bg
                    )}
                />
            )}
        </div>
    );
}
