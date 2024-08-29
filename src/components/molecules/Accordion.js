"use client"

import { useState } from 'react';
import DropdownText from "@/components/atoms/DropdownText";
import { makeClassNameImportant } from "@/utils/utils";

const Accordion = ({
    className,
    items,
    oneOpen = false,
    borders = true
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
        <div className={`flex flex-col w-full ${makeClassNameImportant(className)}`}>
            {items.map((item, index) => (
                <DropdownText
                    key={index}
                    title={item.title}
                    content={item.content}
                    isOpen={openIndexes.includes(index)}
                    onToggle={() => toggleItem(index)}
                    border={borders}
                />
            ))}
        </div>
    );
};

export default Accordion;