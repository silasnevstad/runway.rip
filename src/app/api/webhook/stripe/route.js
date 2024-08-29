import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import Stripe from 'stripe';
import { Octokit } from "@octokit/rest";
import crypto from 'crypto';
import { sendSupportEmail } from '@/libs/mailgun/mailgun';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2024-06-20',
});

const octokit = new Octokit({
    auth: process.env.GITHUB_PERSONAL_ACCESS_TOKEN
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(req) {
    const body = await req.text();
    const signature = headers().get('stripe-signature');

    let event;

    try {
        event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (err) {
        return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
    }

    // Handle the event
    switch (event.type) {
        case 'checkout.session.async_payment_failed':
            await handleAsyncPaymentFailed(event.data.object);
            break;
        case 'checkout.session.async_payment_succeeded':
            await handleAsyncPaymentSucceeded(event.data.object);
            break;
        case 'checkout.session.completed':
            await handleCheckoutSessionCompleted(event.data.object);
            break;
        case 'checkout.session.expired':
            await handleCheckoutSessionExpired(event.data.object);
            break;
        case 'invoice.payment_failed':
            await handleInvoicePaymentFailed(event.data.object);
            break;
        default:
            console.log(`Unhandled event type ${event.type}`);
    }

    return NextResponse.json({ received: true });
}

async function handleAsyncPaymentFailed(session) {
    // Implement your logic here
    console.log('Async payment failed:', session.id);
    // You might want to update your database, send a notification, etc.
}

async function handleAsyncPaymentSucceeded(session) {
    // Implement your logic here
    console.log('Async payment succeeded:', session.id);
    // You might want to update your database, provision access to your product, etc.
}

async function handleCheckoutSessionCompleted(session) {
    const userEmail = session.customer_details.email;
    const accessToken = generateAccessToken();

    try {
        // Grant repository access
        await grantRepoAccess(accessToken);

        // Send email to user
        await sendAccessEmail(userEmail, accessToken);

        // Store the access token (optional, depending on your needs)
        await storeAccessToken(userEmail, accessToken);

    } catch (error) {
        console.error('Error handling successful payment:', error);
        // Implement error handling (e.g., notify admin, retry logic)
    }
}

function generateAccessToken() {
    return crypto.randomBytes(32).toString('hex');
}

async function grantRepoAccess(accessToken, type) {
    const repo = 'silasnevstad/runway-' + type;

    await octokit.repos.addCollaborator({
        owner: 'silasnevstad',
        repo: 'runway-' + type,
        username: accessToken,
        permission: 'pull'
    });
}

async function sendAccessEmail(email, accessToken, type) {
    const repoUrl = `https://github.com/silasnevstad/runway-${type}`;
    const accessUrl = `${repoUrl}?access_token=${accessToken}`;

    const emailContent = `
    Thank you for your purchase!
    
    You can access the repository using this URL: ${accessUrl}
    
    This link will grant you read-only access to the repository.
    Please do not share this link with others.
    
    If you have any issues, please contact our support team.
  `;

    await sendSupportEmail(email, 'Access to GitHub Repository', emailContent);
}

async function storeAccessToken(email, accessToken) {
    // Implement your logic here
    console.log('Storing access token:', accessToken);
    // You might want to store the access token in your database
}

async function handleCheckoutSessionExpired(session) {
    // Implement your logic here
    console.log('Checkout session expired:', session.id);
    // You might want to clean up any pending orders or send a follow-up email
}

async function handleInvoicePaymentFailed(invoice) {
    // Implement your logic here
    console.log('Invoice payment failed:', invoice.id);
    // You might want to reach out to the customer or adjust their account status
}

export const config = {
    api: {
        bodyParser: false,
    },
};