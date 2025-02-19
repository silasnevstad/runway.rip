import Link from "next/link";
import TextLink from "@/components/atoms/TextLink";

export default function PolicyPage() {
    return (
        <div className="flex flex-col items-center w-full">
            <TextLink href="/" className="absolute top-4 left-4 text-sm text-gray-700 dark:text-gray-300" fade>
                &larr; Back
            </TextLink>

            <div className="absolute top-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                    <p>
                        <TextLink href="/policies/terms" underline>
                            Terms of Service
                        </TextLink>
                    </p>
                    <p>
                        <TextLink href="/policies/privacy" underline>
                            Privacy Policy
                        </TextLink>
                    </p>
                    <p>
                        <TextLink href="/policies/license" underline>
                            License
                        </TextLink>
                    </p>
                </div>
            </div>
        </div>
    );
}