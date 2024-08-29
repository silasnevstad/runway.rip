import mailgun from 'mailgun-js';

const mailgunClient = mailgun({
    apiKey: process.env.NEXT_PUBLIC_MAILGUN_API_KEY,
    domain: process.env.NEXT_PUBLIC_MAILGUN_DOMAIN,
});


export async function sendEmail({ to, from, subject, message }) {
    const emailData = {
        from,
        to,
        subject,
        text: message,
    };

    try {
        return await mailgunClient.messages().send(emailData);
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
}

export async function sendSupportEmail(to, subject, message) {
    return await sendEmail({
        to: to,
        from: process.env.NEXT_PUBLIC_SUPPORT_EMAIL,
        subject,
        message,
    });
}



