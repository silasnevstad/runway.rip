import React from 'react';

const TextHighlight = ({ text, highlight, className }) => {
    const regex = new RegExp(`(${highlight})`, 'gi');
    const parts = text.split(regex);

    return (
        <h1 className={`z-1 text-7xl max-md:text-6xl max-sm:text-6xl font-bold leading-snug max-w-[70ch] max-sm:max-w-[50ch] ${className}`}>
            {parts.map((part, index) =>
                regex.test(part) ? (
                    <span key={index} className="bg-black text-white dark:bg-white dark:text-black">
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