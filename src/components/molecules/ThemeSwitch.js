'use client';

import React from 'react';
import { useTheme } from "next-themes";
import { SunIcon } from "@heroicons/react/24/solid";
import { MoonIcon } from "@heroicons/react/24/outline";

export default function ThemeSwitch() {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
        <div>
            {currentTheme === 'dark' ? (
                <SunIcon
                    className="w-6 h-6 text-gray-800 dark:text-gray-200 cursor-pointer"
                    onClick={() => setTheme('light')}
                />
            ) : (
                <MoonIcon
                    className="w-6 h-6 text-gray-800 dark:text-gray-200 cursor-pointer"
                    onClick={() => setTheme('dark')}
                />
            )}
        </div>
    );

    // return (
    //     <Switch
    //         options={[
    //             { name: 'Light', value: 'light' },
    //             { name: 'Dark', value: 'dark' },
    //         ]}
    //         selected={currentTheme}
    //         onChange={() => theme === "dark"? setTheme('light'): setTheme("dark")}
    //     />
    // );
}