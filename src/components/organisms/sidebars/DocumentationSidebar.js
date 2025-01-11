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
                        <div className="flex items-center mb-3 -mt-3">
                            <Link href={section.href}
                                  className={`flex py-1 -ml-1 ${isActive ? 'text-primary-500' : 'text-gray-600 dark:text-gray-400'} hover:text-primary-500 transition-colors`}>
                                {section.icon}
                                <span className={`${isActive ? 'text-primary-500' : 'text-gray-900 dark:text-gray-500'} hover:text-primary-500 ml-2 font-medium text-md`}>{section.title}</span>
                            </Link>
                        </div>
                        <ul>
                            {section.items.map((item, itemIndex) => {
                                const isActive = pathname === item.href;
                                return (
                                    <li key={itemIndex}
                                        className={`pl-4 ml-2 hover:border-primary-500 ${isActive ? 'border-l-[3px] border-primary-500' : 'border-l-2 border-gray-500 dark:border-gray-800'}`}>
                                        <Link href={item.href}
                                              className={`text-sm block py-2 ${isActive ? 'text-primary-500 font-semibold' : 'text-gray-900 dark:text-gray-600'} hover:text-primary-500 transition-colors`}>
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