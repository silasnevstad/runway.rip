import stripe from "@/libs/stripe/stripe";

export async function createCheckoutSession({
    customerId,
    mode,
    priceId,
    successUrl,
    cancelUrl,
    metadata = {},
}) {
    return await stripe.checkout.sessions.create({
        customer: customerId,
        line_items: [
            {
                price: priceId,
                quantity: 1,
            },
        ],
        mode,
        success_url: successUrl,
        cancel_url: cancelUrl,
        automatic_tax: { enabled: true },
        metadata,
    });
}