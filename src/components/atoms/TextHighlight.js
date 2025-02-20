import React from 'react';
import {mergeClasses} from "@/utils/classNames";

const TextHighlight = ({
    text,
    highlight,
    className = "",
    color = "primary",
    gradientColors = [],  //  [from, to]  i.e. ['blue', 'purple']
    highlightClassName = "",
    textSize = "text-7xl/18" // text size / line height
}) => {
    const regex = new RegExp(`(${highlight})`, 'gi');
    const parts = text.split(regex);
    const gradientClass = `bg-linear-to-r from-${gradientColors[0]}-500 to-${gradientColors[1]}-500 bg-clip-text text-transparent`;
    const highlightClass = `bg-${color}-500 dark:bg-${color}-500 text-gray-100 dark:text-gray-900 px-2 whitespace-nowrap rounded-xs `;

    return (
        <h1 className={mergeClasses(`z-1 ${textSize} font-bold max-w-prose`, className)}>
            {parts.map((part, index) =>
                regex.test(part) ? (
                    <span key={index} className={
                        mergeClasses(
                            `${gradientColors.length === 2 ? gradientClass : highlightClass}`,
                            highlightClassName
                        )
                    }>
                        {part}
                    </span>
                ) : (
                    part
                )
            )}
        </h1>
    );
};

export default TextHighlight;