'use client';

import React from 'react';
import Image from 'next/image';
import { mergeClasses } from "@/utils/classNames";

export default function ImageSection({
    image,
    alt = 'Section image',
    title,
    subtitle,
    description,
    children,
    position = 'right',
    className,
    imageClassName,
    textContainerClassName,
    titleClassName,
    subtitleClassName,
    descriptionClassName,
    ...props
}) {
    return (
        <section
            className={mergeClasses('w-full sm:w-5/6 lg:w-5/6 max-w-7xl px-4 py-10', className)}
            {...props}
        >
            <div
                className={mergeClasses(
                    'flex flex-col gap-8 items-center justify-center w-full',
                    position === 'right' && 'md:flex-row-reverse',
                    position === 'left' && 'md:flex-row',
                    position === 'center' && 'md:flex-col'
                )}
            >
                    <div className="flex-1 flex items-center justify-center">
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

                <div className={mergeClasses('flex-1 flex flex-col gap-3 max-w-prose', textContainerClassName)}>
                    {subtitle && (
                        <p className={mergeClasses(
                            'text-xl text-primary-500 opacity-90',
                            subtitleClassName
                        )}>
                            {subtitle}
                        </p>
                    )}
                    {title && (
                        <h2 className={mergeClasses(
                            'text-5xl font-semibold text-gray-800 dark:text-gray-100 mb-2',
                            titleClassName
                        )}>
                            {title}
                        </h2>
                    )}
                    {description && (
                        <p className={mergeClasses(
                            'text-base leading-relaxed text-gray-600 dark:text-gray-500',
                            descriptionClassName
                        )}>
                            {description}
                        </p>
                    )}
                    {children}
                </div>
            </div>
        </section>
    );
}
