import { NextResponse } from "next/server";
import { createCheckoutSession } from "@/libs/stripe/checkout";

export async function POST(req) {
    try {
        const { data } = await req.json();
        const { planType, intervalName } = data;
        const origin = req.headers.get("origin");
        const session = await createCheckoutSession({
            planType,
            intervalName,
            successUrl: `${origin}/thank-you`,
            cancelUrl: `${origin}/`,
        });
        return NextResponse.json({ sessionId: session.id });
    } catch (error) {
        return new NextResponse(error.message, { status: 400 });
    }
}
