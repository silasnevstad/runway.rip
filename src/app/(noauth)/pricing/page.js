import { getSEOTags } from "@/libs/seo";
import appConfig from "@/config";
import Pricing from "@/components/landing/Pricing";
import Button from "@/components/atoms/Button";
import PricingPlans from "@/components/payments/PricingPlans";

export const metadata = getSEOTags({
    title: `Pricing | ${appConfig.appName}`,
    canonicalUrlRelative: "/signup",
});

export default function PricingPage() {
    return (
        <main className="flex items-center justify-center flex-col w-full min-h-screen">
            <Button
                href="/"
                className="absolute top-5 left-5"
                variant="soft"
                color="gray"
                size="sm"
            >
                Back
            </Button>
            <div className="-mt-10">
                <PricingPlans />
            </div>
        </main>
    );
}