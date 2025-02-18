'use client';

import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Input from '@/components/atoms/Input';
import { mergeClasses } from '@/utils/classNames';
import Modal from '@/components/atoms/Modal'; // Make sure Modal is updated to use createPortal and a high z-index

const SearchBar = ({
    items,
    onItemSelect,
    renderItem,
    containerClassName = '',
    size = 'md',
    inputClassName = '',
    placeholder = 'Search...',
    modalPlaceholder = 'Search...',
    modalSearch = false,
}) => {
    const [query, setQuery] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const filterItems = (itemsList, queryStr) => {
        const q = queryStr.toLowerCase();
        return itemsList
            .map((section) => {
                const subFiltered = section.items.filter((sub) =>
                    sub.title.toLowerCase().includes(q)
                );
                return { ...section, items: subFiltered };
            })
            .filter(
                (section) =>
                    section.items.length > 0 || section.title.toLowerCase().includes(q)
            );
    };

    const handleSearch = (e) => {
        const val = e.target.value;
        setQuery(val);
        if (val) {
            setFilteredItems(filterItems(items, val));
        } else {
            setFilteredItems([]);
        }
    };

    const handleItemClick = (item) => {
        onItemSelect(item);
        setQuery('');
        setFilteredItems([]);
        if (modalSearch) setIsModalOpen(false);
    };

    // Non-modal scenario: same as original
    if (!modalSearch) {
        return (
            <div
                className={mergeClasses(
                    'relative w-full max-w-xs z-50',
                    containerClassName
                )}
            >
                <Input
                    id="search"
                    leftIcon={MagnifyingGlassIcon}
                    value={query}
                    onChange={handleSearch}
                    placeholder={placeholder}
                    className={mergeClasses(
                        'bg-bg-0 dark:bg-gray-900 text-sm',
                        inputClassName,
                        filteredItems.length > 0 && 'rounded-b-none border-b-0'
                    )}
                    size={size}
                />

                {filteredItems.length > 0 && (
                    <ul className="absolute z-50 w-full bg-bg-0 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-t-none border-t-0 rounded-lg mt-0 shadow-lg max-h-60 overflow-y-auto">
                        {filteredItems.map((section, idx) => (
                            <li key={idx}>
                                <div
                                    className="cursor-pointer px-2 py-2 font-semibold hover:bg-gray-100 dark:hover:bg-gray-800"
                                    onClick={() => handleItemClick(section)}
                                >
                                    {section.title}
                                </div>
                                {section.items.map((item, i) => (
                                    <div
                                        key={i}
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
    }

    // Modal scenario
    return (
        <div
            className={mergeClasses(
                'relative w-full max-w-xs z-50',
                containerClassName
            )}
        >
            {/* "Trigger" input: readOnly, click opens modal */}
            <Input
                id="search-trigger"
                leftIcon={MagnifyingGlassIcon}
                placeholder={placeholder}
                className={mergeClasses(
                    'bg-bg-0 dark:bg-gray-900 text-sm',
                    inputClassName
                )}
                size={size}
                readOnly
                onClick={() => setIsModalOpen(true)}
            />

            <Modal
                isOpen={isModalOpen}
                onClose={() => {
                    setIsModalOpen(false);
                    setQuery('');
                    setFilteredItems([]);
                }}
                fade
                blur
                closeOnOutsideClick
                showCloseButton
            >
                <div className="w-1/2 max-w-xl min-w-80 flex flex-col space-y-2 bg-bg-100 dark:bg-gray-800 p-4 rounded-lg absolute top-20">
                    {/* Larger input inside the modal */}
                    <Input
                        id="search-in-modal"
                        leftIcon={MagnifyingGlassIcon}
                        value={query}
                        onChange={handleSearch}
                        placeholder={modalPlaceholder}
                        className="bg-bg-100 dark:bg-gray-800"
                        textSize="text-lg md:text-xl"
                        autoFocus
                    />

                    {filteredItems.length > 0 && (
                        <div className="flex flex-col max-h-96 overflow-y-auto">
                            {filteredItems.map((section, idx) => (
                                <div key={idx}>
                                    <div
                                        onClick={() => handleItemClick(section)}
                                        className={`
                                            flex items-center gap-1
                                            cursor-pointer px-2 py-2 text-sm rounded-lg
                                            text-gray-600 dark:text-gray-500  hover:text-gray-900 dark:hover:text-gray-300
                                            hover:bg-gray-300 dark:hover:bg-gray-900
                                        `}
                                    >
                                        {section.title}
                                    </div>
                                    {section.items.map((item, i) => (
                                        <div
                                            key={i}
                                            onClick={() => handleItemClick(item)}
                                            className={`
                                                cursor-pointer p-2 rounded-lg
                                                text-gray-800 dark:text-gray-200  hover:text-gray-900 dark:hover:text-gray-100
                                                hover:bg-gray-300 dark:hover:bg-gray-900
                                            `}
                                        >
                                            {renderItem ? renderItem(item) : item.title}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </Modal>
        </div>
    );
};

export default SearchBar;
