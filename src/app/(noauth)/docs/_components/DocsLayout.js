"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

import Sidebar from "@/components/organisms/Sidebar";
import SearchBar from "@/components/molecules/SearchBar";
import DocumentationSidebar from "@/app/(noauth)/docs/_components/DocumentationSidebar";
import { mergeClasses } from "@/utils/classNames";
import { DocsNav } from '@/app/(noauth)/docs/Nav';

export default function DocsLayout({ children }) {
    const router = useRouter();

    const handleSearchSelect = (item) => {
        router.push(item.href);
    };

    return (
        <div className="flex h-screen overflow-hidden w-full bg-bg-50 dark:bg-bg-900">
            {/* Left Sidebar */}
            <Sidebar width="64" bgColor="bg-bg-50 dark:bg-bg-900">
                <div className="flex flex-col">
                    <div className="flex items-start gap-2 self-start cursor-pointer" onClick={() => router.push('/')}>
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
                        <p className="text-lg font-bold">Runway Docs</p>
                    </div>

                    <div className="flex items-center justify-between mt-6 lg:hidden">
                        <SearchBar
                            items={DocsNav}
                            onItemSelect={handleSearchSelect}
                            size="sm"
                            modalSearch={true}
                        />
                    </div>
                </div>

                <DocumentationSidebar />
            </Sidebar>

            {/* A "floating" search bar in the top-right (desktop only) */}
            <aside className="fixed top-5 right-5 flex max-lg:hidden">
                <SearchBar
                    modalPlaceholder="Search docs"
                    items={DocsNav}
                    onItemSelect={handleSearchSelect}
                    modalSearch={true}
                />
            </aside>

            {/* Main content area */}
            <main className="flex-1 h-full overflow-y-auto flex flex-col">
                <div className="md:hidden flex items-start gap-2 self-start p-3 w-full">
                    <Image
                        src="/logo.png"
                        alt="runway"
                        width={22}
                        height={22}
                        className="block dark:hidden"
                    />
                    <Image
                        src="/logo-white.png"
                        alt="runway"
                        width={22}
                        height={22}
                        className="hidden dark:block"
                    />
                    <p className="text-lg font-bold">Runway Docs</p>
                </div>

                <div className={mergeClasses(
                    "w-full h-full px-5 py-6 md:py-8 md:pl-10",
                    "overflow-y-auto",
                    "bg-bg-0 dark:bg-gray-900",
                    "max-md:rounded-t-2xl"
                )}>
                    {children}
                </div>
            </main>
        </div>
    );
}
