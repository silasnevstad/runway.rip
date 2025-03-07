import { Resend } from 'resend';
import { EmailTemplate, ThankYouEmailTemplate } from "@/libs/resend/templates";
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

export async function sendThankYouEmail({to}) {
    return await resend.emails.send({
        from: appConfig.noReplyEmail,
        to: Array.isArray(to) ? to : [to],
        subject: 'Thank you for your order!',
        react: ThankYouEmailTemplate(),
    });
}

export async function sendAbandonedCartEmail({ to, cartItems }) {
    return await resend.emails.send({
        from: appConfig.noReplyEmail,
        to: Array.isArray(to) ? to : [to],
        subject: 'You left something behind!',
        react: EmailTemplate({ message: `You have items in your cart: ${cartItems.join(', ')}` }),
    });
}

export default resend;
