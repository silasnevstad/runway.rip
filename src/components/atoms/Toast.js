"use client";

import React, { useState, useEffect, useRef } from "react";
import {
    InformationCircleIcon,
    CheckCircleIcon,
    ExclamationCircleIcon,
    ExclamationTriangleIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import { mergeClasses, getHoverClasses } from "@/utils/styling";

const colorStyles = {
    info: {
        soft: "bg-blue-200 dark:bg-blue-600/25 text-blue-800 dark:text-blue-400",
        solid: "bg-blue-600 text-white",
    },
    success: {
        soft: "bg-green-200 dark:bg-green-600/25 text-green-800 dark:text-green-400",
        solid: "bg-green-600 text-white",
    },
    warning: {
        soft: "bg-yellow-100 dark:bg-yellow-600/25 text-yellow-800 dark:text-yellow-400",
        solid: "bg-yellow-600 text-white",
    },
    error: {
        soft: "bg-red-100 dark:bg-red-600/25 text-red-800 dark:text-red-400",
        solid: "bg-red-600 text-white",
    },
};

const borderStyles = {
    info: "border border-blue-600 dark:border-blue-600",
    success: "border border-green-600 dark:border-green-600",
    warning: "border border-yellow-600 dark:border-yellow-600",
    error: "border border-red-600 dark:border-red-600",
};

export default function Toast({
    children,
    variant = "soft", // "soft" or "solid"
    severity = "info", // "info", "success", "warning", "error"
    border = false,
    hoverBg = true,
    active = true,
    scale = false,
    lift = false,
    autoDismiss, // milliseconds before auto-dismiss (handled here only if not wrapped)
    closable = true,
    onClose,
    onClick,
    className = "",
    slideFrom = "right", // determines slide-in direction: "left" or "right"
    transitionDuration = 500, // duration (ms) of the slide/opacity transition
    ...props
}) {
    const [animate, setAnimate] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const autoDismissTimer = useRef(null);
    const offscreenTransform =
        slideFrom === "left" ? "translateX(-100%)" : "translateX(100%)";

    useEffect(() => {
        // Trigger entrance animation
        const timer = setTimeout(() => setAnimate(true), 50);
        if (autoDismiss) {
            autoDismissTimer.current = setTimeout(triggerClose, autoDismiss);
        }
        return () => {
            clearTimeout(timer);
            if (autoDismissTimer.current) clearTimeout(autoDismissTimer.current);
        };
    }, [autoDismiss]);

    const triggerClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            if (onClose) onClose();
        }, transitionDuration);
    };

    const transformStyle = {
        transform: !animate || isClosing ? offscreenTransform : "translateX(0)",
        transition: `transform ${transitionDuration}ms ease, opacity ${transitionDuration}ms ease`,
        opacity: isClosing ? 0 : 1,
    };

    const iconStyles = {
        info: (
            <InformationCircleIcon
                className={`w-6 h-6 inline-block mr-1 ${
                    variant === "soft"
                        ? "text-blue-700 dark:text-blue-500"
                        : "text-white"
                }`}
            />
        ),
        success: (
            <CheckCircleIcon
                className={`w-6 h-6 inline-block mr-1 ${
                    variant === "soft"
                        ? "text-green-700 dark:text-green-500"
                        : "text-white"
                }`}
            />
        ),
        warning: (
            <ExclamationTriangleIcon
                className={`w-6 h-6 inline-block mr-1 ${
                    variant === "soft"
                        ? "text-yellow-700 dark:text-yellow-500"
                        : "text-white"
                }`}
            />
        ),
        error: (
            <ExclamationCircleIcon
                className={`w-6 h-6 inline-block mr-1 ${
                    variant === "soft"
                        ? "text-red-700 dark:text-red-500"
                        : "text-white"
                }`}
            />
        ),
    };

    const finalClasses = mergeClasses(
        "inline-flex items-center w-full font-medium rounded-md gap-2 px-4 py-2.5 shadow-lg z-50",
        colorStyles[severity][variant],
        border && borderStyles[severity],
        getHoverClasses({ lift, scale, active }),
        className
    );

    return (
        <div
            role="alert"
            aria-live="assertive"
            onClick={onClick}
            style={transformStyle}
            className={finalClasses}
            {...props}
        >
            {iconStyles[severity]}
            <div className="flex-1">{children}</div>
            {closable && (
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        triggerClose();
                    }}
                    aria-label="Close notification"
                    className="ml-4 flex-shrink-0 focus:outline-none"
                >
                    <XMarkIcon className="w-4 h-4" />
                </button>
            )}
        </div>
    );
}
