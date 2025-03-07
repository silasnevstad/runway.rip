import { updateData } from "@/libs/supabase/db";

/**
 * Update subscription details in the profiles table.
 * @param {Object} subscription - Stripe subscription object.
 * @param {string} status - Subscription status.
 */
async function updateSubscription(subscription, status) {
    const { id, items, customer } = subscription;
    const priceId = items.data[0]?.price?.id;
    const hasAccess = status === "active" || status === "trialing";
    const { error } = await updateData(
        "profiles",
        {
            subscription_id: id,
            price_id: priceId,
            subscription_status: status,
            has_access: hasAccess,
        },
        { customer_id: customer }
    );
    if (error) {
        console.error(`Error updating subscription (${status}):`, error);
    } else {
        console.log(`Subscription ${status} updated in DB`);
    }
}

export async function handleSubscriptionCreated(subscription) {
    await updateSubscription(subscription, subscription.status);
}

export async function handleSubscriptionUpdated(subscription) {
    await updateSubscription(subscription, subscription.status);
}

export async function handleSubscriptionDeleted(subscription) {
    const { customer } = subscription;
    const { error } = await updateData(
        "profiles",
        {
            subscription_id: null,
            price_id: null,
            subscription_status: "deleted",
            has_access: false,
        },
        { customer_id: customer }
    );
    if (error) {
        console.error("Error updating subscription deletion:", error);
    } else {
        console.log("Subscription deletion updated in DB");
    }
}