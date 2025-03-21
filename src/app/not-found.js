"use client";

import { IoBook, IoHome } from "react-icons/io5";
import Button from "@/components/atoms/Button";
import AppLogo from "@/components/atoms/AppLogo";
import Image from "next/image";

export default function NotFound() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen w-full">
            <div className="absolute top-3 left-4 z-10">
                <AppLogo showText={false} />
            </div>
            <Image src={"/images/page-not-found.svg"} width={400} height={400} alt="Page not found" />
            <div className="p-10 text-center flex flex-col items-center gap-4">
                {/*<h1 className="text-2xl font-bold opacity-90 mt-2">This page doesn't exist</h1>*/}
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                    <Button href="/" variant="soft" size="sm" icon={<IoHome className="w-4 h-4" />}>
                        Home
                    </Button>
                    <Button href="/docs" variant="soft" size="sm" icon={<IoBook className="w-4 h-4" />}>
                        Documentation
                    </Button>
                </div>
            </div>
        </main>
    );
}