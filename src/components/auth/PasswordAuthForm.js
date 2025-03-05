"use client";
import React, {useActionState} from 'react';
import AuthFormFields from "@/components/auth/AuthFormFields";
import LoadingButton from "@/components/auth/LoadingButton";
import { passwordSignin, passwordSignup } from '@/app/actions/auth';

const initialState = {
    errors: {},
}

const PasswordAuthForm = ({ mode = 'sign-in' }) => {
    const [state, action, pending] = useActionState(
        mode === 'sign-in' ? passwordSignin : passwordSignup, initialState
    );

    return (
        <form className="flex flex-col w-full gap-2" action={action}>
            <AuthFormFields type={mode} state={state} />
            <LoadingButton mode={mode} pending={pending} />
        </form>
    );
};

export default PasswordAuthForm;
