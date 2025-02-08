"use client";

import { useState } from "react";
import DropdownText from "@/components/atoms/DropdownText";
import { mergeClasses } from "@/utils/classNames";

const Accordion = ({
    className,
    items,
    oneOpen = false,
    borders = true,
    level = 0, // level is used to automatically indent nested accordions.
}) => {
    const [openIndexes, setOpenIndexes] = useState([]);

    const toggleItem = (index) => {
        setOpenIndexes((prevIndexes) => {
            if (oneOpen) {
                return prevIndexes.includes(index) ? [] : [index];
            } else {
                return prevIndexes.includes(index)
                    ? prevIndexes.filter((i) => i !== index)
                    : [...prevIndexes, index];
            }
        });
    };

    return (
        <div
            // Compute margin and width dynamically based on the nesting level.
            style={{
                marginLeft: `${level * 20}px`,
                width: `calc(100% - ${level * 20}px)`,
            }}
            className={mergeClasses("flex flex-col", className)}
        >
            {items.map((item, index) => {
                // If the item has nested `items`, render a nested Accordion.
                let content;
                if (item.items) {
                    content = (
                        <>
                            {item.content && <div className="mb-2">{item.content}</div>}
                            <Accordion
                                items={item.items}
                                oneOpen={oneOpen}
                                borders={borders}
                                level={level + 1}
                            />
                        </>
                    );
                } else {
                    content = item.content;
                }

                return (
                    <DropdownText
                        key={index}
                        title={item.title}
                        content={content}
                        isOpen={openIndexes.includes(index)}
                        onToggle={() => toggleItem(index)}
                        border={index < items.length - 1 && borders}
                    />
                );
            })}
        </div>
    );
};

export default Accordion;