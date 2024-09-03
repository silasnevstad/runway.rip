'use client';

import Image from 'next/image';
import Sidebar from "@/components/organisms/sidebars/Sidebar";
import DocumentationSidebar from "@/components/organisms/sidebars/DocumentationSidebar";
import Breadcrumb from "@/components/atoms/Breadcrumb";
import SearchBar from "@/components/molecules/SearchBar";
import ThemeSwitch from "@/components/molecules/ThemeSwitch";
import { useRouter } from 'next/navigation'
import { DocsNav } from '@/app/(noauth)/docs/Nav';

function DocumentationPageLayout({ children }) {
    const router = useRouter();

    const handleSearchSelect = (item) => {
        router.push(item.href);
    }

    return (
        <div className="flex w-full min-h-screen max-md:-ml-5">
            <Sidebar
                alwaysOpen={true}
                position="left"
                width="w-64"
                collapsedWidth="w-16"
                bgColor="bg-bg-0 dark:bg-gray-900"
            >
                <div className="flex items-center self-start gap-2">
                    <Image src="/logo.png" alt="Runway" width={30} height={30} />
                    <p className="text-2xl font-bold">Runway</p>
                </div>
                <DocumentationSidebar />
            </Sidebar>
            <main className={`ml-64 max-md:ml-0 w-full relative`}>
                <div className="sticky top-0 right-0 pt-5 pl-10 md:pr-5 z-10 flex justify-between items-start">
                    <p></p>
                    <div className="flex items-center ml-4 gap-4">
                        <ThemeSwitch />
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
                <div className="-mt-16 max-md:mt-2 p-10 max-md:p-0 pr-5 max-md:pr-0 w-full">
                    <Breadcrumb sections={DocsNav}/>
                    {children}
                </div>
            </main>
        </div>
    );
}

export default DocumentationPageLayout;