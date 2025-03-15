import { createServerClient } from '@supabase/ssr';
import { NextResponse } from 'next/server';

/**
 * Refreshes the user's session by calling supabase.auth.getUser().
 * This revalidates tokens with Supabase.
 * We then produce a NextResponse with updated cookies (if the token changed).
 */
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

    const {
        data: { user },
        // error,
    } = await supabase.auth.getUser();
    
    return { user, supabaseResponse };
}