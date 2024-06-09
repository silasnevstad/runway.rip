'use client';

import React from 'react';
import Image from "next/image";

const Card = ({
    className,
    imageSrc,
    imageAlt,
    imageLeft = false,
    imageRight = false,
    children,
    hover,
}) => {
    const flexDirection = imageLeft ? 'flex-row' : (imageRight ? 'flex-row-reverse' : 'flex-col');

    return (
        <div className={`bg-bg-200 dark:bg-gray-800 flex ${flexDirection} justify-between items-center rounded-2xl py-4 px-5 ease-in-out transition-all ${className} ${hover ? 'hover:shadow-md hover:-translate-y-0.5' : ''}`}>
            {imageSrc && (
                <Image
                    src={imageSrc}
                    alt={imageAlt || 'Card Image'}
                    className={`${imageLeft || imageRight ? 'w-30 h-30 max-sm:w-26 max-sm:h-26' : 'w-full'}`}
                    width={imageLeft || imageRight ? 120 : '100%'}
                    height={imageLeft || imageRight ? 120 : 'auto'}
                />
            )}
            <div className="flex flex-col w-full overflow-hidden">
                <div className="break-words">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Card;