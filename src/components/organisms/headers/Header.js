'use client'

import config from "@/config";
import { TextLink, Button } from "@/components/atoms/Buttons";
import Link from "next/link";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import { Avatar } from "@/components/atoms/Avatar";

const Header = ({
    background = "bg-bg-100 dark:bg-bg-900",
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
                    <div className="pl-2 flex items-center space-x-6">
                        <Button icon={Cog6ToothIcon} iconClassname={"!w-6 !h-6"} shape="rounded-full" textColor={"text-bg-700 dark:text-bg-300 hover:text-bg-900 dark:hover:text-bg-100"} backgroundColor={"bg-bg-100 dark:bg-bg-900"} hoverBackgroundColor={"hover:bg-bg-100 dark:hover:bg-bg-800"} className="text-2xl !px-1 !py-1"/>
                        <Avatar src="/images/elon-avatar.png" alt="John Doe" width={35} height={35}/>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;