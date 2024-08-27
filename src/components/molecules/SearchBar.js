'use client';

import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Input from '@/components/atoms/Input';

const SearchBar = ({ items, onItemSelect, renderItem }) => {
    const [query, setQuery] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);

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

    const filterItems = (items, query) => {
        const lowercaseQuery = query.toLowerCase();
        return items
            .map(section => ({
                ...section,
                items: section.items.filter(subItem =>
                    subItem.title.toLowerCase().includes(lowercaseQuery)
                ),
            }))
            .filter(section => section.items.length > 0);
    };

    const handleItemClick = (item) => {
        onItemSelect(item);
        setQuery('');
        setFilteredItems([]);
    };

    return (
        <div className="relative w-full max-w-xs">
            <Input
                id="search"
                leftIcon={MagnifyingGlassIcon}
                value={query}
                onChange={handleSearch}
                placeholder="Search..."
                className="bg-bg-0 dark:bg-gray-900 text-sm"
                textSize="text-sm"
            />
            {filteredItems.length > 0 && (
                <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-2 shadow-lg max-h-60 overflow-y-auto">
                    {filteredItems.map((section, index) => (
                        <li key={index}>
                            <div
                                className="cursor-pointer px-2 py-2 font-semibold hover:bg-gray-100"
                                onClick={() => handleItemClick(section)}
                            >
                                {section.title}
                            </div>
                            {section.items.map((item, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => handleItemClick(item)}
                                    className="cursor-pointer p-2 pl-3 hover:bg-gray-100"
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
