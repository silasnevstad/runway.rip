"use client";
import React from 'react';
import { signout } from "@/app/actions/auth";
import Button from "@/components/atoms/Button";
import AccountCard from "@/components/auth/AccountCard";

const UserForm = () => {
    return (
        <div className="flex flex-col items-center gap-10 mt-10">
            <AccountCard />
            <Button
                variant="soft"
                size="sm"
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
