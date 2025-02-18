'use client';

import React, { useState, useEffect } from 'react';
import { Bars3Icon } from "@heroicons/react/24/solid";
import { PiXBold } from "react-icons/pi";

const Sidebar = ({
    children,
    width = '64',
    bgColor = 'bg-bg-0 dark:bg-bg-900',
    onToggle,
}) => {
    const [isOpen, setIsOpen] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            // If we're no longer on mobile, ensure the sidebar is open
            if (!mobile) {
                setIsOpen(true);
            } else {
                setIsOpen(false);
            }
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

    // On desktop, position it relatively (so it doesn't overlay content).
    // On mobile, we use fixed + translate-x for a slide-in/slide-out effect.
    const sidebarClasses = `
    ${isMobile ? 'fixed left-0 top-0 h-full z-50 transition-transform' : 'relative min-h-screen shrink-0'}
    ${bgColor}
    w-${width} h-full
    ${isMobile ? (isOpen ? 'translate-x-0' : '-translate-x-full') : ''}
  `;

    const buttonBaseClasses = `
    p-1 rounded-lg bg-gray-200 dark:bg-gray-800 
    hover:text-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 
    w-8 h-8 border border-gray-400 dark:border-gray-700 
    flex items-center justify-center transition-colors duration-200
  `;

    // Show the "open" button only on mobile when sidebar is closed
    const openButtonClasses = `
    ${buttonBaseClasses}
    fixed top-2 right-2 z-50
  `;

    return (
        <>
            {/* Mobile "open sidebar" button (only appears when sidebar is closed) */}
            {isMobile && !isOpen && (
                <button className={openButtonClasses} onClick={toggleSidebar}>
                    <Bars3Icon className="text-gray-700 dark:text-gray-200 w-7 h-7" />
                </button>
            )}

            <div className={sidebarClasses}>
                {/* Mobile close button inside sidebar */}
                {isMobile && isOpen && (
                    <button
                        className="absolute top-5 right-5"
                        onClick={toggleSidebar}
                    >
                        <PiXBold className="text-gray-500 w-5 h-5" />
                    </button>
                )}
                <div className="p-4 h-full overflow-y-auto">
                    {children}
                </div>
            </div>
        </>
    );
};

export default Sidebar;
