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
        <div className={`bg-bg-200 dark:bg-gray-800 flex ${flexDirection} justify-between items-center gap-6 rounded-2xl py-4 px-5 ease-in-out transition-all ${className} ${hover ? 'hover:shadow-md hover:-translate-y-0.5' : ''}`}>
            {imageSrc && (
                <Image
                    src={imageSrc}
                    alt={imageAlt || 'Card Image'}
                    className={(imageLeft || imageRight) ? '' : 'w-full'}
                    width={(imageLeft || imageRight) ? 125 : undefined}
                    height={(imageLeft || imageRight) ? 125 : undefined}
                />
            )}
            <div className="flex flex-col">
                {children}
            </div>
        </div>
    );
};

export default Card;