import mailgun from 'mailgun-js';

const mailgunClient = mailgun({
    apiKey: process.env.NEXT_PUBLIC_MAILGUN_API_KEY,
    domain: process.env.NEXT_PUBLIC_MAILGUN_DOMAIN,
});

mg.messages.create('sandbox-123.mailgun.org', {
    from: "Excited User <mailgun@mail.runway.rip>",
    to: ["test@example.com"],
    subject: "Hello",
    text: "Testing some Mailgun awesomeness!",
    html: "<h1>Testing some Mailgun awesomeness!</h1>"
})
    .then(msg => console.log(msg)) // logs response data
    .catch(err => console.log(err));

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



