'use client'

import config from "@/config";
import { TextLink, Button } from "@/components/atoms/Buttons";
import Link from "next/link";
import { PiGearBold } from "react-icons/pi";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";

const Header = ({
    background = "bg-bg-100",
}) => {
    const { appName } = config;
    return (
        <header className={`flex justify-center p-4 w-full ${background}`}>
            <div className="flex justify-between items-center w-full px-4">
                <div className="flex items-center">
                    <Link href="" className="text-2xl font-semibold">{appName}</Link>
                </div>
                <div className="flex items-center space-x-8">
                    <TextLink href="" className="text-lg" fade>Dashboard</TextLink>
                    <TextLink href="" className="text-lg" fade selected>Docs</TextLink>
                    <TextLink href="" className="text-lg" fade>Account</TextLink>
                    <Button icon={Cog6ToothIcon} shape="rounded-full" textColor={"text-bg-900"} backgroundColor={"bg-bg-100"} hoverBackgroundColor={"bg-bg-400"} className="text-2xl !px-2 !py-2"/>
                </div>
            </div>
        </header>
    );
}

export default Header;