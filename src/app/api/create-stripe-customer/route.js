import { NextResponse } from "next/server";
import stripe from '@/libs/stripe/stripe';
import { supabase } from "@/libs/supabase/config";

export async function POST(req) {
    try {
        const { email } = await req.json();

        // Create a new Stripe customer using only email
        const customer = await stripe.customers.create({ email });

        // Return the expected JSON structure
        return NextResponse.json({ status: '200', customer_id: customer.id });
    } catch (error) {
        return NextResponse.json({ status: '400', error: error.message }, { status: 400 });
    }
}