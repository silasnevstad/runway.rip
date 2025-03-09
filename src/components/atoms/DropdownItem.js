"use client";

import React, { useState, useRef, useEffect } from "react";
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
    ...props
}) {
    const [isOpen, setIsOpen] = useState(initialOpen);
    const controlled = isOpenProp !== undefined;
    const open = controlled ? isOpenProp : isOpen;

    // Ref and state for animated container height.
    const contentRef = useRef(null);
    const [containerHeight, setContainerHeight] = useState(0);

    // Toggle open state.
    const toggle = (e) => {
        if (controlled) {
            onToggle && onToggle(!open);
        } else {
            setIsOpen(!open);
            onToggle && onToggle(!open);
        }
        onClick && onClick(e);
    };

    const colorSet = COLOR_VARIANTS[color][variant] || COLOR_VARIANTS.gray.soft;

    const outerContainerClass = mergeClasses(
        "w-full py-4",
        hoverBg && colorSet.hoverBg,
        border && `${BORDER_CLASSES[borderStyle]} ${open ? getBorderColorClass(activeColor) : getBorderColorClass(color)}`,
        className
    );

    const innerContainerClass = mergeClasses(
        "relative flex justify-between items-center w-full max-w-prose cursor-pointer"
    );

    const buttonClass = mergeClasses(
        "font-semibold text-left w-full",
        open ? getTextColorClass(activeColor) : getTextColorClass(color),
        "group flex justify-between items-center w-full cursor-pointer"
    );

    const iconClass = mergeClasses(
        "h-5 w-5 transition-transform duration-300",
        open ? getTextColorClass(activeColor) : getTextColorClass(color),
        open ? "rotate-180" : "rotate-0"
    );

    // Render icon based on type.
    let icon;
    if (customIcon) {
        icon = renderIcon({ icon: customIcon, extraClasses: iconClass });
    } else if (iconType === "chevron") {
        icon = <ChevronDownIcon className={iconClass} />;
    } else if (iconType === "plus-minus") {
        icon = open ? (
            <MinusIcon className={iconClass} />
        ) : (
            <PlusIcon className={iconClass} />
        );
    }

    // Update height of collapsible container.
    useEffect(() => {
        if (open) {
            const height = contentRef.current?.scrollHeight || 0;
            setContainerHeight(height);
        } else {
            setContainerHeight(0);
        }
    }, [open, children]);

    return (
        <div className={outerContainerClass} {...props}>
            <button
                tabIndex={0}
                onClick={toggle}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") toggle(e); }}
                className={buttonClass}
            >
                {header}
                {icon}
            </button>
            {/* Collapsible content container */}
            <div
                className={innerContainerClass}
                style={{
                    height: containerHeight,
                    overflow: "hidden",
                    transition: "height 300ms ease",
                }}
            >
                <div ref={contentRef} className="flex flex-col w-full">
                    {children}
                </div>
            </div>
        </div>
    );
}
