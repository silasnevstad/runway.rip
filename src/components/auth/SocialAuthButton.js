'use client'

import React from 'react';
import Button from '@/components/atoms/Button';
import Divider from '@/components/atoms/Divider';

const SocialAuthButton = ({
    text = 'Continue with Google',
    social = 'google',
    onClick,
}) => {
    return (
        <Button
            iconSrc={`/logos/${social}.png`}
            iconAlt={`${social.charAt(0).toUpperCase() + social.slice(1)} Icon`}
            iconPlacement="center"
            onClick={onClick}
            shape="rounded-lg"
            className="text-md font-regular border-bg-200 dark:border-bg-700 bg-bg-50 dark:bg-bg-800 hover:bg-bg-200 dark:hover:bg-gray-900 text-gray-900 dark:text-gray-100 text-opacity-70"
            border
        >
            {text}
        </Button>
    );
};

export default SocialAuthButton;
