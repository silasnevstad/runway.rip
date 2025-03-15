import React from "react";
import { GiftIcon } from "@heroicons/react/24/outline";

import PricingPlans from "@/components/payments/PricingPlans";
import appConfig, { landingConfig, pricingConfig } from "@/config";
import {createClient} from "@/utils/supabase/server";


export default async function Pricing({
    title = landingConfig.pricing.title,
    subtitle = landingConfig.pricing.subtitle,
}) {
    let customerId;
    if (appConfig.payment.requiredCustomerId) {
        const supabase = await createClient();
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
            customerId = user?.stripe_customer_id;
        }
        if (!customerId) {
            console.log("🚧 Pricing with payments.requiredCustomerId require a Stripe customer ID.");
            return null;
        }
    }

    return (
        <section
            id="pricing"
            className="flex flex-col items-center w-full"
        >
            <div className="flex flex-col items-center gap-5">
                <h3 className="text-2xl font-bold text-center text-primary-500">
                    {title}
                </h3>
                <h2 className="text-5xl font-black max-w-[20ch] text-center text-bg-800 dark:text-gray-100">
                    {subtitle}
                </h2>
                {pricingConfig.promo.show && (
                    <p className="flex items-center font-semibold mt-2 opacity-90">
                        <GiftIcon className="w-5 h-5 mr-1 text-green-500" />
                        <span className="text-green-500 mr-1">{pricingConfig.promo.price}$</span>
                        {pricingConfig.promo.text}
                    </p>
                )}
                <div className="flex flex-col items-center max-sm:gap-0 mt-8">
                    <PricingPlans customerId={customerId} />
                </div>
            </div>
        </section>
    );
}