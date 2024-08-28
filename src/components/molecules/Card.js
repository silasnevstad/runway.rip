'use client';

import React from 'react';
import { makeClassNameImportant } from "@/utils/utils";

const Card = ({
    className = '',
    children,
    hoverEffect = 'shadow',
    border = true,
    ...props
}) => {
    const hoverEffects = {
        none: '',
        shadow: 'hover:shadow-md hover:-translate-y-0.5',
        scale: 'hover:scale-105',
        outline: 'hover:border-black hover:bg-bg-0 dark:hover:bg-bg-800 dark:hover:border-gray-700'
    };

    const combinedStyles = `
        relative bg-bg-50 dark:bg-bg-900 rounded-2xl p-6
        ${border && 'border border-bg-300 dark:border-gray-800'}
        transition-all ease-in-out ${hoverEffects[hoverEffect]}
        ${makeClassNameImportant(className)}
    `;

    return (
        <div
            className={combinedStyles}
            {...props}
        >
            {children}
        </div>
    );
};

export default Card;