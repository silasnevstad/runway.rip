import React from "react";
import Avatar from "@/components/atoms/Avatar";
import { mergeClasses } from "@/utils/styling";

export default function AvatarList({
    avatars = [],
    direction = "horizontal",
    overlap = true,
    maxVisible = 5,
    sharedAvatarProps = {},
    className = "",
    ...props
}) {
    const isHorizontal = direction === "horizontal";
    const overlapClass = overlap ? (isHorizontal ? "-ml-4" : "-mt-4") : "";

    let displayedAvatars = avatars;
    let hiddenCount = 0;

    // If we exceed maxVisible, show one slot as "+X more"
    if (avatars.length > maxVisible) {
        displayedAvatars = avatars.slice(0, maxVisible - 1);
        hiddenCount = avatars.length - (maxVisible - 1);
    }

    const finalClasses = mergeClasses(
        "relative",
        isHorizontal ? "flex flex-row" : "flex flex-col",
        overlap ? (isHorizontal ? "-ml-4" : "-mt-4") : "",
        className
    );

    return (
        <div className={finalClasses} {...props}>
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
                    // Use letter avatar
                    const letter = avatar.letter || "?";
                    return (
                        <Avatar
                            key={index}
                            alt={letter}
                            letter={letter}
                            className={marginClass}
                            {...sharedAvatarProps}
                        />
                    );
                }
            })}

            {/* If there are hidden avatars, show a +X more */}
            {hiddenCount > 0 && (
                <Avatar
                    letter={`+${hiddenCount}`}
                    className={`${!displayedAvatars.length ? "" : overlapClass} bg-gray-300 text-gray-700 dark:bg-gray-600 dark:text-gray-200`}
                    {...sharedAvatarProps}
                />
            )}
        </div>
    );
}
