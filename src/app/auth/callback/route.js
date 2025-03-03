import { NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';
import appConfig from '@/config';

export async function GET(request) {
    const { searchParams, origin } = new URL(request.url);
    const code = searchParams.get('code');
    const next = searchParams.get('next') ?? appConfig.afterLoginPath;

    if (code) {
        const supabase = await createClient();
        const { error } = await supabase.auth.exchangeCodeForSession(code);
        if (!error) {
            // Respect the original domain or a load balancer if present
            const forwardedHost = request.headers.get('x-forwarded-host');
            const isLocalEnv = process.env.NEXT_PUBLIC_NODE_ENV === 'development';
            if (isLocalEnv) {
                return NextResponse.redirect(`${origin}${next}`);
            } else if (forwardedHost) {
                return NextResponse.redirect(`https://${forwardedHost}${next}`);
            } else {
                return NextResponse.redirect(`${origin}${next}`);
            }
        }
    }
    return NextResponse.redirect(`${origin}/error`);
}