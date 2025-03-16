import {
    handleSubscriptionCreated,
    handleSubscriptionUpdated,
    handleSubscriptionDeleted,
} from "@/libs/stripe/subscriptionHandlers";
import appConfig from "@/config";
import {
    sendInvoiceFailedEmail,
    sendInvoicePaidEmail,
    sendTrialEndEmail
} from "@/libs/resend/resend";

/**
 * Handle checkout session completed event.
 * For one-time payments with auth, update access if configured.
 */
export async function handleCheckoutSessionCompleted(session) {
    console.log("🚧 Checkout session completed for:", session.customer_details?.email);
    // If one-time payment with auth, update DB access if flagged in config.
    if (session.mode === "payment" && appConfig.payment.auth) {
        console.log("🚧 One-time payment with auth detected. Updating access for customer:", session.customer);
        // (Insert your database update logic here if needed.)
    }
    // Optionally, you might want to send a thank-you email:
    // await sendThankYouEmail(session.customer);
}

export async function handleCheckoutSessionExpired(session) {
    console.log("🚧 Checkout session expired for:", session.customer_details?.email);
}

export async function handleTrialWillEndEvent(subscription) {
    console.log("🚧 Trial will end soon for customer:", subscription.customer);
    if (appConfig.payment.freeTrial.enabled && appConfig.payment.webhookHandling.handleTrialWillEnd) {
        const daysLeft = appConfig.payment.freeTrial.trialWillEndNotificationDays;
        await sendTrialEndEmail(subscription.customer, daysLeft);
    }
}

export async function handleInvoicePaidEvent(invoice) {
    console.log("🚧 Invoice paid for customer:", invoice.customer);
    if (appConfig.payment.webhookHandling.handleInvoicePaid) {
        await sendInvoicePaidEmail(invoice.customer);
    }
}

export async function handleInvoicePaymentFailedEvent(invoice) {
    console.log("🚧 Invoice payment failed for customer:", invoice.customer);
    if (appConfig.payment.webhookHandling.handleInvoicePaymentFailed) {
        await sendInvoiceFailedEmail(invoice.customer);
    }
}

/**
 * Main webhook event handler.
 */
export async function handleStripeWebhookEvent(event) {
    try {
        const { type, data } = event;
        const object = data.object;
        console.log(`🚧 Processing Stripe event type: ${type}`);
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
            case "customer.subscription.trial_will_end":
                await handleTrialWillEndEvent(object);
                break;
            case "invoice.paid":
                await handleInvoicePaidEvent(object);
                break;
            case "invoice.payment_failed":
                await handleInvoicePaymentFailedEvent(object);
                break;
            default:
                console.log(`🚧 Unhandled event type: ${type}`);
        }
    } catch (error) {
        console.error("🚧 Error processing webhook event:", error);
    }
}