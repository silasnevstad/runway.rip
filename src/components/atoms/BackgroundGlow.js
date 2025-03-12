import React from "react";
import { mergeClasses, getTextColorClass } from "@/utils/styling";

const BackgroundGlow = ({
    color = "green",
    opacity = 0.5,
    size = "30%",
    blur = 100,
    position = "center",
    className = "",
    style = {},
    ...props
}) => {
    const baseStyle = {
        opacity,
        filter: `blur(${blur}px)`,
    };

    const backgroundImage =
        position === "top"
            ? `radial-gradient(2000px 600px at center top, currentColor 0%, transparent ${size})`
            : `radial-gradient(circle, currentColor 0%, transparent ${size})`;

    return (
        <div
            className={mergeClasses(
                "absolute inset-0 pointer-events-none z-10",
                getTextColorClass(color),
                className
            )}
            style={{ ...baseStyle, backgroundImage, ...style }}
            {...props}
        />
    );
};

export default BackgroundGlow;