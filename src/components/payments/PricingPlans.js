"use client";

import React, { useState } from "react";

import Switcher from "@/components/atoms/Switcher";
import PricingCard from "@/components/payments/PricingCard";
import { pricingConfig } from "@/config";

export default function PricingPlans({ customerId }) {
    const { plans } = pricingConfig;

    const [activeInterval, setActiveInterval] = useState("monthly");
    const allFeatures = Array.from(new Set(plans.flatMap((p) => p.features)));
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
                        color="bg"
                        variant="soft"
                        borderRadius="4xl"
                    />
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {plans.map((plan, index) => {
                    const interval = getIntervalForPlan(plan);
                    return (
                        <PricingCard
                            key={index}
                            plan={plan}
                            interval={interval}
                            allFeatures={allFeatures}
                            customerId={customerId}
                        />
                    );
                })}
            </div>
        </div>
    );
}