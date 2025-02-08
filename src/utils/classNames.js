import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export const mergeClasses = (...classes) => {
    return twMerge(clsx(...classes));
};

export const makeClassNameImportant = (className = "") => {
    return className
        .split(" ")
        .filter((cls) => !!cls)
        .map((cls) => `!${cls}`)
        .join(" ");
};
