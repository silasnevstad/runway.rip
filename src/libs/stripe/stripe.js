import Stripe from "stripe";

const secretKey = process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY || process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY;
if (!secretKey) {
    throw new Error("🚧 Stripe secret key is missing. Please set it in your environment variables.");
}

const stripe = new Stripe(secretKey, {
    apiVersion: "2024-06-20",
});

export default stripe;
