"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DocsNav } from "@/app/(noauth)/docs/Nav";
import DropdownItem from "@/components/atoms/DropdownItem"; // adjust path as needed

const DocumentationSidebar = () => {
    const pathname = usePathname();

    return (
        <nav className="py-4 mt-0 pb-16">
            {DocsNav.map((section) => (
                <div key={section.href} className="mb-6">
                    <div className="flex items-center -mt-3">
                        <div className="group flex items-end w-full p-1 pl-2 py-2 pr-8 rounded-md mb-[2px] transition-colors">
                            {section.icon}
                            <span className="ml-1 font-semibold text-xs text-gray-800 dark:text-gray-100">
                                {section.title.toUpperCase()}
                            </span>
                        </div>
                    </div>
                    <ul>
                        {section.items.map((item) => (
                            <NavItem key={item.href} item={item} pathname={pathname} level={0} />
                        ))}
                    </ul>
                </div>
            ))}
        </nav>
    );
};

const NavItem = ({ item, pathname, level }) => {
    const isActive =
        pathname === item.href || (item.items && pathname.startsWith(item.href));
    const hasChildren = item.items && item.items.length > 0;

    if (hasChildren) {
        return (
            <li>
                <DropdownItem
                    header={
                        <span
                            className={`text-[13px] pl-2 transition-colors group-hover:text-gray-800 dark:group-hover:text-gray-200 ${
                                isActive
                                    ? "text-gray-800 dark:text-gray-100 font-semibold"
                                    : "text-gray-700 dark:text-gray-500"
                            }`}
                        >
                            {item.title}
                        </span>
                    }
                    initialOpen={pathname.startsWith(item.href)}
                    className="w-full py-2"
                    border={false}
                >
                    <div className="flex flex-col w-full h-full">
                        {item.items.map((child) => (
                            <NavItem key={child.href} item={child} pathname={pathname} level={level + 1} />
                        ))}
                    </div>
                </DropdownItem>
            </li>
        );
    }

    return (
        <div
            className={`w-full group p-1 pl-2 py-2 rounded-md mb-[1px] transition-colors hover:bg-bg-200 dark:hover:bg-gray-900 ${
                isActive ? "bg-bg-200 dark:bg-gray-900" : "border-l-none border-gray-500 dark:border-gray-800"
            }`}
        >
            <Link
                href={item.href}
                className={`flex items-center text-[13px] gap-1 transition-colors group-hover:text-gray-800 dark:group-hover:text-gray-200 ${
                    isActive
                        ? "text-gray-800 dark:text-gray-100 font-semibold"
                        : "text-gray-700 dark:text-gray-500"
                }`}
            >
                <span className={level > 0 ? "" : ""}>
                    {item.icon}
                    {item.title}
                </span>
            </Link>
        </div>
    );
};

export default DocumentationSidebar;
