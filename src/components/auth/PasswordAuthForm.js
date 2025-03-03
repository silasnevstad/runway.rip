'use client'
import React from 'react';
import { useFormState } from 'react-dom';
import { passwordSignin, passwordSignup } from '@/app/actions/auth';
import AuthFormFields from "@/components/auth/AuthFormFields";
import LoadingButton from "@/components/auth/LoadingButton";

const PasswordAuthForm = ({ mode = 'sign-in' }) => {
    const [state, action] = useFormState(mode === 'sign-in' ? passwordSignin : passwordSignup);

    return (
        <form className="flex flex-col w-full gap-2" action={action}>
            <AuthFormFields type={mode} state={state} />
            <LoadingButton mode={mode} />
        </form>
    );
};

export default PasswordAuthForm;
