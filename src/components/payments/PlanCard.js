import React from "react";
import Badge from "@/components/atoms/Badge";
import PlanFeatures from "./PlanFeatures";
import PlanPrice from "./PlanPrice";
import PlanCTA from "./PlanCTA";
import Divider from "@/components/atoms/Divider";

export default function PlanCard({
    plan,
    interval,     // The chosen interval object for this plan
    allFeatures,
    userId
}) {
    const { type, title, description, subText, features, isPopular, mode } = plan;

    return (
        <div className={
            `relative flex flex-col gap-4 px-6 py-8 rounded-2xl
            bg-bg-50 dark:bg-gray-900 shadow-sm 
            w-80 lg:w-88
            ${isPopular ? "border-2 border-primary-400" : ""}`
        }>
            {isPopular && (
                <div className="absolute -top-0 left-1/2 -translate-y-1/2 -translate-x-1/2">
                    <Badge shape="pill" style="solid" size="medium">
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
                <PlanCTA
                    planType={type}
                    intervalName={interval?.name}
                    userId={userId}
                    buttonLabel={mode === "subscription" ? "Subscribe" : "Buy Now"}
                />

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
