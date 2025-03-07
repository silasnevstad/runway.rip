import { NextResponse } from "next/server";
import stripe from '@/libs/stripe/stripe';
import { supabase } from "@/libs/supabase/config";

export async function POST(req) {
    try {
        const { email } = await req.json();

        // Create a new Stripe customer
        const customer = await stripe.customers.create({
            email,
        });

        return new NextResponse.json({ customer });
    } catch (error) {
        return new NextResponse(error.message, { status: 400 });
    }
}