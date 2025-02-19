import { NextResponse } from 'next/server';
import resend from '@/libs/resend/resend';
import { PasswordResetTemplate } from '@/libs/resend/templates';
import appConfig from "@/config";

export async function POST(request) {
    try {
        const { to, subject, resetLink, userEmail } = await request.json();

        if (!to || !subject || !resetLink || !userEmail) {
            return NextResponse.json(
                { error: 'Missing required fields: to, subject, resetLink, or userEmail.' },
                { status: 400 }
            );
        }

        const data = await resend.emails.send({
            from: appConfig.noReplyEmail,
            to: Array.isArray(to) ? to : [to],
            subject,
            react: PasswordResetTemplate({ resetLink, userEmail }),
        });

        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        console.error('Password Reset Email Error:', error);
        return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
    }
}