"use client";

import React, { useEffect, useActionState } from 'react';

import AuthInput from "@/components/auth/AuthInput";
import LoadingButton from "@/components/auth/LoadingButton";
import { passwordlessSignin } from '@/app/actions/auth';
import { useToast } from "@/contexts/ToastProvider";

const initialState = {
    errors: {},
    message: null,
};

const PasswordlessAuthForm = () => {
    const [state, action, pending] = useActionState(passwordlessSignin, initialState);
    const { addToast } = useToast();

    useEffect(() => {
        if (state.errors && Object.keys(state.errors).length > 0) {
            Object.values(state.errors).forEach((error) => {
                if (error) {
                    const message = Array.isArray(error) ? error.join(', ') : error;
                    addToast(message, { severity: "error" });
                }
            });
        }
        if (state.message) {
            addToast(state.message, { severity: "info" });
        }
    }, [state.errors, state.message, addToast]);

    return (
        <form className="flex flex-col w-full gap-4" action={action}>
            <AuthInput id="email" label="Email" name="email" type="email" />
            <LoadingButton mode="magiclink" pending={pending} />
        </form>
    );
};

export default PasswordlessAuthForm;
