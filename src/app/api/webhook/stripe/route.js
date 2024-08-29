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
            // Handle payment failure
            break;
        case 'checkout.session.async_payment_succeeded':
            // Handle successful payment
            break;
        case 'checkout.session.completed':
            await handleCheckoutSessionCompleted(event.data.object);
            break;
        case 'checkout.session.expired':
            // Handle checkout session expiration
            break;
        case 'invoice.payment_failed':
            // Handle payment failure
            break;
        default:
            console.log(`Unhandled event type ${event.type}`);
    }

    return NextResponse.json({ received: true });
}

async function handleCheckoutSessionCompleted(session) {
    const userEmail = session.customer_details.email;
    const accessToken = generateAccessToken();

    try {
        await grantRepoAccess(accessToken);

        await sendAccessEmail(userEmail, accessToken);
    } catch (error) {
        console.error('Error handling successful payment:', error);
    }
}

function generateAccessToken() {
    return crypto.randomBytes(32).toString('hex');
}

async function grantRepoAccess(accessToken, type) {
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