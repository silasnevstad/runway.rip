'use client';

import React from 'react';
import PasswordAuthForm from './PasswordAuthForm';
import PasswordlessAuthForm from './PasswordlessAuthForm';
import OAuthSection, { defaultOAuthProviders } from './OAuthSection';
import appConfig from "@/config";

const AuthForm = ({ mode = 'sign-in' }) => {
    const authMethods = appConfig.authMethods;
    const oauthProviders = defaultOAuthProviders.filter(provider => authMethods.includes(provider.name));
    const forms = [];
    if (authMethods.includes('magiclink')) {
        forms.push(<PasswordlessAuthForm key="magiclink" />);
    }
    if (authMethods.includes('password')) {
        forms.push(<PasswordAuthForm key="password" mode={mode} />);
    }
    if (oauthProviders.length > 0) {
        forms.push(<OAuthSection key="oauth" providers={oauthProviders} />);
    }
    return (
        <div className="flex flex-col w-full gap-2">
            {forms}
        </div>
    );
};

export default AuthForm;
