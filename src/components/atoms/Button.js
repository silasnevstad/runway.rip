"use client"

import React from 'react';
import Image from "next/image";
import Loader from "@/components/atoms/Loader";
import Link from "next/link";

const Button = ({
    children,
    onClick,
    className = '',
    variant = 'primary', // variant like primary, soft, danger, underline, etc.
    shape = 'rounded-lg', // shape like rounded-lg, rounded-full, etc.
    fontSize = 'lg', // font size
    fontWeight = 'semibold', // font weight
    textColor = 'white', // text color
    backgroundColor = 'primary-500', // background color
    hoverBackgroundColor = 'primary-600', // hover background color
    icon: Icon = null, // optional icon component
    iconSrc = '', // optional icon image source
    iconAlt = '', // icon alt text for Image
    iconClassname = '', // icon classname
    border = false, // border variant
    shadow = false, // shadow variant
    loading = false, // loading state
    ping = false, // ping state
    grow = false, // grow state
    disabled = false, // disabled state
    href = '', // link href
    ...props
}) => {
    const baseStyles = `text-${fontSize} font-${fontWeight} py-2.5 px-12 ${shape} flex items-center justify-center gap-2 transition-colors duration-200 ease-in-out `;
    let variantStyles = `text-${textColor} bg-${backgroundColor} hover:bg-${hoverBackgroundColor} ${border ? 'border border-bg-500 dark:border-bg-300' : ''} ${shadow ? 'shadow-md' : ''}`;

    const iconElement = Icon ? <Icon className={`w-5 h-5 ${iconClassname}`} /> : iconSrc ? <Image src={iconSrc} alt={iconAlt} width={30} height={30} /> : null;

    const variantClasses = {
        primary: 'text-white bg-primary-600 hover:bg-primary-600',
        soft: `text-${textColor} bg-${backgroundColor}/25 hover:bg-${hoverBackgroundColor}/50`,
        danger: 'text-white bg-red-500 hover:bg-red-600',
        outline: 'text-gray-800 dark:text-gray-200 bg-transparent hover:bg-bg-100 border border-bg-500',
        underline: 'text-primary-500 bg-transparent hover:bg-transparent ' +
            'after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary-500 after:transition-all after:duration-300 after:ease-in-out after:transform after:scale-x-0 after:origin-left ' +
            'hover:after:scale-x-100',
        warning: 'text-white bg-yellow-500 hover:bg-yellow-600',
        success: 'text-white bg-green-500 hover:bg-green-600',
        info: 'text-white bg-blue-500 hover:bg-blue-600',
        dark: 'text-white bg-gray-800 hover:bg-gray-900',
        light: 'text-gray-800 bg-gray-100 hover:bg-gray-200',
        transparent: 'px-0 text-gray-800 bg-transparent hover:scale-105 hover:text-gray-900',
    };

    if (variantClasses[variant]) {
        variantStyles = variantClasses[variant];
    }

    if (href) {
        return (
            <Link
                href={href}
                className={`relative ${baseStyles} ${variantStyles} ${className} ${loading ? 'cursor-not-allowed' : 'cursor-pointer'} ${ping ? 'animate-ping' : ''}`}
                {...props}
            >
                {loading ?
                    (
                        <Loader className="text-primary-900" />
                    ) : (
                        <>
                            {iconElement}
                            {children}
                        </>
                    )
                }
            </Link>
        );
    }

    return (
        <button
            onClick={onClick}
            disabled={loading || disabled}
            className={`relative ${baseStyles} ${variantStyles} ${className} ${loading ? 'cursor-not-allowed' : 'cursor-pointer'} ${disabled ? 'opacity-50' : ''} ${ping ? 'animate-ping' : ''}`}
            {...props}
        >
            {loading ?
                (
                    <Loader className="text-primary-900" />
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

export default Button;
