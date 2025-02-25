"use client";
import Link from "next/link";
import { mergeClasses, renderIcon, getHoverClasses } from "@/utils/styling";

const TextLink = ({
    children,
    href,
    icon = null,
    scale = false,
    lift = false,
    fade = false,
    active = true,
    underline    = false,
    underlineClassName = "",
    underlineHeight = 1,
    underlineOffset = 0,
    className = "",
}) => {
    const baseStyles = "relative flex items-center gap-1 cursor-pointer";

    const linkClasses = mergeClasses(
        baseStyles,
        getHoverClasses({ lift, scale, active }),
        `text-gray-900 dark:text-gray-50`,
        fade && "transition-opacity opacity-50 hover:opacity-100",
        underline
            ? "group"
            : "ease-[cubic-bezier(0.25, 0.46, 0.45, 0.94)] duration-200",
        className
    );

    const iconClasses = mergeClasses(
        "w-4 h-4",
        underline ? `text-gray-800 dark:text-gray-200` : `text-gray-600 dark:text-gray-400`
    );

    const underlineClasses = mergeClasses(
        `absolute w-full left-0 bottom-0`,
        `bg-gray-800 dark:bg-gray-200`,
        "transform origin-left scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100",
        `absolute w-full left-0 bottom-0`,
        underlineClassName
    );

    return (
        <Link href={href} className={linkClasses}>
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
