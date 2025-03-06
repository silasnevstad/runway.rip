"use client";
import Image from "next/image";

export default function AppLogo({
    showText = true,
}) {
    return (
        <div className="flex items-start gap-2 self-start cursor-pointer">
            <Image
                src="/logo.png"
                alt="runway"
                width={20}
                height={20}
                className="block dark:hidden"
            />
            <Image
                src="/logo-white.png"
                alt="runway"
                width={20}
                height={20}
                className="hidden dark:block"
            />
            {showText && <p className="text-lg font-bold">Runway</p>}
        </div>
    );
}