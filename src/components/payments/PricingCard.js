import React from "react";
import Badge from "@/components/atoms/Badge";
import PlanFeatures from "@/components/payments/PlanFeatures";
import PlanPrice from "@/components/payments/PlanPrice";
import CheckoutButton from "@/components/payments/CheckoutButton";
import {RocketLaunchIcon} from "@heroicons/react/24/solid";

export default function PricingCard({
    plan,
    interval,     // The chosen interval object for this plan
    allFeatures,
    backgroundColor = "bg-bg-50 dark:bg-gray-900",
}) {
    const { title, description, subText, features, isPopular, mode } = plan;

    return (
        <div className={
            `relative flex flex-col gap-4 px-6 py-8 rounded-2xl
            ${backgroundColor} shadow-sm 
            w-80 lg:w-88
            ${isPopular ? "border-2 border-primary-400" : ""}`
        }>
            {isPopular && (
                <div className="absolute -top-0 left-1/2 -translate-y-1/2 -translate-x-1/2">
                    <Badge borderRadius="full" variant="solid" size="md">
                        <span className="font-semibold">Most Popular</span>
                    </Badge>
                </div>
            )}

            <h3 className={`text-xl font-bold ${isPopular ? "text-primary-500" : ""}`}>
                {title}
            </h3>
            {description && <p className="text-base opacity-70">{description}</p>}

            {/* Show the price block for the chosen interval */}
            <PlanPrice interval={interval} />

            <PlanFeatures planFeatures={features} allFeatures={allFeatures} />

            <div className="flex flex-col gap-2 mt-auto">
                <CheckoutButton
                    mode={mode}
                    priceId={interval.priceId}
                >
                    <RocketLaunchIcon className="w-5 h-5" />
                    {mode === "subscription" ? "Subscribe" : "Buy Now"}
                </CheckoutButton>

                {/* Some extra text if subscription or one-time */}
                {subText && (
                    <p className="text-sm font-semibold opacity-40 text-center">
                        {subText}
                    </p>
                )}
            </div>
        </div>
    );
}
