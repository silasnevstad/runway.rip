"use client";

import { mergeClasses } from "@/utils/classNames";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export const TerminalCard = ({
    children,
    terminalText = "[~] →  $",
    className = "",
    ...props
}) => {
    const containerStyles = `
    relative w-full rounded-md shadow-md 
    bg-gray-900/75 dark:bg-gray-800/50 
    text-gray-100 dark:text-gray-100
    `;

    const headerStyles = `
    flex items-center p-2 gap-2 rounded-t-md
    bg-gray-200 dark:bg-gray-700 
    border-b border-gray-300 dark:border-gray-600
    `;

    const bodyStyles = `p-3 font-mono -mt-2`;

    return (
        <div className={mergeClasses(containerStyles, className)} {...props}>
            <div className={headerStyles}>
                <span className="inline-block w-3 h-3 bg-red-500 rounded-full" />
                <span className="inline-block w-3 h-3 bg-yellow-500 rounded-full" />
                <span className="inline-block w-3 h-3 bg-green-500 rounded-full" />
            </div>
            <div className={bodyStyles}>
                <span className="text-green-500">{terminalText}</span>
                {children}
            </div>
        </div>
    );
};

export const WebsiteCard = ({
    children,
    className = "",
    search = false,
    searchPlaceholder = "",
    ...props
}) => {
    const containerStyles = `
    relative w-full rounded-md shadow-md 
    bg-gray-100 dark:bg-gray-800 
    text-gray-900 dark:text-gray-100
    `;

    const headerStyles = `
    flex items-center p-2 gap-2 rounded-t-md w-full h-8 justify-between
    bg-gray-200 dark:bg-gray-700 
    border-b border-gray-300 dark:border-gray-700
    `;

    const bodyStyles = `p-3 font-mono`;

    return (
        <div className={mergeClasses(containerStyles, className)} {...props}>
            <div className={headerStyles}>
                <div className="flex items-center gap-1.5">
                    <span className="inline-block w-3 h-3 bg-red-500 rounded-full" />
                    <span className="inline-block w-3 h-3 bg-yellow-500 rounded-full" />
                    <span className="inline-block w-3 h-3 bg-green-500 rounded-full" />
                </div>

            {/*    search bar */}
                {search && (
                    <>
                        <div className="flex items-center w-1/3 h-[calc(140%)] min-w-32 bg-white dark:bg-gray-800 rounded-sm">
                            <MagnifyingGlassIcon className="w-3 h-3 text-gray-300 dark:text-gray-500 ml-1" />
                            <p className="ml-1 text-xs text-gray-500 dark:text-gray-600">{searchPlaceholder}</p>
                        </div>

                        <div className="flex w-9">
                        </div>
                    </>
                )}
            </div>
            <div className={bodyStyles}>{children}</div>
        </div>
    );
};