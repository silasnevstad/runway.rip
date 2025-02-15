import { mergeClasses } from "@/utils/classNames";
import React from "react";

export default function BackgroundBlur({
    className = "",
    color = "from-primary-600/40 dark:from-primary-500/30",
    px = 400,
    top = 0,
}) {
    return (
        <div
            className={mergeClasses(
                `absolute top-${top} left-0 w-full h-full
                flex flex-col items-center overflow-clip z-0`,
                className
            )}
        >
            <div className={`flex w-full h-[${px}px] bg-gradient-to-t ${color} to-transparent z-0`}></div>
            <div className={`flex w-full h-[${px}px] bg-gradient-to-b ${color} to-transparent z-0`}></div>
        </div>
    );
}