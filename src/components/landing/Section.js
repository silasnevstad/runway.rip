"use client";
import React from 'react';
import { mergeClasses } from '@/utils/styling';

export default function Section({
    background = "",        // e.g. "bg-bg-50 dark:bg-bg-800"
    verticalPadding = "py-10",
    maxWidth = "max-w-7xl", // or "w-full sm:w-5/6 lg:w-5/6" etc.
    className,
    children,
    ...props
}) {
    return (
        <section
            className={mergeClasses(
                background,
                verticalPadding,
                'mx-auto px-4',
                maxWidth,
                'w-full',
                className
            )}
            {...props}
        >
            {children}
        </section>
    );
}