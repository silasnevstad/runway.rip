"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

import Breadcrumb from "@/components/atoms/Breadcrumb";
import Sidebar from "@/components/organisms/sidebars/Sidebar";
import DocumentationSidebar from "@/components/organisms/sidebars/DocumentationSidebar";
import SearchBar from "@/components/molecules/SearchBar";
import { DocsNav } from '@/app/(noauth)/docs/Nav';


export default function DocsLayout({ children }) {
    const router = useRouter();

    const handleSearchSelect = (item) => {
        router.push(item.href);
    };

    return (
        <div className="flex min-h-screen w-full">
            {/* Left Sidebar */}
            <Sidebar
                width="64"
                bgColor="bg-bg-50 dark:bg-gray-900"
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
                    <p className="text-xl font-bold"></p>
                </div>

                <div className="flex items-center justify-between mt-6 lg:hidden">
                    <SearchBar
                        items={DocsNav}
                        onItemSelect={handleSearchSelect}
                    />
                </div>

                <DocumentationSidebar />
            </Sidebar>

            <aside className="fixed top-5 right-5 flex max-lg:hidden">
                <SearchBar modalPlaceholder="Search docs" items={DocsNav} onItemSelect={handleSearchSelect} modalSearch={true} />
            </aside>

            {/* Main content area */}
            <main className="flex-1 mt-6">
                {children}
            </main>
        </div>
    );
}
