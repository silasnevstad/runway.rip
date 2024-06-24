'use client'

import Card from "@/components/molecules/Card";
import React from "react";
import Switcher from "@/components/atoms/Switcher";
import { PiMoonBold, PiSunBold } from "react-icons/pi";

const UserMenuCard = ({
    closeMenu,
}) => {
    return (
        <Card className="absolute bottom-5 left-40 px-2 bg-bg-50 dark:bg-bg-700 border border-bg-300 dark:border-bg-700 overflow-hidden rounded-b-none">
            <div
                className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-2/5 h-6 bg-bg-50 dark:bg-bg-700 rounded-t-2xl"
                onClick={closeMenu}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </div>
            <div className="flex flex-col gap-1">
                <p className="font-semibold">Silas Nevstad</p>
                <p className="text-sm opacity-50 text-gray-500 dark:text-gray-400">nevstads@gmail.com</p>
                <div className="w-full h-px bg-bg-300 dark:bg-bg-700 my-2"/>
                <div className="flex flex-col gap-4">
                    <div
                        className="flex justify-between items-end gap-4 pl-2">
                        <p className="pl-1">Theme</p>
                        <Switcher
                            options={[
                                {value: "light", Icon: PiSunBold},
                                {value: "dark", Icon: PiMoonBold}
                            ]}
                            selected={"light"}
                            onChange={(value) => console.log(value)}
                        />
                    </div>
                    <div className="flex justify-between items-center px-2 py-2 rounded-lg hover:bg-bg-100 dark:hover:bg-bg-700 cursor-pointer">
                        <p className="pl-1">Terms & Privacy</p>
                    </div>
                    <div className="flex justify-between items-center px-2 py-2 rounded-lg hover:bg-bg-100 dark:hover:bg-bg-700 cursor-pointer">
                        <p className="pl-1">Logout</p>
                    </div>
                </div>
            </div>
        </Card>
    );
}

export default UserMenuCard;