"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

import Breadcrumb from "@/components/atoms/Breadcrumb";
import Sidebar from "@/components/organisms/sidebars/Sidebar";
import DocumentationSidebar from "@/components/organisms/sidebars/DocumentationSidebar";
import SearchBar from "@/components/molecules/SearchBar";
import { DocsNav } from '@/app/(noauth)/docs/Nav';
import {mergeClasses} from "@/utils/classNames";


export default function DocsLayout({ children }) {
    const router = useRouter();

    const handleSearchSelect = (item) => {
        router.push(item.href);
    };

    return (
        <div className="flex h-screen overflow-hidden w-full bg-bg-0 dark:bg-bg-900">
            {/* Left Sidebar */}
            <Sidebar width="64">
                <div className="flex flex-col">
                    <div className="flex items-start gap-2 self-start">
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
                        <p className="text-xl font-bold"></p>
                    </div>

                    <div className="flex items-center justify-between mt-6 lg:hidden">
                        <SearchBar
                            items={DocsNav}
                            onItemSelect={handleSearchSelect}
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
                <div className="md:hidden flex items-start gap-2 self-start p-3">
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
                    <p className="text-xl font-bold">Runway Docs</p>
                </div>

                <div className={mergeClasses(
                    "w-full px-5 py-6 md:py-8 md:pl-10",
                    // "max-w-screen-xl mx-auto",
                    "bg-bg-0 dark:bg-gray-900",
                    "max-md:rounded-t-2xl"
                )}>
                    {children}
                </div>
            </main>
        </div>
    );
}
