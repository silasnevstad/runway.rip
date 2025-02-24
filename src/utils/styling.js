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
