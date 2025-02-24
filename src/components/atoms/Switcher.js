"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Tooltip from "@/components/atoms/Tooltip";
import { mergeClasses, renderIcon, BORDER_RADIUS, COLOR_VARIANTS } from "@/utils/styling";

export default function Switcher({
    options = [],           // { value, name, Icon?, image?, tooltip? }[]
    selected,
    onChange,
    color = "gray",
    size = "md",
    borderRadius = "xl",
    vertical = false,
    animate = true,  // Animate with sliding indicator
    hover = true,
    border = false,
    buttonBorder = false,
    buttonShadow = true,
    tooltipPosition = "top",
    className = "",
    buttonClassName = "",
    ...props
}) {
    const containerRef = useRef(null);
    const buttonRefs = useRef({});
    const [indicatorStyle, setIndicatorStyle] = useState({});

    // Measure & position sliding indicator when animate = true
    useEffect(() => {
        if (!animate) return;
        const container = containerRef.current;
        const selectedButton = buttonRefs.current[selected];
        if (container && selectedButton) {
            const containerRect = container.getBoundingClientRect();
            const buttonRect = selectedButton.getBoundingClientRect();
            setIndicatorStyle({
                width: buttonRect.width,
                height: buttonRect.height,
                left: buttonRect.left - containerRect.left,
                top: buttonRect.top - containerRect.top,
            });
        }
    }, [selected, options, animate]);

    const sizeStyles = {
        xs: `p-0.5 text-xs gap-0.5`,
        sm: `p-0.5 text-sm gap-0.5`,
        md: `p-1 text-md gap-1`,
        lg: `p-2 text-lg gap-2`,
    }

    const {
        bgClasses,
        highlightBgClasses,
        borderClasses,
        textClasses,
        hoverClasses
    } = COLOR_VARIANTS[color];
    const borderRadiusClass = BORDER_RADIUS[borderRadius];

    // Container classes
    const containerClasses = mergeClasses(
        "relative flex",
        vertical ? "flex-col" : "flex-row",
        bgClasses,
        sizeStyles[size] || sizeStyles.md,
        borderRadiusClass,
        border && `border ${borderClasses}`,
        className
    );

    // Sliding indicator classes (when animate = true)
    const indicatorClasses = mergeClasses(
        "absolute z-0 transition-all duration-300 ease-in-out",
        highlightBgClasses,
        borderRadiusClass,
        vertical && "w-full",
        buttonShadow && "shadow-md"
    );

    // Button classes
    const buttonClasses = (isSelected) => mergeClasses(
        "relative z-10 flex items-center gap-2 px-4 py-2",
        "whitespace-nowrap text-center transition-all duration-200 ease-in-out",
        borderRadiusClass,
        vertical ? "justify-center w-full" : "justify-start",
        buttonBorder && (isSelected
            ? `border ${borderClasses}`
            : "border border-transparent"),
        textClasses,
        isSelected ? "opacity-100" : "opacity-90",
        hover ? "hover:opacity-100" : "",
        isSelected ? `${highlightBgClasses}` : `bg-transparent`,
        hover && !isSelected ? `${hoverClasses}` : "",
        buttonClassName
    );

    // Icon classes
    const iconClasses = (isSelected) => mergeClasses(
        "w-4 h-4",
        textClasses,
        isSelected ? `text-opacity-100` : `text-opacity-90`,
        `group-hover:text-opacity-100`,
    );

    return (
        <div ref={containerRef} className={containerClasses} {...props}>
            {animate && <div style={indicatorStyle} className={indicatorClasses} />}
            {options.map((option, index) => {
                const { value, name, Icon, image, tooltip } = option;
                const key = value ?? index;
                const hasTooltip = !!tooltip;
                const isSelected = selected === value;

                const buttonNode = (
                    <button
                        key={key}
                        ref={(el) => {
                            buttonRefs.current[value] = el;
                        }}
                        className={buttonClasses(isSelected)}
                        onClick={() => onChange(value)}
                        aria-pressed={isSelected}
                    >
                        {Icon && renderIcon(Icon, null, iconClasses(isSelected))}
                        {image && <Image src={image} width={24} height={24} alt={name} />}
                        {name}
                    </button>
                );

                return hasTooltip ? (
                    <Tooltip key={key} text={tooltip} position={tooltipPosition} color={color}>
                        {buttonNode}
                    </Tooltip>
                ) : (
                    <React.Fragment key={key}>{buttonNode}</React.Fragment>
                );
            })}
        </div>
    );
}
