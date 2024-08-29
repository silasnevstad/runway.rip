import { NextResponse } from "next/server";
import stripe from '@/libs/stripe/stripe';
import { pricingConfig } from "@/config";

const getPriceId = (type) => {
    return pricingConfig.plans.find((plan) => plan.title.toLowerCase() === type.toLowerCase())?.priceId;
}

export async function POST(req) {
    console.log('req', req);
    const { data } = await req.json();
    const { type } = data;
    const priceId = getPriceId(type);

    console.log('priceId', priceId);

    if (!priceId) {
        return new NextResponse("Invalid plan type", { status: 400 });
    }

    try {
        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    price: priceId,
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${req.headers.get('origin')}/thank-you`,
            cancel_url: `${req.headers.get('origin')}/`,
            automatic_tax: {enabled: true},
        });

        return NextResponse.json({sessionId: session.id});
    } catch (error) {
        return new NextResponse(error.message, {
            status: 400,
        });
    }
}