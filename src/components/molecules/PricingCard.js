'use client'

import React, { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {CheckIcon, RocketLaunchIcon, XMarkIcon} from "@heroicons/react/24/solid";
import Badge from "@/components/atoms/Badge";
import Button from "@/components/atoms/Button";
import appConfig from "@/config";

const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const PricingCard = ({ type, title, oldPrice, price, includedFeatures, allFeatures, isPopular }) => {
    const { appName } = appConfig;
    // reorganize allFeatures to put not included features at the end
    const allFeaturesSorted = allFeatures.sort((a, b) => {
        if (includedFeatures.includes(a) && !includedFeatures.includes(b)) {
            return -1;
        }
        if (!includedFeatures.includes(a) && includedFeatures.includes(b)) {
            return 1;
        }
        return 0;
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch('/api/checkout_sessions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ data: { type } }),
        });

        const { sessionId } = await response.json();

        const stripe = await stripePromise;
        const result = await stripe.redirectToCheckout({
            sessionId,
        });

        if (result.error) {
            console.error(result.error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={`relative flex flex-col gap-6 px-8 py-10 rounded-2xl w-full bg-bg-0 dark:bg-gray-900 shadow-xs ${isPopular ? "border-2 border-primary-400" : ""}`}>
            {isPopular && (
                <div className="absolute -top-0 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    <Badge shape="pill" style="solid" size="large">
                        <span className="font-semibold">Most Popular</span>
                    </Badge>
                </div>
            )}
            <h3 className={`text-2xl font-medium opacity-80 ${isPopular ? "text-primary-500" : ""}`}>{title}</h3>
            <div className="flex gap-2 items-end">
                <p className="text-lg font-semibold opacity-40 line-through mb-2 mr-2">${oldPrice}</p>
                <p className="text-5xl font-bold max-md:text-4xl">
                    ${price}
                </p>
                <p className="text-sm font-semibold opacity-60">USD</p>
            </div>

            <ul className="flex flex-col gap-3 mt-3 mb-5">
                {allFeaturesSorted.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                        {includedFeatures.includes(feature) ? (
                            <CheckIcon className="w-6 h-6 text-primary-500"/>
                        ) : (
                            <XMarkIcon className="w-6 h-6 text-red-500"/>
                        )}
                        <span
                            className={`text-base font-semibold ${includedFeatures.includes(feature) ? "opacity-100" : "opacity-40"}`}>{feature}</span>
                    </li>
                ))}
            </ul>
            <Button type="submit" role="link">
                <RocketLaunchIcon className="w-5 h-5"/>
                Get {appName}
            </Button>
            <p className="text-base font-semibold opacity-40 text-center -mt-2">Pay once, unlimited uses!</p>
        </form>
    );
}

export default PricingCard;