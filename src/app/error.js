"use client";
import AppLogo from "@/components/atoms/AppLogo";

export default function Error() {
    return (
        <main className="flex items-center flex-col w-full">
            <div className="absolute top-3 left-4 z-10">
                <AppLogo showText={true} />
            </div>
            <div className="p-10 text-center pt-20">
                <h1 className="text-4xl md:text-5xl font-black text-primary-500">404!</h1>
                <h1 className="text-2xl font-bold mt-2 opacity-80">An error occurred.</h1>
            </div>
        </main>
    );
}