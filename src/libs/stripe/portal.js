import stripe from "./stripe";

export async function createBillingPortalSession({ customerId, returnUrl, flowData }) {
    const session = await stripe.billingPortal.sessions.create({
        customer: customerId,
        return_url: returnUrl,
        flow_data: flowData,
    });
    return session.url;
}

export const createBillingPortalUrl = async (user) => {
    if (user?.profile?.customer_id) {
        return await createBillingPortalSession({
            customerId: user.profile.customer_id,
            returnUrl: window.location.href
        });
    } else {
        return null;
    }
}