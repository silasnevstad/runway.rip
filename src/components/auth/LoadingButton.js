"use client";
import React, { useState, useEffect, useRef } from 'react';
import Button from '@/components/atoms/Button';

export default function LoadingButton({ mode = 'sign-in', pending }) {
    const [message, setMessage] = useState('');
    const wasPending = useRef(false);

    useEffect(() => {
        if (!pending && wasPending.current) {
            const successText =
                mode === 'sign-up'
                    ? 'Signed up!'
                    : mode === 'magiclink'
                        ? 'Sent!'
                        : 'Signed in!';

            setMessage(successText);
            const timeout = setTimeout(() => setMessage(''), 1500);
            return () => clearTimeout(timeout);
        }
        wasPending.current = pending;
    }, [pending, mode]);

    const getButtonLabel = () => {
        if (message) return message;
        switch (mode) {
            case 'sign-up':
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
            className="mt-2"
            shape="rounded-xl"
            disabled={pending}
            loading={pending}
        >
            {getButtonLabel()}
        </Button>
    );
}
