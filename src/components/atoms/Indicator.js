import React from "react";
import {BORDER_RADIUS, COLOR_VARIANTS, mergeClasses, POSITION_CLASSES} from "@/utils/styling";

export default function Indicator({
    children,
    content = "",
    color = "primary",
    variant = "solid",
    position = "top-right",
    size = "md",
    borderRadius = "full",
    border = false,
    ping = false,
    pingScale = 0.1,
    className = "",
    ...props
}) {
    // Text and dot size styling
    const textSizeClasses = {
        sm: "py-0.5 px-1 text-xs",
        md: "py-1 px-2 text-sm",
        lg: "py-2 px-4 text-base",
    };

    const dotSizeClasses = {
        sm: "w-2 h-2",
        md: "w-4 h-4",
        lg: "w-6 h-6",
    };

    const colorSet = COLOR_VARIANTS[color][variant] || COLOR_VARIANTS.primary.solid;
    const positionClass = POSITION_CLASSES[position] ?? POSITION_CLASSES["top-right"];
    const borderRadiusClass = BORDER_RADIUS[borderRadius] || BORDER_RADIUS.full;

    // For dots (no text), fix the container size; for text, let it auto-size.
    const containerSize = content ? "" : dotSizeClasses[size] || dotSizeClasses.md;
    const contentSize = content
        ? textSizeClasses[size] || textSizeClasses.md
        : "h-full w-full";

    const finalClasses = mergeClasses(
        "relative inline-flex items-center justify-center whitespace-nowrap",
        colorSet.activeBg,
        colorSet.text,
        borderRadiusClass,
        border && `border ${colorSet.border}`,
        contentSize,
        className
    );

    const pingClasses = mergeClasses(
        "absolute inline-flex h-full w-full animate-ping",
        colorSet.activeBg,
        borderRadiusClass,
        "scale-75"
    );

    return (
        <div className="relative">
            {children}
            <div className={mergeClasses("absolute", positionClass)} {...props}>
                <span className={mergeClasses("relative inline-flex", containerSize)}>
                    {ping && (
                        <span
                            style={{ transform: `scale(${pingScale})` }}
                            className={pingClasses}
                        />
                    )}
                    <span className={finalClasses}>
                        {content}
                    </span>
                </span>
            </div>
        </div>
    );
}
