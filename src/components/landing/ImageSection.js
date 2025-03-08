'use client';

import React from 'react';
import Image from 'next/image';

import {getTextColorClass, mergeClasses} from "@/utils/styling";

export default function ImageSection({
    image,
    alt = 'Section image',
    title,
    subtitle,
    description,
    activeColor = 'primary',
    position = 'right',
    children,
    className,
    imageClassName,
    ...props
}) {
    return (
        <section
            className={mergeClasses('w-full sm:w-5/6 lg:w-5/6 max-w-7xl px-4 py-10', className)}
            {...props}
        >
            <div
                className={mergeClasses(
                    'flex flex-col gap-10 sm:gap-20 items-center justify-center w-full',
                    position === 'right' && 'md:flex-row-reverse',
                    position === 'left' && 'md:flex-row',
                    position === 'center' && 'md:flex-col'
                )}
            >
                    <div className="flex-1 flex items-center justify-center max-w-[50ch]">
                        {image && (
                            <Image
                                src={image}
                                alt={alt}
                                width={500}
                                height={500}
                                className={mergeClasses('max-w-full h-auto', imageClassName)}
                            />
                        )}
                    </div>

                <div className="flex-1 flex flex-col gap-3 max-w-[50ch]">
                    {subtitle && (
                        <p className={`text-xl opacity-90 ${getTextColorClass(activeColor)}`}>
                            {subtitle}
                        </p>
                    )}
                    {title && (
                        <h2 className="text-5xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                            {title}
                        </h2>
                    )}
                    {description && (
                        <p className="text-base leading-relaxed text-gray-600 dark:text-gray-500">
                            {description}
                        </p>
                    )}
                    {children}
                </div>
            </div>
        </section>
    );
}
