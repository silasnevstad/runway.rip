import stripe from "./stripe";

// adds a new meter event to the Stripe usage record
export async function addUsage({
    customerId,
    eventName,
    quantity = 1,
}) {
    const meterEvent = await stripe.billing.meterEvents.create({
        event_name: eventName,
        payload: {
            stripe_customer_id: customerId,
            value: quantity,
        },
    });
    console.log("Meter event created:", meterEvent);
}