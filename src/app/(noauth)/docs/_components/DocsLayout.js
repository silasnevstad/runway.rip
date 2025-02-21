"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { RiDiscordLine } from "react-icons/ri";
import { FiTool } from "react-icons/fi";

import Sidebar from "@/components/organisms/Sidebar";
import SearchBar from "@/components/molecules/SearchBar";
import DocumentationSidebar from "@/app/(noauth)/docs/_components/DocumentationSidebar";
import { mergeClasses } from "@/utils/classNames";
import { DocsNav } from '@/app/(noauth)/docs/Nav';
import { openEmailSupport } from "@/utils/email";
import ThemeSwitcher from "@/components/molecules/ThemeSwitcher";

export default function DocsLayout({ children }) {
    const router = useRouter();

    const handleSearchSelect = (item) => {
        router.push(item.href);
    };

    return (
        <div className="flex h-screen overflow-y-hidden w-full bg-bg-100 dark:bg-bg-900">
            {/* Left Sidebar */}
            <Sidebar width="56" bgColor="bg-bg-50 dark:bg-bg-900">
                <div className="flex flex-col">
                    <div
                        className="flex items-start gap-2 self-start cursor-pointer"
                        onClick={() => router.push('/')}
                    >
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
                        <p className="text-lg font-bold">Runway</p>
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

                <div className="flex flex-col border-t border-r border-gray-200 dark:border-gray-800 w-full">
                    <div className="flex flex-col items-start justify-center p-2 px-4 gap-1 mb-2">
                        <div
                            className="group w-full flex items-center p-2 rounded-lg hover:bg-bg-200 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                            onClick={() => openEmailSupport()}
                        >
                            <AiOutlineQuestionCircle size={20} className="text-gray-700 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200" />
                            <p className="ml-2 text-sm font-normal text-gray-600 dark:text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-300">
                                Help
                            </p>
                        </div>
                        <div className="group w-full flex items-center p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors cursor-pointer">
                            <RiDiscordLine size={20} className="text-gray-700 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200" />
                            <p className="ml-2 text-sm font-normal text-gray-600 dark:text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-300">
                                Discord
                            </p>
                        </div>
                        <div className="group w-full flex items-center p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors cursor-pointer">
                            <FiTool size={20} className="text-gray-700 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200" />
                            <p className="ml-2 text-sm font-normal text-gray-600 dark:text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-300">
                                Dev Tools
                            </p>
                        </div>
                        <ThemeSwitcher className="mt-1" />
                    </div>
                </div>
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
            <main className="flex-1 h-full flex flex-col">
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
                    <p className="text-lg font-bold">Runway</p>
                </div>

                <div
                    className={mergeClasses(
                        "max-w-full h-full px-5 py-6 md:py-8 md:pl-10",
                        "overflow-y-auto",
                        "bg-bg-0 dark:bg-gray-900",
                        "max-md:rounded-t-2xl max-md:mx-2"
                    )}
                >
                    {children}
                </div>
            </main>
        </div>
    );
}