"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Card from "@/components/atoms/Card";
import { mergeClasses } from "@/utils/classNames";

export const TerminalCard = ({
    children,
    terminalText = "$ ",
    className = "",
    ...props
}) => {
    const containerStyles = `
    relative rounded-md shadow-md 
    bg-gray-900/75 dark:bg-gray-800/30 
    text-gray-100 dark:text-gray-100 p-0
    `;

    const headerStyles = `
    flex items-center p-2 gap-2 rounded-t-md
    bg-gray-200 dark:bg-gray-700 
    border-b border-gray-300 dark:border-gray-600
    `;

    const bodyStyles = `p-3 font-mono -mt-2`;

    return (
        <Card className={mergeClasses(containerStyles, className)} {...props}>
            <div className={headerStyles}>
                <span className="inline-block w-3 h-3 bg-red-500 rounded-full" />
                <span className="inline-block w-3 h-3 bg-yellow-500 rounded-full" />
                <span className="inline-block w-3 h-3 bg-green-500 rounded-full" />
            </div>
            <div className={bodyStyles}>
                <span className="text-green-500">{terminalText}</span>
                {children}
            </div>
        </Card>
    );
};

export const WebsiteCard = ({
    children,
    className = "",
    showSearchBar = true,
    searchPlaceholder = "",
    ...props
}) => {
    const containerStyles = `
    relative rounded-md shadow-md 
    bg-gray-100 dark:bg-gray-800 
    text-gray-900 dark:text-gray-100 p-0
    `;

    const headerStyles = `
    flex items-center p-2 gap-2 rounded-t-md w-full h-8 justify-between
    bg-gray-200 dark:bg-gray-700 
    border-b border-gray-300 dark:border-gray-700
    `;

    return (
        <Card className={mergeClasses(containerStyles, className)} {...props}>
            <div className={headerStyles}>
                <div className="flex items-center gap-1.5">
                    <span className="inline-block w-3 h-3 bg-red-500 rounded-full" />
                    <span className="inline-block w-3 h-3 bg-yellow-500 rounded-full" />
                    <span className="inline-block w-3 h-3 bg-green-500 rounded-full" />
                </div>

                {showSearchBar && (
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
            <div className="p-3">{children}</div>
        </Card>
    );
};

export const StandoutCard = ({
    children,
    borderRadius = "2xl",
    outerClassName = "",
    innerClassName = "",
    ...props
}) => {
    const outerContainerStyles = mergeClasses(
        `relative shadow-md p-1.5`,
        borderRadius &&`rounded-${borderRadius}`,
        `bg-gray-200/50 dark:bg-gray-800/20`,
        `border-[0.1px] border-gray-200/50 dark:border-gray-800/15`,
        `dark:inset-shadow-sm overflow-hidden shadow-sm`,
    );

    const innerContainerStyles = `
        flex flex-col items-start
        bg-bg-50 dark:bg-bg-900 rounded-2xl p-5
    `;

    return (
        <Card className={mergeClasses(outerContainerStyles, outerClassName)} border={false} {...props}>
            <div className={mergeClasses(innerContainerStyles, innerClassName)}>
                {children}
            </div>
        </Card>
    );
}