"use client";

import TextLink from "@/components/atoms/TextLink";
import { LinkIcon } from "@heroicons/react/24/outline";

export function TextLinkIconDemo() {
    return (
        <div className="flex flex-wrap gap-4 items-center">
            <TextLink
                href="/docs/components"
                className="text-primary-500 hover:text-primary-600"
                icon={() => <LinkIcon className="w-5 h-5" />}
            >
                Copy
            </TextLink>
        </div>
    );
}