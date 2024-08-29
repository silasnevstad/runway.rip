'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';

const BreadcrumbItem = ({ href, title, isLast }) => (
    <>
        <Link href={href} className={`opacity-${isLast ? '50' : '30'} hover:opacity-100 transition-opacity`}>
            {title}
        </Link>
        {!isLast && <FaChevronRight className="mx-1 w-3 h-3 text-gray-600 dark:text-gray-600" />}
    </>
);

const Breadcrumb = ({ sections }) => {
    const pathname = usePathname();

    const findPathToCurrentPage = (items, currentPath = []) => {
        for (const item of items) {
            const newPath = [...currentPath, item];
            if (item.href === pathname) {
                return newPath;
            }
            if (item.items) {
                const result = findPathToCurrentPage(item.items, newPath);
                if (result) return result;
            }
        }
        return null;
    };

    const breadcrumbItems = findPathToCurrentPage(sections);

    if (!breadcrumbItems || breadcrumbItems.length === 0) return null;

    return (
        <h1 className="font-medium mb-6 flex items-center flex-wrap">
            {breadcrumbItems.map((item, index) => (
                <BreadcrumbItem
                    key={item.href}
                    href={item.href}
                    title={item.title}
                    isLast={index === breadcrumbItems.length - 1}
                />
            ))}
        </h1>
    );
};

export default Breadcrumb;