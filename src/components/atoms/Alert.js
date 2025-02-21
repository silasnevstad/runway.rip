"use client";
import React from "react";
import { MdOutlineInfo, MdOutlineErrorOutline, MdOutlineCheckCircle, MdOutlineWarningAmber } from "react-icons/md";
import { mergeClasses } from "@/utils/classNames";
import { getHoverClasses } from "@/utils/classes";


export default function Alert({
    children,
    className = "",
    variant = "soft",
    severity = "info",  // info, success, warning, error
    border = false,
    lift = false,
    scale = false,
    activeClick = false,
    onClick,
    ...props
}) {
    const colorStyles = {
        info: {
            soft: "bg-blue-200 dark:bg-blue-600/25 text-blue-800 dark:text-blue-400",
            solid: "bg-blue-600 text-white",
        },
        success: {
            soft: "bg-green-200 dark:bg-green-600/25 text-green-800 dark:text-green-400",
            solid: "bg-green-600 text-white",
        },
        warning: {
            soft: "bg-yellow-100 dark:bg-yellow-600/25 text-yellow-800 dark:text-yellow-400",
            solid: "bg-yellow-600 text-white",
        },
        error: {
            soft: "bg-red-100 dark:bg-red-600/25 text-red-800 dark:text-red-400",
            solid: "bg-red-600 text-white",
        },
    };

    const borderStyles = {
        info: "border border-blue-600 dark:border-blue-600",
        success: "border border-green-600 dark:border-green-600",
        warning: "border border-yellow-600 dark:border-yellow-600",
        error: "border border-red-600 dark:border-red-600",
    };

    const iconStyles = {
        info: <MdOutlineInfo className={
            `w-6 h-6 inline-block mr-1 
            ${variant === "soft" ? "text-blue-700 dark:text-blue-500" : "text-white"}`
        }/>,
        success: <MdOutlineCheckCircle className={
            `w-6 h-6 inline-block mr-1 
            ${variant === "soft" ? "text-green-700 dark:text-green-500" : "text-white"}`
        }/>,
        warning: <MdOutlineWarningAmber className={
            `w-6 h-6 inline-block mr-1 
            ${variant === "soft" ? "text-yellow-700 dark:text-yellow-500" : "text-white"}`
        }/>,
        error: <MdOutlineErrorOutline className={
            `w-6 h-6 inline-block mr-1 
            ${variant === "soft" ? "text-red-700 dark:text-red-500" : "text-white"}`
        }/>,
    };

    const finalClasses = mergeClasses(
        "inline-flex items-center font-medium rounded-md gap-2 px-4 py-2.5",
        colorStyles[severity][variant],
        border && borderStyles[severity],
        getHoverClasses({ lift, scale, activeClick }),
        onClick && "cursor-pointer active:scale-95",
        className
    );

    return (
        <div className={finalClasses} onClick={onClick} {...props}>
            {iconStyles[severity]}
            {children}
        </div>
    );
}