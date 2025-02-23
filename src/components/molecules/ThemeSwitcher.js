"use client";
import { useEffect, useState } from "react";
import { ComputerDesktopIcon, MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import Switcher from "@/components/atoms/Switcher";
import { mergeClasses } from "@/utils/styling";

export default function ThemeSwitcher({
    className = "",
}) {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    const onChange = (value) => {
        setTheme(value);
    };

    if (!mounted) return null;

    return (
        <div className={mergeClasses(`flex items-center justify-center`, className)}>
            <Switcher
                options={[
                    { value: "light", Icon: <SunIcon className="w-4 h-4 text-gray-900 dark:text-gray-100" /> },
                    { value: "dark", Icon: <MoonIcon className="w-4 h-4 text-gray-900 dark:text-gray-100" /> },
                    { value: "system", Icon: <ComputerDesktopIcon className="w-4 h-4 text-gray-900 dark:text-gray-100" /> },
                ]}
                selected={theme}
                onChange={onChange}
                className="gap-0.5 p-0.5"
                buttonClassName="p-1.5"
                buttonBorder
            />
        </div>
    );
}