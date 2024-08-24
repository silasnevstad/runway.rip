import React from 'react';

const TextHighlight = ({
    text,
    highlight,
    className = '',
    effect = 'none',
    gradientColors = ['from-blue-500', 'to-purple-500'],
    highlightClassName = ''
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
        <h1 className={`z-1 text-6xl font-bold leading-snug max-w-prose ${className}`}>
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