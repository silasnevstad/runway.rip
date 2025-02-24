"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChevronRight } from "react-icons/fa6";
import { mergeClasses } from "@/utils/styling";

export default function Breadcrumb({
    sections = [],
    delimiter = <FaChevronRight />,
    isInteractiveLast = false,
    className = "",
    ...props
}) {
    const pathname = usePathname();

    // Recursively finds a path of items leading to the current URL using items.
    // If no items are provided, return the current path split into parts and formatted.
    function findPathToCurrentPage(items = [], currentPath = []) {
        if (!items.length) {
            return pathname.split("/").filter(Boolean).map((part) => ({
                href: `/${part}`,
                title: part.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
            }));
        }

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
    }

    const breadcrumbItems = findPathToCurrentPage(sections);

    if (!breadcrumbItems || breadcrumbItems.length === 0) return null;

    const containerClasses = mergeClasses(
        "font-medium flex items-center flex-wrap gap-1",
        className
    );

    const delimiterClasses = "w-5 h-5 flex items-center opacity-40";

    // Local component to render a single crumb
    function BreadcrumbItem({ href, title, isLast }) {
        if (isLast && !isInteractiveLast) {
            // Non-clickable final crumb
            return <span className="opacity-50">{title}</span>;
        }
        // Link crumb
        return (
            <Link
                href={href}
                className={mergeClasses(
                    `text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100`,
                    "transition-opacity",
                    isLast ? "opacity-50" : "opacity-40 hover:opacity-80"
                )}
            >
                {title}
            </Link>
        );
    }

    return (
        <nav aria-label="breadcrumb" className={containerClasses} {...props}>
            {breadcrumbItems.map((item, index) => {
                const isLast = index === breadcrumbItems.length - 1;
                return (
                    <React.Fragment key={item.href}>
                        <BreadcrumbItem
                            href={item.href}
                            title={item.title}
                            isLast={isLast}
                        />
                        {!isLast && (
                            <span className={`text-sm mx-1 flex items-center opacity-40`}>
                                {delimiter}
                            </span>
                        )}
                    </React.Fragment>
                );
            })}
        </nav>
    );
}
