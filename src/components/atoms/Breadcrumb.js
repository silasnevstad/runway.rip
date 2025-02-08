"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

function BreadcrumbItem({ href, title, isLast, delimiter, isInteractiveLast }) {
    // If it's the last breadcrumb and we want it non-interactive, render a <span> instead of a link.
    if (isLast && !isInteractiveLast) {
        return (
            <>
                <span className="opacity-50">
                    {title}
                </span>
            </>
        );
    }

    return (
        <>
            <Link
                href={href}
                className={`transition-opacity hover:opacity-100 ${
                    isLast ? "opacity-50" : "opacity-30"
                }`}
            >
                {title}
            </Link>
            {!isLast && (
                <span className="mx-1 mr-2 mb-0.5 w-3 h-3 text-gray-600 dark:text-gray-600">
                    {delimiter}
                </span>
            )}
        </>
    );
}

export default function Breadcrumb({
    sections,
    delimiter = <FaChevronRight />,
    isInteractiveLast = false
}) {
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
                    delimiter={delimiter}
                    isInteractiveLast={isInteractiveLast}
                />
            ))}
        </h1>
    );
}
