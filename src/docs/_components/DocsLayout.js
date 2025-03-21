"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaDiscord, FaQuestion, FaWrench } from "react-icons/fa6";
import Sidebar from "@/components/organisms/Sidebar";
import SearchBar from "@/components/molecules/SearchBar";
import DocumentationSidebar from "@/docs/_components/DocumentationSidebar";
import ThemeSwitcher from "@/components/molecules/ThemeSwitcher";
import { mergeClasses } from "@/utils/styling";
import { DocsNav } from '@/app/(noauth)/docs/Nav';
import { openEmailSupport } from "@/utils/email";

export default function DocsLayout({ children }) {
    const router = useRouter();

    const handleSearchSelect = (item) => {
        router.push(item.href);
    };

    return (
        <div className="flex h-screen overflow-y-hidden w-full bg-bg-100 dark:bg-gray-900">
            {/* Left Sidebar */}
            <Sidebar width="64" bgColor="bg-bg-50 dark:bg-bg-800">
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

                <div className="flex flex-col border-t border-gray-200 dark:border-gray-800 w-full">
                    <div className="flex flex-col items-start justify-center p-2 px-4 gap-1 mb-2">
                        <div
                            className="group w-full flex items-center p-2 rounded-lg hover:bg-bg-200 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                            onClick={() => openEmailSupport()}
                        >
                            <FaQuestion className="text-gray-700 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200" />
                            <p className="ml-2 text-sm font-normal text-gray-600 dark:text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-300">
                                Help
                            </p>
                        </div>
                        {/*<div*/}
                        {/*    className="group w-full flex items-center p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors cursor-pointer"*/}
                        {/*>*/}
                        {/*    <FaDiscord className="text-gray-700 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200" />*/}
                        {/*    <p className="ml-2 text-sm font-normal text-gray-600 dark:text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-300">*/}
                        {/*        Discord*/}
                        {/*    </p>*/}
                        {/*</div>*/}
                        <div
                            className="group w-full flex items-center p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                            onClick={() => router.push('/docs/devtools')}
                        >
                            <FaWrench className="text-gray-700 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200" />
                            <p className="ml-2 text-sm font-normal text-gray-600 dark:text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-300">
                                Dev Tools
                            </p>
                        </div>
                        <ThemeSwitcher className="mt-1" />
                    </div>
                </div>
            </Sidebar>

            {/* Floating search bar (desktop only) */}
            <aside className="fixed top-5 right-5 flex max-lg:hidden">
                <SearchBar
                    modalPlaceholder="Search docs"
                    items={DocsNav}
                    onItemSelect={handleSearchSelect}
                    modalSearch={true}
                />
            </aside>

            {/* Main content area */}
            <main className="flex-1 h-full flex flex-col min-w-0 max-w-screen">
                <div className="md:hidden flex items-start gap-2 self-start p-3 w-full">
                    <Image
                        src="/logo-black.png"
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
                        "max-w-full h-full max-[430px]:px-2 px-3 sm:px-5 py-6 md:py-8 md:pl-10",
                        "overflow-y-auto small-scrollbar",
                        "bg-bg-0 dark:bg-bg-950",
                        "max-md:rounded-t-xl mx-2 md:mx-0"
                    )}
                >
                    {children}
                </div>
            </main>
        </div>
    );
}
