import { NextResponse } from "next/server";
import stripe from '@/libs/stripe/stripe';
import { supabase } from "@/libs/supabase/config";

export async function POST(req) {
    try {
        const { data } = await req.json();
        const { email, user_id } = data;

        // Create a new Stripe customer
        const customer = await stripe.customers.create({
            email,
            metadata: { user_id },
        });

        // Update the user's profile with the Stripe customer ID
        const { error } = await supabase
            .from('profiles')
            .update({ customer_id: customer.id })
            .eq('id', user_id);

        if (error) {
            return new NextResponse(error.message, { status: 400 });
        }

        return new NextResponse.json({ customer });
    } catch (error) {
        return new NextResponse(error.message, { status: 400 });
    }
}