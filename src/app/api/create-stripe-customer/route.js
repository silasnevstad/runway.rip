import { NextResponse } from 'next/server';

import stripe from '@/libs/stripe/stripe';

export async function POST(req) {
    try {
        const { email, id } = await req.json();
        if (!email) {
            return NextResponse.json(
                { status: '400', error: 'Email is required' },
                { status: 400 }
            );
        }
        if (!id) {
            return NextResponse.json(
                { status: '400', error: 'ID is required' },
                { status: 400 }
            );
        }

        const customer = await stripe.customers.create({ email, ...{ metadata: { id } } });

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
