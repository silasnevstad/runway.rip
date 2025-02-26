import { useUser } from "@/contexts/UserContext";
import Avatar from "@/components/atoms/Avatar";
import Card from "@/components/atoms/Card";

export default function AccountCard({
    color = "gray",
    variant = "solid",
    borderRadius = "full",
    className = "",
    ...props
}) {
    const { user } = useUser();

    return (
        <Card
            color={color}
            variant={variant}
            borderRadius={borderRadius}
            className={`flex items-center gap-3 p-4 ${className}`}
            {...props}
        >
            <Avatar
                src={user?.avatar_url}
                alt={user?.username}
                size="lg"
                className="rounded-full"
            />
            <div>
                <p className="text-sm font-semibold">{user?.username}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                    {user?.email}
                </p>
            </div>
        </Card>
    );
}