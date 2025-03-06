import stripe from "@/libs/stripe/stripe";

/**
 * Creates a Stripe customer.
 *
 * @param {Object} params - Customer parameters.
 * @param {string} params.email - Customer email.
 * @param {string} [params.name] - Customer name (optional).
 * @param {string} [params.userId] - User ID (optional).
 * @returns {Promise<Object>} Stripe customer object.
 */
export async function createStripeCustomer({ email, name, userId }) {
    return await stripe.customers.create({
        email,
        ...(name && { name }),
        ...(userId && { metadata: { userId } }),
    });
}