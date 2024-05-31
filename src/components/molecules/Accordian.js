"use client"
import React, { useState } from 'react';
import DropdownText from "@/components/atoms/DropdownText";

const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleItem = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="flex flex-col w-full">
            {items.map((item, index) => (
                <div key={index} onClick={() => toggleItem(index)}>
                    <DropdownText
                        title={item.title}
                        content={item.description}
                        isOpen={index === activeIndex}
                        setIsOpen={() => toggleItem(index)}
                    />
                </div>
            ))}
        </div>
    );
};

export default Accordion;