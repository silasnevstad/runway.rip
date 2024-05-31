'use client'

import React, {useState} from 'react';
import Tooltip from "@/components/atoms/Tooltip";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const MenuItem = ({ item, horizontal }) => {
    const [isOpen, setIsOpen] = useState(false);
    const hasChildren = item.submenu && item.submenu.length > 0;
    const ItemIcon = item.icon;

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Tooltip text={item.tooltip} position={horizontal ? 'top' : 'right'}>
            {hasChildren ? (
                <div className={`flex items-center justify-between ${horizontal ? "flex-row" : "flex-col"}`}>
                    <button onClick={handleToggle} className="flex items-center gap-2 pl-2 py-2 pr-1 rounded-lg hover:bg-bg-300 dark:hover:bg-bg-700 w-full text-left">
                        {ItemIcon && <ItemIcon className="h-5 w-5 mr-2" />}
                        {item.name}
                        <ChevronDownIcon className={`h-5 w-5 ml-auto transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
                    </button>
                    {isOpen &&
                        <div className="flex-row w-full justify-between">
                            {/*vertical line*/}
                            <div className="h-full w-0.5 bg-bg-300 dark:bg-gray-500" />
                            <Menu menuItems={item.submenu} horizontal={horizontal} className="pl-2 p-0 w-full" />
                        </div>
                    }
                </div>
            ) : (
                <a href={item.href || "#"} className="flex items-center gap-2 p-2 rounded-lg hover:bg-bg-300 dark:hover:bg-bg-700">
                    {ItemIcon && <ItemIcon className="h-5 w-5" />}
                    {item.name}
                </a>
            )}
        </Tooltip>
    );
};


const Menu = ({ title, menuItems, className, horizontal = false }) => {
    return (
        <div className={`bg-bg-200 dark:bg-bg-900 rounded-lg p-2 flex ${horizontal ? "flex-row" : "flex-col"} ${className}`}>
            {title && <div className="font-semibold pl-1 mb-1">{title}</div>}
            {menuItems.map((item, index) => (
                <MenuItem key={index} item={item} horizontal={horizontal} />
            ))}
        </div>
    );
};

export default Menu;