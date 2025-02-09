'use client';

import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Input from '@/components/atoms/Input';
import { mergeClasses } from '@/utils/classNames';

const SearchBar = ({
    items,
    onItemSelect,
    renderItem,
    containerClassName = '',
    inputClassName = '',
    placeholder = 'Search...',
}) => {
    const [query, setQuery] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);

    // Filter sections and their sub-items based on the query.
    const filterItems = (items, query) => {
        const lowercaseQuery = query.toLowerCase();
        return items
            .map(section => {
                const filteredSubItems = section.items.filter(subItem =>
                    subItem.title.toLowerCase().includes(lowercaseQuery)
                );
                return {
                    ...section,
                    items: filteredSubItems,
                };
            })
            .filter(
                section =>
                    section.items.length > 0 ||
                    section.title.toLowerCase().includes(lowercaseQuery)
            );
    };

    const handleSearch = (e) => {
        const value = e.target.value;
        setQuery(value);

        if (value) {
            const results = filterItems(items, value);
            setFilteredItems(results);
        } else {
            setFilteredItems([]);
        }
    };

    const handleItemClick = (item) => {
        onItemSelect(item);
        setQuery('');
        setFilteredItems([]);
    };

    return (
        <div className={mergeClasses("relative w-full max-w-xs z-50", containerClassName)}>
            <Input
                id="search"
                leftIcon={MagnifyingGlassIcon}
                value={query}
                onChange={handleSearch}
                placeholder={placeholder}
                className={
                    mergeClasses(
                        "bg-bg-0 dark:bg-gray-900 text-sm",
                        inputClassName,
                        filteredItems.length > 0 && "rounded-b-none border-b-0"
                    )
                }
                textSize="text-sm"
            />
            {filteredItems.length > 0 && (
                <ul className={`absolute z-10 w-full bg-bg-0 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-t-none border-t-0 rounded-lg mt-0 shadow-lg max-h-60 overflow-y-auto`}>
                    {filteredItems.map((section, index) => (
                        <li key={index}>
                            <div
                                className="cursor-pointer px-2 py-2 font-semibold hover:bg-gray-100 dark:hover:bg-gray-800"
                                onClick={() => handleItemClick(section)}
                            >
                                {section.title}
                            </div>
                            {section.items.map((item, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => handleItemClick(item)}
                                    className="cursor-pointer p-2 pl-3 hover:bg-gray-100 dark:hover:bg-gray-800"
                                >
                                    {renderItem ? renderItem(item) : item.title}
                                </div>
                            ))}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchBar;
