import { NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server'

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const token_hash = searchParams.get('token_hash');
    const type = searchParams.get('type');
    const next = '/account';

    // Create redirect link without the secret token
    const redirectTo = request.nextUrl.clone();
    redirectTo.pathname = next;
    redirectTo.searchParams.delete('token_hash');
    redirectTo.searchParams.delete('type');

    if (token_hash && type) {
        const supabase = createClient();
        const { error } = await supabase.auth.verifyOtp({ type, token_hash });
        if (!error) {
            redirectTo.searchParams.delete('next');
            return NextResponse.redirect(redirectTo);
        }
    }

    // If verification fails, redirect to error page
    redirectTo.pathname = '/error';
    return NextResponse.redirect(redirectTo);
}