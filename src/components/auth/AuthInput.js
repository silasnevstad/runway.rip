"use client";

import React from 'react';

import Input from '@/components/atoms/Input';
import { mergeClasses } from "@/utils/styling";

const AuthInput = ({
    color = "gray",
    variant = "solid",
    labelMode = "float",
    label,
    name,
    type = "text",
    secure = false,
    error,
    className = "",
    ...props
}) => {
    return (
        <div className={mergeClasses("flex flex-col gap-2", className)}>
            {error && <p className={`font-semibold text-red-500/90`}>{error}</p>}
            <Input
                color={color}
                variant={variant}
                labelMode={labelMode}
                label={label}
                id={name}
                name={name}
                type={type}
                secure={secure}
                {...props}
            />
        </div>
    );
};

export default AuthInput;
