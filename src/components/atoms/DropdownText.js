"use client";

import { useState } from 'react';
import { Transition } from '@headlessui/react';
import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";

const DropdownText = ({
    title,
    content,
    isOpen: isOpenProp,
    onToggle: onToggleProp,
    border = true
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

    return (
        <div className={
            `w-full py-4 hover:cursor-pointer group transition-colors duration-100
            ${border && 'border-b border-gray-200'}`
        }>
            <div className="flex justify-between items-center w-full" onClick={onToggle}>
                <h2 className={`text-lg font-semibold transition-colors duration-300 ${isOpen ? 'text-primary-500' : ''} group-hover:text-primary-500`}>{title}</h2>
                <div className="transition ease-in-out duration-300 transform">
                    {isOpen ? (
                        <MinusIcon className="h-5 w-5 rotate-180 text-primary-500"/>
                    ) : (
                        <PlusIcon className="h-5 w-5 rotate-0 group-hover:text-primary-500"/>
                    )}
                </div>
            </div>
            <Transition
                show={isOpen || false}
                enter="transition-all duration-300 ease-in-out"
                enterFrom="max-h-0 opacity-0"
                enterTo="max-h-[1000px] opacity-100"
                leave="transition-all duration-200 ease-out"
                leaveFrom="max-h-[1000px] opacity-100"
                leaveTo="max-h-0 opacity-0"
            >
                <p className="mt-2 text-lg transition-opacity duration-100 delay-200">{content}</p>
            </Transition>
        </div>
    );
};

export default DropdownText;