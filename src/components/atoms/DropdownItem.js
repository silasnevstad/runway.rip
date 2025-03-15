"use client";

import React, { useState } from "react";
import { ChevronDownIcon, PlusIcon, MinusIcon } from "@heroicons/react/24/outline";

import { COLOR_VARIANTS, getBorderColorClass, getTextColorClass, mergeClasses, renderIcon } from "@/utils/styling";

const BORDER_CLASSES = {
    top: "border-t",
    bottom: "border-b",
    none: "border-none",
    full: "border",
};

export default function DropdownItem({
    header,
    children,
    initialOpen = false,
    isOpen: isOpenProp,
    onToggle,
    onClick,
    color = "gray",         // Inactive color
    activeColor = "primary",// Active (open) color
    variant = "soft",
    hoverBg = false,
    border = true,
    borderStyle = "bottom", // Options: "top", "bottom"
    iconType = "chevron",   // Options: "chevron", "plus-minus", "none"
    customIcon,
    className = "",
    headerClassName = "",
    contentClassName = "",
    ...props
}) {
    const [open, setOpen] = useState(initialOpen);
    const controlled = isOpenProp !== undefined;
    const isOpen = controlled ? isOpenProp : open;

    // Toggle the open state.
    const toggle = (e) => {
        if (controlled) {
            onToggle && onToggle(!isOpen);
        } else {
            setOpen(!isOpen);
            onToggle && onToggle(!isOpen);
        }
        onClick && onClick(e);
    };

    const colorSet = COLOR_VARIANTS[color][variant] || COLOR_VARIANTS.gray.soft;

    const outerContainerClass = mergeClasses(
        "w-full",
        border && `${BORDER_CLASSES[borderStyle]} ${isOpen ? getBorderColorClass(activeColor) : getBorderColorClass(color)}`,
        className
    );

    const headerClass = mergeClasses(
        "cursor-pointer flex justify-between items-center py-4 w-full",
        isOpen ? getTextColorClass(activeColor) : getTextColorClass(color),
        hoverBg && colorSet.hoverBg,
        headerClassName
    );

    const iconClass = mergeClasses(
        "h-5 w-5 transition-transform duration-300",
        isOpen ? getTextColorClass(activeColor) : getTextColorClass(color),
        isOpen ? "rotate-180" : "rotate-0"
    );

    let icon;
    if (customIcon) {
        icon = renderIcon({ icon: customIcon, extraClasses: iconClass });
    } else if (iconType === "chevron") {
        icon = <ChevronDownIcon className={iconClass} />;
    } else if (iconType === "plus-minus") {
        icon = isOpen ? (
            <MinusIcon className={iconClass} />
        ) : (
            <PlusIcon className={iconClass} />
        );
    }

    return (
        <div className={outerContainerClass} {...props}>
            <button
                tabIndex={0}
                onClick={toggle}
                onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") toggle(e);
                }}
                className={headerClass}
            >
                {header}
                {icon}
            </button>
            {/* Collapsible content container */}
            <div
                className={`
                    overflow-hidden transition-all duration-250
                    ${isOpen ? "max-h-screen" : "max-h-0"}
                `}
            >
                <div className={mergeClasses("pb-4", contentClassName)}>
                    {children}
                </div>
            </div>
        </div>
    );
}
