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

    // ------------------------------------------------------------------
    // WAITLIST MODE:
    // If waitlist mode is enabled (appConfig.waitlistMode === true) and we're running
    // in production (process.env.ENV === 'production'), redirect all requests to the
    // waitlist page unless the requested route is allowed (per appConfig.waitlistAllowedRoutes).
    // ------------------------------------------------------------------
    if (
        process.env.ENV === 'production' &&
        appConfig.waitlistMode &&
        !appConfig.waitlistAllowedRoutes.some((route) =>
            request.nextUrl.pathname.startsWith(route)
        )
    ) {
        const url = request.nextUrl.clone();
        url.pathname = appConfig.waitlistRedirect;
        return NextResponse.redirect(url);
    }

    // ------------------------------------------------------------------
    // PROTECTED ROUTES:
    // For routes defined in appConfig.protectedRoutes, ensure that an authenticated user exists.
    // If the user is not logged in, redirect them to the login page.
    // ------------------------------------------------------------------
    if (
        appConfig.protectedRoutes.some((route) =>
            request.nextUrl.pathname.startsWith(route)
        ) &&
        !user
    ) {
        const url = request.nextUrl.clone();
        url.pathname = '/login';
        return NextResponse.redirect(url);
    }

    // If none of the conditions above are met, simply return the updated response.
    return supabaseResponse;
}