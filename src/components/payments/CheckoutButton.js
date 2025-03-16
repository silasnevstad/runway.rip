import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { redirect } from "next/navigation";

import Button from "@/components/atoms/Button";
import { mergeClasses } from "@/utils/styling";
import appConfig from "@/config";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function CheckoutButton({
    mode,
    priceId,
    customerId,
    children,
    className = "",
    ...props
}) {
    const handleCheckout = async () => {
        if (!appConfig.payment.enabled) {
            console.error("🚧 Payments are disabled in appConfig.");
            return;
        }
        // Subscriptions/usage typically require a customer. If none, redirect to sign up
        if ((mode === "subscription" || mode === "usage") && !customerId) {
            console.error("🚧 mode=%s requires a customerId. Redirecting to signup...", mode);
            return redirect("/signup");
        }

        try {
            const stripe = await stripePromise;
            if (!stripe) {
                console.error("🚧 Stripe not loaded.");
                return;
            }

            const res = await fetch("/api/create-checkout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    data: { mode, priceId, customerId },
                }),
            });
            if (!res.ok) {
                console.error("🚧 Create checkout responded with status %d", res.status);
                return;
            }
            const { sessionId, error } = await res.json();
            if (error) {
                console.error("🚧 Create checkout responded with error:", error);
                return;
            }

            const { error: stripeError } = await stripe.redirectToCheckout({ sessionId });
            if (stripeError) {
                console.error("🚧 Stripe redirect error:", stripeError.message);
            }
        } catch (err) {
            console.error("🚧 Unexpected checkout error:", err);
        }
    };

    return (
        <Button
            onClick={handleCheckout}
            className={mergeClasses("font-bold text-md", className)}
            {...props}
        >
            {children}
        </Button>
    );
}
