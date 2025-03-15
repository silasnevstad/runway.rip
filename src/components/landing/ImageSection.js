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
    paragraphs,
    activeColor = 'primary',
    position = 'right',
    children,
    className,
    imageClassName,
    ...props
}) {
    return (
        <section
            className={mergeClasses('w-full sm:w-5/6 lg:w-5/6 max-w-7xl px-6 sm:px-4 py-10', className)}
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
                    <div className="text-[17px] leading-relaxed text-gray-600 dark:text-gray-500">
                        <p className="mb-4">
                            Hi there, I'm Silas.
                        </p>
                        <p className="mb-4">
                            As a developer and solo entrepreneur, I grew tired of redoing the same tedious setup for every new project. Setting up auth, creating components, designing pricing sections...
                            I wanted to spend <strong>more time building and less time configuring</strong>.
                        </p>
                        <p className="mb-4">
                            That’s why I created <strong className="text-primary-500">Runway</strong>.
                        </p>
                        <p className="mb-4">
                            It wraps up everything you need—<strong>authentication, payments, database management, email
                            systems, SEO, analytics, and more</strong>—into one boilerplate<strong></strong>. Taking care of
                            all the setup and configuration so you can focus on building your product.
                        </p>
                        <p className="mb-4">
                            It's designed to be <strong>plug-and-play</strong> so that you can get started in minutes, but still tailor every detail to fit your project.
                        </p>
                        <p className="mb-4">
                            My hope is that it helps you skip the setup headaches and focus on what really matters: <strong>creating something great</strong>.
                        </p>
                    </div>
                    {paragraphs && (
                        <div className="text-base leading-relaxed text-gray-600 dark:text-gray-500">
                            {paragraphs.map((para, index) => (
                                <p key={index} className="mb-4">
                                    {para}
                                </p>
                            ))}
                        </div>
                    )}
                    {children}
                </div>
            </div>
        </section>
    );
}
