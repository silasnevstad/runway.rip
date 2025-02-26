import { NextResponse } from "next/server";
import { createCheckoutSession } from "@/libs/stripe/checkout";

export async function POST(req) {
    try {
        console.log("Creating checkout session");
        const { data } = await req.json();
        const { mode, priceId } = data;
        console.log("Mode:", mode);
        console.log("Price ID:", priceId);
        const origin = req.headers.get("origin");
        const session = await createCheckoutSession({
            mode,
            priceId,
            successUrl: `${origin}/thank-you`,
            cancelUrl: `${origin}/`,
        });
        return NextResponse.json({ sessionId: session.id });
    } catch (error) {
        return new NextResponse(error.message, { status: 400 });
    }
}
