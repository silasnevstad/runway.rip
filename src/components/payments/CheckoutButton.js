import React from "react";
import { loadStripe } from "@stripe/stripe-js";

import Button from "@/components/atoms/Button";
import appConfig from "@/config";
import { mergeClasses } from "@/utils/styling";
import {redirect} from "next/navigation";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function CheckoutButton({
    children,
    mode,
    priceId,
    customerId,
    className = "",
    ...props
}) {
    const handleCheckout = async () => {
        if (!appConfig.payment.enabled) {
            console.error("🚧 Payments (appConfig.payment) are not enabled.");
            return;
        }
        if (appConfig.payment.requiredCustomerId && !customerId) {
            console.error("🚧 Customer ID is required for checkout.");
            redirect("/signup");
            return;
        }
        try {
            const stripe = await stripePromise;
            const response = await fetch("/api/create-checkout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({

                    data: { mode, priceId, customerId },
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
        <Button onClick={handleCheckout} className={mergeClasses("font-bold text-md", className)} {...props}>
            {children}
        </Button>
    );
}
