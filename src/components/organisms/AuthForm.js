'use client'

import React from 'react';
import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";
import { UserIcon, KeyIcon } from "@heroicons/react/24/solid";
import Divider from "@/components/atoms/Divider";
import { useFormState, useFormStatus } from 'react-dom';
import { signup, signin, signinwithgoogle } from '@/app/actions/auth'

const LoadingButton = ({
    'sign-up': isSignUp
}) => {
    const { pending } = useFormStatus()

    return (
        <Button type="submit" className="mt-2" shape="rounded-xl" disabled={pending} loading={pending}>
            {isSignUp ? 'Sign Up' : 'Sign In'}
        </Button>
    );
}

export default function AuthForm({
    type = 'sign-in' // either sign-in or sign-up
}) {
    const [state, action] = useFormState(type === 'sign-in' ? signin : signup);
    const { pending } = useFormStatus();

    const loginWithGoogle = async () => {
        await signinwithgoogle();
    }

    return (
        <form className="flex flex-col w-full gap-2" action={action}>
            <div className="flex flex-col w-full gap-4 mb-4">
                <div className="flex flex-col w-full gap-4">
                    {state?.errors.email && <p className="text-red-500 font-semibold">{state.errors.email}</p>}
                    <Input
                        label="Email"
                        id="email"
                        name="email"
                        type="email"
                    />
                </div>
                <div className="flex flex-col w-full gap-4">
                    {state?.errors.password && (
                        <div>
                            <p className="text-red-500 font-semibold">Password must {state.errors.password.map((error, index) => (
                                `${index === 0 ? error.charAt(0).toLowerCase() + error.slice(1) : error}${index === state.errors.password.length - 1 ? '' : index === state.errors.password.length - 2 ? ' and ' : ', '}`
                            ))}
                            </p>
                        </div>
                    )}
                    <Input
                        label="Password"
                        id="password"
                        name="password"
                        type="password"
                        secure
                    />
                </div>
                {type === 'sign-up' && (
                    <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        label="Confirm Password"
                        secure
                    />
                )}
            </div>
            <LoadingButton sign-up={type === 'sign-up'} />
            <Divider text="OR" />
            <Button
                iconSrc="/logos/google.png"
                iconAlt="Google Icon"
                iconPlacement={'center'}
                onClick={loginWithGoogle}
                shape="rounded-lg"
                className="text-lg font-regular bg-bg-50 dark:bg-bg-800 hover:bg-bg-200 dark:hover:bg-gray-900 text-gray-900 dark:text-gray-100 text-opacity-70"
                border
            >
                Continue with Google
            </Button>
        </form>
    );
}