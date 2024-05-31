"use client"

import React, { useState } from 'react';
import { ChevronDownIcon, CheckIcon } from "@heroicons/react/24/solid";

const DropdownItem = ({
    Icon,
    avatar,
    text,
    secondaryText,
    subText,
    isSelected,
    onClick,
    selectedIcon,
}) => (
    <div
        className="flex items-center justify-between gap-2 bg-bg-200 hover:bg-bg-300 dark:bg-bg-900 dark:hover:bg-bg-700 pl-3 pr-1 py-2 cursor-pointer rounded-md"
        onClick={onClick}
    >
        {Icon && <Icon className="h-5 w-5 flex-shrink-0 text-gray-500" />}
        {avatar && <img src={avatar.src} alt={avatar.alt} className="h-6 w-6 rounded-full flex-shrink-0" />}
        <span className="flex-grow flex flex-col">
            <span className={`truncate ${isSelected ? 'font-semibold' : 'font-normal'}`}>{text}</span>
            {secondaryText && <span className="text-gray-500 text-xs truncate">{secondaryText}</span>}
            {subText && <span className="text-gray-400 text-xs truncate">{subText}</span>}
        </span>
        {isSelected && selectedIcon && (
            <CheckIcon className="h-5 w-5 text-gray-500 flex-shrink-0" />
        )}
    </div>
);

const Dropdown = ({
    label,
    items,
    selectedItemId,
    border,
    selectedIcon,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const selectedItem = items.find(item => item.id === selectedItemId);

    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <div className={`relative select-none ${border ? 'border border-gray-300' : ''}`}>
            {label && <label className="ml-1 text-sm font-medium">{label}</label>}
            <div
                className={`relative mt-1 w-full bg-bg-200 dark:bg-bg-900 ${isOpen ? 'rounded-t-md' : 'rounded-md'} px-3 py-2 cursor-pointer flex items-center justify-between gap-4`}
                onClick={toggleDropdown}
            >
                <span className="flex items-center gap-2 truncate">
                    {selectedItem?.icon && <selectedItem.icon className="h-5 w-5 text-gray-500" />}
                    {selectedItem?.avatar && <img src={selectedItem.avatar.src} alt={selectedItem.avatar.alt} className="h-6 w-6 rounded-full" />}
                    <span className="block truncate">{selectedItem ? selectedItem.text : 'Select an option'}</span>
                </span>
                <ChevronDownIcon
                    className={`h-5 w-5 transition-transform duration-300 opacity-50 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                />
            </div>
            {isOpen && (
                <div className={`absolute w-full rounded-b-md bg-bg-200 dark:bg-bg-900 shadow-lg z-10 ${border && 'border border-gray-300'}`}>
                    {items.map((item) => (
                        <DropdownItem
                            key={item.id}
                            Icon={item.icon}
                            avatar={item.avatar}
                            text={item.text}
                            secondaryText={item.secondaryText}
                            subText={item.subText}
                            isSelected={item.id === selectedItemId}
                            onClick={() => {
                                item.onClick();
                                setIsOpen(false);
                            }}
                            selectedIcon={selectedIcon}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;