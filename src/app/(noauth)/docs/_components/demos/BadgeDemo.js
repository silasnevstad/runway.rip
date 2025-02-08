"use client";

import Badge from "@/components/atoms/Badge";

export default function BadgeDemo() {
    return (
        <div className="flex flex-wrap gap-3">
            <Badge
                style="solid"
                color="green"
                onClick={() => alert("Badge clicked!")}
                hover
            >
                Click Me
            </Badge>
            <Badge
                style="soft"
                border
                color="purple"
                onClick={() => console.log("Filtering...")}
                hover
            >
                Filter Tag
            </Badge>
        </div>
    );
}
