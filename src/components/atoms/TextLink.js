"use client"

import React from 'react';
import Link from "next/link";
import { LinkIcon } from "@heroicons/react/24/outline";

const TextLink = ({
    children,
    href,
    className,
    icon = false,
    grow = false,
    fade = false,
    underline = false,
    underlineHeight = 'px',
    selected = false
}) => (
    <Link
        href={href}
        className={`relative flex items-center gap-1
        ${grow && "hover:transform hover:scale-105"} 
        ${fade && !selected && "transition-opacity opacity-50 hover:opacity-100"} 
        ${selected && "opacity-100 font-semibold"} 
        ${underline && `after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-${underlineHeight} after:bg-primary-500 after:transition-all after:duration-300 after:ease-in-out after:transform after:scale-x-0 after:origin-left hover:after:scale-x-100`}
        ${!underline && "ease-[cubic-bezier(0.25, 0.46, 0.45, 0.94)] duration-200"} 
        cursor-pointer 
        ${className}`}
    >
        {icon && <LinkIcon className="w-4 h-4 mr-1" />}
        {children}
    </Link>
);

export default TextLink;