"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";
import TextLink from "@/components/atoms/TextLink";
import { useUser } from "@/contexts/UserContext";
import Avatar from "@/components/atoms/Avatar";

export default function Header({
    brand = {
        logoSrc: "",
        logoAlt: "Logo",
        appName: "AppName",
        appHref: "/",
    },
    navLinks = [],
    ctaButton, // optional CTA object
    background = "bg-bg-100 dark:bg-bg-800 border-b border-b-bg-300 dark:border-b-bg-700",
    sticky = false,
    account = false ,  // optional whether to show account dropdown
}) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    // since this header can be used for unauthenticated users, we need to only use useUser ({user, setUser}) if account is true
    const [username, setUsername] = useState("");

    useEffect(() => {
        if (account) {
            const { user } = useUser();
            setUsername(user?.username);
        }
    }, [account]);


    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    return (
        <header
            className={`flex justify-center p-4 w-full h-14 ${background} ${
                isDropdownOpen && "bg-opacity-100"
            } ${sticky && "sticky"} top-0 z-20`}
        >
            <div className="flex justify-between items-center w-full max-w-7xl px-5 sm:px-8 lg:px-8">
                {/* Brand Section */}
                <div className="flex items-center">
                    {brand.logoSrc && (
                        <img src={brand.logoSrc} alt={brand.logoAlt} className="h-6 mr-2" />
                    )}
                    <Link href={brand.appHref} className="text-2xl font-semibold">
                        {brand.appName}
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center md:space-x-16">
                    {navLinks.map((navItem, idx) => (
                        <TextLink
                            key={idx}
                            href={navItem.href}
                            onClick={navItem.onClick}
                            className={navItem.className}
                        >
                            {navItem.label}
                        </TextLink>
                    ))}
                    {ctaButton && (
                        <Link
                            href={ctaButton.href}
                            className={
                                ctaButton.className ||
                                "px-4 py-2 rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors"
                            }
                        >
                            {ctaButton.label}
                        </Link>
                    )}
                    {account && (
                        <div className="relative">
                            <button onClick={toggleDropdown} className="flex items-center space-x-2">
                                <Avatar src="/avatar1.png" alt="User Avatar" size="sm" />
                                <span className="text-sm font-semibold">{username}</span>
                            </button>
                        </div>
                    )}
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex items-center">
                    <button onClick={toggleDropdown} className="focus:outline-none hover:bg-gray-200 dark:hover:bg-gray-900 p-2 rounded-md">
                        {isDropdownOpen ? (
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        ) : (
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Nav Dropdown */}
            {isDropdownOpen && (
                <div
                    className={`absolute top-16 left-0 w-full ${background} bg-opacity-100 shadow-md z-10 transition-all ${
                        isDropdownOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                    } overflow-hidden duration-300 ease-in-out`}
                >
                    <div className="flex flex-col items-center space-y-4 p-4 text-lg">
                        {navLinks.map((navItem, idx) => (
                            <TextLink
                                key={idx}
                                href={navItem.href}
                                onClick={() => {
                                    navItem.onClick?.();
                                    toggleDropdown();
                                }}
                            >
                                {navItem.label}
                            </TextLink>
                        ))}
                        {ctaButton && (
                            <Link
                                href={ctaButton.href}
                                onClick={toggleDropdown}
                                className={
                                    ctaButton.className ||
                                    "px-4 py-2 rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors"
                                }
                            >
                                {ctaButton.label}
                            </Link>
                        )}
                    </div>
                </div>
            )}
        </header>
    );
}
