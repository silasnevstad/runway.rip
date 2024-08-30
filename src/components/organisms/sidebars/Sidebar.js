'use client';

import React, { useState, useEffect } from 'react';
import { Bars3Icon } from "@heroicons/react/24/solid";
import { PiXBold } from "react-icons/pi";

const Sidebar = ({
    children,
    position = 'left',
    width = 'w-64',
    bgColor = 'bg-white',
    onToggle,
}) => {
    const [isOpen, setIsOpen] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const toggleSidebar = () => {
        if (isMobile) {
            const newIsOpen = !isOpen;
            setIsOpen(newIsOpen);
            if (onToggle) onToggle(newIsOpen);
        }
    };

    const sidebarClasses = `
        fixed top-0 ${position}-0 h-full ${width} ${bgColor}
        transition-all duration-300 ease-in-out z-50
        ${isMobile ? (isOpen ? 'translate-x-0' : '-translate-x-full') : ''}
        ${!isMobile && !isOpen ? 'hidden' : ''}
        ${isMobile ? 'w-full' : ''}
    `;

    const buttonClasses = `
        p-1 rounded-lg dark:bg-gray-800 hover:bg-gray-300 h-10 w-10 border border-gray-300
        flex items-center justify-center transition-colors duration-200 z-50
    `;

    const openButtonClasses = `fixed top-4 ${position}-4 ${buttonClasses}`;

    return (
        <>
            {(!isOpen && isMobile) && (
                <button className={`${openButtonClasses} ${isMobile ? 'sticky' : ''}`} onClick={toggleSidebar}>
                    <Bars3Icon className="text-gray-200 w-8 h-8" />
                </button>
            )}
            <div className={sidebarClasses}>
                {(isMobile) && (
                    <button className="absolute top-5 right-5" onClick={toggleSidebar}>
                        <PiXBold className="text-gray-500 w-5 h-5" />
                    </button>
                )}
                <div className={`p-4 h-full overflow-y-auto ${isMobile ? 'w-full' : ''}`}>
                    {children}
                </div>
            </div>
        </>
    );
};

export default Sidebar;