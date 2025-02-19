import { Resend } from 'resend';
import {EmailTemplate, OrderConfirmationTemplate, ThankYouEmailTemplate} from "@/libs/resend/templates";
import appConfig from "@/config";

if (!process.env.NEXT_PUBLIC_RESEND_API_KEY) {
    throw new Error('Missing NEXT_PUBLIC_RESEND_API_KEY environment variable');
}

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function sendEmail({ to, from, subject, message, tags }) {
    return await resend.emails.send({
        from,
        to: Array.isArray(to) ? to : [to],
        subject,
        react: EmailTemplate({ message }),
        tags,
    });
}

export async function sendSupportEmail({ to, subject, message }) {
    return sendEmail({
        to,
        from: appConfig.noReplyEmail,
        subject,
        message,
        tags: ['support']
    });
}

export async function sendNoReplyEmail({ to, subject, message }) {
    return sendEmail({
        to,
        from: appConfig.noReplyEmail,
        subject,
        message,
        tags: ['no-reply']
    });
}

export async function sendThankYouEmail({to, firstName}) {
    return await resend.emails.send({
        from: appConfig.noReplyEmail,
        to: Array.isArray(to) ? to : [to],
        subject: 'Thank you for your order!',
        react: ThankYouEmailTemplate({ firstName }),
    });
}

export default resend;
