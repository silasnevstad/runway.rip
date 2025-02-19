import { handleSubscriptionCreated, handleSubscriptionUpdated, handleSubscriptionDeleted } from "./subscriptionHandlers";
import {sendSupportEmail, sendNoReplyEmail, sendThankYouEmail} from "@/libs/resend/resend";

/*
Common Stripe events:
  - checkout.session.completed
  - checkout.session.expired
  - customer.created
  - customer.subscription.created
  - customer.subscription.updated
  - customer.subscription.deleted
  - invoice.created, invoice.finalized, invoice.finalization_failed, invoice.paid,
    invoice.payment_failed, invoice.payment_action_required
  - payment_intent.created, payment_intent.succeeded
*/

async function handleCheckoutSessionCompleted(session) {
    const userEmail = session.customer_details?.email;
    const userFirstName = session.customer_details?.first_name;
    if (userEmail && userFirstName) {
        await sendThankYouEmail({ userEmail, userFirstName });
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