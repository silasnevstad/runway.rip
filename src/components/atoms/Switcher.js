"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Tooltip from "@/components/atoms/Tooltip";
import { mergeClasses } from "@/utils/classNames";

export default function Switcher({
    className = "",
    buttonClassName = "",
    options = [],           // { value, name, Icon?, image? }[]
    selected,
    onChange,
    hover = true,
    tooltip = false,
    tooltipPosition = "top",
    vertical = false,
    animate = true,
    shape = "rounded-full",
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

    // Container classes
    const containerClasses = mergeClasses(
        "relative flex p-1 gap-1",
        vertical ? "flex-col" : "flex-row",
        "bg-bg-200 dark:bg-gray-800",
        shape,
        className
    );

    // Sliding indicator classes (when animate = true)
    const indicatorClasses = mergeClasses(
        "absolute z-0 transition-all duration-300 ease-in-out",
        "bg-gray-50 dark:bg-gray-900",
        shape
    );

    return (
        <div ref={containerRef} className={containerClasses} {...props}>
            {animate && <div style={indicatorStyle} className={indicatorClasses} />}
            {options.map((option, index) => {
                const { value, name, Icon, image } = option;
                const key = value ?? index;
                const isSelected = selected === value;

                const buttonBase = mergeClasses(
                    "relative z-10 flex items-center gap-2 px-4 py-2",
                    "whitespace-nowrap text-center transition-all duration-200 ease-in-out",
                    shape,
                    vertical ? "justify-center" : "justify-start",
                    buttonClassName
                );

                let buttonBg, buttonHover, buttonBorder, buttonText;
                if (animate) {
                    buttonBg = "bg-transparent";
                    buttonText = isSelected
                        ? "text-gray-900 dark:text-gray-100 font-medium"
                        : "text-gray-600 dark:text-gray-300";
                    if (isSelected) {
                        buttonHover = hover ? "hover:bg-gray-200 dark:hover:bg-gray-900" : "";
                        buttonBorder = "border border-gray-400 dark:border-gray-700";
                    } else {
                        buttonHover = hover ? "hover:bg-gray-50 dark:hover:bg-gray-700" : "";
                    }
                } else {
                    if (isSelected) {
                        buttonBg = "bg-gray-50 dark:bg-gray-700";
                        buttonText = "text-gray-100 font-medium";
                        buttonBorder = "border border-gray-200 dark:border-gray-700";
                    } else {
                        buttonBg = "bg-transparent";
                        buttonText = "text-gray-600 dark:text-gray-300";
                    }
                    buttonHover = hover ? "hover:bg-gray-50 dark:hover:bg-gray-700" : "";
                }

                const buttonClasses = mergeClasses(buttonBase, buttonBg, buttonHover, buttonBorder, buttonText);

                // ----- Button -----
                const buttonNode = (
                    <button
                        key={key}
                        ref={(el) => {
                            buttonRefs.current[value] = el;
                        }}
                        className={buttonClasses}
                        onClick={() => onChange(value)}
                        aria-pressed={isSelected}
                    >
                        {Icon && Icon}
                        {image && <Image src={image} width={24} height={24} alt={name} />}
                        {name}
                    </button>
                );

                // ----- Tooltip or plain -----
                return tooltip ? (
                    <Tooltip key={key} text={name} position={tooltipPosition} className="z-20">
                        {buttonNode}
                    </Tooltip>
                ) : (
                    <React.Fragment key={key}>{buttonNode}</React.Fragment>
                );
            })}
        </div>
    );
}
