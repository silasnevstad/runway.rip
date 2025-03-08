"use client";

import React from 'react';

import Button from '@/components/atoms/Button';

export default function LoadingButton({ mode = 'sign-in', pending }) {
    const getButtonLabel = () => {
        switch (mode) {
            case 'signup':
                return 'Sign Up';
            case 'magiclink':
                return 'Send Magic Link';
            default:
                return 'Sign In';
        }
    };

    const getLoadingLabel = () => {
        switch (mode) {
            case 'signup':
                return 'Signing Up...';
            case 'magiclink':
                return 'Sending Magic Link...';
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
