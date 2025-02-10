'use client'
import React from 'react';
import PasswordAuthForm from './PasswordAuthForm';
import PasswordlessAuthForm from './PasswordlessAuthForm';
import OAuthSection from './OAuthSection';

const AuthForm = ({ method = 'password', mode = 'sign-in' }) => {
    switch (method) {
        case 'passwordless':
            return <PasswordlessAuthForm />;
        case 'oauth':
            return <OAuthSection />;
        case 'password':
        default:
            return <PasswordAuthForm mode={mode} />;
    }
};

export default AuthForm;
