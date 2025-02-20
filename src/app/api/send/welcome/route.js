import { NextResponse } from 'next/server';
import resend from '@/libs/resend/resend';
import { WelcomeEmailTemplate } from '@/libs/resend/templates';
import appConfig from "@/config";

export async function POST(request) {
    try {
        const { to, subject, firstName } = await request.json();

        if (!to || !subject || !firstName) {
            return NextResponse.json({ error: 'Missing required fields: to, subject, or firstName.' }, { status: 400 });
        }

        const data = await resend.emails.send({
            from: appConfig.noReplyEmail,
            to: Array.isArray(to) ? to : [to],
            subject,
            react: WelcomeEmailTemplate({ firstName }),
        });

        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        console.error('Welcome Email Error:', error);
        return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
    }
}
