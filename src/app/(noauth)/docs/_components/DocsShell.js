"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

import Breadcrumb from "@/components/atoms/Breadcrumb";
import Sidebar from "@/components/organisms/sidebars/Sidebar"; // adjust import as needed
import DocumentationSidebar from "@/components/organisms/sidebars/DocumentationSidebar";
import SearchBar from "@/components/molecules/SearchBar";
import { DocsNav } from '@/app/(noauth)/docs/Nav';


export default function DocsShell({ children }) {
    const router = useRouter();

    const handleSearchSelect = (item) => {
        router.push(item.href);
    };

    return (
        <div className="flex min-h-screen w-full max-md:-ml-5">
            {/* Left Sidebar */}
            <Sidebar
                alwaysOpen
                position="left"
                width="w-64"
                collapsedWidth="w-16"
                bgColor="bg-bg-0 dark:bg-gray-900"
            >
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
                    <p className="text-xl font-bold">Runway</p>
                </div>
                <DocumentationSidebar />
            </Sidebar>

            {/* Padded spacer to accommodate the sidebar */}
            <div className="flex-shrink-0 w-64 max-md:w-0" />

            {/* Main content area */}
            <main className="md:w-[calc(100vw-16rem)] overflow-x-auto relative">
                <div className="sticky top-0 right-0 pt-5 pl-10 md:pr-5 z-10 flex justify-between items-start">
                    <p></p>
                    <div className="flex items-center ml-4 gap-4">
                        <SearchBar
                            items={DocsNav}
                            onItemSelect={handleSearchSelect}
                            renderItem={(item) => (
                                <div className="flex items-center space-x-2">
                                    <span>{item.title}</span>
                                </div>
                            )}
                        />
                    </div>
                </div>

                {/* Actual MDX page content */}
                <div className="-mt-16 max-md:mt-2 pl-10 pt-10 max-md:p-0 pr-5 max-md:pr-0 w-full">
                    <Breadcrumb sections={DocsNav}/>
                    {children}
                </div>
            </main>
        </div>
    );
}
