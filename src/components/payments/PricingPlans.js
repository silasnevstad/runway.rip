"use client";

import React, { useState } from "react";
import PricingCard from "@/components/payments/PricingCard";
import { pricingConfig } from "@/config";
import Switcher from "@/components/atoms/Switcher";

export default function PricingPlans({
    cardBackground = "bg-bg-50 dark:bg-gray-900",
}) {
    const { plans } = pricingConfig;

    // Let the user toggle monthly vs. yearly (default monthly)
    // If a plan doesn't have "monthly", it uses the first one in intervals.
    const [activeInterval, setActiveInterval] = useState("monthly");

    // Combine all features from all plans
    const allFeatures = Array.from(new Set(plans.flatMap((p) => p.features)));

    // Check if we have multiple intervals (like monthly/yearly) across any plan
    const hasIntervalToggle = plans.some((p) => p.intervals?.length > 1);

    const handleToggle = (name) => {
        setActiveInterval(name);
    };

    const getIntervalForPlan = (plan) => {
        // If plan has multiple intervals, find one by activeInterval
        // If none found, fallback to the first
        if (!plan.intervals?.length) return null;
        return (
            plan.intervals.find((intv) => intv.name === activeInterval) ||
            plan.intervals[0]
        );
    };

    return (
        <div className="flex flex-col gap-8 w-full">

            {/* Only show a toggle if at least one plan has multiple intervals. */}
            {hasIntervalToggle && (
                <div className="flex items-center justify-center">
                    <Switcher
                        options={[
                            { name: "Monthly", value: "monthly" },
                            { name: "Yearly", value: "yearly" },
                        ]}
                        selected={activeInterval}
                        onChange={handleToggle}
                        className="justify-center"
                        shape="rounded-md"
                    />
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {plans.map((plan) => {
                    const interval = getIntervalForPlan(plan);
                    return (
                        <PricingCard
                            key={plan.type}
                            plan={plan}
                            interval={interval}
                            allFeatures={allFeatures}
                            backgroundColor={cardBackground}
                        />
                    );
                })}
            </div>
        </div>
    );
}