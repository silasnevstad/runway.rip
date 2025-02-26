import React from 'react';
import {getBgColorClass, getFromColorClass, getToColorClass, mergeClasses} from "@/utils/styling";

const TextHighlight = ({
    text,
    highlight,
    color = "primary",
    fromGradient = "",
    toGradient = "",
    textSize = "text-7xl/18", // text size / line height
    className = "",
}) => {
    const regex = new RegExp(`(${highlight})`, 'gi');
    const parts = text.split(regex);
    const gradientClass = `bg-linear-to-r ${getFromColorClass(fromGradient)} ${getToColorClass(toGradient)} bg-clip-text text-transparent`;
    const highlightClass = `${getBgColorClass(color)} text-gray-100 dark:text-gray-900 px-2 whitespace-nowrap rounded-xs `;

    return (
        <h1 className={mergeClasses(`z-1 ${textSize} font-bold max-w-prose text-center`, className)}>
            {parts.map((part, index) =>
                regex.test(part) ? (
                    <span
                        key={index}
                        className={(fromGradient && toGradient) ? gradientClass : highlightClass}
                    >
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