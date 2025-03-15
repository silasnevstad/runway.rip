import { supabaseAdmin } from "@/libs/supabase/config";

/**
 * Update subscription details in the profiles table.
 * @param {Object} subscription - Stripe subscription object.
 */
async function updateSubscription(subscription) {
    const { id, items, customer, status } = subscription;
    const priceId = items.data[0]?.price?.id;
    const hasAccess = status === "active" || status === "trialing";
    const { error } = await supabaseAdmin
        .from("profiles")
        .update({
            subscription_id: id,
            price_id: priceId,
            subscription_status: status,
            has_access: hasAccess,
        })
        .eq("customer_id", customer);

    if (error) {
        console.error(`Error updating subscription (${status}):`, error);
    } else {
        console.log(`Subscription ${status} updated in DB`);
    }
}

export async function handleSubscriptionCreated(subscription) {
    await updateSubscription(subscription);
}

export async function handleSubscriptionUpdated(subscription) {
    await updateSubscription(subscription);
}

export async function handleSubscriptionDeleted(subscription) {
    const { customer } = subscription;
    const { error } = await supabaseAdmin
        .from("profiles")
        .update({
            subscription_id: null,
            price_id: null,
            subscription_status: "deleted",
            has_access: false,
        })
        .eq("customer_id", customer);

    if (error) {
        console.error("Error updating subscription deletion:", error);
    } else {
        console.log("Subscription deletion updated in DB");
    }
}