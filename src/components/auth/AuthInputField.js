'use client'
import React from 'react';
import Input from '@/components/atoms/Input';

const AuthInputField = ({ label, name, type = "text", secure = false, error }) => {
    return (
        <div className="flex flex-col gap-2">
            <Input label={label} id={name} name={name} type={type} secure={secure} />
            {error && <p className="text-red-500 font-semibold">{error}</p>}
        </div>
    );
};

export default AuthInputField;
