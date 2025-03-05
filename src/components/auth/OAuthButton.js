"use client";
import React from 'react';
import Image from 'next/image';
import Button from '@/components/atoms/Button';

const OAuthButton = ({ provider, logoSrc, logoAlt, onClick }) => {
    return (
        <Button
            onClick={() => onClick(provider)}
            borderRadius="lg"
            className="text-md font-regular border-bg-200 dark:border-bg-700 bg-bg-50 dark:bg-bg-800 hover:bg-bg-200 dark:hover:bg-gray-900 text-gray-900 dark:text-gray-100 text-opacity-70"
            border
        >
            <Image
                src={logoSrc}
                alt={logoAlt || `${provider} Icon`}
                width={20}
                height={20}
                className="w-5 h-5"
            />
            Continue with {provider.charAt(0).toUpperCase() + provider.slice(1)}
        </Button>
    );
};

export default OAuthButton;
