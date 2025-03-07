import React from "react";
import { useUser } from "@/contexts/UserContext";
import Avatar from "@/components/atoms/Avatar";
import Card from "@/components/atoms/Card";
import {BORDER_RADIUS, getTextSize, mergeClasses} from "@/utils/styling";

export default function AccountCard({
    size = "sm",
    color = "gray",
    variant = "soft",
    borderRadius = "full",
    className = "",
    ...props
}) {
    const { user } = useUser();
    const borderRadiusClass = BORDER_RADIUS[borderRadius] || BORDER_RADIUS.full;

    const getPadding = (size) => {
        switch (size) {
            case "sm":
                return 4;
            case "md":
                return 5;
            case "lg":
                return 6;
            case "xl":
                return 8;
            default:
                return 3;
        }
    };

    if (!user) return null;

    const avatarSrc = user?.profile?.image || user?.user_metadata?.avatar_url;
    const displayName = user?.profile?.name || user?.user_metadata?.full_name || user?.email;

    return (
        <Card
            color={color}
            variant={variant}
            borderRadius={borderRadius}
            className={mergeClasses("flex items-center gap-2", className)}
            padding={getPadding(size)}
            {...props}
            hoverBg
        >
            <Avatar src={avatarSrc} alt={displayName} size={size} className={borderRadiusClass} />
            <div className="pr-2">
                <p className={`${getTextSize(size)} text-gray-700 dark:text-gray-400`}>{displayName}</p>
            </div>
        </Card>
    );
}
