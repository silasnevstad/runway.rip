"use client";
import Link from "next/link";
import { mergeClasses, renderIcon, getHoverClasses, getTextColorClass } from "@/utils/styling";

const TextLink = ({
    children,
    href,
    onClick,
    color = "gray",
    icon = null,
    scale = false,
    lift = false,
    fade = false,
    active = false,
    underline    = false,
    underlineClassName = "",
    underlineHeight = 1,
    underlineOffset = 0,
    className = "",
    ...props
}) => {
    const baseStyles = "relative flex items-center gap-1 cursor-pointer";

    const linkClasses = mergeClasses(
        baseStyles,
        getTextColorClass(color),
        getHoverClasses({ lift, scale, active }),
        fade && "transition-opacity opacity-50 hover:opacity-100",
        underline
            ? "group"
            : "ease-[cubic-bezier(0.25, 0.46, 0.45, 0.94)] duration-200",
        className
    );

    const iconClasses = mergeClasses(
        "w-4 h-4",
        getTextColorClass(color)
    );

    const underlineClasses = mergeClasses(
        `absolute w-full left-0 bottom-0`,
        `bg-gray-800 dark:bg-gray-200`,
        "transform origin-left scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100",
        `absolute w-full left-0 bottom-0`,
        underlineClassName
    );

    if (onClick) {
        return (
            <button
                onClick={onClick}
                className={linkClasses}
                {...props}
            >
                {icon && renderIcon(icon, null, mergeClasses(iconClasses))}
                <span className="relative">
                    {children}
                    {underline && (
                        <span
                            className={underlineClasses}
                            style={{ height: `${underlineHeight}px`, marginBottom: `${underlineOffset}px` }}
                        />
                    )}
                </span>
            </button>
        );
    }

    return (
        <Link href={href} className={linkClasses} {...props}>
            {icon && renderIcon(icon, null, mergeClasses(iconClasses))}
            <span className="relative">
                {children}
                {underline && (
                    <span
                        className={underlineClasses}
                        style={{ height: `${underlineHeight}px`, marginBottom: `${underlineOffset}px` }}
                    />
                )}
              </span>
        </Link>
    );
};

export default TextLink;
