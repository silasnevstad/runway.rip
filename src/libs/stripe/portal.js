import stripe from "./stripe";

export async function openBillingPortalSession({ customerId }) {
    const session = await stripe.billingPortal.sessions.create({
        customer: customerId,
        return_url: window.location.href,
    });
    if (session.url) {
        window.location.href = session.url;
    }
}