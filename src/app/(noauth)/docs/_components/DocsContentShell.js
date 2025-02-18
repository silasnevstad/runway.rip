"use client";

import Breadcrumb from "@/components/atoms/Breadcrumb";
import {OnThisPage, SidebarSection} from "@/app/(noauth)/docs/_components/RightSidebar";
import {DocsNav} from "@/app/(noauth)/docs/Nav";
import {mergeClasses} from "@/utils/classNames";

export default function DocsContentShell({
    title,
    description,
    content,
    onThisPage,
    relatedDocs,
    relatedSites,
}) {
    return (
        <div
            className={mergeClasses(
                "w-full px-4 py-6 md:py-8 flex flex-col-reverse lg:flex-row gap-8",
                "max-w-screen-xl mx-auto" // optional: keep it narrower than full screen
            )}
        >
            {/* MAIN COLUMN */}
            <article className="flex-1 min-w-0 mx-auto max-w-prose">
                <Breadcrumb sections={DocsNav} className="mb-2" />

                {title && (
                    <h1 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                        {title}
                    </h1>
                )}
                {description && (
                    <p className="text-xl text-gray-800 dark:text-gray-200 mb-6">
                        {description}
                    </p>
                )}

                {/* The rendered MDX content */}
                <div className="prose dark:prose-invert w-full">{content}</div>
            </article>

            {/* RIGHT SIDEBAR (large screens only) */}
            {(onThisPage?.length || relatedContent?.length || relatedSites?.length) && (
                <aside className="hidden lg:flex flex-col w-64 shrink-0">
                    <div className="sticky top-24 space-y-4">
                        {onThisPage?.length > 0 && <OnThisPage items={onThisPage} />}
                        {relatedDocs?.length > 0 && <SidebarSection title="Related Docs" items={relatedDocs} />}
                        {relatedSites?.length > 0 && <SidebarSection title="Related Sites" items={relatedSites} />}
                    </div>
                </aside>
            )}
        </div>
    );
}