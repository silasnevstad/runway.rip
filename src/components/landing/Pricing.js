"use client";

import React from "react";
import PricingPlans from "@/components/payments/PricingPlans";
import { landingConfig } from "@/config"; // or pass as prop

export default function Pricing() {
    const { pricing } = landingConfig;

    if (!pricing?.show) return null;

    return (
        <section
            id="pricing"
            className="flex flex-col items-center w-full"
        >
            <div className="flex flex-col items-center gap-5 pt-20 mt-20 w-3/6 max-2xl:w-4/6 max-xl:w-5/6 max-lg:w-5/6 max-md:w-4/6 max-sm:5/6 max-sm:gap-0">
                <h3 className="text-2xl font-bold text-center text-primary-500">
                    {pricing.title}
                </h3>
                <h2 className="text-5xl font-black max-w-[20ch] text-center mb-16 text-gray-800 dark:text-gray-100">
                    {pricing.subtitle}
                </h2>
                <div className="flex flex-col items-center w-5/6 max-xl:w-5/6 max-lg:w-5/6 max-md:w-4/6 max-sm:6/7 max-sm:gap-0">
                    <PricingPlans />
                </div>
            </div>
        </section>
    );
}