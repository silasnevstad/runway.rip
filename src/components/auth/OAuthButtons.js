"use client";
import React from 'react';
import OAuthButton from "@/components/auth/OAuthButton";
import { signinWithOAuth } from '@/app/actions/auth';
import { useToast } from "@/contexts/ToastProvider";

const OAuthButtons = ({ providers = [] }) => {
    const { addToast } = useToast();

    const handleOAuth = async (providerName) => {
        const { errors } = await signinWithOAuth(providerName);
        if (errors) {
            Object.values(errors).forEach((error) => {
                if (error) {
                    const message = Array.isArray(error) ? error.join(', ') : error;
                    addToast(message, { severity: "error" });
                }
            });
        }
    };

    if (!providers.length) return null;

    return (
        <div className="flex flex-col w-full gap-2">
            <div className="flex flex-col gap-3">
                {providers.map((provider) => (
                    <OAuthButton
                        key={provider.name}
                        provider={provider.name}
                        logoSrc={provider.logoSrc}
                        logoAlt={provider.logoAlt}
                        onClick={() => handleOAuth(provider.name)}
                    />
                ))}
            </div>
        </div>
    );
};

export default OAuthButtons;
