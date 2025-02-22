"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Tooltip from "@/components/atoms/Tooltip";
import { mergeClasses } from "@/utils/styling";

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
    border = false,
    buttonBorder = false,
    borderRadius = "full",
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
        "relative flex p-0.5 gap-1",
        vertical ? "flex-col" : "flex-row",
        "bg-bg-200 dark:bg-gray-800",
        border && "border border-bg-300 dark:border-gray-700",
        `rounded-${borderRadius}`,
        className
    );

    // Sliding indicator classes (when animate = true)
    const indicatorClasses = mergeClasses(
        "absolute z-0 transition-all duration-300 ease-in-out",
        "bg-gray-50 dark:bg-gray-900",
        `rounded-${borderRadius}`,
        buttonBorder && `border border-bg-300 dark:border-gray-700`
    );

    return (
        <div ref={containerRef} className={containerClasses} {...props}>
            {animate && <div style={indicatorStyle} className={indicatorClasses} />}
            {options.map((option, index) => {
                const { value, name, Icon, image } = option;
                const key = value ?? index;
                const isSelected = selected === value;

                const buttonClasses = mergeClasses(
                    "relative z-10 flex items-center gap-2 px-4 py-2",
                    "whitespace-nowrap text-center transition-all duration-200 ease-in-out",
                    `rounded-${borderRadius}`,
                    vertical ? "justify-center" : "justify-start",
                    animate
                        ? isSelected
                            ? `bg-transparent text-gray-900 dark:text-gray-100 font-medium ${buttonBorder && "border border-gray-400 dark:border-gray-700"}`
                            : 'bg-transparent text-gray-600 dark:text-gray-300'
                        : isSelected
                            ? `bg-gray-50 dark:bg-gray-900 text-gray-800 font-medium ${buttonBorder && "border border-gray-200 dark:border-gray-700"}`
                            : 'bg-transparent text-gray-600 dark:text-gray-300',
                    hover && animate && isSelected && 'hover:bg-gray-50 dark:hover:bg-gray-900',
                    hover && animate && !isSelected && 'hover:bg-gray-50 dark:hover:bg-bg-700',
                    hover && !animate && 'hover:bg-gray-50 dark:hover:bg-bg-700',
                    buttonClassName
                );

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
