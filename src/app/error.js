"use client";

import AppLogo from "@/components/atoms/AppLogo";
import Image from "next/image";

export default function Error() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen w-full">
            <div className="absolute top-3 left-4 z-10">
                <AppLogo showText={false} />
            </div>
            <Image src={"/images/404.svg"} width={400} height={400} alt="Page not found" />
            <div className="text-center flex flex-col items-center gap-4">
                <h1 className="text-2xl font-bold opacity-75">An error occurred</h1>
            </div>
        </main>
    );
}