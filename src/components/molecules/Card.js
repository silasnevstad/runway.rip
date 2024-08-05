'use client';

import React from 'react';
import Image from "next/image";
import { makeClassNameImportant } from "@/utils/utils";
import { motion } from "framer-motion";

const hoverEffects = {
    shadow: 'hover:shadow-md hover:-translate-y-0.5',
    scale: 'hover:scale-105',
    outline: 'hover:outline outline-1 hover:backdrop-blur-none hover:bg-bg-0'
}

const Card = ({
    className,
    imageSrc,
    imageAlt,
    icon, // Accept icon element
    imagePosition = 'top', // 'top', 'left', 'right'
    textAlign = 'bottom', // 'bottom', 'center'
    children,
    hoverEffect = 'shadow', // 'shadow', 'scale', 'outline'
    animationDelay = 0 // Delay for animation
}) => {
    const flexDirection = imagePosition === 'left' ? 'flex-row' : (imagePosition === 'right' ? 'flex-row-reverse' : 'flex-col');
    const alignItems = textAlign === 'bottom' ? 'items-end' : 'items-center';
    const hoverClass = hoverEffects[hoverEffect] || '';

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: animationDelay }}
            className={`bg-bg-50 backdrop-blur-2xl dark:bg-bg-700 flex ${flexDirection} ${alignItems} rounded-2xl py-4 px-5 ease-in-out transition-all border border-bg-300 ${makeClassNameImportant(className)} ${hoverClass}`}
        >
            {(imageSrc || icon) && (
                <div className={`flex ${imagePosition === 'top' ? 'mb-4' : 'mr-4'}`}>
                    {imageSrc && (
                        <Image
                            src={imageSrc}
                            alt={imageAlt || 'Card Image'}
                            className={`${imagePosition === 'top' ? 'w-full' : 'w-30 h-30 max-sm:w-26 max-sm:h-26'}`}
                            width={imagePosition === 'top' ? 120 : 120}
                            height={imagePosition === 'top' ? 120 : 120}
                        />
                    )}
                    {icon && (
                        <div className={`${imagePosition === 'top' ? 'w-full' : 'w-30 h-30 max-sm:w-26 max-sm:h-26'}`}>
                            {icon}
                        </div>
                    )}
                </div>
            )}
            <div className={`flex flex-col w-full overflow-hidden ${textAlign === 'bottom' ? 'justify-end' : 'justify-center'}`}>
                <div className="break-words p-3">
                    {children}
                </div>
            </div>
        </motion.div>
    );
};

export default Card;
