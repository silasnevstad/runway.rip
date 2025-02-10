'use client'

import React from 'react';
import { useFormState } from 'react-dom';
import {signup, signin, signinwithgoogle, signinwithgithub} from '@/app/actions/auth';
import AuthFormFields from '@/components/auth/AuthFormFields';
import LoadingButton from '@/components/auth/LoadingButton';
import SocialAuthButton from '@/components/auth/SocialAuthButton';
import Divider from "@/components/atoms/Divider";

export default function AuthForm({ type = 'sign-in' }) {
    const [state, action] = useFormState(type === 'sign-in' ? signin : signup);

    const handleGoogleLogin = async () => {
        await signinwithgoogle();
    };

    const handleGithubLogin = async () => {
        await signinwithgithub();
    }

    return (
        <>
            <form className="flex flex-col w-full gap-2" action={action}>
                <AuthFormFields type={type} state={state} />
                <LoadingButton isSignUp={type === 'sign-up'} />
                <Divider text="OR" />
            </form>
            <div className="flex flex-col w-full gap-3">
                <SocialAuthButton onClick={handleGoogleLogin} social="google" />
                <SocialAuthButton onClick={handleGithubLogin} social="github" text="Continue with Github" />
            </div>
        </>
    );
}
