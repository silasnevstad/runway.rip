import { Resend } from 'resend';

if (!process.env.NEXT_PUBLIC_RESEND_API_KEY) {
    throw new Error('Missing NEXT_PUBLIC_RESEND_API_KEY environment variable');
}

// Instantiate and export the Resend client
const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
export default resend;
