"use client";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";
import { mergeClasses } from "@/utils/styling";

const getBorderPositionClass = (style) => {
    const borderClasses = {
        t: "border-t",
        b: "border-b",
        l: "border-l",
        r: "border-r",
        x: "border-x",
        y: "border-y",
        all: "border",
    };
    return borderClasses[style] || "";
};

function getActiveTextColorClass(color, isOpen) {
    const colorClasses = {
        gray: "text-gray-500",
        bg: "text-bg-500",
        primary: "text-primary-500",
        red: "text-red-500",
        green: "text-green-500",
        blue: "text-blue-500",
        yellow: "text-yellow-500",
        orange: "text-orange-500",
        purple: "text-purple-500",
        pink: "text-pink-500",
    };
    return isOpen ? colorClasses[color] : `group-hover:${colorClasses[color]}`;
}

const DropdownText = ({
    title,
    content,
    isOpen: isOpenProp,
    onToggle: onToggleProp,
    activeColor = "primary",
    border = true,
    borderStyle = "b",
    className = "",
    ...props
}) => {
    const [isOpenState, setIsOpenState] = useState(false);
    const isControlled = isOpenProp !== undefined;
    const isOpen = isControlled ? isOpenProp : isOpenState;

    const onToggle = () => {
        if (isControlled) {
            onToggleProp();
        } else {
            setIsOpenState(!isOpenState);
        }
    };

    const borderClass = getBorderPositionClass(borderStyle);
    const activeTextColorClass = getActiveTextColorClass(activeColor, isOpen);

    const outerContainerClasses = mergeClasses(
        `w-full py-4 transition-colors duration-100`,
        border && `${borderClass} border-gray-200`,
        className
    );

    return (
        <div className={outerContainerClasses} {...props}>
            <div
                className="group relative flex justify-between items-center w-full hover:cursor-pointer"
                onClick={onToggle}
            >
                <h2 className={`text-lg font-semibold transition-colors duration-300 ${activeTextColorClass}`}>
                    {title}
                </h2>
                <div className="transition ease-in-out duration-300 transform">
                    {isOpen ? (
                        <MinusIcon className={`h-5 w-5 rotate-180 ${activeTextColorClass}`} />
                    ) : (
                        <PlusIcon className={`h-5 w-5 rotate-0 ${activeTextColorClass}`} />
                    )}
                </div>
            </div>
            <Transition
                show={isOpen}
                enter="transition-all duration-300 ease-in-out"
                enterFrom="max-h-0 opacity-0"
                enterTo="max-h-[1000px] opacity-100"
                leave="transition-all duration-200 ease-out"
                leaveFrom="max-h-[1000px] opacity-100"
                leaveTo="max-h-0 opacity-0"
            >
                <div className="mt-2 transition-opacity duration-100 delay-200 w-full">
                    {typeof content === "string" ? (
                        <p className="text-lg">{content}</p>
                    ) : (
                        content
                    )}
                </div>
            </Transition>
        </div>
    );
};

export default DropdownText;
