'use client'

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { DocsNav } from '@/app/(noauth)/docs/Nav';

const DocumentationSidebar = () => {
    const pathname = usePathname();

    return (
        <nav className="py-4 mt-4">
            {DocsNav.map((section, index) => {
                const isActive = pathname === section.href;
                return (
                    <div key={index} className="mb-6 scroll-auto">
                        <div className="flex items-center -mt-3">
                            <Link href={section.href} className={
                                `group flex w-full p-1 pl-2 py-2 pr-8 rounded-md mb-[2px]
                                ${isActive ? 'bg-gray-200 dark:bg-gray-800' : 'text-gray-600 dark:text-gray-400'} 
                                hover:bg-bg-200 dark:hover:bg-gray-800 transition-colors`
                            }>
                                {section.icon}
                                <span className={`${isActive ? 'text-gray-800 dark:text-gray-100' : 'text-gray-800 dark:text-gray-300'} group-hover:text-gray-800 dark:group-hover:text-gray-200 ml-1 font-semibold text-sm`}>{section.title.toUpperCase()}</span>
                            </Link>
                        </div>
                        <ul>
                            {section.items.map((item, itemIndex) => {
                                const isActive = pathname === item.href;
                                return (
                                    <li key={itemIndex} className={
                                        `group p-1 pl-2 py-2 rounded-md mb-[1px]
                                        ${isActive ? 'bg-gray-200 dark:bg-gray-800' : 'border-l-none border-gray-500 dark:border-gray-800'} 
                                        hover:bg-bg-200 dark:hover:bg-gray-800`
                                    }>
                                        <Link href={item.href}
                                              className={`text-sm block ${isActive ? 'text-gray-800 dark:text-gray-100 font-semibold' : 'text-gray-700 dark:text-gray-400'} group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors`}>
                                            {item.title}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                );
            })}
        </nav>
    );
};

export default DocumentationSidebar;