import appConfig from "@/config";
const formData = require("form-data");
const Mailgun = require("mailgun.js");
const mailgun = new Mailgun(formData);

if (!process.env.MAILGUN_API_KEY || !process.env.MAILGUN_DOMAIN) {
    throw new Error('🚧 Missing MAILGUN_API_KEY or MAILGUN_DOMAIN environment variable');
}

const mg = mailgun.client({
    username: 'api',
    key: process.env.MAILGUN_API_KEY,
    // If using EU infrastructure, uncomment the following:
    // url: 'https://api.eu.mailgun.net'
});

/**
 * Send an email using Mailgun
 *
 * @param to - Recipient email address(es)
 * @param from - Sender email address
 * @param subject - Email subject
 * @param text - Plain text body
 * @param html - HTML body
 * @param tags - Tags for the email
 * @param attachments - Attachments for the email
 * @returns {Promise<MessagesSendResult>} - Result of the email sending
 */
export async function sendMailgunEmail({ to, from, subject, text, html, tags, attachments }) {
    const data = {
        from,
        to: Array.isArray(to) ? to.join(',') : to,
        subject,
        text,
        html,
        // Use Mailgun’s tag parameter; can be a single string or an array.
        'o:tag': tags,
        // Attachments: expects an array of files in the format { data: Buffer, filename: string }
        attachment: attachments,
    };

    return await mg.messages.create(process.env.MAILGUN_DOMAIN, data);
}

export default mg;