"use client";

import Badge from "@/components/atoms/Badge";

export default function BadgeDemo() {
    return (
        <div className="flex flex-wrap gap-3">
            <Badge
                variant="solid"
                color="green"
                onClick={() => alert("Badge clicked!")}
                hover
            >
                Click Me
            </Badge>
            <Badge
                varient="soft"
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
