"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";

import TextLink from "@/components/atoms/TextLink";
import Button from "@/components/atoms/Button";
import AccountCard from "@/components/auth/AccountCard";
import { mergeClasses } from "@/utils/styling";
import appConfig, {landingConfig} from "@/config";

export default function Header({
    showLogo = landingConfig.header.showLogo,
    showAppName = landingConfig.header.showAppName,
    navLinks = landingConfig.header.navLinks,  // { title, href, onClick, className }
    ctaButton = landingConfig.header.ctaButton,  // { label, href, className, props }
    background = landingConfig.header.background,
    sticky = landingConfig.header.sticky,
    bottomBorder = false,
    account = true,
    accountCardProps = {},
    className = "",
    ...props
}) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { appName, domain } = appConfig;

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    // Condition to decide whether to show collapsible mobile menu
    const showCollapsibleMenu = navLinks.length > 2;

    const headerClasses = mergeClasses(
        `flex justify-center p-4 w-full min-h-14 top-0 z-20`,
        background,
        bottomBorder && "border-b border-bg-200 dark:border-bg-700",
        sticky && "sticky",
        className
    );

    return (
        <header className={headerClasses} {...props}>
            <div className="flex justify-between items-center w-full max-w-7xl px-4">
                {/* Brand Section */}
                <div className="flex items-center">
                    {showLogo && (
                        <>
                            <Image src="/logo.png" alt={appName} className="mr-2 block dark:hidden" width={30} height={30} />
                            <Image src="/logo-white.png" alt={appName} className="mr-2 hidden dark:block" width={30} height={30} />
                        </>
                    )}
                    {showAppName && (
                        <Link href={domain} className="text-2xl font-semibold">
                            {appName}
                        </Link>
                    )}
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center md:space-x-10">
                    {navLinks.map((navItem, idx) => (
                        <TextLink
                            key={idx}
                            href={navItem.href}
                            onClick={navItem.onClick}
                            className={navItem.className}
                            {...navItem.props}
                        >
                            {navItem.title}
                        </TextLink>
                    ))}
                    {ctaButton && (
                        <Button
                            href={ctaButton.href}
                            className={ctaButton.className}
                            {...ctaButton.props}
                        >
                            {ctaButton.label}
                        </Button>
                    )}
                    {account && (
                        <AccountCard {...accountCardProps} />
                    )}
                </div>

                {/* Mobile Menu Toggle (only if more than two links) */}
                {showCollapsibleMenu && (
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleDropdown}
                            className="focus:outline-none hover:bg-gray-200 dark:hover:bg-gray-900 p-2 rounded-md"
                        >
                            {isDropdownOpen ? (
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                )}
            </div>

            {/* Mobile Nav Dropdown (only if more than two links) */}
            {showCollapsibleMenu && isDropdownOpen && (
                <div className={
                    `absolute top-16 left-0 w-full 
                    ${background} bg-opacity-100 shadow-md z-10 
                    overflow-hidden 
                    transition-[max-height,opacity,transform] duration-300 ease-in-out 
                    ${isDropdownOpen ? "max-h-screen opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"}
                    `
                }>
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
