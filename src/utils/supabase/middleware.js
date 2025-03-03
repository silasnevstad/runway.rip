import { createServerClient } from '@supabase/ssr';
import { NextResponse } from 'next/server';
import appConfig from '@/config';

export async function updateSession(request) {
    let supabaseResponse = NextResponse.next({ request });

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        {
            cookies: {
                getAll: () => request.cookies.getAll(),
                setAll: (cookiesToSet) => {
                    cookiesToSet.forEach(({ name, value, options }) =>
                        request.cookies.set(name, value, options)
                    );
                    supabaseResponse = NextResponse.next({ request });
                    cookiesToSet.forEach(({ name, value, options }) =>
                        supabaseResponse.cookies.set(name, value, options)
                    );
                },
            },
        }
    );

    // Refresh the user's session (this call revalidates and updates the auth token).
    // IMPORTANT: Do not remove or change this call as it ensures that the session remains valid.
    const {
        data: { user },
    } = await supabase.auth.getUser();

    // Return the user plus the base NextResponse with updated cookies.
    return { user, supabaseResponse };
}