"use client";
import React, { useState } from "react";
import { ChevronDownIcon, PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
import { mergeClasses, getHoverClasses, COLOR_VARIANTS, BORDER_RADIUS } from "@/utils/styling";

export default function DropdownItem({
    header,
    children,
    color = "gray",
    variant = "solid",
    hoverBg = true,
    iconType = "chevron", // "chevron", "plus-minus", or "none"
    customIcon,
    initialOpen = false,
    active = false,
    onToggle,
    onClick,
    className = "",
    ...props
}) {
    const [isOpen, setIsOpen] = useState(initialOpen);

    const colorSet = COLOR_VARIANTS[color]?.[variant] || COLOR_VARIANTS.primary.solid;
    const borderRadiusClass = BORDER_RADIUS.md;

    const buttonClasses = mergeClasses(
        "group flex items-center justify-between w-full font-medium transition-colors gap-2",
        "px-2 py-2 text-sm",
        colorSet.text,
        colorSet.hoverText,
        hoverBg && colorSet.hoverBg,
        borderRadiusClass,
        getHoverClasses({ lift: false, scale: false, active }),
        className
    );

    const iconClasses = mergeClasses(
        "flex items-center justify-center transition-transform duration-200",
        "h-4 w-4",
        colorSet.fadeText,
        colorSet.hoverText,
        isOpen ? "rotate-180" : ""
    );

    const toggleDropdown = (e) => {
        const newState = !isOpen;
        setIsOpen(newState);
        if (onToggle) onToggle(newState);
        if (onClick) onClick(e);
    };

    let iconToRender = null;
    if (customIcon) {
        iconToRender = customIcon;
    } else if (iconType === "chevron") {
        iconToRender = (
            <ChevronDownIcon className={iconClasses}/>
        );
    } else if (iconType === "plus-minus") {
        iconToRender = isOpen ? (
            <MinusIcon className={iconClasses} />
        ) : (
            <PlusIcon className={iconClasses} />
        );
    }

    return (
        <div {...props}>
            <button onClick={toggleDropdown} className={buttonClasses}>
                <span>{header}</span>
                {iconToRender && <span>{iconToRender}</span>}
            </button>
            {isOpen && (
                <div>
                    {children}
                </div>
            )}
        </div>
    );
}
