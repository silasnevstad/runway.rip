import { NextResponse } from 'next/server';
import resend from '@/libs/resend/resend';
import { OrderConfirmationTemplate } from '@/libs/resend/templates';
import appConfig from "@/config";

export async function POST(request) {
    try {
        const { to, subject, orderId, customerName, items } = await request.json();

        if (!to || !subject || !orderId || !customerName) {
            return NextResponse.json(
                { error: 'Missing required fields: to, subject, orderId, or customerName.' },
                { status: 400 }
            );
        }

        const data = await resend.emails.send({
            from: appConfig.noReplyEmail,
            to: Array.isArray(to) ? to : [to],
            subject,
            react: OrderConfirmationTemplate({ orderId, customerName, items }),
        });

        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        console.error('Order Confirmation Email Error:', error);
        return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
    }
}