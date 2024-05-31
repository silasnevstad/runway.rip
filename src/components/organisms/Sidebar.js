'use client'

import React, { useState} from 'react';
import { useUser } from "@/contexts/UserContext";
import { BiHomeAlt, BiUserCircle, BiCog } from "react-icons/bi";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Card from "@/components/molecules/Card";
import UserMenuCard from "@/components/molecules/UserMenuCard";

const SidebarItem = ({ href, icon: Icon, name, isOpen }) => {
    const currentPath = usePathname();
    const isActive = currentPath === href;

    return (
        <Link
            className={`flex py-1.5 rounded-xl justify-start items-end ${!isActive && 'opacity-70 hover:bg-bg-100 dark:hover:bg-bg-700'}  hover:opacity-100 transition-all duration-200 ${isActive ? 'bg-primary-100 dark:bg-primary-100' : ''}`}
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

    const mainPages = [
        { name: 'Dashboard', icon: BiHomeAlt, href: '/dashboard' },
        { name: 'Account', icon: BiUserCircle, href: '/account' },
    ];

    const utilityPages = [
        { name: 'Settings', icon: BiCog, href: '/settings' },
    ];

    return (
        <div
            className={`flex flex-col justify-between h-screen fixed bg-bg-50 dark:bg-bg-800 border-r border-bg-300 dark:border-bg-700 z-10
                ${isOpen ? 'w-64 shadow-2xl' : 'w-16'} transition-width duration-200 ease-in-out`}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            {/* Top Menu Items */}
            <div className="flex flex-col mt-6 gap-2 p-2.5">
                {mainPages.map((item) => (
                    <SidebarItem key={item.name} {...item} isOpen={isOpen}/>
                ))}
                <div className={`w-full h-px bg-bg-300 dark:bg-bg-700`}/>
                {utilityPages.map((item) => (
                    <SidebarItem key={item.name} {...item} isOpen={isOpen}/>
                ))}
            </div>

            {/* Bottom Menu Items */}
            <div className="flex flex-col mb-2 gap-2 p-2 relative">
                <div className="flex items-center gap-2 hover:bg-bg-100 dark:hover:bg-bg-700 rounded-xl p-2 cursor-pointer" onClick={() => setShowUserMenu(!showUserMenu)}>
                    <div className="rounded-full h-8 font-semibold w-8 bg-bg-200 dark:bg-bg-700 flex justify-center items-center">
                        S
                    </div>
                    {isOpen && <span className="font-medium">Silas Nevstad</span>}
                </div>
                {showUserMenu && (
                    <UserMenuCard />
                )}
            </div>
        </div>
);
};

export default Sidebar;
