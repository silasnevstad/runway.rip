"use client";
import React from 'react';
import { useUser } from "@/contexts/UserContext";
import Card from "@/components/atoms/Card";

const UserForm = () => {
    const { user } = useUser();

    const displayName = user?.profile?.name || user?.user_metadata?.full_name;

    return (
        <div className="flex flex-col items-center gap-10 mt-10">
            <div className="flex flex-col items-center gap-4">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Account</h1>
            </div>

            <Card className="w-full max-w-md shadow-md rounded-lg p-6 gap-3">
                {user?.email && (
                    <>
                        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1">Email</p>
                        <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{user?.email}</p>
                    </>
                )}

                {displayName && (
                    <>
                        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1 mt-3">Display Name</p>
                        <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{displayName}</p>
                    </>
                )}
            </Card>
        </div>
    );
};

export default UserForm;
