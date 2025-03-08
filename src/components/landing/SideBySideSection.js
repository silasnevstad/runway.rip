"use client";
import React from 'react';
import { mergeClasses } from '@/utils/styling';

export default function SideBySideSection({
    children,
    reverse = false,   // swap order on desktop if true
    gap = "gap-10",    // tailwind gap utility, e.g. 'gap-6', 'gap-20'
    className,
    ...props
}) {
    // Convert to array for convenience
    const items = React.Children.toArray(children);

    return (
        <div
            className={mergeClasses(
                'flex flex-col',
                reverse ? 'md:flex-row-reverse' : 'md:flex-row',
                gap,
                className
            )}
            {...props}
        >
            {/*
        You can optionally warn if items.length !== 2,
        but it's sometimes useful to allow more children.
      */}
            {items.map((item, idx) => (
                <div key={idx} className="flex-1">
                    {item}
                </div>
            ))}
        </div>
    );
}