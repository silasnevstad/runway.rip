"use client";
import React from "react";
import PricingPlans from "@/components/payments/PricingPlans";
import { landingConfig } from "@/config";

export default function Pricing({
    title = "Pricing",
    subtitle = landingConfig.pricing.subtitle,
    cardBackground = "bg-bg-50 dark:bg-gray-900",
}) {
    return (
        <section
            id="pricing"
            className="flex flex-col items-center w-full"
        >
            <div className="flex flex-col items-center gap-5">
                <h3 className="text-2xl font-bold text-center text-primary-500">
                    {title}
                </h3>
                <h2 className="text-5xl font-black max-w-[20ch] text-center mb-16 text-bg-800 dark:text-gray-100">
                    {subtitle}
                </h2>
                <div className="flex flex-col items-center max-sm:gap-0">
                    <PricingPlans cardBackground={cardBackground} />
                </div>
            </div>
        </section>
    );
}