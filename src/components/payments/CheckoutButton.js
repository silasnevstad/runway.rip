"use client";

import React from "react";
import { loadStripe } from "@stripe/stripe-js";

import Button from "@/components/atoms/Button";
import { useUser } from "@/contexts/UserContext";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function CheckoutButton({
    children,
    mode,
    priceId,
    customerId: overrideCustomerId,
    customerEmail: overrideCustomerEmail,
    ...props
}) {
    const { user } = useUser();

    // Automatically use user context if no overrides are provided.
    const customerId = overrideCustomerId ?? user?.profile?.customer_id;
    const customerEmail = overrideCustomerEmail ?? user?.email;

    const handleCheckout = async () => {
        try {
            const stripe = await stripePromise;
            const response = await fetch("/api/create-checkout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    data: { mode, priceId, customerId, customerEmail },
                }),
            });
            if (!response.ok) {
                throw new Error("Error creating checkout session");
            }
            const { sessionId } = await response.json();
            const result = await stripe.redirectToCheckout({ sessionId });
            if (result.error) {
                console.error("Stripe redirect error:", result.error.message);
            }
        } catch (err) {
            console.error("Checkout error:", err);
        }
    };

    return (
        <Button onClick={handleCheckout} className="font-bold text-md" {...props}>
            {children}
        </Button>
    );
}
