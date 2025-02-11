import Stripe from "stripe";

const secretKey = process.env.STRIPE_SECRET_KEY || process.env.STRIPE_TEST_SECRET_KEY;
if (!secretKey) {
    throw new Error("Stripe secret key is missing. Please set STRIPE_SECRET_KEY or STRIPE_TEST_SECRET_KEY in your environment variables.");
}

const stripe = new Stripe(secretKey, {
    apiVersion: "2024-06-20",
});

export default stripe;
