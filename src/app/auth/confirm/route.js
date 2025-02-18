import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import appConfig from '@/config';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const token_hash = searchParams.get('token_hash');
    const type = searchParams.get('type');
    const next = searchParams.get('next') ?? appConfig.afterLoginPath;

    if (token_hash && type) {
        const supabase = createClient();
        const { error } = await supabase.auth.verifyOtp({ token_hash, type });
        if (!error) {
            redirect(next);
        }
    }

    // If there's any issue, redirect to a generic error
    redirect('/error');
}