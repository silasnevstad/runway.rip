import { NextResponse, NextRequest } from "next/server";
import stripe from '@/libs/stripe/stripe';
import { redirect } from 'next/navigation'
import { pricingConfig } from "@/config";

const getPriceId = (type) => {
    return pricingConfig
}

export async function POST(req) {
    const { data } = await req.json();
    const { type } = data;

    try {
        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    price: '{{PRICE_ID}}',
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${req.headers.origin}/thank-you`,
            cancel_url: `${req.headers.origin}/`,
            automatic_tax: {enabled: true},
        });

        redirect(session.url)
        return  NextResponse.json({sessionId: session.id});
    } catch (error) {
        return new NextResponse(error, {
            status: 400,
        });
    }
}