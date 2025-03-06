import { NextResponse } from 'next/server';
import { updateSession } from '@/utils/supabase/middleware';
import appConfig from '@/config';

export async function middleware(request) {
    const { user, supabaseResponse } = await updateSession(request);

    const { pathname } = request.nextUrl;

    // ------------------------------------------------------------------
    // PROTECTED ROUTES:
    // For routes defined in appConfig.protectedRoutes, we ensure that an authenticated user exists.
    // If the user is not logged in, redirect them to the login page.
    // ------------------------------------------------------------------
    const isProtectedRoute = appConfig.protectedRoutes.some((protectedPath) =>
        pathname.startsWith(protectedPath)
    );
    if (isProtectedRoute && !user) {
        const url = request.nextUrl.clone();
        url.pathname = '/login';
        return NextResponse.redirect(url);
    }

    // ------------------------------------------------------------------
    // WAITLIST MODE:
    // If waitlist mode is enabled (appConfig.waitlistMode === true) and we're running
    // in production (process.env.NODE_ENV === 'production'), we redirect all requests to the
    // waitlist page unless the requested route is allowed (per appConfig.waitlistAllowedRoutes).
    // ------------------------------------------------------------------
    const isProduction = process.env.NEXT_PUBLIC_NODE_ENV === 'production';
    if (appConfig.waitlistMode && isProduction) {
        const isAllowed = appConfig.waitlistAllowedRoutes.some((allowedPath) =>
            pathname.startsWith(allowedPath)
        );

        if (!isAllowed) {
            const url = request.nextUrl.clone();
            url.pathname = appConfig.waitlistRedirect;
            return NextResponse.redirect(url);
        }
    }

    return supabaseResponse;
}

export const config = {
    matcher: [
        /*
         * Match all request paths except:
         *   - _next/static & _next/image (Next.js internals)
         *   - favicon.ico
         *   - manifest.json
         *   - any files ending with .svg, .png, .jpg, .jpeg, .gif, .webp
         */
        '/((?!_next/static|_next/image|favicon.ico|manifest\\.json|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
};