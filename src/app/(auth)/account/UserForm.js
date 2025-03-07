"use client";
import React, { useState, useEffect } from 'react';
import { signout } from "@/app/actions/auth";
import Button from "@/components/atoms/Button";
import AccountCard from "@/components/auth/AccountCard";
import { createBillingPortalSession } from "@/libs/stripe/portal";
import { useUser } from "@/contexts/UserContext";

const UserForm = () => {
    const { user } = useUser();
    const [billingPortalUrl, setBillingPortalUrl] = useState(null);

    useEffect(() => {
        const fetchBillingPortalUrl = async () => {
            if (user?.profile?.customer_id) {
                const url = await createBillingPortalSession({
                    customerId: user.profile.customer_id,
                    returnUrl: window.location.href
                });
                setBillingPortalUrl(url);
            }
            else {
                setBillingPortalUrl(null);
            }
        }

        fetchBillingPortalUrl();
    }, [user]);

    return (
        <div className="flex flex-col items-center gap-10 mt-10">
            <AccountCard />
            <Button
                variant="soft"
                size="sm"
                href={billingPortalUrl}
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
