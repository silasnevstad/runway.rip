import stripe from "@/libs/stripe/stripe";
import appConfig, { pricingConfig } from "@/config";

/**
 * Create a Stripe Checkout Session.
 * @param {Object} params - Options including mode, priceId, customerId, successUrl, cancelUrl, metadata.
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
        // Base session parameters
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

        // Attach customer if available (for subscription/usage and optionally one-time auth)
        if (customerId) {
            sessionParams.customer = customerId;
            sessionParams.customer_update = { address: 'auto' };
        }

        // Apply free trial if enabled and if it's a subscription (or usage-based)
        if ((mode === "subscription" || mode === "usage") && appConfig.payment.freeTrial.enabled) {
            sessionParams.subscription_data = {
                trial_period_days: appConfig.payment.freeTrial.trialPeriodDays,
            };
        }

        // Optionally add discounts (promo) from pricingConfig if defined.
        if (pricingConfig.promo && pricingConfig.promo.show) {
            sessionParams.discounts = [{ coupon: appConfig.payment.promo.code }];
        }

        const session = await stripe.checkout.sessions.create(sessionParams);
        return session;
    } catch (error) {
        console.error("Stripe Checkout Session error:", error);
        throw error;
    }
}