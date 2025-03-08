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

        // Optionally include customer details
        const { customerId, customerEmail } = data;

        // If mode is subscription or customer integration is used, customerId is required
        if ((mode === "subscription" || appConfig.requiredCustomerId) && !customerId) {
            return NextResponse.json(
                { error: "Missing required customer ID for subscription." },
                { status: 400 }
            );
        }

        const origin = req.headers.get("origin");
        const session = await createCheckoutSession({
            mode,
            priceId,
            customerId: customerId || null,
            customerEmail: customerEmail || null,
            successUrl: `${origin}${appConfig.afterCheckoutPath}`,
            cancelUrl: `${origin}/`,
        });
        return NextResponse.json({ sessionId: session.id });
    } catch (error) {
        console.error("Create checkout session error:", error);
        return new NextResponse(error.message, { status: 400 });
    }
}