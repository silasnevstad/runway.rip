import { NextResponse } from "next/server";

import { createCheckoutSession } from "@/libs/stripe/checkout";
import appConfig from "@/config";

export async function POST(req) {
    try {
        const { data } = await req.json();
        const { mode, priceId } = data;
        if (!mode || !priceId) {
            return NextResponse.json(
                { error: "Missing required payment parameters." },
                { status: 400 }
            );
        }

        // Optionally include customer id
        const { customerId } = data;

        // If mode is subscription or stripe customer id is used, customerId is required
        if ((mode === "subscription" || appConfig.payment.requiredCustomerId) && !customerId)  {
            console.error("🚧 Missing required customer information for checkout session!");
            return NextResponse.json(
                { error: "Missing required customer information for subscription." },
                { status: 400 }
            );
        }

        const origin = req.headers.get("origin");
        const session = await createCheckoutSession({
            mode,
            priceId,
            customerId: customerId || null,
            successUrl: `${origin}${appConfig.payment.afterCheckoutPath}`,
            cancelUrl: `${origin}/`,
        });
        return NextResponse.json({ sessionId: session.id });
    } catch (error) {
        console.error("Create checkout session error:", error);
        return new NextResponse(error.message, { status: 400 });
    }
}