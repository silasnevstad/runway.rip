'use client'
import React from 'react';
import OAuthButtons from './OAuthButtons';

const defaultProviders = [
    { name: 'google', logoSrc: '/logos/google.png', logoAlt: 'Google' },
    // { name: 'facebook', logoSrc: '/logos/facebook.png', logoAlt: 'Facebook' },
    // { name: 'apple', logoSrc: '/logos/apple.png', logoAlt: 'Apple' },
    { name: 'github', logoSrc: '/logos/github.png', logoAlt: 'GitHub' },
];

const OAuthSection = ({ providers = defaultProviders }) => {
    return (
        <div className="flex flex-col w-full gap-2">
            <OAuthButtons providers={providers} />
        </div>
    );
};

export default OAuthSection;
