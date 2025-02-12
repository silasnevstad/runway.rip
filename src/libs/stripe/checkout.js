import stripe from "./stripe";
import { pricingConfig } from "@/config";

function findPlan(planType) {
    return pricingConfig.plans.find(
        (plan) => plan.type.toLowerCase() === planType.toLowerCase()
    );
}

function findInterval(plan, intervalName) {
    if (!plan.intervals?.length) return null;
    // If none specified, default to the first interval
    if (!intervalName) return plan.intervals[0];
    return plan.intervals.find((intv) => intv.name === intervalName);
}

export async function createCheckoutSession({
    planType,
    intervalName, // "monthly", "yearly", "one_time", etc.
    successUrl,
    cancelUrl,
    metadata = {}
}) {
    const plan = findPlan(planType);
    if (!plan) {
        throw new Error(`Plan not found: ${planType}`);
    }

    // If plan has intervals, find the right one
    const chosenInterval = findInterval(plan, intervalName);
    if (!chosenInterval) {
        throw new Error(`Interval not found for ${planType}: ${intervalName}`);
    }

    return await stripe.checkout.sessions.create({
        line_items: [
            {
                price: chosenInterval.priceId,
                quantity: 1
            }
        ],
        // Determine if this is "payment" or "subscription"
        mode: plan.mode,
        success_url: successUrl,
        cancel_url: cancelUrl,
        automatic_tax: { enabled: true },
        metadata
    });
}