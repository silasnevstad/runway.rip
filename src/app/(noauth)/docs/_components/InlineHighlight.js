"use client";
import React from 'react';

const InlineHighlight = ({ children, type = 'default' }) => {
    // Shared baseline classes (font, spacing, border-radius)
    const baseClasses = "rounded px-1 py-0.5 font-mono transition-colors";

    // Type-specific classes for light/dark modes
    const styles = {
        default: `
      bg-gray-200 text-gray-900 
      dark:bg-gray-700 dark:text-gray-100
    `,
        button: `
      bg-primary-500/20 text-primary-800 
      dark:bg-primary-500/40 dark:text-primary-100 
      font-semibold
    `,
        navigation: `
      bg-green-500/20 text-green-800 
      dark:bg-green-800/70 dark:text-green-100 
      italic
    `,
        code: `
      bg-gray-300 text-gray-900 
      dark:bg-gray-800 dark:text-gray-100
    `,
        warning: `
      bg-yellow-500/20 text-yellow-800 
      dark:bg-yellow-800/70 dark:text-yellow-100
    `,
        error: `
      bg-red-500/20 text-red-800 
      dark:bg-red-800/70 dark:text-red-100
    `,
        success: `
      bg-green-500/20 text-green-800 
      dark:bg-green-800/70 dark:text-green-100
    `,
        info: `
      bg-blue-500/20 text-blue-800 
      dark:bg-blue-800/70 dark:text-blue-100
    `,
    };

    // Combine base with the appropriate style
    const finalClasses = `${baseClasses} ${styles[type] || styles.default}`;

    return <code className={finalClasses}>{children}</code>;
};

export default InlineHighlight;
