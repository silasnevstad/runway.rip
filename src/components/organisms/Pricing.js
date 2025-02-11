"use client";

import React, { useState } from "react";
import PlanCard from "@/components/payments/PlanCard";
import { pricingConfig } from "@/config";
import Switch from "@/components/atoms/Switch";

export default function Pricing() {
    // For subscription-based plans, let users pick monthly or yearly
    const [billingInterval, setBillingInterval] = useState("monthly");

    const { plans } = pricingConfig;

    // Collect all features across plans
    const allFeatures = Array.from(new Set(plans.flatMap((p) => p.features)));

    const handleToggle = (interval) => {
        setBillingInterval(interval);
    };

    return (
        <div className="w-full flex flex-col gap-8">
            {/* Toggle for subscription intervals */}
            <div className="flex items-center justify-center">
                <Switch
                    options={[
                        { name: "Monthly", value: "monthly" },
                        { name: "Yearly", value: "yearly" },
                    ]}
                    selected={billingInterval}
                    onChange={handleToggle}
                    className="justify-center"
                    shape="rounded-md"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {plans.map((plan) => (
                    <PlanCard
                        key={plan.type}
                        planType={plan.type}
                        title={plan.title}
                        description={plan.description}
                        mode={plan.mode}
                        oldPrice={plan.oldPrice}
                        price={plan.price}
                        monthlyPrice={plan.monthlyPrice}
                        yearlyPrice={plan.yearlyPrice}
                        features={plan.features}
                        allFeatures={allFeatures}
                        isPopular={plan.isPopular}
                        billingInterval={billingInterval}
                        userId="some-user-id"
                    />
                ))}
            </div>
        </div>
    );
}