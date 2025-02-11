import React from "react";
import Badge from "@/components/atoms/Badge";
import PlanFeatures from "./PlanFeatures";
import PlanPrice from "./PlanPrice";
import PlanCTA from "./PlanCTA";

export default function PlanCard({
    planType,
    title,
    description,
    mode,
    oldPrice,
    price,
    monthlyPrice,
    yearlyPrice,
    features,
    allFeatures,
    isPopular,
    billingInterval, // "monthly" or "yearly"
    userId // optional
}) {
    return (
        <div
            className={`relative flex flex-col gap-6 px-8 py-10 rounded-2xl w-full 
        bg-bg-0 dark:bg-gray-900 shadow-xs
        ${isPopular ? "border-2 border-primary-400" : ""}`}
        >
            {isPopular && (
                <div className="absolute -top-0 left-1/2 -translate-y-1/2 -translate-x-1/2">
                    <Badge shape="pill" style="solid" size="large">
                        <span className="font-semibold">Most Popular</span>
                    </Badge>
                </div>
            )}

            <h3 className={`text-2xl font-medium opacity-80 ${isPopular ? "text-primary-500" : ""}`}>
                {title}
            </h3>
            <p className="text-base opacity-70">{description}</p>

            <PlanPrice
                mode={mode}
                oldPrice={oldPrice}
                price={price}
                monthlyPrice={monthlyPrice}
                yearlyPrice={yearlyPrice}
                billingInterval={billingInterval}
            />

            <PlanFeatures
                planFeatures={features}
                allFeatures={allFeatures}
            />

            <PlanCTA
                planType={planType}
                mode={mode}
                billingInterval={billingInterval}
                isPopular={isPopular}
                userId={userId}
                buttonLabel={mode === "subscription" ? "Subscribe" : "Buy Now"}
            />

            {mode === "subscription" ? (
                <p className="text-base font-semibold opacity-40 text-center -mt-2">
                    {billingInterval === "yearly" ? "Billed yearly" : "Billed monthly"}. Cancel anytime!
                </p>
            ) : (
                <p className="text-base font-semibold opacity-40 text-center -mt-2">
                    One-time purchase, no recurring fees!
                </p>
            )}
        </div>
    );
}