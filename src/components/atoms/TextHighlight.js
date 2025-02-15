import React from 'react';
import {makeClassNameImportant} from "@/utils/utils";
import {mergeClasses} from "@/utils/classNames";

const TextHighlight = ({
    text,
    highlight,
    className = '',
    effect = 'none',
    gradientColors = ['from-blue-500', 'to-purple-500'],
    highlightClassName = '',
    textSize = 'text-6xl/16' // text size / line height
}) => {
    const regex = new RegExp(`(${highlight})`, 'gi');
    const parts = text.split(regex);

    const getGradientClass = () => {
        return `bg-linear-to-r ${gradientColors.join(' ')} bg-clip-text text-transparent`;
    };

    const getHighlightClass = () => {
        switch (effect) {
            case 'gradient':
                return getGradientClass();
            default:
                return 'bg-blue-500 text-white';
        }
    };

    return (
        <h1 className={mergeClasses(`z-1 ${textSize} font-bold max-w-prose`, className)}>
            {parts.map((part, index) =>
                regex.test(part) ? (
                    <span key={index} className={`${getHighlightClass()} ${highlightClassName}`}>
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