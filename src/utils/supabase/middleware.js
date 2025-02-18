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

    // Must call getUser() to re-validate and refresh tokens.
    const { data: { user } } = await supabase.auth.getUser();

    // If route is in protectedRoutes, ensure we have a user.
    // (Alternatively, you can match route by checking request.nextUrl.pathname)
    if (
        !user &&
        !appConfig.publicRoutes.some((r) => request.nextUrl.pathname.startsWith(r))
    ) {
        // redirect to login if no user
        const url = request.nextUrl.clone();
        url.pathname = '/login';
        return NextResponse.redirect(url);
    }

    return supabaseResponse;
}
