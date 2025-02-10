'use client'
import React from 'react';
import Button from '@/components/atoms/Button';
import { useFormStatus } from 'react-dom';

const LoadingButton = ({ isSignUp }) => {
    const { pending } = useFormStatus();
    return (
        <Button type="submit" className="mt-2" shape="rounded-xl" disabled={pending} loading={pending}>
            {isSignUp ? 'Sign Up' : 'Sign In'}
        </Button>
    );
};

export default LoadingButton;
