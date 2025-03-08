"use client";

import React from 'react';

import Divider from "@/components/atoms/Divider";
import PasswordAuthForm from "@/components/auth/PasswordAuthForm";
import PasswordlessAuthForm from "@/components/auth/PasswordlessAuthForm";
import OAuthButtons from "@/components/auth/OAuthButtons";
import appConfig, { availableOAuthProviders } from "@/config";

const AuthForm = ({ mode = 'sign-in' }) => {
    const authMethods = appConfig.auth.methods;
    const oauthProviders = availableOAuthProviders.filter(provider => authMethods.includes(provider.name));
    const forms = [];
    if (authMethods.includes('magiclink')) {
        forms.push(<PasswordlessAuthForm key="magiclink" />);
    }
    if (authMethods.includes('password')) {
        forms.push(<PasswordAuthForm key="password" mode={mode} />);
    }
    if (oauthProviders.length > 0) {
        if (forms.length > 0) {
            forms.push(<Divider key="divider" text="OR" margin={30}/>);
        }
        forms.push(<OAuthButtons key="oauth" providers={oauthProviders} />);
    }
    return (
        <div className="flex flex-col w-full gap-2">
            {forms}
        </div>
    );
};

export default AuthForm;
