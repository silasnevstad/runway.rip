import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { FaRegCreditCard, FaRegCircleUser, FaRightFromBracket } from "react-icons/fa6";

import Avatar from "@/components/atoms/Avatar";
import Button from "@/components/atoms/Button";
import { openBillingPortalSession } from "@/libs/stripe/portal";
import { BORDER_RADIUS, getTextSize, mergeClasses } from "@/utils/styling";
import appConfig from "@/config";
import { signout } from "@/app/actions/auth";
import AccountDropdown from "@/components/auth/AccountDropdown";

export default function AccountCard({
    user,
    profile,
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

    if (!user) {
        return <Button href="/signup" variant="soft" border borderRadius="full" size="sm">Sign Up</Button>;
    }
    const avatarSrc = profile?.image || user?.user_metadata?.avatar_url;
    const displayName = profile?.name || user?.user_metadata?.full_name || user?.email;

    const borderRadiusClass = BORDER_RADIUS[borderRadius] || BORDER_RADIUS.lg;

    const cardClasses = mergeClasses(
        "flex items-center gap-2 px-2",
        borderRadiusClass,
        bg && "bg-bg-50 dark:bg-gray-900 border border-gray-200 border-gray-900",
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
                <AccountDropdown
                    profile={profile}
                    isOpen={dropdownOpen}
                    onClose={() => setDropdownOpen(false)}
                />
            )}
        </div>
    );
}
