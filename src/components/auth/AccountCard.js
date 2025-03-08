"use client";

import React, {useEffect, useState} from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { FaRegCreditCard, FaRegCircleUser, FaRightFromBracket } from "react-icons/fa6";

import Avatar from "@/components/atoms/Avatar";
import Button from "@/components/atoms/Button";
import { useUser } from "@/contexts/UserContext";
import { createBillingPortalSession } from "@/libs/stripe/portal";
import { signout } from "@/app/actions/auth";
import { BORDER_RADIUS, getTextSize, mergeClasses } from "@/utils/styling";

export default function AccountCard({
    size = "sm",
    borderRadius = "lg",
    padding = 8,
    showDisplayName = false,
    showAvatar = true,
    bg = false,
    className = "",
    avatarProps = {},
    ...props
}) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [billingPortalUrl, setBillingPortalUrl] = useState(null);
    const { user } = useUser();

    useEffect(() => {
        const createBillingPortalUrl = async () => {
            if (user?.profile?.customer_id) {
                return await createBillingPortalSession({
                    customerId: user.profile.customer_id,
                    returnUrl: window.location.href
                });
            } else {
                return null;
            }
        }
        createBillingPortalUrl().then((url) => {
            setBillingPortalUrl(url);
        });
    }, [user]);

    if (!user) return null;
    const avatarSrc = user?.profile?.image || user?.user_metadata?.avatar_url;
    const displayName = user?.profile?.name || user?.user_metadata?.full_name || user?.email;

    const borderRadiusClass = BORDER_RADIUS[borderRadius] || BORDER_RADIUS.lg;

    const cardClasses = mergeClasses(
        "flex items-center gap-2 px-2",
        borderRadiusClass,
        bg && "bg-bg-50 dark:bg-gray-900 border border-transparent",
        bg && dropdownOpen && "border border-bg-200 dark:border-gray-800/50",
        className,
    );

    return (
        <div className="relative">
            <div
                className={cardClasses}
                style={{ padding: bg ? `${padding}px` : 0 }}
                onClick={() => setDropdownOpen(!dropdownOpen)}
                {...props}
            >
                {showAvatar && (
                    <Avatar src={avatarSrc} alt={displayName} size={size} {...avatarProps} />
                )}
                {showDisplayName && (
                    <div className="pr-0">
                        <p className={`${getTextSize(size)} text-gray-700 dark:text-gray-400`}>{displayName}</p>
                    </div>
                )}
                <ChevronDownIcon
                    className={`w-5 h-5 text-gray-700 dark:text-gray-400 transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`}
                />
            </div>
            {dropdownOpen && (
                <div className="absolute right-0 mt-2 flex gap-0.5 flex-col w-full min-w-48 bg-bg-50 dark:bg-gray-900  rounded-lg shadow-lg z-10">
                    <Button
                        href="/account"
                        variant="soft"
                        color="gray"
                        size="md"
                        className="text-left justify-start py-1.5 m-1 mb-0 text-sm bg-bg-50 dark:bg-gray-900"
                        icon={FaRegCircleUser}
                    >
                        Account
                    </Button>
                    {billingPortalUrl && (
                        <Button
                            href={billingPortalUrl}
                            variant="soft"
                            color="gray"
                            size="md"
                            className="text-left justify-start py-1.5 m-1 mb-0 text-sm bg-bg-50 dark:bg-gray-900"
                            icon={FaRegCreditCard}
                        >
                            Billing
                        </Button>
                    )}
                    <Button
                        onClick={async () => {
                            await signout();
                        }}
                        variant="soft"
                        color="gray"
                        className="text-left justify-start py-1.5 m-1 mt-0 text-sm bg-bg-50 dark:bg-gray-900"
                        icon={FaRightFromBracket}
                    >
                        Logout
                    </Button>
                </div>
            )}
        </div>
    );
}
