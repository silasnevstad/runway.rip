import { updateData } from "@/libs/supabase/db";

/**
 * Handle a new subscription created event.
 * Updates the user’s profile with subscription details.
 */
export async function handleSubscriptionCreated(subscription) {
    const { id, status, items, customer } = subscription;
    const priceId = items.data[0]?.price?.id;
    // Determine access based on subscription status
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
        console.error("Error updating subscription on creation:", error);
    } else {
        console.log("Subscription created and updated in DB");
    }
}

/**
 * Handle a subscription updated event.
 */
export async function handleSubscriptionUpdated(subscription) {
    const { id, status, items, customer } = subscription;
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
        console.error("Error updating subscription on update:", error);
    } else {
        console.log("Subscription updated in DB");
    }
}

/**
 * Handle a subscription deleted event.
 */
export async function handleSubscriptionDeleted(subscription) {
    const { id, customer } = subscription;
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
        console.error("Error updating subscription on deletion:", error);
    } else {
        console.log("Subscription deletion updated in DB");
    }
}