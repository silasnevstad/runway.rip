import TextLink from "@/components/atoms/TextLink";
import { getSEOTags } from "@/libs/seo";
import appConfig from "@/config";

export const metadata = getSEOTags({
    title: `Privacy Policy | ${appConfig.appName}`,
    canonicalUrlRelative: "/policies/privacy",
});

export default function PrivacyPolicy() {
    return (
        <div className="flex flex-col items-center w-full gap-8 p-8">
            {/* Back Button */}
            <TextLink href="/policies" className="absolute top-4 left-4 text-sm text-gray-700 dark:text-gray-300" fade>
                &larr; Back to Policies
            </TextLink>

            <div className="w-full max-w-xl mt-2">
                {/* Title */}
                <h1 className="mt-4 text-3xl font-semibold text-gray-900 dark:text-gray-100">
                    Privacy Policy
                </h1>
            </div>
        </div>
    );
}
