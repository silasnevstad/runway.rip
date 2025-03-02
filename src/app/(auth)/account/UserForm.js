"use client";
import React from 'react';
import { useUser } from "@/contexts/UserContext";
import { signout } from "@/app/actions/auth";
import Button from "@/components/atoms/Button";

const UserForm = () => {
    const { user } = useUser();

    console.log(user);

    return (
        <div className="flex flex-row gap-10 justify-between w-3/5 mt-10">
            <Button
                variant="primary"
                onClick={async () => {
                    await signout();
                }}
            >
                Sign Out
            </Button>
        </div>
    );
};

export default UserForm;
