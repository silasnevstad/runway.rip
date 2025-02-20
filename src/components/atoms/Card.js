'use client';

import React from 'react';
import {mergeClasses} from "@/utils/classNames";

export default function Card({
    className = '',
    children,
    href = '',
    onClick,
    shadow,
    scale,
    outline,
    lift,
    border = true,
    ...props
}) {
    const combinedStyles = mergeClasses(
        `relative bg-bg-50 dark:bg-bg-800 rounded-2xl p-6
        ${border && 'border border-bg-300 dark:border-gray-800'}
        ${shadow && 'hover:shadow-md'}
        ${scale && 'hover:scale-101'}
        ${outline && 'hover:border-black hover:bg-bg-0 dark:hover:bg-bg-800 dark:hover:border-gray-700'}
        ${lift && 'transfor hover:-translate-y-0.5'}
        ${href ? 'cursor-pointer' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        transition-all ease-in-out`,
        className
    );

    return (
        <div
            className={combinedStyles}
            onClick={href ? () => window.location.href = href : onClick}
            {...props}
        >
            {children}
        </div>
    );
};