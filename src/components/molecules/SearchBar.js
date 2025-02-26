"use client";
import React, { useEffect, useState, useCallback } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Input from "@/components/atoms/Input";
import Modal from "@/components/atoms/Modal";
import { mergeClasses } from "@/utils/styling";

function getFirstDisplayedItem(sections) {
    for (const section of sections) {
        // If the entire section is displayed due to its title match:
        if (section.title && section.items?.length === section.originalItems?.length) {
            // The section is itself a "clickable" match
            return { ...section, __isSection: true };
        }
        // Otherwise, find the first sub-item
        if (section.items && section.items.length > 0) {
            return { ...section.items[0], __isSection: false };
        }
    }
    return null;
}

function SectionList({
    sections,
    query,
    onSelectItem,
    renderItem,
    isModal,
    firstDisplayed,
}) {
    // If user has typed, but no sections remain, show a "no results" notice.
    if (sections.length === 0 && query) {
        return (
            <div className="p-2 text-gray-600 dark:text-gray-300">
                No results found.
            </div>
        );
    }
    // If no user query and no sections, render nothing.
    if (sections.length === 0) return null;

    const styleMap = {
        inline: {
            container: "absolute z-50 w-full bg-bg-0 dark:bg-gray-900 border border-gray-800 dark:border-gray-600 rounded-t-none border-t-0 rounded-lg mt-0 shadow-lg max-h-60 overflow-y-auto",
            sectionTitle: "cursor-pointer mx-1 my-1 px-1 py-1 rounded-lg font-sm font-medium hover:bg-gray-200/50 dark:hover:bg-gray-800",
            item: "cursor-pointer mx-1 my-1 px-1 py-1 rounded-lg hover:bg-gray-200/50 dark:hover:bg-gray-800",
        },
        modal: {
            container: "flex flex-col max-h-96 overflow-y-auto w-full",
            sectionTitle: "mt-1 cursor-pointer px-2 py-2 text-sm font-medium rounded-lg text-gray-600 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-900",
            item: "cursor-pointer p-2 rounded-lg text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-900",
        },
    };
    const style = isModal ? styleMap.modal : styleMap.inline;

    return (
        <div className={style.container}>
            {sections.map((section, sIdx) => {
                const hasItems =
                    Array.isArray(section.items) && section.items.length > 0;

                // We highlight the entire section row if firstDisplayed is that section
                const sectionIsHighlighted =
                    firstDisplayed?.__isSection &&
                    firstDisplayed.title === section.title;

                // We'll highlight the first item if that matches.
                return (
                    <div key={sIdx} className={!isModal ? undefined : "mb-1"}>
                        {/* Section Title */}
                        <div
                            className={mergeClasses(
                                style.sectionTitle,
                                sectionIsHighlighted && "bg-gray-200/50 dark:bg-gray-800"
                            )}
                            onClick={() => onSelectItem(section)}
                        >
                            {section.title}
                        </div>

                        {/* Section Items */}
                        {hasItems &&
                            section.items.map((item, iIdx) => {
                                const itemIsHighlighted =
                                    !firstDisplayed?.__isSection &&
                                    firstDisplayed?.title === item.title &&
                                    section.title === firstDisplayed.sectionTitle; // see below

                                return (
                                    <div
                                        key={iIdx}
                                        onClick={() => onSelectItem(item)}
                                        className={mergeClasses(
                                            style.item,
                                            itemIsHighlighted && "bg-gray-200/50 dark:bg-gray-900"
                                        )}
                                    >
                                        {renderItem ? renderItem(item) : item.title}
                                    </div>
                                );
                            })}
                    </div>
                );
            })}
        </div>
    );
}

export default function SearchBar({
    items = [], // [{ title, items: [{ title }] }, ...]
    onItemSelect = () => {},
    renderItem,
    size = "md",
    placeholder = "Search...",
    modalPlaceholder = "Search...",
    modalSearch = false, // Toggle between inline or modal usage
    containerClassName = "",
    inputClassName = "",
    textClassName = "",
    ...props
}) {
    const [query, setQuery] = useState("");
    const [filteredItems, setFilteredItems] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // We'll keep track of the first item displayed so we can highlight it and handle Enter.
    const [firstDisplayed, setFirstDisplayed] = useState(null);

    useEffect(() => {
        if (!query) {
            setFilteredItems([]);
            setFirstDisplayed(null);
            return;
        }
        const newFiltered = filterItems(items, query);

        // We store the "original" items in each section for logic in getFirstDisplayedItem
        // so we know if the entire section is a match or just sub-items
        const newFilteredWithOriginal = newFiltered.map((sec) => ({
            ...sec,
            originalItems: (items.find((s) => s.title === sec.title) || {}).items,
        }));

        setFilteredItems(newFilteredWithOriginal);

        const firstItem = getFirstDisplayedItem(newFilteredWithOriginal);
        // For sub-items, store the sectionTitle so we can compare later
        if (firstItem && !firstItem.__isSection) {
            const sectionOfItem = newFilteredWithOriginal.find((sec) =>
                sec.items.some((it) => it.title === firstItem.title)
            );
            firstItem.sectionTitle = sectionOfItem?.title;
        }
        setFirstDisplayed(firstItem || null);
    }, [query, items]);

    // On pressing Enter, if we have a highlighted item, select it
    const handleKeyDown = useCallback(
        (e) => {
            if (e.key === "Enter" && firstDisplayed) {
                // If it's a section
                if (firstDisplayed.__isSection) {
                    handleItemClick(firstDisplayed);
                } else {
                    // otherwise it's a sub-item
                    handleItemClick(firstDisplayed);
                }
            }
        },
        [firstDisplayed]
    );

    function filterItems(itemsList, queryStr) {
        const queryLowered = queryStr.toLowerCase();
        return itemsList
            .map((section) => {
                const subFiltered = (section.items || []).filter((sub) =>
                    sub.title.toLowerCase().includes(queryLowered)
                );
                const keepSectionTitle = section.title.toLowerCase().includes(queryLowered);

                return {
                    ...section,
                    items: keepSectionTitle ? section.items : subFiltered,
                };
            })
            .filter(
                (section) =>
                    (section.items?.length > 0) ||
                    section.title.toLowerCase().includes(queryLowered)
            );
    }

    function handleSearch(e) {
        setQuery(e.target.value);
    }

    function handleItemClick(item) {
        onItemSelect(item);
        setQuery("");
        setFilteredItems([]);
        setFirstDisplayed(null);
        if (modalSearch) {
            setIsModalOpen(false);
        }
    }

    // ===================== Inline Scenario =====================
    if (!modalSearch) {
        return (
            <div
                className={mergeClasses(
                    "relative w-full max-w-xs z-50",
                    containerClassName
                )}
            >
                <Input
                    id="search"
                    leftIcon={<MagnifyingGlassIcon />}
                    value={query}
                    onChange={handleSearch}
                    onKeyDown={handleKeyDown}
                    placeholder={placeholder}
                    className={mergeClasses(
                        // Flatten bottom corners if dropdown is open
                        filteredItems.length > 0 && "rounded-b-none border-b-0",
                        inputClassName
                    )}
                    textClassName={textClassName}
                    size={size}
                    focus={false}
                    {...props}
                />

                {filteredItems.length > 0 && (
                    <SectionList
                        sections={filteredItems}
                        query={query}
                        onSelectItem={handleItemClick}
                        renderItem={renderItem}
                        isModal={false}
                        firstDisplayed={firstDisplayed}
                    />
                )}
            </div>
        );
    }

    // ===================== Modal Scenario =====================
    return (
        <div
            className={mergeClasses(
                "relative w-full max-w-xs z-50",
                containerClassName
            )}
        >
            {/* Read-only Input that opens the modal on click */}
            <Input
                id="search-trigger"
                leftIcon={<MagnifyingGlassIcon />}
                placeholder={placeholder}
                className={mergeClasses("bg-bg-0 dark:bg-gray-900", inputClassName)}
                textClassName={textClassName}
                size={size}
                readOnly
                onClick={() => setIsModalOpen(true)}
                focus={false}
                {...props}
            />

            <Modal
                isOpen={isModalOpen}
                onClose={() => {
                    setIsModalOpen(false);
                    setQuery("");
                    setFilteredItems([]);
                    setFirstDisplayed(null);
                }}
                fade
                blur
                closeOnOutsideClick
                showCloseButton
            >
                {/* Modal Content */}
                <div className="w-full max-w-xl min-w-[20rem] flex flex-col space-y-2 bg-bg-100 dark:bg-gray-800 p-4 rounded-lg absolute top-20">
                    {/* Larger input inside the modal */}
                    <Input
                        id="search-in-modal"
                        leftIcon={MagnifyingGlassIcon}
                        value={query}
                        onChange={handleSearch}
                        onKeyDown={handleKeyDown}
                        placeholder={modalPlaceholder}
                        className="text-lg md:text-xl bg-bg-100 dark:bg-gray-800"
                        textClassName={textClassName}
                        focus={false}
                        autoFocus
                    />

                    <SectionList
                        sections={filteredItems}
                        query={query}
                        onSelectItem={handleItemClick}
                        renderItem={renderItem}
                        isModal
                        firstDisplayed={firstDisplayed}
                    />
                </div>
            </Modal>
        </div>
    );
}
