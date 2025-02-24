import React from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export const mergeClasses = (...classes) => {
    return twMerge(clsx(...classes));
};

export function renderIcon(Icon, onClick, extraClasses) {
    if (!Icon) return null;

    // If it's already a valid React element (e.g., <HomeIcon />)
    if (React.isValidElement(Icon)) {
        return React.cloneElement(Icon, {
            onClick,
            className: mergeClasses(
                onClick && "cursor-pointer",
                Icon.props.className || "",
                extraClasses || ""
            ),
        });
    }

    // If it's a component (function or class), create the element
    if (typeof Icon === "function") {
        return (
            <Icon
                onClick={onClick}
                className={mergeClasses(extraClasses, onClick && "cursor-pointer")}
            />
        );
    }

    // Otherwise, return null if unrecognized
    return null;
}

export function getHoverClasses({ lift, scale, active, transitionAll = true }) {
    const hoverClasses = [];

    if (transitionAll) {
        // If you want transitions for everything, you can unify them:
        hoverClasses.push("transition-all duration-200 ease-in-out");
    }
    if (lift) {
        hoverClasses.push("hover:-translate-y-0.5");
    }
    if (scale) {
        hoverClasses.push("hover:scale-103");
    }
    if (active) {
        hoverClasses.push("active:scale-97");
    }

    return hoverClasses.join(" ");
};

export const BORDER_RADIUS = {
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
}

export const COLOR_VARIANTS = {
    bg: {
        bgClasses: "bg-bg-200 dark:bg-bg-800",
        activeBgClasses: "bg-bg-500 dark:bg-bg-500",
        highlightBgClasses: "bg-bg-0 dark:bg-bg-900",
        textClasses: "text-bg-900 dark:text-bg-50",
        borderClasses: "border-bg-400 dark:border-bg-700",
        activeBorderClasses: "border-bg-500 dark:border-bg-500",
        hoverClasses: "hover:bg-bg-50 dark:hover:bg-bg-900",
    },
    primary: {
        bgClasses: "bg-primary-200 dark:bg-primary-800",
        activeBgClasses: "bg-primary-500 dark:bg-primary-500",
        highlightBgClasses: "bg-primary-50 dark:bg-primary-900",
        textClasses: "text-primary-900 dark:text-primary-50",
        borderClasses: "border-primary-400 dark:border-primary-700",
        activeBorderClasses: "border-primary-500 dark:border-primary-500",
        hoverClasses: "hover:bg-primary-50 dark:hover:bg-primary-900",
    },
    gray: {
        bgClasses: "bg-gray-200 dark:bg-gray-800",
        activeBgClasses: "bg-gray-500 dark:bg-gray-500",
        highlightBgClasses: "bg-gray-50 dark:bg-gray-900",
        textClasses: "text-gray-900 dark:text-gray-50",
        borderClasses: "border-gray-400 dark:border-gray-700",
        activeBorderClasses: "border-gray-500 dark:border-gray-500",
        hoverClasses: "hover:bg-gray-50 dark:hover:bg-gray-900",
    },
    red: {
        bgClasses: "bg-red-200 dark:bg-red-800",
        activeBgClasses: "bg-red-500 dark:bg-red-500",
        highlightBgClasses: "bg-red-50 dark:bg-red-900",
        textClasses: "text-red-900 dark:text-red-50",
        borderClasses: "border-red-400 dark:border-red-700",
        activeBorderClasses: "border-red-500 dark:border-red-500",
        hoverClasses: "hover:bg-red-50 dark:hover:bg-red-900",
    },
    green: {
        bgClasses: "bg-green-200 dark:bg-green-800",
        activeBgClasses: "bg-green-500 dark:bg-green-500",
        highlightBgClasses: "bg-green-50 dark:bg-green-900",
        textClasses: "text-green-900 dark:text-green-50",
        borderClasses: "border-green-400 dark:border-green-700",
        activeBorderClasses: "border-green-500 dark:border-green-500",
        hoverClasses: "hover:bg-green-50 dark:hover:bg-green-900",
    },
    blue: {
        bgClasses: "bg-blue-200 dark:bg-blue-800",
        activeBgClasses: "bg-blue-500 dark:bg-blue-500",
        highlightBgClasses: "bg-blue-50 dark:bg-blue-900",
        textClasses: "text-blue-900 dark:text-blue-50",
        borderClasses: "border-blue-200 dark:border-blue-700",
        activeBorderClasses: "border-blue-500 dark:border-blue-500",
        hoverClasses: "hover:bg-blue-50 dark:hover:bg-blue-900",
    },
    yellow: {
        bgClasses: "bg-yellow-200 dark:bg-yellow-800",
        activeBgClasses: "bg-yellow-500 dark:bg-yellow-500",
        highlightBgClasses: "bg-yellow-50 dark:bg-yellow-900",
        textClasses: "text-yellow-900 dark:text-yellow-50",
        borderClasses: "border-yellow-400 dark:border-yellow-700",
        activeBorderClasses: "border-yellow-500 dark:border-yellow-500",
        hoverClasses: "hover:bg-yellow-50 dark:hover:bg-yellow-900",
    },
    orange: {
        bgClasses: "bg-orange-200 dark:bg-orange-800",
        activeBgClasses: "bg-orange-500 dark:bg-orange-500",
        highlightBgClasses: "bg-orange-50 dark:bg-orange-900",
        textClasses: "text-orange-900 dark:text-orange-50",
        borderClasses: "border-orange-400 dark:border-orange-700",
        activeBorderClasses: "border-orange-500 dark:border-orange-500",
        hoverClasses: "hover:bg-orange-50 dark:hover:bg-orange-900",
    },
    purple: {
        bgClasses: "bg-purple-200 dark:bg-purple-800",
        activeBgClasses: "bg-purple-500 dark:bg-purple-500",
        highlightBgClasses: "bg-purple-50 dark:bg-purple-900",
        textClasses: "text-purple-900 dark:text-purple-50",
        borderClasses: "border-purple-400 dark:border-purple-700",
        activeBorderClasses: "border-purple-500 dark:border-purple-500",
        hoverClasses: "hover:bg-purple-50 dark:hover:bg-purple-900",
    },
    pink: {
        bgClasses: "bg-pink-200 dark:bg-pink-800",
        activeBgClasses: "bg-pink-500 dark:bg-pink-500",
        highlightBgClasses: "bg-pink-50 dark:bg-pink-900",
        textClasses: "text-pink-900 dark:text-pink-50",
        borderClasses: "border-pink-400 dark:border-pink-700",
        activeBorderClasses: "border-pink-500 dark:border-pink-500",
        hoverClasses: "hover:bg-pink-50 dark:hover:bg-pink-900",
    },
}

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

export const SIZE_MAP = {
    sm: { containerPadding: "p-2", textSize: "text-sm", paddingNum: "2" },
    md: { containerPadding: "p-3", textSize: "text-md", paddingNum: "3" },
    lg: { containerPadding: "p-4", textSize: "text-lg", paddingNum: "4" },
};
