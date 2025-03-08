"use client";
import React from 'react';
import { mergeClasses } from '@/utils/styling';

export default function GridSection({
    columns = 3,                 // # of columns
    rows,                        // # of rows, if desired
    gridTemplateColumns,         // overrides columns prop if given
    gridTemplateRows,            // overrides rows prop if given
    gap = '1rem',                // e.g. '2rem' or '1.5rem'
    justifyItems,                // 'center', 'start', etc.
    alignItems,                  // 'center', 'stretch', etc.
    className,
    style,
    children,
    ...props
}) {
    const computedColumns =
        gridTemplateColumns || `repeat(${columns}, minmax(0, 1fr))`;
    const computedRows =
        gridTemplateRows || (rows ? `repeat(${rows}, auto)` : 'auto');

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: computedColumns,
        gridTemplateRows: computedRows,
        gap,
        justifyItems,
        alignItems,
        ...style,
    };

    return (
        <div
            className={mergeClasses(className)}
            style={gridStyle}
            {...props}
        >
            {children}
        </div>
    );
}