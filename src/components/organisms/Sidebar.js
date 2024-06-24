'use client'

import React, {useEffect, useRef, useState} from 'react';
import { useUser } from "@/contexts/UserContext";
import { BiHomeAlt, BiUserCircle, BiCog } from "react-icons/bi";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Card from "@/components/molecules/Card";
import UserMenuCard from "@/components/molecules/UserMenuCard";
import {LetterAvatar} from "@/components/atoms/Avatar";

const SidebarItem = ({ href, icon: Icon, name, isOpen }) => {
    const currentPath = usePathname();
    const isActive = currentPath === href;

    return (
        <Link
            className={`flex py-2 rounded-xl justify-start items-end ${!isActive && 'opacity-70 hover:bg-bg-200 dark:hover:bg-opacity-10'}  hover:opacity-100 transition-all duration-200 ${isActive ? 'bg-primary-100 dark:bg-primary-500 dark:bg-opacity-60' : ''}`}
            href={href}
        >
            <Icon className={`h-6 w-6 ml-2.5 will-change-transform transition-none ${isActive ? 'text-primary-500 dark:text-primary-100' : ''}`} />
            {isOpen && <span className={`font-medium ml-2 ${isActive ? 'text-primary-700 dark:text-primary-100' : ''}`}>{name}</span>}
        </Link>
    );
};

const Sidebar = () => {
    const { user } = useUser();
    const [isOpen, setIsOpen] = useState(false);
    const [showUserMenu, setShowUserMenu] = useState(false);
    const sidebarRef = useRef(null);
    const userMenuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                userMenuRef.current &&
                !userMenuRef.current.contains(event.target) &&
                !sidebarRef.current.contains(event.target)
            ) {
                setShowUserMenu(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const mainPages = [
        { name: 'Dashboard', icon: BiHomeAlt, href: '/dashboard' },
        { name: 'Account', icon: BiUserCircle, href: '/account' },
    ];

    const utilityPages = [
        { name: 'Settings', icon: BiCog, href: '/settings' },
    ];

    const closeSidebar = () => {
        setIsOpen(false);
        showUserMenu && setShowUserMenu(false);
    }

    return (
        <div
            ref={sidebarRef}
            className={`flex flex-col justify-between h-screen fixed bg-bg-100 dark:bg-bg-800 border-r border-bg-300 dark:border-bg-700 z-10
                ${isOpen ? 'w-64 shadow-xl' : 'w-16'} transition-width duration-200 ease-in-out`}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => closeSidebar()}
        >
            {/* Top Menu Items */}
            <div className="flex flex-col mt-6 gap-2 p-2.5">
                {mainPages.map((item) => (
                    <SidebarItem key={item.name} {...item} isOpen={isOpen} />
                ))}
                <div className={`w-full h-px bg-bg-300 dark:bg-bg-700`} />
                {utilityPages.map((item) => (
                    <SidebarItem key={item.name} {...item} isOpen={isOpen} />
                ))}
            </div>

            {/* Bottom Menu Items */}
            <div className="flex flex-col mb-2 gap-2 p-2 relative">
                {!showUserMenu && (
                    <div className="flex items-center gap-2 bg-opacity-70 hover:bg-bg-200 dark:hover:bg-opacity-10 hover:bg-opacity-100 rounded-xl p-2 cursor-pointer" onClick={() => setShowUserMenu(!showUserMenu)}>
                        <LetterAvatar letter={user?.name?.charAt(0).toUpperCase() || 'S'} className="w-8 h-8" />
                        {isOpen && <span className="font-medium">Silas Nevstad</span>}
                    </div>
                )}
                {showUserMenu && (
                    <div ref={userMenuRef} className="-mb-4">
                        <UserMenuCard closeMenu={() => setShowUserMenu(false)} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Sidebar;
