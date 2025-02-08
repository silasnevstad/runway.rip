import React from "react";
import Avatar from "@/components/atoms/Avatar";

export default function AvatarList({
    avatars = [],
    direction = "horizontal",    // "horizontal" | "vertical"
    overlap = true,             // If true, apply negative margin to overlap
    maxVisible = 5,             // Max # of avatars to show before the last is "+X more"
    sharedAvatarProps = {},     // Common props for each <Avatar>
    className = "",
    ...props
}) {
    const isHorizontal = direction === "horizontal";
    const containerClasses = isHorizontal ? "flex flex-row" : "flex flex-col";
    const overlapClass = overlap ? (isHorizontal ? "-ml-4" : "-mt-4") : "";

    let displayedAvatars = avatars;
    let hiddenCount = 0;

    // If we exceed maxVisible, show one slot as "+X more"
    if (avatars.length > maxVisible) {
        displayedAvatars = avatars.slice(0, maxVisible - 1);
        hiddenCount = avatars.length - (maxVisible - 1);
    }

    return (
        <div className={`${containerClasses} ${className}`} {...props}>
            {displayedAvatars.map((avatar, index) => {
                const isFirst = index === 0;
                const marginClass = isFirst ? "" : overlapClass;

                // avatar may contain src/alt or letter
                if (avatar.src && avatar.alt) {
                    return (
                        <Avatar
                            key={index}
                            src={avatar.src}
                            alt={avatar.alt}
                            className={marginClass}
                            {...sharedAvatarProps}
                        />
                    );
                } else {
                    // Use fallback letter avatar
                    const letter = avatar.letter || "?";
                    return (
                        <Avatar
                            key={index}
                            alt={letter}
                            fallbackLetter={letter}
                            className={marginClass}
                            {...sharedAvatarProps}
                        />
                    );
                }
            })}

            {/* If there are hidden avatars, show a +X more */}
            {hiddenCount > 0 && (
                <Avatar
                    alt={`+${hiddenCount}`}
                    fallbackLetter={`+${hiddenCount}`}
                    className={`${!displayedAvatars.length ? "" : overlapClass} bg-gray-300 text-gray-700 dark:bg-gray-600 dark:text-gray-200`}
                    {...sharedAvatarProps}
                />
            )}
        </div>
    );
}
