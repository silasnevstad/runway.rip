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
    underlineHeight = '1px',
    selected = false
}) => (
    <Link
        href={href}
        className={`
            relative flex items-center gap-1
            ${grow ? "hover:transform hover:scale-101" : ""}
            ${fade && !selected ? "transition-opacity opacity-50 hover:opacity-100" : ""}
            ${selected ? "opacity-100 font-semibold" : ""}
            ${underline ? "group" : "ease-[cubic-bezier(0.25, 0.46, 0.45, 0.94)] duration-200"}
            cursor-pointer 
            ${className}
        `}
    >
        {icon && <LinkIcon className="w-4 h-4 mr-1" />}
        <span className="relative">
            {children}
            {underline && (
                <span
                    className="absolute left-0 bottom-0 w-full bg-primary-500 transform origin-left scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"
                    style={{ height: underlineHeight }}
                />
            )}
        </span>
    </Link>
);

export default TextLink;