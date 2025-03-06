"use client";
import React, { useState, useRef, useEffect } from "react";
import { ChevronDownIcon, PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
import { COLOR_VARIANTS, getBorderColorClass, getTextColorClass, mergeClasses, renderIcon } from "@/utils/styling";

// Border classes dictionary.
const BORDER_CLASSES = {
    top: "border-t",
    bottom: "border-b",
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
    // Internal state and controlled behavior.
    const [isOpen, setIsOpen] = useState(initialOpen);
    const controlled = isOpenProp !== undefined;
    const open = controlled ? isOpenProp : isOpen;

    // Animation state for height and content opacity.
    const contentRef = useRef(null);
    const [containerHeight, setContainerHeight] = useState(0);
    const [showContent, setShowContent] = useState(open);

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

    // Color settings.
    const colorSet = COLOR_VARIANTS[color][variant] || COLOR_VARIANTS.gray.soft;
    const activeColorSet = COLOR_VARIANTS[activeColor][variant] || COLOR_VARIANTS.primary.soft;

    const outerContainerClass = mergeClasses(
        "w-96 py-4 px-2 transition-all duration-300", // Increased duration for a slower transition.
        hoverBg && colorSet.hoverBg,
        border && `${BORDER_CLASSES[borderStyle]} ${open ? getBorderColorClass(activeColor) : getBorderColorClass(color)}`,
        className
    );

    const innerContainerClass = mergeClasses(
        "group relative flex justify-between items-center w-full max-w-prose cursor-pointer mt-2"
    );

    const buttonClass = mergeClasses(
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

    // Update height and content visibility on open/close.
    useEffect(() => {
        if (open) {
            // Measure the content's height and animate expansion.
            const height = contentRef.current?.scrollHeight || 0;
            setContainerHeight(height);
            // Delay showing the text until after expansion.
            const timer = setTimeout(() => {
                setShowContent(true);
            }, 300); // Match this with the height transition duration.
            return () => clearTimeout(timer);
        } else {
            // Hide content immediately then collapse.
            setShowContent(false);
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
            {/* Animated collapsible content container */}
            {open && <div
                className={innerContainerClass}
                style={{
                    height: containerHeight,
                    overflow: "hidden",
                    transition: "height 200ms ease",
                }}
            >
                <div
                    ref={contentRef}
                >
                    {children}
                </div>
            </div>}
        </div>
    );
}
