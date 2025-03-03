'use client'
import React from 'react';
import AuthInputField from "@/components/auth/AuthInputField";

const AuthFormFields = ({ type, state }) => {
    return (
        <div className="flex flex-col w-full gap-4 mb-4">
            <AuthInputField
                label="Email"
                name="email"
                type="email"
                error={state?.errors?.email}
            />
            <AuthInputField
                label="Password"
                name="password"
                type="password"
                secure
                error={
                    state?.errors?.password && Array.isArray(state.errors.password)
                        ? state?.errors.password.join(", ")
                        : state?.errors.password
                }
            />
            {type === 'sign-up' && (
                <AuthInputField
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    secure
                    error={state?.errors?.confirmPassword}
                />
            )}
        </div>
    );
};

export default AuthFormFields;
