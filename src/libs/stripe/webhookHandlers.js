import {
    handleSubscriptionCreated,
    handleSubscriptionUpdated,
    handleSubscriptionDeleted,
} from "@/libs/stripe/subscriptionHandlers";

/**
 * Handle checkout session completed event.
 */
async function handleCheckoutSessionCompleted(session) {
    // For example:
    // const { email } = session.customer_details || {};
    // if (email) {
    //     await sendThankYouEmail({ userEmail: email });
    // }
    console.log("Checkout session completed for:", session.customer_details?.email);
}

/**
 * Handle checkout session expired event.
 */
async function handleCheckoutSessionExpired(session) {
    // For example:
    // const { email } = session.customer_details || {};
    // if (email) {
    //     await sendExpirationEmail({ userEmail: email });
    // }
    console.log("Checkout session expired for:", session.customer_details?.email);
}

export async function handleStripeWebhookEvent(event) {
    try {
        const { type, data } = event;
        const object = data.object;
        switch (type) {
            case "checkout.session.completed":
                await handleCheckoutSessionCompleted(object);
                break;
            case "checkout.session.expired":
                await handleCheckoutSessionExpired(object);
                break;
            case "customer.subscription.created":
                await handleSubscriptionCreated(object);
                break;
            case "customer.subscription.updated":
                await handleSubscriptionUpdated(object);
                break;
            case "customer.subscription.deleted":
                await handleSubscriptionDeleted(object);
                break;
            default:
                console.log(`Unhandled event type: ${type}`);
        }
    } catch (error) {
        console.error("Error processing webhook event:", error);
    }
}
