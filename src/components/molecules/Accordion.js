"use client";
import React, { useState } from "react";
import DropdownItem from "@/components/atoms/DropdownItem";
import { mergeClasses } from "@/utils/styling";

export default function Accordion({
    className,
    items,
    oneOpen = false,
    level = 0,
    dropdownProps = {},
}) {
    const [openIndexes, setOpenIndexes] = useState([]);

    const toggleItem = (index) => {
        setOpenIndexes((prev) => {
            if (oneOpen) {
                return prev.includes(index) ? [] : [index];
            }
            return prev.includes(index)
                ? prev.filter((i) => i !== index)
                : [...prev, index];
        });
    };

    return (
        <div
            style={{
                marginLeft: `${level * 20}px`,
                width: `calc(100% - ${level * 20}px)`
            }}
            className={mergeClasses("flex flex-col", className)}
        >
            {items.map((item, index) => {
                let content;
                if (item.items) {
                    content = (
                        <>
                            {item.content && <div className="mb-2">{item.content}</div>}
                            <Accordion
                                items={item.items}
                                oneOpen={oneOpen}
                                level={level + 1}
                                dropdownProps={dropdownProps}
                            />
                        </>
                    );
                } else {
                    content = item.content;
                }
                return (
                    <DropdownItem
                        key={index}
                        header={item.title}
                        isOpen={openIndexes.includes(index)}
                        onToggle={() => toggleItem(index)}
                        {...dropdownProps}
                    >
                        {content}
                    </DropdownItem>
                );
            })}
        </div>
    );
}
