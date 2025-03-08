"use client";

import React from 'react';
import Image from 'next/image';

import Button from '@/components/atoms/Button';

const OAuthButton = ({ provider, logoSrc, logoAlt, onClick }) => {
    return (
        <Button
            onClick={() => onClick(provider)}
            borderRadius="lg"
            color="bg"
            variant="soft"
        >
            <Image
                src={logoSrc}
                alt={logoAlt || `${provider} Icon`}
                width={22}
                height={22}
                className="mr-0.5"
            />
            Continue with {provider.charAt(0).toUpperCase() + provider.slice(1)}
        </Button>
    );
};

export default OAuthButton;
