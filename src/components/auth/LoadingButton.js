"use client";

import React from 'react';

import Button from '@/components/atoms/Button';

export default function LoadingButton({ mode = 'sign-in', pending }) {
    const getButtonLabel = () => {
        switch (mode) {
            case 'sign-up':
                return 'Sign Up';
            case 'magiclink':
                return 'Send Magic Link';
            case 'sign-in':
                return 'Sign In';
            default:
                return 'Sign In';
        }
    };

    const getLoadingLabel = () => {
        switch (mode) {
            case 'sign-up':
                return 'Signing Up...';
            case 'magiclink':
                return 'Sending Magic Link...';
            case 'sign-in':
                return 'Signing In...';
            default:
                return 'Signing In...';
        }
    }

    return (
        <Button
            type="submit"
            className="mt-4"
            shape="rounded-xl"
            disabled={pending}
            loading={pending}
        >
            {pending ? getLoadingLabel() : getButtonLabel()}
        </Button>
    );
}
