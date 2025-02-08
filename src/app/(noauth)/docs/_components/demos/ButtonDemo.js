"use client";

import Button from "@/components/atoms/Button";
import { ClipboardIcon, InformationCircleIcon } from "@heroicons/react/24/outline";

export function ButtonIconDemo() {
    return (
        <div className="flex flex-wrap gap-4 items-center">
            <Button
                icon={() => <ClipboardIcon className="w-5 h-5" />}
                className="px-5"
            >
                Copy
            </Button>
            <Button
                icon={() => <InformationCircleIcon className="w-5 h-5" />}
            >
                Click Me
            </Button>
        </div>
    );
}

export function ButtonOnClickDemo() {
    return (
        <div className="flex flex-wrap gap-4 items-center">
            <Button
                onClick={() => alert("Primary Button Clicked!")}
            >
                Primary
            </Button>
            <Button
                onClick={() => alert("Secondary Button Clicked!")}
            >
                Secondary
            </Button>
        </div>
    );
}
