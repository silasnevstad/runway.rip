"use client";

import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Sidebar = ({
    children,
    width = "64",
    bgColor = "bg-bg-0 dark:bg-bg-900",
    onToggle,
}) => {
    const [isOpen, setIsOpen] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            if (!mobile) {
                setIsOpen(true);
            } else {
                setIsOpen(false);
            }
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const toggleSidebar = () => {
        if (isMobile) {
            const newIsOpen = !isOpen;
            setIsOpen(newIsOpen);
            if (onToggle) onToggle(newIsOpen);
        }
    };

    let pinnedChild = children;
    let scrollableChild = null;
    let bottomChild = null;

    if (Array.isArray(children)) {
        pinnedChild = children[0];
        scrollableChild = children[1] || null;
        bottomChild = children[2] || null;
    }

    const sidebarClasses = `
    ${isMobile ? "fixed left-0 top-0 h-full z-50 transition-transform" : "relative h-full shrink-0"}
    ${bgColor}
    w-${width}
    overflow-x-hidden
    ${isMobile ? (isOpen ? "translate-x-0" : "-translate-x-full") : ""}
    flex flex-col
    `;

    const buttonBaseClasses = `
    p-1 rounded-lg bg-gray-200 dark:bg-gray-800 
    hover:text-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 
    w-8 h-8 border border-gray-400 dark:border-gray-700 
    flex items-center justify-center transition-colors duration-200
    `;

    // Mobile "open" button (only if the sidebar is closed)
    const openButtonClasses = `
    ${buttonBaseClasses}
    fixed top-2 right-2 z-50
    `;

    return (
        <>
            {/* Mobile "open sidebar" button */}
            {isMobile && !isOpen && (
                <button className={openButtonClasses} onClick={toggleSidebar}>
                    <Bars3Icon className="text-gray-700 dark:text-gray-200 w-7 h-7" />
                </button>
            )}

            <div className={sidebarClasses}>
                {/* Mobile "close sidebar" button */}
                {isMobile && isOpen && (
                    <button
                        className="absolute top-5 right-5"
                        onClick={toggleSidebar}
                    >
                        <XMarkIcon className="text-gray-500 w-5 h-5" />
                    </button>
                )}

                {/* Pinned top portion (logo, search, etc.) */}
                <div className="flex-none p-4">
                    {pinnedChild}
                </div>

                {/* Scrollable docs nav portion */}
                {scrollableChild && (
                    <div className="flex-1 overflow-y-auto px-4">
                        {scrollableChild}
                    </div>
                )}

                {/* Bottom portion (footer, etc.) */}
                {bottomChild && (
                    <div className="flex-none">
                        {bottomChild}
                    </div>
                )}
            </div>
        </>
    );
};

export default Sidebar;
