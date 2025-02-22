import React from "react";
import { mergeClasses, POSITION_CLASSES } from "@/utils/styling";

export default function Indicator({
    children,
    color = "primary",
    position = "top-right",
    size = "md",
    content = "",
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

    const positionClass = POSITION_CLASSES[position] ?? POSITION_CLASSES["top-right"];

    // For dots (no text), fix the container size; for text, let it auto-size.
    const containerSize = content ? "" : dotSizeClasses[size] || dotSizeClasses.md;
    const contentSize = content
        ? textSizeClasses[size] || textSizeClasses.md
        : "h-full w-full";

    return (
        <div className="relative">
            {children}
            <div className={mergeClasses("absolute", positionClass)} {...props}>
                <span className={mergeClasses("relative inline-flex", containerSize)}>
                    {ping && (
                        <span
                            style={{ transform: `scale(${pingScale})` }}
                            className={mergeClasses(
                        "absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping",
                                `bg-${color}-400`,
                                "scale-75"
                            )}
                        />
                    )}
                    <span
                        className={mergeClasses(
                            "relative inline-flex items-center justify-center rounded-full text-white whitespace-nowrap",
                            `bg-${color}-500`,
                            contentSize,
                            className
                        )}
                    >
                        {content}
                    </span>
                </span>
            </div>
        </div>
    );
}
