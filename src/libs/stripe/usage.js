import stripe from "./stripe";

export async function addUsage({ customerId, eventName, quantity = 1 }) {
    try {
        const result = await stripe.billing.meterEvents.create({
            event_name: eventName,
            payload: {
                stripe_customer_id: customerId,
                value: quantity,
            },
        });
    } catch (err) {
        console.error("🚧 Usage recording failed:", err.message);
    }
}
