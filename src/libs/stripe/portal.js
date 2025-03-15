import stripe from "./stripe";
import {redirect} from "next/navigation";

export async function createBillingPortalSession({ customerId, returnUrl, flowData }) {
    const session = await stripe.billingPortal.sessions.create({
        customer: customerId,
        return_url: returnUrl,
        flow_data: flowData,
    });
    return session.url;
}

export async function openBillingPortalSession({ customerId }) {
    const session = await stripe.billingPortal.sessions.create({
        customer: customerId,
        return_url: window.location.href,
    });
    if (session.url) {
        window.location.href = session.url;
    }
}