"use client";
import React, { useEffect, useActionState } from 'react';
import { passwordlessSignin } from '@/app/actions/auth';
import { useToast } from "@/contexts/ToastProvider";
import LoadingButton from "@/components/auth/LoadingButton";
import Input from "@/components/atoms/Input";

const initialState = {
    errors: {},
}

const PasswordlessAuthForm = () => {
    const [state, action, pending] = useActionState(passwordlessSignin, initialState);
    const { addToast } = useToast();

    // any time the state changes, check if there are any errors
    useEffect(() => {
        if (state?.errors) {
            addToast(state.errors.message || "An error occurred. Please try again.", {
                severity: "error",
            });
        }
    }, [state, addToast]);

    return (
        <form className="flex flex-col w-full gap-2" action={action}>
            <Input
                id="email"
                label="Email"
                name="email"
                type="email"
            />
            <LoadingButton mode="magiclink" pending={pending} />
        </form>
    );
};

export default PasswordlessAuthForm;
