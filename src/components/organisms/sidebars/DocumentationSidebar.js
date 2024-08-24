'use client'

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const DocumentationSidebar = ({ sections }) => {
    const pathname = usePathname();

    return (
        <nav className="py-4">
            {sections.map((section, index) => {
                const isActive = pathname === section.href;
                return (
                    <div key={index} className="mb-6 scroll-auto ">
                        <div className="flex items-center mb-2 text-gray-500 dark:text-gray-400">
                            <Link href={section.href}
                                  className={`flex py-1 ${isActive ? 'text-primary-500' : 'text-gray-600 dark:text-gray-300'} hover:text-primary-500 transition-colors`}>
                                {section.icon}
                                <span className="ml-2 font-semibold">{section.title}</span>
                            </Link>
                        </div>
                        <ul>
                            {section.items.map((item, itemIndex) => {
                                const isActive = pathname === item.href;
                                return (
                                    <li key={itemIndex}
                                        className={`pl-4 ${isActive ? 'border-l-2 border-primary-500' : 'border-l-2 border-gray-100 dark:border-bg-600'}`}>
                                        <Link href={item.href}
                                              className={`block py-2 ${isActive ? 'text-primary-500' : 'text-gray-600 dark:text-gray-300'} hover:text-primary-500 transition-colors`}>
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