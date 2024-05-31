'use client'

import Card from "@/components/molecules/Card";
import React from "react";
import Switcher from "@/components/atoms/Switcher";
import { PiMoonBold, PiSunBold } from "react-icons/pi";

const UserMenuCard = ({}) => {
    return (
        <Card className="absolute bottom-5 left-40 bg-bg-50 dark:bg-bg-800 border border-bg-300 dark:border-bg-700 px-0 py-0 overflow-hidden">
            <div className="flex flex-col gap-1">
                <p className="font-semibold px-3 pt-3">Silas Nevstad</p>
                <p className="text-sm opacity-50 text-gray-500 dark:text-gray-400 px-3">nevstads@gmail.com</p>
                <div className="w-full h-px bg-bg-300 dark:bg-bg-700 my-2"/>
                <div
                    className="flex justify-between items-end p-2 gap-4">
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
                <div className="flex justify-between items-center hover:bg-bg-100 dark:hover:bg-bg-700 p-2 cursor-pointer pb-3">
                    <p className="pl-1">Terms & Privacy</p>
                </div>
                <div className="flex justify-between items-center hover:bg-bg-100 dark:hover:bg-bg-700 p-2 cursor-pointer pb-3">
                    <p className="pl-1">Logout</p>
                </div>
            </div>
        </Card>
    );
}

export default UserMenuCard;