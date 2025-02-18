'use client'
import React from 'react';
import OAuthButtons from './OAuthButtons';
import appConfig from "@/config";

export const defaultOAuthProviders = [
    { name: 'google', logoSrc: '/logos/google.png', logoAlt: 'Google' },
    { name: 'apple', logoSrc: '/logos/apple.png', logoAlt: 'Apple' },
    { name: 'github', logoSrc: '/logos/github.png', logoAlt: 'GitHub' },
];

const OAuthSection = () => {
    const providers = defaultOAuthProviders.filter(provider => appConfig.authMethods.includes(provider.name));
    return (
        <div className="flex flex-col w-full gap-2">
            <OAuthButtons providers={providers} />
        </div>
    );
};

export default OAuthSection;
