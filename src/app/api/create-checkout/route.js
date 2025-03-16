import { NextResponse } from "next/server";

import { createCheckoutSession } from "@/libs/stripe/checkout";
import appConfig from "@/config";

export async function POST(req) {
    try {
        const { data } = await req.json();
        const { mode, priceId, customerId } = data;

        if (!mode || !priceId) {
            console.error("🚧 Missing required params: mode, priceId");
            return NextResponse.json({ error: "Missing mode or priceId" }, { status: 400 });
        }
        // If subscription or usage, must have customer
        if ((mode === "subscription" || mode === "usage") && !customerId) {
            console.error("🚧 Missing customerId for subscription/usage mode");
            return NextResponse.json({ error: "customerId required for subscription/usage" }, { status: 400 });
        }

        // Optionally handle usage-based mode as subscription in Stripe
        const stripeMode = (mode === "usage") ? "subscription" : mode;

        const origin = req.headers.get("origin") || `https://${appConfig.domain}`;
        const session = await createCheckoutSession({
            mode: stripeMode,
            priceId,
            customerId: customerId || null,
            successUrl: `${origin}${appConfig.payment.afterCheckoutPath}`,
            cancelUrl: `${origin}/`,
        });
        return NextResponse.json({ sessionId: session.id });
    } catch (err) {
        console.error("🚧 Error creating checkout session:", err.message);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}