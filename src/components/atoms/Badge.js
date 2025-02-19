"use client";

import { mergeClasses } from "@/utils/classNames";

const Badge = ({
    children,
    className = "",
    shape = "pill",       // 'pill', 'square', 'circle'
    size = "medium",      // 'small', 'medium', 'large'
    border = false,
    style = "soft",       // 'soft', 'solid'
    color = "primary",    // 'primary', 'green'
    hover = false,
    onClick,
    ...props
}) => {
    const baseStyles =
        "inline-flex justify-center items-center text-center font-medium";

    const shapeSizeStyles = {
        pill: {
            xs: "rounded-full px-1 py-1 text-xs",
            small: "rounded-full px-2 py-1 text-sm",
            medium: "rounded-full px-3 py-1 text-md",
            large: "rounded-full px-4 py-1.5 text-lg",
        },
        square: {
            xs: "rounded-lg px-1 py-1 text-xs",
            small: "rounded-lg px-2 py-1 text-sm",
            medium: "rounded-lg px-3 py-1 text-md",
            large: "rounded-lg px-4 py-1.5 text-base",
        },
        circle: {
            xs: "rounded-full px-1 py-1 text-xs",
            small: "rounded-full px-1 py-1 text-sm",
            medium: "rounded-full px-2 py-2 text-md",
            large: "rounded-full px-3 py-3 text-base",
        },
    };

    // Get the styles for the given shape and size (default to 'pill' and 'medium').
    let shapeStyles = shapeSizeStyles[shape] || shapeSizeStyles.pill;
    shapeStyles = shapeStyles[size] || shapeStyles.medium;

    const colorStyles = {
        soft: `bg-${color}-100 dark:bg-${color}-600/25 text-${color}-800 dark:text-${color}-400`,
        solid: `bg-${color}-600 text-white`,
    };

    const borderColor =
        style === "soft" ? `border-${color}-800` : `border-${color}-900`;
    const borderStyles = border ? `border ${borderColor}` : "";

    const hoverStyles = hover
        ? "hover:-translate-y-1 transition-all ease-in-out"
        : "";
    const onClickStyles = onClick ? "cursor-pointer active:scale-95" : "";

    const combinedStyles = mergeClasses(
        baseStyles,
        shapeStyles,
        colorStyles[style],
        borderStyles,
        hoverStyles,
        onClickStyles,
        className
    );

    return (
        <div className={combinedStyles} onClick={onClick} {...props}>
            {children}
        </div>
    );
};

export default Badge;
