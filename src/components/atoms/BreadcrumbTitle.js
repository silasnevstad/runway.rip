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
        <h1 className="text-4xl font-bold mb-6 flex items-center text-gray-600 dark:text-gray-400">
            <span>{pageInfo.section}</span>
            {pageInfo.page && <FaChevronRight className="mx-2 w-4 h-4 text-gray-400 dark:text-gray-600" />}
            <span>{pageInfo.page}</span>
        </h1>
    );
};

export default BreadcrumbTitle;