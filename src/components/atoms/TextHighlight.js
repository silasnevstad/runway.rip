import React from 'react';
import {getBgColorClass, getFromColorClass, getToColorClass, mergeClasses} from "@/utils/styling";

const TextHighlight = ({
    text,
    highlight,
    color = "primary",
    fromGradient = "",
    toGradient = "",
    className = "",
}) => {
    const regex = new RegExp(`(${highlight})`, 'gi');
    const parts = text.split(regex);
    const gradientClass = `bg-linear-to-r ${getFromColorClass(fromGradient)} ${getToColorClass(toGradient)} bg-clip-text text-transparent`;
    const highlightClass = `${getBgColorClass(color)} text-gray-100 dark:text-gray-900 px-2 whitespace-nowrap rounded-xs `;

    return (
        <h1 className={mergeClasses(`z-1 text-5xl/15 sm:text-5xl/16 md:text-6xl/16 lg:text-7xl/18 font-bold max-w-prose text-center`, className)}>
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