"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Tooltip from "@/components/atoms/Tooltip";
import { mergeClasses } from "@/utils/classNames";

// Helper: returns combined text and background classes when not animating.
const getOptionClasses = (
    isSelected,
    { activeTextColor, inactiveTextColor, activeBgColor, inactiveBgColor }
) => {
    const textClass = isSelected
        ? `text-${activeTextColor}-800 dark:text-${activeTextColor}-400`
        : `text-${inactiveTextColor}-500 dark:text-${inactiveTextColor}-300`;
    const bgClass = isSelected
        ? `bg-${activeBgColor}-300 dark:bg-${activeBgColor}-900`
        : `bg-${inactiveBgColor}-100 dark:bg-${inactiveBgColor}-800`;
    return mergeClasses(textClass, bgClass);
};

const Switch = ({
    options,
    selected,
    onChange,
    activeTextColor = "gray",
    inactiveTextColor = "gray",
    activeBgColor = "gray",
    inactiveBgColor = "gray",
    hover = false,
    tooltip = false,
    tooltipPosition = "top",
    vertical = false,
    shape = "rounded-full",
    className = "",
    animate = true, // New prop to toggle the sliding animation
    ...props
}) => {
    const containerRef = useRef(null);
    const buttonRefs = useRef({});
    const [indicatorStyle, setIndicatorStyle] = useState({});

    // Helper for text-only classes when animation is enabled.
    const getTextClasses = (isSelected) =>
        isSelected
            ? `text-${activeTextColor}-900/90 dark:text-${activeTextColor}-400`
            : `text-${inactiveTextColor}-500 dark:text-${inactiveTextColor}-300`;

    // Measure the selected button and update the indicator style.
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

    // Container: always use relative to position the sliding indicator.
    const containerBgClasses = `bg-${inactiveBgColor}-200 dark:bg-${inactiveBgColor}-800`;
    const containerClasses = mergeClasses(
        "relative flex p-1 gap-1",
        vertical ? "flex-col rounded-xl" : mergeClasses("flex-row items-center", shape),
        containerBgClasses,
        className
    );

    return (
        <div className={containerClasses} ref={containerRef} {...props}>
            {/* Render sliding indicator if animation is enabled */}
            {animate && (
                <div
                    className={mergeClasses(
                        vertical ? "rounded-xl" : shape,
                        "absolute z-0 transition-all duration-300 ease-in-out",
                        `bg-${activeBgColor}-400 dark:bg-${activeBgColor}-900`
                    )}
                    style={indicatorStyle}
                />
            )}
            {options.map((option, index) => {
                const { value, name, Icon, image } = option;
                const isSelected = selected === value;
                const key = value ?? index;

                // When animating, buttons use only text color (transparent bg);
                // otherwise, apply full background styles.
                const buttonColorClasses = animate
                    ? getTextClasses(isSelected)
                    : getOptionClasses(isSelected, {
                        activeTextColor,
                        inactiveTextColor,
                        activeBgColor,
                        inactiveBgColor,
                    });

                // Optional hover classes.
                const hoverClasses = hover
                    ? `hover:bg-${inactiveBgColor}-200 dark:hover:bg-${inactiveBgColor}-900`
                    : "";

                // Base classes for each button.
                const buttonBaseClasses =
                    "relative z-10 whitespace-nowrap flex items-center gap-2 py-2.5 px-5 text-center transition-all duration-200 ease-in-out";

                // Layout classes differ for vertical vs. horizontal.
                const layoutClasses = vertical ? "flex-col rounded-xl" : mergeClasses("flex-row", shape);

                const buttonClasses = mergeClasses(
                    buttonBaseClasses,
                    layoutClasses,
                    hoverClasses,
                    buttonColorClasses
                );

                const buttonContent = (
                    <button
                        ref={(el) => {
                            buttonRefs.current[value] = el;
                        }}
                        className={buttonClasses}
                        onClick={() => onChange(value)}
                        aria-pressed={isSelected}
                    >
                        {Icon && <Icon className="w-4 h-4" />}
                        {image && <Image src={image} width={24} height={24} alt={name} />}
                        {name}
                    </button>
                );

                return tooltip ? (
                    <Tooltip key={key} text={name} position={tooltipPosition} className="z-20">
                        {buttonContent}
                    </Tooltip>
                ) : (
                    <React.Fragment key={key}>{buttonContent}</React.Fragment>
                );
            })}
        </div>
    );
};

export default Switch;
