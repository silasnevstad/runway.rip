import React from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

// mergeClasses merges multiple classes, prioritizing the last one in case of conflicts.
export function mergeClasses(...classLists) {
    return twMerge(clsx(...classLists));
}

// getHoverClasses returns hover, active, and lift/scale classes based on the provided options.
export function getHoverClasses({
    lift = false,
    scale = false,
    active = false,
    rotate = false,
}) {
    const classes = ["transition-all duration-200 ease-in-out"];
    if (lift) classes.push("hover:-translate-y-0.5");
    if (scale) classes.push("hover:scale-[1.03] rotate-[0.02deg]");
    if (active) {
        classes.push("active:scale-[0.97]");
    } else {
        classes.push("active:scale-none");
    }
    if (rotate) classes.push("hover:rotate-15");
    return classes.join(" ");
}

// renderIcon renders an icon (either as React component or ) and apply extraClasses.
export function renderIcon({ icon, iconSrc, alt = 'icon', onClick, extraClasses = '' }) {
    if (icon) {
        if (React.isValidElement(icon)) {
            return React.cloneElement(icon, {
                className: mergeClasses(icon.props.className, extraClasses),
            });
        }
        // If not a valid element, assume it's a component and render it
        const IconComponent = icon;
        return <IconComponent className={extraClasses} />;
    } else if (iconSrc) {
        return <Image src={iconSrc} alt={alt} className={extraClasses} />;
    }
    return null;
}

export function getTextColorClass(color) {
    const colorClasses = {
        gray: "text-gray-800 dark:text-gray-200",
        bg: "text-bg-800 dark:text-bg-200",
        primary: "text-primary-500",
        red: "text-red-500",
        green: "text-green-500",
        blue: "text-blue-500",
        yellow: "text-yellow-500",
        orange: "text-orange-500",
        purple: "text-purple-500",
        pink: "text-pink-500",
    };
    return colorClasses[color] || "";
}

export function getFadedTextColorClass(color) {
    const colorClasses = {
        gray: "text-gray-600 dark:text-gray-600",
        bg: "text-bg-600 dark:text-bg-600",
        primary: "text-primary-400 dark:text-primary-600",
    };
    return colorClasses[color] || "";
}

export function getBorderColorClass(color) {
    const colorClasses = {
        gray: "border-gray-500",
        bg: "border-bg-500",
        primary: "border-primary-500",
        red: "border-red-500",
        green: "border-green-500",
        blue: "border-blue-500",
        yellow: "border-yellow-500",
        orange: "border-orange-500",
        purple: "border-purple-500",
        pink: "border-pink-500",
    };
    return colorClasses[color] || "";
}

export function getBgColorClass(color) {
    const colorClasses = {
        gray: "bg-gray-500",
        bg: "bg-bg-500",
        primary: "bg-primary-500",
        red: "bg-red-500",
        green: "bg-green-500",
        blue: "bg-blue-500",
        yellow: "bg-yellow-500",
        orange: "bg-orange-500",
        purple: "bg-purple-500",
        pink: "bg-pink-500",
    };
    return colorClasses[color] || "";
}

export function getFromColorClass(color) {
    const colorClasses = {
        gray: "from-gray-500",
        bg: "from-bg-500",
        primary: "from-primary-500",
        red: "from-red-500",
        green: "from-green-500",
        blue: "from-blue-500",
        yellow: "from-yellow-500",
        orange: "from-orange-500",
        purple: "from-purple-500",
        pink: "from-pink-500",
    };
    return colorClasses[color] || "";
}

export function getToColorClass(color) {
    const colorClasses = {
        gray: "to-gray-500",
        bg: "to-bg-500",
        primary: "to-primary-500",
        red: "to-red-500",
        green: "to-green-500",
        blue: "to-blue-500",
        yellow: "to-yellow-500",
        orange: "to-orange-500",
        purple: "to-purple-500",
        pink: "to-pink-500",
    };
    return colorClasses[color] || "";
}

export function getTextSize(size) {
    switch (size) {
        case "xs":
            return "text-xs";
        case "sm":
            return "text-sm";
        case "md":
            return "text-md";
        case "lg":
            return "text-lg";
        case "xl":
            return "text-xl";
    }
}

export const COLOR_VARIANTS = {
    // Bg
    bg: {
        soft: {
            bg: "bg-bg-300/55 dark:bg-bg-600/20",
            text: "text-bg-900 dark:text-bg-50",
            border: "border-bg-500 dark:border-gray-800",
            hoverBg: "hover:bg-bg-100 dark:hover:bg-bg-700/20",
            hoverText: "",
            hoverBorder: "hover:border-bg-500/10 dark:hover:border-bg-600/10",
            activeBg: "bg-bg-50 dark:bg-bg-900",
            activeText: "text-bg-900 dark:text-bg-50",
            activeBorder: "border-bg-500 dark:border-bg-700",
            fadeBg: "bg-bg-500/10 dark:bg-bg-500/10",
        },
        solid: {
            bg: "bg-bg-300 dark:bg-bg-700",
            text: "text-bg-900 dark:text-bg-50",
            border: "border-bg-500 dark:border-bg-600",
            hoverBg: "hover:bg-bg-100 dark:hover:bg-bg-800",
            hoverText: "",
            hoverBorder: "",
            activeBg: "bg-bg-50 dark:bg-bg-800",
            activeText: "",
            activeBorder: "border-bg-500 dark:border-bg-500",
            fadeBg: "bg-bg-500/10 dark:bg-bg-500/10",
        },
    },

    // Gray
    gray: {
        soft: {
            bg: "bg-gray-400/25 dark:bg-gray-600/20",
            text: "text-gray-900 dark:text-gray-50",
            border: "border-gray-500 dark:border-gray-800",
            hoverBg: "hover:bg-gray-100 dark:hover:bg-gray-700/20",
            hoverText: "hover:text-gray-800 dark:hover:text-gray-300",
            hoverBorder: "hover:border-gray-500/10 dark:hover:border-gray-600/10",
            activeBg: "bg-gray-50 dark:bg-gray-900",
            activeText: "text-gray-900 dark:text-gray-50",
            activeBorder: "border-gray-500 dark:border-gray-700",
            fadeBg: "bg-gray-500/10 dark:bg-gray-500/10",
            focusWithin: "focus-within:border-gray-500",
            placeholder: "placeholder:text-gray-500/50",
        },
        solid: {
            bg: "bg-gray-300 dark:bg-gray-700",
            text: "text-gray-900 dark:text-gray-50",
            border: "border-gray-500 dark:border-gray-600",
            hoverBg: "hover:bg-gray-100 dark:hover:bg-gray-800",
            hoverText: "hover:text-gray-800 group-hover:text-gray-800 dark:hover:text-gray-200 dark:group-hover:text-gray-200",
            hoverBorder: "",
            activeBg: "bg-gray-50 dark:bg-gray-800",
            activeText: "",
            activeBorder: "border-gray-500 dark:border-gray-500",
            fadeBg: "bg-gray-500/10 dark:bg-gray-500/10",
        },
    },

    // Primary
    primary: {
        soft: {
            bg: "bg-primary-400/55 dark:bg-primary-600/20",
            text: "text-primary-900 dark:text-primary-100",
            border: "border-primary-500 dark:border-primary-800",
            hoverBg: "hover:bg-primary-100/55 dark:hover:bg-primary-700/20",
            hoverText: "hover:text-primary-800 dark:hover:text-primary-300",
            hoverBorder: "hover:border-primary-400/5 dark:hover:border-primary-600/5",
            activeBg: "bg-primary-600 dark:bg-primary-900",
            activeText: "text-white dark:text-primary-50",
            activeBorder: "border-primary-100 dark:border-primary-500",
            fadeBg: "bg-primary-500/10 dark:bg-primary-500/10",
            focusWithin: "focus-within:border-primary-500/5 dark:focus-within:border-primary-500 focus-within:ring-1 focus-within:ring-primary-500/5",
            placeholder: "placeholder:text-gray-500/50",
        },
        solid: {
            bg: "bg-primary-600 dark:bg-primary-600",
            text: "text-primary-50 dark:text-primary-50",
            border: "border-primary-200 dark:border-primary-800",
            hoverBg: "hover:bg-primary-700 dark:hover:bg-primary-800",
            hoverText: "hover:text-primary-800 dark:hover:text-primary-300",
            hoverBorder: "hover:border-primary-400/5 dark:hover:border-primary-600/5",
            activeBg: "bg-primary-100 dark:bg-primary-900",
            activeText: "text-primary-900 dark:text-primary-50",
            activeBorder: "border-primary-500 dark:border-primary-500",
            fadeBg: "bg-primary-500/10 dark:bg-primary-500/10",
            focusWithin: "focus-within:border-primary-500 dark:focus-within:border-primary-500 focus-within:ring-1 focus-within:ring-primary-500/30",
            placeholder: "placeholder:text-gray-500/50",
        },
    },

    // Red
    red: {
        soft: {
            bg: "bg-red-400/55 dark:bg-red-600/20",
            text: "text-red-900 dark:text-red-100",
            border: "border-red-500 dark:border-red-800",
            hoverBg: "hover:bg-red-100/55 dark:hover:bg-red-700/20",
            hoverText: "hover:text-red-800 dark:hover:text-red-300",
            hoverBorder: "hover:border-red-400/5 dark:hover:border-red-600/5",
            activeBg: "bg-red-600 dark:bg-red-900",
            activeText: "text-white dark:text-red-50",
            activeBorder: "border-red-100 dark:border-red-500",
            fadeBg: "bg-red-500/10 dark:bg-red-500/10",
            focusWithin: "focus-within:border-red-500/5 dark:focus-within:border-red-500 focus-within:ring-1 focus-within:ring-red-500/5",
            placeholder: "placeholder:text-gray-500/50",
        },
        solid: {
            bg: "bg-red-600 dark:bg-red-600",
            text: "text-red-50 dark:text-red-50",
            border: "border-red-200 dark:border-red-800",
            hoverBg: "hover:bg-red-700 dark:hover:bg-red-800",
            hoverText: "hover:text-red-800 dark:hover:text-red-300",
            hoverBorder: "hover:border-red-400/5 dark:hover:border-red-600/5",
            activeBg: "bg-red-100 dark:bg-red-900",
            activeText: "text-red-900 dark:text-red-50",
            activeBorder: "border-red-500 dark:border-red-500",
            fadeBg: "bg-red-500/10 dark:bg-red-500/10",
            focusWithin: "focus-within:border-red-500 dark:focus-within:border-red-500 focus-within:ring-1 focus-within:ring-red-500/30",
            placeholder: "placeholder:text-gray-500/50",
        },
    },

    // Green
    green: {
        soft: {
            bg: "bg-green-400/55 dark:bg-green-600/20",
            text: "text-green-900 dark:text-green-100",
            border: "border-green-500 dark:border-green-800",
            hoverBg: "hover:bg-green-100/55 dark:hover:bg-green-700/20",
            hoverText: "hover:text-green-800 dark:hover:text-green-300",
            hoverBorder: "hover:border-green-400/5 dark:hover:border-green-600/5",
            activeBg: "bg-green-600 dark:bg-green-900",
            activeText: "text-white dark:text-green-50",
            activeBorder: "border-green-100 dark:border-green-500",
            fadeBg: "bg-green-500/10 dark:bg-green-500/10",
            focusWithin: "focus-within:border-green-500/5 dark:focus-within:border-green-500 focus-within:ring-1 focus-within:ring-green-500/5",
            placeholder: "placeholder:text-gray-500/50",
        },
        solid: {
            bg: "bg-green-600 dark:bg-green-600",
            text: "text-green-50 dark:text-green-50",
            border: "border-green-200 dark:border-green-800",
            hoverBg: "hover:bg-green-700 dark:hover:bg-green-800",
            hoverText: "hover:text-green-800 dark:hover:text-green-300",
            hoverBorder: "hover:border-green-400/5 dark:hover:border-green-600/5",
            activeBg: "bg-green-100 dark:bg-green-900",
            activeText: "text-green-900 dark:text-green-50",
            activeBorder: "border-green-500 dark:border-green-500",
            fadeBg: "bg-green-500/10 dark:bg-green-500/10",
            focusWithin: "focus-within:border-green-500 dark:focus-within:border-green-500 focus-within:ring-1 focus-within:ring-green-500/30",
            placeholder: "placeholder:text-gray-500/50",
        },
    },

    // Blue
    blue: {
        soft: {
            bg: "bg-blue-400/55 dark:bg-blue-600/20",
            text: "text-blue-900 dark:text-blue-100",
            border: "border-blue-500 dark:border-blue-800",
            hoverBg: "hover:bg-blue-100/55 dark:hover:bg-blue-700/20",
            hoverText: "hover:text-blue-800 dark:hover:text-blue-300",
            hoverBorder: "hover:border-blue-400/5 dark:hover:border-blue-600/5",
            activeBg: "bg-blue-600 dark:bg-blue-900",
            activeText: "text-white dark:text-blue-50",
            activeBorder: "border-blue-100 dark:border-blue-500",
            fadeBg: "bg-blue-500/10 dark:bg-blue-500/10",
            focusWithin: "focus-within:border-blue-500/5 dark:focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500/5",
            placeholder: "placeholder:text-gray-500/50",
        },
        solid: {
            bg: "bg-blue-600 dark:bg-blue-600",
            text: "text-blue-50 dark:text-blue-50",
            border: "border-blue-200 dark:border-blue-800",
            hoverBg: "hover:bg-blue-700 dark:hover:bg-blue-800",
            hoverText: "hover:text-blue-800 dark:hover:text-blue-300",
            hoverBorder: "hover:border-blue-400/5 dark:hover:border-blue-600/5",
            activeBg: "bg-blue-100 dark:bg-blue-900",
            activeText: "text-blue-900 dark:text-blue-50",
            activeBorder: "border-blue-500 dark:border-blue-500",
            fadeBg: "bg-blue-500/10 dark:bg-blue-500/10",
            focusWithin: "focus-within:border-blue-500 dark:focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500/30",
            placeholder: "placeholder:text-gray-500/50",
        },
    },

    // Yellow
    yellow: {
        soft: {
            bg: "bg-yellow-400/55 dark:bg-yellow-600/20",
            text: "text-yellow-900 dark:text-yellow-100",
            border: "border-yellow-500 dark:border-yellow-800",
            hoverBg: "hover:bg-yellow-100/55 dark:hover:bg-yellow-700/20",
            hoverText: "hover:text-yellow-800 dark:hover:text-yellow-300",
            hoverBorder: "hover:border-yellow-400/5 dark:hover:border-yellow-600/5",
            activeBg: "bg-yellow-600 dark:bg-yellow-900",
            activeText: "text-white dark:text-yellow-50",
            activeBorder: "border-yellow-100 dark:border-yellow-500",
            fadeBg: "bg-yellow-500/10 dark:bg-yellow-500/10",
            focusWithin: "focus-within:border-yellow-500/5 dark:focus-within:border-yellow-500 focus-within:ring-1 focus-within:ring-yellow-500/5",
            placeholder: "placeholder:text-gray-500/50",
        },
        solid: {
            bg: "bg-yellow-600 dark:bg-yellow-600",
            text: "text-yellow-50 dark:text-yellow-50",
            border: "border-yellow-200 dark:border-yellow-800",
            hoverBg: "hover:bg-yellow-700 dark:hover:bg-yellow-800",
            hoverText: "hover:text-yellow-800 dark:hover:text-yellow-300",
            hoverBorder: "hover:border-yellow-400/5 dark:hover:border-yellow-600/5",
            activeBg: "bg-yellow-100 dark:bg-yellow-900",
            activeText: "text-yellow-900 dark:text-yellow-50",
            activeBorder: "border-yellow-500 dark:border-yellow-500",
            fadeBg: "bg-yellow-500/10 dark:bg-yellow-500/10",
            focusWithin: "focus-within:border-yellow-500 dark:focus-within:border-yellow-500 focus-within:ring-1 focus-within:ring-yellow-500/30",
            placeholder: "placeholder:text-gray-500/50",
        },
    },

    // Orange
    orange: {
        soft: {
            bg: "bg-orange-400/55 dark:bg-orange-600/20",
            text: "text-orange-900 dark:text-orange-100",
            border: "border-orange-500 dark:border-orange-800",
            hoverBg: "hover:bg-orange-100/55 dark:hover:bg-orange-700/20",
            hoverText: "hover:text-orange-800 dark:hover:text-orange-300",
            hoverBorder: "hover:border-orange-400/5 dark:hover:border-orange-600/5",
            activeBg: "bg-orange-600 dark:bg-orange-900",
            activeText: "text-white dark:text-orange-50",
            activeBorder: "border-orange-100 dark:border-orange-500",
            fadeBg: "bg-orange-500/10 dark:bg-orange-500/10",
            focusWithin: "focus-within:border-orange-500/5 dark:focus-within:border-orange-500 focus-within:ring-1 focus-within:ring-orange-500/5",
            placeholder: "placeholder:text-gray-500/50",
        },
        solid: {
            bg: "bg-orange-600 dark:bg-orange-600",
            text: "text-orange-50 dark:text-orange-50",
            border: "border-orange-200 dark:border-orange-800",
            hoverBg: "hover:bg-orange-700 dark:hover:bg-orange-800",
            hoverText: "hover:text-orange-800 dark:hover:text-orange-300",
            hoverBorder: "hover:border-orange-400/5 dark:hover:border-orange-600/5",
            activeBg: "bg-orange-100 dark:bg-orange-900",
            activeText: "text-orange-900 dark:text-orange-50",
            activeBorder: "border-orange-500 dark:border-orange-500",
            fadeBg: "bg-orange-500/10 dark:bg-orange-500/10",
            focusWithin: "focus-within:border-orange-500 dark:focus-within:border-orange-500 focus-within:ring-1 focus-within:ring-orange-500/30",
            placeholder: "placeholder:text-gray-500/50",
        },
    },

    // Purple
    purple: {
        soft: {
            bg: "bg-purple-400/55 dark:bg-purple-600/20",
            text: "text-purple-900 dark:text-purple-100",
            border: "border-purple-500 dark:border-purple-800",
            hoverBg: "hover:bg-purple-100/55 dark:hover:bg-purple-700/20",
            hoverText: "hover:text-purple-800 dark:hover:text-purple-300",
            hoverBorder: "hover:border-purple-400/5 dark:hover:border-purple-600/5",
            activeBg: "bg-purple-600 dark:bg-purple-900",
            activeText: "text-white dark:text-purple-50",
            activeBorder: "border-purple-100 dark:border-purple-500",
            fadeBg: "bg-purple-500/10 dark:bg-purple-500/10",
            focusWithin: "focus-within:border-purple-500/5 dark:focus-within:border-purple-500 focus-within:ring-1 focus-within:ring-purple-500/5",
            placeholder: "placeholder:text-gray-500/50",
        },
        solid: {
            bg: "bg-purple-600 dark:bg-purple-600",
            text: "text-purple-50 dark:text-purple-50",
            border: "border-purple-200 dark:border-purple-800",
            hoverBg: "hover:bg-purple-700 dark:hover:bg-purple-800",
            hoverText: "hover:text-purple-800 dark:hover:text-purple-300",
            hoverBorder: "hover:border-purple-400/5 dark:hover:border-purple-600/5",
            activeBg: "bg-purple-100 dark:bg-purple-900",
            activeText: "text-purple-900 dark:text-purple-50",
            activeBorder: "border-purple-500 dark:border-purple-500",
            fadeBg: "bg-purple-500/10 dark:bg-purple-500/10",
            focusWithin: "focus-within:border-purple-500 dark:focus-within:border-purple-500 focus-within:ring-1 focus-within:ring-purple-500/30",
            placeholder: "placeholder:text-gray-500/50",
        },
    },

    // Pink
    pink: {
        soft: {
            bg: "bg-pink-400/55 dark:bg-pink-600/20",
            text: "text-pink-900 dark:text-pink-100",
            border: "border-pink-500 dark:border-pink-800",
            hoverBg: "hover:bg-pink-100/55 dark:hover:bg-pink-700/20",
            hoverText: "hover:text-pink-800 dark:hover:text-pink-300",
            hoverBorder: "hover:border-pink-400/5 dark:hover:border-pink-600/5",
            activeBg: "bg-pink-600 dark:bg-pink-900",
            activeText: "text-white dark:text-pink-50",
            activeBorder: "border-pink-100 dark:border-pink-500",
            fadeBg: "bg-pink-500/10 dark:bg-pink-500/10",
            focusWithin: "focus-within:border-pink-500/5 dark:focus-within:border-pink-500 focus-within:ring-1 focus-within:ring-pink-500/5",
            placeholder: "placeholder:text-gray-500/50",
        },
        solid: {
            bg: "bg-pink-600 dark:bg-pink-600",
            text: "text-pink-50 dark:text-pink-50",
            border: "border-pink-200 dark:border-pink-800",
            hoverBg: "hover:bg-pink-700 dark:hover:bg-pink-800",
            hoverText: "hover:text-pink-800 dark:hover:text-pink-300",
            hoverBorder: "hover:border-pink-400/5 dark:hover:border-pink-600/5",
            activeBg: "bg-pink-100 dark:bg-pink-900",
            activeText: "text-pink-900 dark:text-pink-50",
            activeBorder: "border-pink-500 dark:border-pink-500",
            fadeBg: "bg-pink-500/10 dark:bg-pink-500/10",
            focusWithin: "focus-within:border-pink-500 dark:focus-within:border-pink-500 focus-within:ring-1 focus-within:ring-pink-500/30",
            placeholder: "placeholder:text-gray-500/50",
        },
    },
};

export const BORDER_RADIUS = {
    "": "rounded-none",
    "none": "rounded-none",
    "2xs": "rounded-[0.125rem]",
    xs: "rounded-[0.1875rem]",
    sm: "rounded-[0.25rem]",
    md: "rounded-[0.3125rem]",
    lg: "rounded-[0.375rem]",
    xl: "rounded-[0.4375rem]",
    "2xl": "rounded-[0.5rem]",
    "3xl": "rounded-[0.5625rem]",
    "4xl": "rounded-[0.625rem]",
    "5xl": "rounded-[0.6875rem]",
    "6xl": "rounded-[0.75rem]",
    "7xl": "rounded-[0.8125rem]",
    full: "rounded-full",
};

export const WIDTH_SIZES = {
    0.1: "w-[1px]",
    0.5: "w-0.5",
    1: "w-1",
    2: "w-2",
    3: "w-3",
    4: "w-4",
    5: "w-5",
    6: "w-6",
    7: "w-7",
};

export const HEIGHT_SIZES = {
    0.1: "h-[1px]",
    0.5: "h-0.5",
    1: "h-1",
    2: "h-2",
    3: "h-3",
    4: "h-4",
    5: "h-5",
    6: "h-6",
    7: "h-7",
}

export const AVATAR_SIZES = {
    xs: "w-5 h-5 text-xs",
    sm: "w-8 h-8 text-sm",
    md: "w-10 h-10 text-md",
    lg: "w-12 h-12 text-lg",
    xl: "w-16 h-16 text-xl",
};

export const BADGE_SIZES = {
    xs: "px-1.5 py-1 text-xs",
    sm: "px-2 py-1 text-sm",
    md: "px-3 py-1 text-base",
    lg: "px-4 py-1.5 text-lg",
    xl: "px-5 py-2 text-xl",
};

export const BUTTON_SIZES = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2.5 text-md",
    lg: "px-5 py-3 text-lg",
    xl: "px-6 py-4 text-xl",
};

export const SIZE_MAP = {
    xs: {
        containerPadding: "p-1.5",
        textSize: "text-xs",
        paddingNum: "pl-2",
    },
    sm: {
        containerPadding: "p-2",
        textSize: "text-sm",
        paddingNum: "pl-3",
    },
    md: {
        containerPadding: "p-3",
        textSize: "text-base",
        paddingNum: "pl-0",
    },
    lg: {
        containerPadding: "p-4",
        textSize: "text-lg",
        paddingNum: "pl-4",
    },
    xl: {
        containerPadding: "p-5",
        textSize: "text-xl",
        paddingNum: "pl-5",
    },
};

export const POSITION_CLASSES = {
    "top-right": "top-0 right-0 translate-x-1/2 -translate-y-1/2",
    "top-left": "top-0 left-0 -translate-x-1/2 -translate-y-1/2",
    "bottom-right": "bottom-0 right-0 translate-x-1/2 translate-y-1/2",
    "bottom-left": "bottom-0 left-0 -translate-x-1/2 translate-y-1/2",
    "top-center": "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
    "bottom-center": "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
    "center-right": "top-1/2 right-0 translate-x-1/2 -translate-y-1/2",
    "center-left": "top-1/2 left-0 -translate-x-1/2 -translate-y-1/2",
    center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
};
