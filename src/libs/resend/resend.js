import { Resend } from 'resend';
import {
    EmailTemplate, InvoiceFailedEmailTemplate,
    InvoicePaidEmailTemplate,
    ThankYouEmailTemplate,
    TrialEndEmailTemplate
} from "@/libs/resend/templates";
import appConfig from "@/config";

if (!process.env.NEXT_PUBLIC_RESEND_API_KEY) {
    throw new Error('🚧 Missing NEXT_PUBLIC_RESEND_API_KEY environment variable');
}

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function sendEmail({ to, from, subject, message, tags, replyTo }) {
    return await resend.emails.send({
        from,
        to: Array.isArray(to) ? to : [to],
        subject,
        react: EmailTemplate({ message }),
        tags,
        replyTo: replyTo
    });
}

export async function sendWelcomeEmail({ to, firstName }) {
    return await resend.emails.send({
        from: appConfig.emails.noReply,
        to: Array.isArray(to) ? to : [to],
        subject: `Welcome to ${appConfig.appName}!`,
        react: WelcomeEmailTemplate({ firstName }),
    });
}

export async function sendThankYouEmail({to}) {
    return await resend.emails.send({
        from: appConfig.emails.noReply,
        to: Array.isArray(to) ? to : [to],
        subject: 'Thank you for your order!',
        react: ThankYouEmailTemplate(),
    });
}

export async function sendAbandonedCartEmail({ to, cartItems }) {
    return await resend.emails.send({
        from: appConfig.emails.noReply,
        to: Array.isArray(to) ? to : [to],
        subject: 'You left something behind!',
        react: EmailTemplate({ message: `You have items in your cart: ${cartItems.join(', ')}` }),
    });
}

export async function sendTrialEndEmail(customerId, daysLeft) {
    console.log(`🚧 [Email] Notifying customer ${customerId}: Trial ends in ${daysLeft} day(s).`);
    return await resend.emails.send({
        from: appConfig.emails.noReply,
        to: Array.isArray(to) ? to : [to],
        subject: 'Trial Ending Soon',
        react: TrialEndEmailTemplate({ daysLeft }),
    });
}

export async function sendInvoicePaidEmail(customerId) {
    console.log(`🚧 [Email] Sending invoice paid email to customer ${customerId}.`);
    return await resend.emails.send({
        from: appConfig.emails.noReply,
        to: Array.isArray(to) ? to : [to],
        subject: 'Invoice Paid',
        react: InvoicePaidEmailTemplate(),
    });
}

export async function sendInvoiceFailedEmail(customerId) {
    console.log(`🚧 [Email] Alert: Invoice payment failed for customer ${customerId}.`);
    return await resend.emails.send({
        from: appConfig.emails.noReply,
        to: Array.isArray(to) ? to : [to],
        subject: 'Invoice Payment Failed',
        react: InvoiceFailedEmailTemplate(),
    });
}

export default resend;
