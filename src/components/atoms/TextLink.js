"use client";

import Link from "next/link";
import { mergeClasses } from "@/utils/styling";

const TextLink = ({
    children,
    href,
    className = "",
    icon: IconComponent = null,
    grow = false,
    fade = false,
    underline = false,
    underlineClassName = "",
    underlineHeight = '1px',
    underlineOffset = '0',
    selected = false,
}) => {
    const baseStyles = "relative flex items-center gap-1 cursor-pointer";

    const dynamicClasses = mergeClasses(
        baseStyles,
        grow && "transition-all duration-200 ease-in-out hover:scale-105",
        fade && !selected && "transition-opacity opacity-50 hover:opacity-100",
        selected && "opacity-100 font-semibold",
        underline
            ? "group"
            : "ease-[cubic-bezier(0.25, 0.46, 0.45, 0.94)] duration-200",
        className
    );

    return (
        <Link href={href} className={dynamicClasses}>
            {IconComponent && (
                <IconComponent
                    className={mergeClasses(
                        "w-4 h-4",
                        underline ? "text-bg-800 dark:text-bg-200" : "text-gray-600 dark:text-gray-400"
                    )}
                />
            )}
            <span className="relative">
                {children}
                {underline && (
                    <span
                        className={mergeClasses(
                            `absolute w-full left-0 bottom-${underlineOffset}`,
                            `bg-bg-800 dark:bg-bg-200`,
                            `transform origin-left scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100`,
                            underlineClassName
                        )}
                        style={{ height: underlineHeight }}
                    />
                )}
              </span>
        </Link>
    );
};

export default TextLink;
