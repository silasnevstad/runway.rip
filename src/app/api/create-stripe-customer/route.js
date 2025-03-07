import { NextResponse } from "next/server";
import stripe from '@/libs/stripe/stripe';

export async function POST(req) {
    try {
        const { email } = await req.json();

        // Create a new Stripe customer
        const customer = await stripe.customers.create({
            email,
        });

        return NextResponse.json({ status: '200', customer_id: customer.id });
    } catch (error) {
        return NextResponse.json({ status: '400', error: error.message });
    }
}