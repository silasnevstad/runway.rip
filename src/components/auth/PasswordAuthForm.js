'use client'
import React from 'react';
import { useFormState } from 'react-dom';
import { signin, signup } from '@/app/actions/auth';
import AuthFormFields from './AuthFormFields';
import LoadingButton from './LoadingButton';

const PasswordAuthForm = ({ mode = 'sign-in' }) => {
    const [state, action] = useFormState(mode === 'sign-in' ? signin : signup);

    return (
        <form className="flex flex-col w-full gap-2" action={action}>
            <AuthFormFields type={mode} state={state} />
            <LoadingButton mode={mode} />
        </form>
    );
};

export default PasswordAuthForm;
