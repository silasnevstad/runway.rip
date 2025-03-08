"use client";

import React, { useActionState, useEffect } from 'react';

import AuthInput from "@/components/auth/AuthInput";
import LoadingButton from "@/components/auth/LoadingButton";
import { passwordSignin, passwordSignup } from '@/app/actions/auth';
import { useToast } from "@/contexts/ToastProvider";

const initialState = {
    errors: {
        email: null,
        password: null,
        confirmPassword: null,
    },
    message: null,
};

const PasswordAuthForm = ({ mode = 'sign-in' }) => {
    const [state, action, pending] = useActionState(
        mode === 'sign-in' ? passwordSignin : passwordSignup,
        initialState
    );
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
        <form className="flex flex-col w-full gap-5" action={action}>
            <AuthInput label="Email" name="email" type="email" />
            <AuthInput label="Password" name="password" type="password" secure />
            {mode === 'signup' && (
                <AuthInput label="Confirm Password" name="confirmPassword" type="password" secure />
            )}
            <LoadingButton mode={mode} pending={pending} />
        </form>
    );
};

export default PasswordAuthForm;
