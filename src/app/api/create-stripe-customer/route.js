import { NextResponse } from 'next/server';
import stripe from '@/libs/stripe/stripe';

export async function POST(req) {
    try {
        const { email } = await req.json();

        // Ensure the email is provided
        if (!email) {
            return NextResponse.json(
                { status: '400', error: 'Email is required' },
                { status: 400 }
            );
        }

        // Create a new Stripe customer with provided email
        const customer = await stripe.customers.create({ email });

        // Return customer ID
        return NextResponse.json(
            { status: '200', customer_id: customer.id },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { status: '400', error: error.message },
            { status: 400 }
        );
    }
}
