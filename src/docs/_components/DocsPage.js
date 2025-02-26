"use client";

import Breadcrumb from "@/components/atoms/Breadcrumb";
import {OnThisPage, SidebarSection} from "@/docs/_components/RightSidebar";
import {DocsNav} from "@/app/(noauth)/docs/Nav";

export default function DocsPage({
    title,
    description,
    content,
    onThisPage,
    relatedDocs,
    relatedSites,
}) {
    return (
        <div className="w-full h-full flex flex-col lg:flex-row min-h-screen justify-center mx-auto px-4">
            {/* MAIN COLUMN */}
            <article className="flex-1 min-w-0 max-w-[700px] lg:mr-12">
                <Breadcrumb sections={DocsNav} className="mb-2 md:mb-4 lg:mb-8" />

                {title && (
                    <h1 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                        {title}
                    </h1>
                )}
                {description && (
                    <p className="text-lg text-gray-800 dark:text-gray-200 mb-6">
                        {description}
                    </p>
                )}

                {/* The rendered MDX content */}
                <div className="prose dark:prose-invert w-full pb-96">{content}</div>
            </article>

            {/* RIGHT SIDEBAR (large screens only) */}
            {(onThisPage?.length || relatedDocs?.length || relatedSites?.length) && (
                <aside className="hidden lg:block w-44 shrink-0">
                    {/* Use sticky so it stays in place while scrolling */}
                    <div className="fixed top-18 space-y-4">
                        {onThisPage?.length > 0 && <OnThisPage items={onThisPage} />}
                        {relatedDocs?.length > 0 && <SidebarSection title="Related Docs" items={relatedDocs} />}
                        {relatedSites?.length > 0 && <SidebarSection title="Related Sites" items={relatedSites} />}
                    </div>
                </aside>
            )}
        </div>
    );
}