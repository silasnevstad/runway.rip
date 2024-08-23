import React from 'react';

const TextHighlight = ({
   text,
   highlight,
   className,
   color=false
}) => {
    const regex = new RegExp(`(${highlight})`, 'gi');
    const parts = text.split(regex);

    return (
        <h1 className={`${color && 'bg-gradient-to-r from-primary-500 from-20% to-green-500 to-80% bg-clip-text text-transparent'} z-1 text-6xl font-bold leading-snug max-w-prose ${className}`}>
            {parts.map((part, index) =>
                regex.test(part) ? (
                    <span key={index} className={`${color ? 'bg-gradient-to-r from-primary-500 from-20% to-green-500 to-80% dark:text-white' : 'bg-black dark:text-black'} text-white dark:bg-white`}>
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