'use client';

import { useState } from 'react';
import config from "@/config";
import { TextLink } from "@/components/atoms/Buttons";
import Link from "next/link";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";

const LandingHeader = ({
    background = "bg-bg-100",
}) => {
    const { appName } = config;
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <header className={`flex justify-center p-4 w-full ${background} ${isDropdownOpen && 'bg-opacity-100'} max-sm:sticky top-0 z-20`}>
            <div className="flex justify-between items-center max-w-5xl w-full">
                <div className="flex items-center">
                    <Link href="" className="text-2xl font-semibold">{appName}</Link>
                </div>
                <div className="hidden md:flex items-center space-x-10">
                    <TextLink href="#how-it-works">How it Works</TextLink>
                    <TextLink href="#pricing">Pricing</TextLink>
                    <TextLink href="#faq">FAQ</TextLink>
                </div>
                <div className="hidden md:flex items-center space-x-4">
                    <TextLink href="/sign-up" className="text-1xl font-semibold">Sign Up</TextLink>
                </div>
                <div className="md:hidden flex items-center">
                    <button onClick={toggleDropdown} className="focus:outline-none">
                        {isDropdownOpen ? (
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        ) : (
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        )}
                    </button>
                </div>
            </div>
            {isDropdownOpen && (
                <div
                    className={`absolute top-16 left-0 w-full ${background} bg-opacity-100 shadow-md z-10 transition-transform transform ${
                        isDropdownOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden duration-300 ease-in-out`}
                >
                    <div className="flex flex-col items-center space-y-4 p-4 text-lg">
                        <TextLink href="#how-it-works" onClick={toggleDropdown}>How it Works</TextLink>
                        <TextLink href="#pricing" onClick={toggleDropdown}>Pricing</TextLink>
                        <TextLink href="#faq" onClick={toggleDropdown}>FAQ</TextLink>
                        <TextLink href="/sign-up" className="text-1xl font-semibold">Sign Up</TextLink>
                    </div>
                </div>
            )}
        </header>
    );
}

export default LandingHeader;
