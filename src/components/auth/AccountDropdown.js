import React from "react";
import { FaRegCircleUser, FaRegCreditCard, FaRightFromBracket } from "react-icons/fa6";

import Button from "@/components/atoms/Button";
import { mergeClasses } from "@/utils/styling";
import { signout } from "@/app/actions/auth";
import { openBillingPortalSession } from "@/libs/stripe/portal";
import appConfig from "@/config";


export default function AccountDropdown({
    profile,
    isOpen = false,
    className = "",
}) {
    const handleLogout = async () => {
        await signout();
    };

    const handleBillingPortal = async () => {
        console.log("🚧 Billing portal is not enabled.", profile.customer_id);
        await openBillingPortalSession({ customerId: profile.customer_id });
    }

    const dropdownClasses = mergeClasses(
        "absolute right-0 mt-2 flex gap-0.5 flex-col w-full min-w-48",
        "bg-bg-50 dark:bg-gray-900 rounded-lg shadow-lg z-10",
        isOpen && "border border-bg-200 dark:border-gray-800/50",
        className,
    );

    if (!isOpen) {
        return null;
    }

    return (
        <div className={dropdownClasses}>
            <Button
                href="/account"
                variant="soft"
                color="gray"
                size="md"
                className="text-left justify-start py-1.5 m-1 mb-0 text-sm font-normal bg-bg-50 dark:bg-gray-900"
                icon={FaRegCircleUser}
            >
                Account
            </Button>
            {appConfig.payment.enabled && (
                <Button
                    onClick={handleBillingPortal}
                    variant="soft"
                    color="gray"
                    size="md"
                    className="text-left justify-start py-1.5 m-1 mb-0 text-sm font-normal bg-bg-50 dark:bg-gray-900"
                    icon={FaRegCreditCard}
                >
                    Billing
                </Button>
            )}
            <Button
                onClick={handleLogout}
                variant="soft"
                color="gray"
                className="text-left justify-start py-1.5 m-1 mt-0 text-sm font-normal bg-bg-50 dark:bg-gray-900"
                icon={FaRightFromBracket}
            >
                Logout
            </Button>
        </div>
    );
}