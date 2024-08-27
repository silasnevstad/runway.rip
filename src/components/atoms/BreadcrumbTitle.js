'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { FaChevronRight } from 'react-icons/fa';

const BreadcrumbTitle = ({ sections }) => {
    const pathname = usePathname();

    const getCurrentPageInfo = () => {
        for (const section of sections) {
            if (section.href === pathname) {
                return { section: section.title };
            }
            for (const item of section.items) {
                if (item.href === pathname) {
                    return { section: section.title, page: item.title };
                }
            }
        }
        return null;
    };

    const pageInfo = getCurrentPageInfo();

    if (!pageInfo) return null;

    return (
        <h1 className="font-medium mb-6 flex items-center">
            <span className="opacity-30">{pageInfo.section}</span>
            {pageInfo.page && <FaChevronRight className="mx-1 w-3 h-3 text-gray-600 dark:text-gray-600" />}
            <span className="opacity-50">{pageInfo.page}</span>
        </h1>
    );
};

export default BreadcrumbTitle;