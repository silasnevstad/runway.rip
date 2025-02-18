'use client'

import React from 'react';
import { useUser } from "@/contexts/UserContext";

const UserForm = () => {
    const { user } = useUser();

    console.log(user);

    return (
        <div className="flex flex-row gap-10 justify-between w-3/5 mt-10">
        </div>
    );
};

export default UserForm;
