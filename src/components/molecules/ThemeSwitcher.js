"use client";
import { useEffect, useState } from "react";
import { ComputerDesktopIcon, MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import Switcher from "@/components/atoms/Switcher";

export default function ThemeSwitcher({
    color = "bg",
    variant = "soft",
    size = "sm",
    borderRadius = "full",
    buttonBorder = true,
    border = false,
    vertical = false,
    system = true,
    className = "",
}) {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    const options = [
        { value: "light", Icon: <SunIcon className="w-4 h-4" /> },
        { value: "dark", Icon: <MoonIcon className="w-4 h-4" /> },
    ];
    if (system) options.push({ value: "system", Icon: <ComputerDesktopIcon className="w-4 h-4" /> });

    useEffect(() => setMounted(true), []);

    const onChange = (value) => {
        setTheme(value);
    };

    if (!mounted) return null;

    return (
        <div className="flex items-center justify-center">
            <Switcher
                options={options}
                selected={theme}
                onChange={onChange}
                buttonClassName="p-1.5"
                buttonBorder={buttonBorder}
                border={border}
                vertical={vertical}
                size={size}
                borderRadius={borderRadius}
                color={color}
                variant={variant}
                className={className}
            />
        </div>
    );
}