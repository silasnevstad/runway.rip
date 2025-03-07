"use client";
import React from "react";
import { getFadedTextColorClass, mergeClasses } from "@/utils/styling";

export default function FloatingLabelWrapper({
    id,
    label = "",
    labelMode = "none",
    labelBackground = "bg-bg-0 dark:bg-bg-900",
    sizeConfig,
    color = "gray",
    isFocused = false,
    hasValue = false,
    containerClasses = "",
    children,
}) {
    // If labelMode is not "float" or there's no label, we do nothing special:
    if (labelMode !== "float" || !label) {
        return <div className={containerClasses}>{children}</div>;
    }

    // "Floating" means: either focused or there's a non-empty value
    const isFloating = isFocused || hasValue;

    // Compute label classes for floating style
    const floatingLabelClasses = mergeClasses(
        "absolute cursor-text transition-all duration-200",
        sizeConfig?.textSize,
        isFloating
            ? `-top-3 left-3 px-1 text-sm ${getFadedTextColorClass(color)} ${labelBackground} rounded-sm`
            : `${sizeConfig?.paddingNum} top-1/2 -translate-y-1/2 ${getFadedTextColorClass(color)}`,
        "pointer-events-none"
    );

    return (
        <div className={containerClasses}>
            <label
                htmlFor={id}
                className={floatingLabelClasses}
            >
                {label}
            </label>
            {children}
        </div>
    );
}
