import stripe from "./stripe";

export async function createCheckoutSession({
    mode,
    priceId, // "monthly", "yearly", "one_time", etc.
    successUrl,
    cancelUrl,
    metadata = {}
}) {
    return await stripe.checkout.sessions.create({
        line_items: [
            {
                price: priceId,
                quantity: 1
            }
        ],
        mode: mode,
        success_url: successUrl,
        cancel_url: cancelUrl,
        automatic_tax: { enabled: true },
        metadata
    });
}