'use client';

import React from 'react';
import OAuthButton from './OAuthButton';
import Divider from '@/components/atoms/Divider';
import { signinWithOAuth } from '@/app/actions/auth';

const OAuthButtons = ({ providers = [] }) => {
    const handleOAuth = async (provider) => {
        await signinWithOAuth(provider);
    };

    if (!providers.length) return null;

    return (
        <div className="flex flex-col w-full gap-2">
            <Divider text="OR" />
            <div className="flex flex-col gap-2">
                {providers.map((provider) => (
                    <OAuthButton
                        key={provider.name}
                        provider={provider.name}
                        logoSrc={provider.logoSrc}
                        logoAlt={provider.logoAlt}
                        onClick={handleOAuth}
                    />
                ))}
            </div>
        </div>
    );
};

export default OAuthButtons;
