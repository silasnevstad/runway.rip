'use client';

import Image from "next/image";
import { useState } from "react";

const shapeStyles = {
    circle: "rounded-full",
    rounded: "rounded-lg",
    square: "rounded-none",
};

const sizeStyles = {
    xs: "w-8 h-8 text-sm",
    sm: "w-10 h-10 text-base",
    md: "w-12 h-12 text-base",
    lg: "w-16 h-16 text-lg",
    xl: "w-20 h-20 text-xl",
};

export default function Avatar({
    src,
    alt = "",
    letter,
    size = "md",          // "xs" | "sm" | "md" | "lg" | "xl"
    shape = "circle",    // "circle" | "rounded" | "square"
    borderColor = "gray-400 dark:border-gray-500",
    bgColor = "bg-gray-200 dark:bg-gray-700",
    textColor = "text-gray-600 dark:text-gray-300",
    ringColor,           // e.g. "ring-2 ring-primary-500"
    status,             // e.g. "online", "offline", "busy", or any custom string
    statusColor,        // e.g. "bg-green-400", "bg-red-400", etc.
    className = "",
    onClick,
    style,
    ...props
}) {
    const [imgError, setImgError] = useState(false);

    // Decide if we’re displaying an image or letter
    const shouldShowImage = src && !imgError;

    // Derive fallback letter if none provided
    let letterToShow = letter || (alt && alt.length > 0 ? alt[0].toUpperCase() : "?");

    // Compose final classes
    const finalShape = shapeStyles[shape] || shapeStyles.circle;
    const finalSize = sizeStyles[size] || sizeStyles.md;
    const ring = ringColor ? ringColor : "";
    const base = `relative inline-flex justify-center items-center border-2 ${finalShape} ${finalSize} ${borderColor} ${bgColor} ${textColor} ${ring} ${className}`;

    const handleError = () => {
        setImgError(true);
    };

    return (
        <div className={base} onClick={onClick} style={style} {...props}>
            {shouldShowImage ? (
                <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="100%"
                    onError={handleError}
                    className={`object-cover ${finalShape}`}
                />
            ) : (
                <span className="font-semibold select-none">
          {letterToShow}
        </span>
            )}

            {/* If we have a status, show a small dot in bottom-right corner */}
            {status && (
                <span
                    className={`
            absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4 
            w-3 h-3 rounded-full ring-2 ring-white dark:ring-gray-800
            ${statusColor || "bg-green-400"}
          `}
                    title={status}
                />
            )}
        </div>
    );
}
