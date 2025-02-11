import { NextResponse } from "next/server";
import stripe from "@/libs/stripe/stripe";
import { handleStripeWebhookEvent } from "@/libs/stripe/webhookHandlers";

export async function POST(req) {
    const body = await req.text();
    const signature = req.headers.get("stripe-signature");
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
    let event;

    try {
        event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (err) {
        return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
    }

    await handleStripeWebhookEvent(event);
    return NextResponse.json({ received: true });
}