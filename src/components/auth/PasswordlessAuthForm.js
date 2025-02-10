'use client'
import React from 'react';
import { useFormState } from 'react-dom';
import Input from '@/components/atoms/Input';
import Button from '@/components/atoms/Button';
import { passwordlessSignin } from '@/app/actions/auth';

const PasswordlessAuthForm = () => {
    const [state, action] = useFormState(passwordlessSignin);

    return (
        <form className="flex flex-col w-full gap-2" action={action}>
            <div className="flex flex-col w-full gap-4 mb-4">
                <Input label="Email" id="email" name="email" type="email" />
                {state?.errors?.email && <p className="text-red-500 font-semibold">{state.errors.email}</p>}
            </div>
            <Button type="submit" className="mt-2" shape="rounded-xl">
                Send Magic Link
            </Button>
        </form>
    );
};

export default PasswordlessAuthForm;
