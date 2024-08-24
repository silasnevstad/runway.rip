'use client';

import React from 'react';
import { motion } from "framer-motion";
import { makeClassNameImportant } from "@/utils/utils";

const Card = ({
    className = '',
    children,
    hoverEffect = 'shadow',
    animationDelay = 0,
    animate = true,
    border = true,
    ...props
}) => {
    const hoverEffects = {
        none: '',
        shadow: 'hover:shadow-md hover:-translate-y-0.5',
        scale: 'hover:scale-105',
        outline: 'hover:border-black hover:bg-bg-0 dark:hover:bg-bg-800 dark:hover:border-gray-700'
    };

    return (
        <motion.div
            initial={{ opacity: animate ? 0 : 1, y: animate ? 20 : 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: animationDelay }}
            className={`
                relative
                ${makeClassNameImportant(className)}
                bg-bg-50 dark:bg-bg-900 rounded-2xl p-6
                ${border && 'border border-bg-300 dark:border-gray-800'}
                transition-all ease-in-out
                ${hoverEffects[hoverEffect]}
            `}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default Card;