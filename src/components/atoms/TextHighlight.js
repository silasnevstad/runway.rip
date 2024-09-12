import React from 'react';
import {makeClassNameImportant} from "@/utils/utils";

const TextHighlight = ({
    text,
    highlight,
    className = '',
    effect = 'none',
    gradientColors = ['from-blue-500', 'to-purple-500'],
    highlightClassName = '',
    textSize = 'text-6xl'
}) => {
    const regex = new RegExp(`(${highlight})`, 'gi');
    const parts = text.split(regex);

    const getGradientClass = () => {
        return `bg-gradient-to-r ${gradientColors.join(' ')} bg-clip-text text-transparent`;
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
        <h1 className={`z-1 ${textSize} font-bold leading-snug max-w-prose ${makeClassNameImportant(className)}`}>
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