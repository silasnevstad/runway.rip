"use client";
import React from 'react';
import Divider from '@/components/atoms/Divider';
import OAuthButton from "@/components/auth/OAuthButton";
import { signinWithOAuth } from '@/app/actions/auth';
import { useToast } from "@/contexts/ToastProvider";

const OAuthButtons = ({ providers = [] }) => {
    const { addToast } = useToast();

    const handleOAuth = async (provider) => {
        const { errors } = await signinWithOAuth(provider);
        if (errors && errors.message) {
            addToast(errors.message, { severity: "error" });
        }
    };

    if (!providers.length) return null;

    return (
        <div className="flex flex-col w-full gap-2">
            <Divider text="OR" margin={30} />
            <div className="flex flex-col gap-3">
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
