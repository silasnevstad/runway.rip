import {
    handleSubscriptionCreated,
    handleSubscriptionUpdated,
    handleSubscriptionDeleted
} from "@/libs/stripe/subscriptionHandlers";
import { sendThankYouEmail } from "@/libs/resend/resend";

async function handleCheckoutSessionCompleted(session) {
    const userEmail = session.customer_details?.email;
    const userFirstName = session.customer_details?.first_name;
    if (userEmail && userFirstName) {
        await sendThankYouEmail({ userEmail, userFirstName });
    }
}

async function handleCheckoutSessionExpired(session) {
    const userEmail = session.customer_details?.email;
    if (userEmail) {
        console.log("Checkout session expired for user:", userEmail);

    }
}

export async function handleStripeWebhookEvent(event) {
    switch (event.type) {
        case "checkout.session.completed":
            await handleCheckoutSessionCompleted(event.data.object);
            break;
        case "checkout.session.expired":
            console.log("Checkout session expired");
            break;
        case "customer.created":
            console.log("Customer created:", event.data.object.id);
            break;
        case "customer.subscription.created":
            await handleSubscriptionCreated(event.data.object);
            break;
        case "customer.subscription.updated":
            await handleSubscriptionUpdated(event.data.object);
            break;
        case "customer.subscription.deleted":
            await handleSubscriptionDeleted(event.data.object);
            break;
        case "invoice.created":
            console.log("Invoice created:", event.data.object.id);
            break;
        case "invoice.finalized":
            console.log("Invoice finalized:", event.data.object.id);
            break;
        case "invoice.finalization_failed":
            console.log("Invoice finalization failed:", event.data.object.id);
            break;
        case "invoice.paid":
            console.log("Invoice paid:", event.data.object.id);
            break;
        case "invoice.payment_failed":
            console.log("Invoice payment failed:", event.data.object.id);
            break;
        case "invoice.payment_action_required":
            console.log("Invoice payment requires action:", event.data.object.id);
            break;
        case "payment_intent.created":
            console.log("Payment intent created:", event.data.object.id);
            break;
        case "payment_intent.succeeded":
            console.log("Payment intent succeeded:", event.data.object.id);
            break;
        default:
            console.log(`Unhandled event type: ${event.type}`);
    }
}