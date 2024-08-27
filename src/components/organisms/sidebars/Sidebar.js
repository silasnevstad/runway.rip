'use client';

import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Sidebar = ({
    children,
    isOpen: initialIsOpen = false,
    alwaysOpen = false,
    position = 'left',
    width = 'w-64',
    collapsedWidth = 'w-16',
    bgColor = 'bg-white',
    onToggle,
}) => {
    const [isOpen, setIsOpen] = useState(alwaysOpen || initialIsOpen);

    useEffect(() => {
        if (alwaysOpen) setIsOpen(true);
    }, [alwaysOpen]);

    const toggleSidebar = () => {
        if (!alwaysOpen) {
            const newIsOpen = !isOpen;
            setIsOpen(newIsOpen);
            if (onToggle) onToggle(newIsOpen);
        }
    };

    const sidebarClasses = `
    fixed top-0 ${position}-0 h-full ${isOpen ? width : collapsedWidth} ${bgColor}
    transition-all duration-300 ease-in-out z-50
  `;

    const toggleButtonClasses = `
    absolute top-4 ${isOpen ? (position === 'left' ? 'right-4' : 'left-4') : `${position}-4`}
    p-2 rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300
    transition-colors duration-200
  `;

    const openButtonClasses = `
    fixed top-4 ${position}-4 p-2 rounded-full bg-gray-200 hover:bg-gray-300
    transition-colors duration-200 z-50
  `;

    return (
        <>
            {!isOpen && !alwaysOpen && (
                <button className={openButtonClasses} onClick={toggleSidebar}>
                    <FaBars />
                </button>
            )}
            <div className={sidebarClasses}>
                {!alwaysOpen && (
                    <button className={toggleButtonClasses} onClick={toggleSidebar}>
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                )}
                <div className={`p-4 h-full overflow-y-auto ${isOpen ? 'block' : 'hidden'}`}>
                    {children}
                </div>
            </div>
        </>
    );
};

export default Sidebar;