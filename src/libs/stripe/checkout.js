import stripe from "@/libs/stripe/stripe";
import {pricingConfig} from "@/config";

/**
 * Create a Stripe Checkout Session.
 * @param {Object} mode - Checkout mode (payment or subscription).
 * @param {string} priceId - Price ID.
 * @param {string} [customerId] - Customer ID (optional, required with subscriptions).
 * @param {string} successUrl - URL to redirect to on successful payment.
 * @param {string} cancelUrl - URL to redirect to on canceled payment.
 * @param {Object} [metadata] - Metadata (optional).
 */
export async function createCheckoutSession({
    mode,
    priceId,
    customerId,
    successUrl,
    cancelUrl,
    metadata = {},
}) {
    try {
        const sessionParams = {
            mode,
            line_items: [
                {
                    price: priceId,
                    quantity: 1,
                },
            ],
            automatic_tax: { enabled: true },
            success_url: successUrl,
            cancel_url: cancelUrl,
            metadata,
        };

        // If a customer ID exists (for authenticated users), attach it.
        if (customerId) {
            sessionParams.customer = customerId;
            sessionParams.customer_update = {
                address: 'auto'
            };
        }

        // Add discounts
        if (pricingConfig.promo) {
            sessionParams.discounts = [{ coupon: pricingConfig.promo.code }];
        }

        const session = await stripe.checkout.sessions.create(sessionParams);
        return session;
    } catch (error) {
        console.error("Stripe Checkout Session error:", error);
        throw error;
    }
}