"use client";
import React, { useState, useEffect, useRef } from 'react';
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

    return (
        <Button
            type="submit"
            className="mt-4"
            shape="rounded-xl"
            disabled={pending}
            loading={pending}
        >
            {pending ? 'Loading...' : getButtonLabel()}
        </Button>
    );
}
