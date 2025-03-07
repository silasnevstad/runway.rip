"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Card from "@/components/atoms/Card";
import { BORDER_RADIUS, mergeClasses } from "@/utils/styling";
import { MdAirplanemodeActive } from "react-icons/md";
import React from "react";

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
        <Card className={mergeClasses(containerStyles, className)} padding={0} {...props}>
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
        <Card className={mergeClasses(containerStyles, className)} padding={0} {...props}>
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
    const borderRadiusClass = BORDER_RADIUS[borderRadius] || BORDER_RADIUS["2xl"];

    const outerContainerStyles = mergeClasses(
        `relative shadow-md`,
        borderRadiusClass,
        `bg-gray-200/50 dark:bg-gray-800/20`,
        `border-[0.1px] border-gray-200/50 dark:border-gray-800/15`,
        `dark:inset-shadow-sm overflow-hidden shadow-sm`,
    );

    const innerContainerStyles = `
        flex flex-col items-start
        bg-bg-50 dark:bg-bg-900 rounded-2xl p-5
    `;

    return (
        <Card className={mergeClasses(outerContainerStyles, outerClassName)} padding={6} border={false} {...props}>
            <div className={mergeClasses(innerContainerStyles, innerClassName)}>
                {children}
            </div>
        </Card>
    );
}

export const DeparturesCard = ({
    title = "Departures",
    className = "",
}) => {
    // get 24 hour time
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();

    const getTimeMinutesLater = (minutesLater) => {
        const newMinutes = minutes + minutesLater;
        // return `${newMinutes < 60 ? hours : hours + 1}:${newMinutes < 60 ? newMinutes : newMinutes - 60} ${ampm}`;
        // also format the hours and minutes with a 0
        const newHours = newMinutes < 60 ? hours : hours + 1;
        const newMinutesFormatted = newMinutes < 60 ? newMinutes : newMinutes - 60;
        return `${newHours < 10 ? "0" + newHours : newHours}:${newMinutesFormatted < 10 ? "0" + newMinutesFormatted : newMinutesFormatted}`;
    }

    const outerContainerStyles = mergeClasses(
        "relative flex flex-col px-4 py-6 min-w-40 rounded-lg font-mono",
        "bg-bg-100 dark:bg-bg-900 border-2 border-bg-100 dark:border-bg-800 shadow-lg dark:shadow-2xl",
        className
    )

    return (
        <div className={outerContainerStyles}>
            <div className="absolute -top-10 left-5 w-2 h-10 bg-bg-100 dark:bg-bg-800" />
            <div className="absolute -top-10 right-5 w-2 h-10 bg-bg-100 dark:bg-bg-800" />
            <h3 className="flex items-center text-lg font-semibold text-yellow-500">
                <MdAirplanemodeActive className="w-6 h-6 mr-2 text-bg-900 bg-yellow-500 rounded-lg p-0.5" />
                {title}
            </h3>
            <div className="grid grid-cols-3 gap-x-5 gap-y-1.5 mt-4">
                <p className="text-xs font-semibold opacity-50 text-yellow-500">TIME</p>
                <p className="text-xs font-semibold opacity-50 text-yellow-500">DESTINATION</p>
                <p className="text-xs font-semibold opacity-50 text-yellow-500">STATUS</p>

                <div className="flex flex-row items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <p className="text-sm font-semibold">{getTimeMinutesLater(2)}</p>
                </div>
                <p className="text-sm font-semibold text-yellow-500">Auth</p>
                <p className="text-sm font-semibold">On Time</p>

                <div className="flex flex-row items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <p className="text-sm font-semibold">{getTimeMinutesLater(4)}</p>
                </div>
                <p className="text-sm font-semibold text-yellow-500">Payments</p>
                <p className="text-sm font-semibold">On Time</p>

                <div className="flex flex-row items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <p className="text-sm font-semibold">{getTimeMinutesLater(6)}</p>
                </div>
                <p className="text-sm font-semibold text-yellow-500">Landing Page</p>
                <p className="text-sm font-semibold">On Time</p>

                <div className="flex flex-row items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <p className="text-sm font-semibold">{getTimeMinutesLater(8)}</p>
                </div>
                <p className="text-sm font-semibold text-yellow-500">Emails</p>
                <p className="text-sm font-semibold">On Time</p>

                <div className="flex flex-row items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <p className="text-sm font-semibold">{getTimeMinutesLater(10)}</p>
                </div>
                <p className="text-sm font-semibold text-yellow-500">SEO</p>
                <p className="text-sm font-semibold">On Time</p>

                <div className="flex flex-row items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <p className="text-sm font-semibold">{getTimeMinutesLater(11)}</p>
                </div>
                <p className="text-sm font-semibold text-yellow-500">Analytics</p>
                <p className="text-sm font-semibold">On Time</p>

                <div className="flex flex-row items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <p className="text-sm font-semibold">{getTimeMinutesLater(12)}</p>
                </div>
                <p className="text-sm font-semibold text-yellow-500">Components</p>
                <p className="text-sm font-semibold">On Time</p>
            </div>
        </div>
    );
}