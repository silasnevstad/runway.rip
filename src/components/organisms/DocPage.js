'use client';

import Sidebar from "@/components/organisms/sidebars/Sidebar";
import DocumentationSidebar from "@/components/organisms/sidebars/DocumentationSidebar";
import BreadcrumbTitle from "@/components/atoms/BreadcrumbTitle";
import SearchBar from "@/components/molecules/SearchBar";
import { useRouter } from 'next/navigation'
import { DocsNav } from '@/app/(noauth)/docs/Nav';

function DocumentationPageLayout({ children }) {
    const router = useRouter();

    const handleSearchSelect = (item) => {
        router.push(item.href);
    }

    return (
        <div className="flex w-full min-h-screen">
            <Sidebar
                alwaysOpen={true}
                position="left"
                width="w-64"
                collapsedWidth="w-16"
                bgColor="bg-bg-0 dark:bg-gray-900"
            >
                <DocumentationSidebar/>
            </Sidebar>
            <main className="ml-64 w-full relative">
                <div className="sticky top-0 pt-5 pl-10 pr-5 z-10 flex justify-between items-start">
                    <p></p>
                    <div className="ml-4">
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
                <div className="-mt-16 p-10 pr-5">
                    <BreadcrumbTitle sections={DocsNav}/>
                    {children}
                </div>
            </main>
        </div>
    );
}

export default DocumentationPageLayout;