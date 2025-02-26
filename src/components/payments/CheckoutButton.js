"use client";
import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import Button from "@/components/atoms/Button";

const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY);

export default function CheckoutButton({
    children,
    mode,
    priceId,
    ...props
}) {
    const handleCheckout = async () => {
        try {
            const stripe = await stripePromise;
            const response = await fetch("/api/create-checkout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    data: {
                        mode,
                        priceId,
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
        <Button onClick={handleCheckout} className="font-bold text-md" {...props}>
            {children}
        </Button>
    );
}