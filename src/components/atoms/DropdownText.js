"use client";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";
import { mergeClasses } from "@/utils/styling";

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

    const outerContainerClasses = mergeClasses(
        `w-full py-4 transition-colors duration-100`,
        border &&
            (borderStyle ? `border-${borderStyle} border-gray-200` : "border border-gray-200"),
        className
    );

    return (
        <div className={outerContainerClasses} {...props}>
            <div
                className="group relative flex justify-between items-center w-full hover:cursor-pointer"
                onClick={onToggle}
            >
                <h2 className={
                    `text-lg font-semibold transition-colors duration-300 
                    ${isOpen && `text-${activeColor}-500`}
                    group-hover:text-${activeColor}-500`
                }>
                    {title}
                </h2>
                <div className="transition ease-in-out duration-300 transform">
                    {isOpen ? (
                        <MinusIcon className={`h-5 w-5 rotate-180 text-${activeColor}-500`} />
                    ) : (
                        <PlusIcon className={`h-5 w-5 rotate-0 group-hover:text-${activeColor}-500`} />
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
                <div className="mt-2 transition-opacity duration-100 delay-200">
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
