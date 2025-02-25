import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

// mergeClasses merges multiple classes, prioritizing the last one in case of conflicts.
export function mergeClasses(...classLists) {
    return twMerge(clsx(...classLists));
}

// getHoverClasses returns hover, active, and lift/scale classes based on the provided options.
export function getHoverClasses({ lift = false, scale = false, active = false }) {
    const classes = ["transition-transform duration-200 ease-in-out"];
    if (lift) classes.push("hover:-translate-y-0.5");
    if (scale) classes.push("hover:scale-105");
    if (active) {
        classes.push("active:scale-95");
    } else {
        classes.push("active:scale-100");
    }
    return classes.join(" ");
}

// renderIcon renders an icon (either as React component or ) and apply extraClasses.
export function renderIcon(icon, iconSrc, extraClasses) {
    if (icon) {
        return typeof icon === "string" ? (
            <Image src={iconSrc} alt="" className={extraClasses} />
        ) : (
            <span className={extraClasses}>{icon}</span>
        );
    }
    return null;
}

export function getTextColorClass(color) {
    const colorClasses = {
        gray: "text-gray-500",
        bg: "text-bg-500",
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

export const COLOR_VARIANTS = {
    // Bg
    bg: {
        soft: {
            bg: "bg-bg-400/45 dark:bg-bg-600/25",
            text: "text-bg-900 dark:text-bg-50",
            border: "border border-bg-500 dark:border-bg-700",
            hoverBg: "hover:bg-bg-100 dark:hover:bg-bg-500/20",
            hoverText: "",
            hoverBorder: "hover:border-bg-500/10 dark:hover:border-bg-600/10",
            activeBg: "bg-bg-50 dark:bg-bg-900",
            activeText: "",
            activeBorder: "border-bg-500 dark:border-bg-500",
            fadeBg: "bg-bg-500/10 dark:bg-bg-500/10",
        },
        solid: {
            bg: "bg-bg-300 dark:bg-bg-700",
            text: "text-bg-900 dark:text-bg-50",
            border: "border border-bg-500 dark:border-bg-600",
            hoverBg: "hover:bg-bg-100 dark:hover:bg-bg-800",
            hoverText: "",
            hoverBorder: "",
            activeBg: "bg-bg-50 dark:bg-bg-900",
            activeText: "",
            activeBorder: "border-bg-500 dark:border-bg-500",
            fadeBg: "bg-bg-500/10 dark:bg-bg-500/10",
        },
    },

    // Gray
    gray: {
        soft: {
            bg: "bg-gray-400/45 dark:bg-gray-600/25",
            text: "text-gray-900 dark:text-gray-50",
            border: "border border-gray-500 dark:border-gray-700",
            hoverBg: "hover:bg-gray-100 dark:hover:bg-gray-500/20",
            hoverText: "hover:text-gray-800 dark:hover:text-gray-300",
            hoverBorder: "hover:border-gray-500/10 dark:hover:border-gray-600/10",
            activeBg: "bg-gray-50 dark:bg-gray-900",
            activeText: "",
            activeBorder: "border-gray-500 dark:border-gray-500",
            fadeBg: "bg-gray-500/10 dark:bg-gray-500/10",
        },
        solid: {
            bg: "bg-gray-300 dark:bg-gray-700",
            text: "text-gray-900 dark:text-gray-50",
            border: "border border-gray-800 dark:border-gray-600",
            hoverBg: "hover:bg-gray-100 dark:hover:bg-gray-800",
            hoverText: "hover:text-gray-800 dark:hover:text-gray-300",
            hoverBorder: "",
            activeBg: "bg-gray-50 dark:bg-gray-900",
            activeText: "",
            activeBorder: "border-gray-500 dark:border-gray-500",
            fadeBg: "bg-gray-500/10 dark:bg-gray-500/10",
        },
    },

    // Primary
    primary: {
        soft: {
            bg: "bg-primary-400/45 dark:bg-primary-600/20",
            text: "text-primary-900 dark:text-primary-200",
            border: "border-primary-500 dark:border-primary-800",
            hoverBg: "hover:bg-primary-300 dark:hover:bg-primary-700/20",
            hoverText: "hover:text-primary-800 dark:hover:text-primary-300",
            hoverBorder: "hover:border-primary-400/5 dark:hover:border-primary-600/5",
            activeBg: "bg-primary-400 dark:bg-primary-900",
            activeText: "text-primary-50 dark:text-primary-50",
            activeBorder: "border-primary-500 dark:border-primary-500",
            fadeBg: "bg-primary-500/10 dark:bg-primary-500/10",
        },
        solid: {
            bg: "bg-primary-600 dark:bg-primary-600",
            text: "text-primary-50 dark:text-primary-50",
            border: "border-primary-200 dark:border-primary-800",
            hoverBg: "hover:bg-primary-700 dark:hover:bg-primary-800",
            hoverText: "hover:text-primary-800 dark:hover:text-primary-300",
            hoverBorder: "",
            activeBg: "bg-primary-100 dark:bg-primary-900",
            activeText: "",
            activeBorder: "border-primary-500 dark:border-primary-500",
            fadeBg: "bg-primary-500/10 dark:bg-primary-500/10",
        },
    },

    // Red
    red: {
        soft: {
            bg: "bg-red-400/45 dark:bg-red-600/20",
            text: "text-red-900 dark:text-red-200",
            border: "border-red-500 dark:border-red-800",
            hoverBg: "hover:bg-red-300 dark:hover:bg-red-700/20",
            hoverText: "",
            hoverBorder: "hover:border-red-400/5 dark:hover:border-red-600/5",
            activeBg: "bg-red-400 dark:bg-red-900",
            activeText: "text-red-50 dark:text-red-50",
            activeBorder: "border-red-500 dark:border-red-500",
            fadeBg: "bg-red-500/10 dark:bg-red-500/10",
        },
        solid: {
            bg: "bg-red-500 dark:bg-red-600",
            text: "text-red-50 dark:text-red-50",
            border: "border-red-200 dark:border-red-800",
            hoverBg: "hover:bg-red-600 dark:hover:bg-red-800",
            hoverText: "",
            hoverBorder: "",
            activeBg: "bg-red-100 dark:bg-red-900",
            activeText: "",
            activeBorder: "border-red-500 dark:border-red-500",
            fadeBg: "bg-red-500/10 dark:bg-red-500/10",
        },
    },

    // Green
    green: {
        soft: {
            bg: "bg-green-400/45 dark:bg-green-600/20",
            text: "text-green-900 dark:text-green-200",
            border: "border-green-500 dark:border-green-800",
            hoverBg: "hover:bg-green-300 dark:hover:bg-green-700/20",
            hoverText: "",
            hoverBorder: "hover:border-green-400/5 dark:hover:border-green-600/5",
            activeBg: "bg-green-400 dark:bg-green-900",
            activeText: "text-green-50 dark:text-green-50",
            activeBorder: "border-green-500 dark:border-green-500",
            fadeBg: "bg-green-500/10 dark:bg-green-500/10",
        },
        solid: {
            bg: "bg-green-500 dark:bg-green-600",
            text: "text-green-50 dark:text-green-50",
            border: "border-green-200 dark:border-green-800",
            hoverBg: "hover:bg-green-600 dark:hover:bg-green-800",
            hoverText: "",
            hoverBorder: "",
            activeBg: "bg-green-100 dark:bg-green-900",
            activeText: "",
            activeBorder: "border-green-500 dark:border-green-500",
            fadeBg: "bg-green-500/10 dark:bg-green-500/10",
        },
    },

    // Blue
    blue: {
        soft: {
            bg: "bg-blue-400/45 dark:bg-blue-600/20",
            text: "text-blue-50 dark:text-blue-200",
            border: "border-blue-500 dark:border-blue-800",
            hoverBg: "hover:bg-blue-300 dark:hover:bg-blue-700/20",
            hoverText: "",
            hoverBorder: "hover:border-blue-400/5 dark:hover:border-blue-600/5",
            activeBg: "bg-blue-400 dark:bg-blue-900",
            activeText: "text-blue-50 dark:text-blue-50",
            activeBorder: "border-blue-500 dark:border-blue-500",
            fadeBg: "bg-blue-500/10 dark:bg-blue-500/10",
        },
        solid: {
            bg: "bg-blue-500 dark:bg-blue-600",
            text: "text-blue-50 dark:text-blue-50",
            border: "border-blue-200 dark:border-blue-800",
            hoverBg: "hover:bg-blue-600 dark:hover:bg-blue-800",
            hoverText: "",
            hoverBorder: "",
            activeBg: "bg-blue-100 dark:bg-blue-900",
            activeText: "",
            activeBorder: "border-blue-500 dark:border-blue-500",
            fadeBg: "bg-blue-500/10 dark:bg-blue-500/10",
        },
    },

    // Yellow
    yellow: {
        soft: {
            bg: "bg-yellow-400/45 dark:bg-yellow-600/20",
            text: "text-yellow-900 dark:text-yellow-200",
            border: "border-yellow-500 dark:border-yellow-800",
            hoverBg: "hover:bg-yellow-300 dark:hover:bg-yellow-700/20",
            hoverText: "",
            hoverBorder: "hover:border-yellow-400/5 dark:hover:border-yellow-600/5",
            activeBg: "bg-yellow-400 dark:bg-yellow-900",
            activeText: "text-yellow-50 dark:text-yellow-50",
            activeBorder: "border-yellow-500 dark:border-yellow-500",
            fadeBg: "bg-yellow-500/10 dark:bg-yellow-500/10",
        },
        solid: {
            bg: "bg-yellow-500 dark:bg-yellow-600",
            text: "text-yellow-50 dark:text-yellow-50",
            border: "border-yellow-200 dark:border-yellow-800",
            hoverBg: "hover:bg-yellow-600 dark:hover:bg-yellow-800",
            hoverText: "",
            hoverBorder: "",
            activeBg: "bg-yellow-100 dark:bg-yellow-900",
            activeText: "",
            activeBorder: "border-yellow-500 dark:border-yellow-500",
            fadeBg: "bg-yellow-500/10 dark:bg-yellow-500/10",
        },
    },

    // Orange
    orange: {
        soft: {
            bg: "bg-orange-400/45 dark:bg-orange-600/20",
            text: "text-orange-900 dark:text-orange-200",
            border: "border-orange-500 dark:border-orange-800",
            hoverBg: "hover:bg-orange-300 dark:hover:bg-orange-700/20",
            hoverText: "",
            hoverBorder: "hover:border-orange-400/5 dark:hover:border-orange-600/5",
            activeBg: "bg-orange-400 dark:bg-orange-900",
            activeText: "text-orange-50 dark:text-orange-50",
            activeBorder: "border-orange-500 dark:border-orange-500",
            fadeBg: "bg-orange-500/10 dark:bg-orange-500/10",
        },
        solid: {
            bg: "bg-orange-500 dark:bg-orange-600",
            text: "text-orange-50 dark:text-orange-50",
            border: "border-orange-200 dark:border-orange-800",
            hoverBg: "hover:bg-orange-600 dark:hover:bg-orange-800",
            hoverText: "",
            hoverBorder: "",
            activeBg: "bg-orange-100 dark:bg-orange-900",
            activeText: "",
            activeBorder: "border-orange-500 dark:border-orange-500",
            fadeBg: "bg-orange-500/10 dark:bg-orange-500/10",
        },
    },

    // Purple
    purple: {
        soft: {
            bg: "bg-purple-400/45 dark:bg-purple-600/20",
            text: "text-purple-900 dark:text-purple-200",
            border: "border-purple-500 dark:border-purple-800",
            hoverBg: "hover:bg-purple-300 dark:hover:bg-purple-700/20",
            hoverText: "",
            hoverBorder: "hover:border-purple-400/5 dark:hover:border-purple-600/5",
            activeBg: "bg-purple-400 dark:bg-purple-900",
            activeText: "text-purple-50 dark:text-purple-50",
            activeBorder: "border-purple-500 dark:border-purple-500",
            fadeBg: "bg-purple-500/10 dark:bg-purple-500/10",
        },
        solid: {
            bg: "bg-purple-500 dark:bg-purple-600",
            text: "text-purple-50 dark:text-purple-50",
            border: "border-purple-200 dark:border-purple-800",
            hoverBg: "hover:bg-purple-600 dark:hover:bg-purple-800",
            hoverText: "",
            hoverBorder: "",
            activeBg: "bg-purple-100 dark:bg-purple-900",
            activeText: "",
            activeBorder: "border-purple-500 dark:border-purple-500",
            fadeBg: "bg-purple-500/10 dark:bg-purple-500/10",
        },
    },

    // Pink
    pink: {
        soft: {
            bg: "bg-pink-400/45 dark:bg-pink-600/20",
            text: "text-pink-900 dark:text-pink-200",
            border: "border-pink-500 dark:border-pink-800",
            hoverBg: "hover:bg-pink-300 dark:hover:bg-pink-700/20",
            hoverText: "",
            hoverBorder: "hover:border-pink-400/5 dark:hover:border-pink-600/5",
            activeBg: "bg-pink-400 dark:bg-pink-900",
            activeText: "text-pink-50 dark:text-pink-50",
            activeBorder: "border-pink-500 dark:border-pink-500",
            fadeBg: "bg-pink-500/10 dark:bg-pink-500/10",
        },
        solid: {
            bg: "bg-pink-500 dark:bg-pink-600",
            text: "text-pink-50 dark:text-pink-50",
            border: "border-pink-200 dark:border-pink-800",
            hoverBg: "hover:bg-pink-600 dark:hover:bg-pink-800",
            hoverText: "",
            hoverBorder: "",
            activeBg: "bg-pink-100 dark:bg-pink-900",
            activeText: "",
            activeBorder: "border-pink-500 dark:border-pink-500",
            fadeBg: "bg-pink-500/10 dark:bg-pink-500/10",
        },
    },
};

export const BORDER_RADIUS = {
    "": "rounded-none",
    "2xs": "rounded-[0.125rem]",
    xs: "rounded-[0.1875rem]",
    sm: "rounded-[0.25rem]",
    md: "rounded-[0.3125rem]",
    lg: "rounded-[0.375rem]",
    xl: "rounded-[0.4375rem]",
    "2xl": "rounded-[0.5rem]",
    "3xl": "rounded-[0.5625rem]",
    "4xl": "rounded-[0.625rem]",
    full: "rounded-full",
};

export const MX_MARGIN_SIZES = {
    1: "mx-1",
    2: "mx-2",
    3: "mx-3",
    4: "mx-4",
    5: "mx-5",
    6: "mx-6",
    7: "mx-7",
    8: "mx-8",
    9: "mx-9",
    10: "mx-10",
};

export const MY_MARGIN_SIZES = {
    1: "my-1",
    2: "my-2",
    3: "my-3",
    4: "my-4",
    5: "my-5",
    6: "my-6",
    7: "my-7",
    8: "my-8",
    9: "my-9",
    10: "my-10",
};

export const AVATAR_SIZES = {
    xs: "w-8 h-8 text-xs",
    sm: "w-10 h-10 text-sm",
    md: "w-12 h-12 text-md",
    lg: "w-16 h-16 text-lg",
    xl: "w-20 h-20 text-xl",
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
        paddingNum: "pl-3",
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
