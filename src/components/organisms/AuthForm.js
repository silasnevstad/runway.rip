'use client'

import React from 'react';
import Input from "@/components/atoms/Input";
import { Button } from "@/components/atoms/Buttons";
import { UserIcon, KeyIcon } from "@heroicons/react/24/solid";
import { DividerWithText } from "@/components/atoms/Divider";
import { useFormState, useFormStatus } from 'react-dom'
import { signup, signin } from '@/app/actions/auth'

const LoadingButton = () => {
    const { pending } = useFormStatus()

    return (
        <Button type="submit" className="mt-2" shape="rounded-xl" disabled={pending} loading={pending}>
            Sign Up
        </Button>
    );
}

export default function AuthForm({
    type // 'sign-in' or 'sign-up'
}) {
    const [state, action] = useFormState(type === 'sign-in' ? signin : signup, undefined);

    return (
        <form className="flex flex-col w-full gap-2" action={action}>
            <div className="flex flex-col w-full gap-4 mb-4">
                <Input
                    leftIcon={UserIcon}
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                />
                {state?.errors.email && <p className="text-red-500 font-semibold">{state.errors.email}</p>}
                <Input
                    leftIcon={KeyIcon}
                    id="password"
                    name="password"
                    // type="password"
                    placeholder="Password"
                    secure
                />
                {state?.errors.password && (
                    <div>
                        <p className="text-red-500 font-semibold">Password must contain:</p>
                        <ul>
                            {state.errors.password.map((error) => (
                                <li key={error}>- {error}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {type === 'sign-up' && (
                    <Input
                        leftIcon={KeyIcon}
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        secure
                    />
                )}
            </div>
            <LoadingButton />
            <DividerWithText text="OR" />
            <Button
                iconSrc="/logos/google.png"
                iconAlt="Google Icon"
                onClick={null}
                className="hover:shadow-md hover:-translate-y-0.5 transition-transform duration-200 ease-in-out"
                shape="rounded-xl"
                backgroundColor="bg-bg-50 dark:bg-bg-800"
                hoverBackgroundColor="hover:bg-bg-100 dark:hover:bg-bg-900"
                textColor="text-gray-900 dark:text-gray-100"
                border
            >
                {type === 'sign-in' ? 'Continue with Google' : 'Sign Up with Google'}
            </Button>
        </form>
    );
}