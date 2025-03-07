"use client";
import React from 'react';
import { signout } from "@/app/actions/auth";
import Button from "@/components/atoms/Button";
import AccountCard from "@/components/auth/AccountCard";
import { createBillingPortalSession } from "@/libs/stripe/portal";
import {useUser} from "@/contexts/UserContext";
import {redirect} from "next/navigation";

const UserForm = () => {
    const { user } = useUser();

    const handleBillingPortal = async () => {
        console.log('user', user);
        const url = await createBillingPortalSession({ customerId: user.profile.customer_id, returnUrl: window.location.href });

        if (url) {
            redirect(url);
        }
    }

    return (
        <div className="flex flex-col items-center gap-10 mt-10">
            <AccountCard />
            <Button
                variant="soft"
                size="sm"
                onClick={handleBillingPortal}
            >
                Manage Subscription
            </Button>
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
