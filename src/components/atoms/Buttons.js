"use client"

import React from 'react';
import Link from "next/link";
import Image from "next/image";
import Loader from "@/components/atoms/Loader";

const TextLink = ({ children, href, className }) => (
    <Link href={href} className={"hover:transform hover:scale-105 ease-[cubic-bezier(0.25, 0.46, 0.45, 0.94)] duration-200 " + className}>
        {children}
    </Link>
);

const Button = ({
    children,
    onClick,
    className = '',
    type = 'button', // button type (button, submit, reset)
    variant = '', // variant like primary, soft, danger, etc.
    shape = 'rounded-lg', // shape like rounded-lg, rounded-full, etc.
    textColor = 'text-white', // text color
    backgroundColor = 'bg-primary-500', // background color
    hoverBackgroundColor = 'hover:bg-primary-600', // hover background color
    icon: Icon = null, // optional icon component
    iconSrc = '', // optional icon image source
    iconAlt = '', // icon alt text for Image
    border = false, // border variant
    loading = false, // loading state
    ping = false, // ping state
    disabled = false, // disabled state
    ...props
}) => {
    const baseStyles = `font-bold py-2.5 px-12 ${shape} flex items-center justify-center gap-2 transition-colors duration-200 ease-in-out `;
    let variantStyles = `${textColor} ${backgroundColor} ${hoverBackgroundColor} ${border ? 'border-2 border-gray-500 dark:border-gray-600' : ''}`;

    const iconElement = Icon ? <Icon className="w-5 h-5" /> : iconSrc ? <Image src={iconSrc} alt={iconAlt} width={30} height={30} /> : null;

    const variantClasses = {
        primary: 'text-white bg-primary-500 hover:bg-primary-600',
        soft: 'text-primary-500 bg-primary-100 hover:bg-primary-200',
        danger: 'text-white bg-red-500 hover:bg-red-600',
        warning: 'text-white bg-yellow-500 hover:bg-yellow-600',
        success: 'text-white bg-green-500 hover:bg-green-600',
        info: 'text-white bg-blue-500 hover:bg-blue-600',
        dark: 'text-white bg-gray-800 hover:bg-gray-900',
        light: 'text-gray-800 bg-gray-100 hover:bg-gray-200',
        transparent: 'text-gray-800 bg-transparent hover:scale-105 hover:text-gray-900',
    };

    if (variantClasses[variant]) {
        variantStyles = variantClasses[variant];
    }

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={loading || disabled}
            className={`${baseStyles} ${variantStyles} ${className} ${loading ? 'cursor-not-allowed' : 'cursor-pointer'} ${disabled ? 'opacity-50' : ''}`}
            {...props}
        >
            {loading ?
                (
                    <Loader className="text-primary-100" />
                ) : (
                    <>
                        {iconElement}
                        {children}
                    </>
                )
            }
        </button>
    );
};

export {TextLink, Button};
