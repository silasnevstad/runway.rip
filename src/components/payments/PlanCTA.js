"use client";

import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import Button from "@/components/atoms/Button";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function PlanCTA({
    planType,
    intervalName,
    buttonLabel = "Get Started",
    userId // optional user ID to send to metadata
}) {
    const handleCheckout = async () => {
        try {
            const stripe = await stripePromise;
            const response = await fetch("/api/checkout_sessions", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    data: {
                        planType,
                        intervalName,
                        // userId // optional
                    }
                })
            });

            if (!response.ok) {
                throw new Error("Error creating checkout session");
            }

            const { sessionId } = await response.json();
            const result = await stripe.redirectToCheckout({ sessionId });
            if (result.error) {
                console.error(result.error.message);
            }
        } catch (err) {
            console.error("Checkout error:", err);
        }
    };

    return (
        <Button onClick={handleCheckout} shape="rounded-full">
            <RocketLaunchIcon className="w-5 h-5" />
            {buttonLabel}
        </Button>
    );
}