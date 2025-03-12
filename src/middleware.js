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
    const isProtectedRoute = appConfig.auth.protectedRoutes.some((protectedPath) =>
        pathname.startsWith(protectedPath)
    );
    if (isProtectedRoute && !user) {
        const url = request.nextUrl.clone();
        url.pathname = '/login';
        return NextResponse.redirect(url);
    }

    return supabaseResponse;
}

export const config = {
    matcher: [
        /*
         * Match all request paths except:
         *   - /api/* (API routes)
         *   - _next/static & _next/image (Next.js internals)
         *   - favicon.ico
         *   - manifest.json
         *   - any files ending with .svg, .png, .jpg, .jpeg, .gif, .webp
         */
        '/((?!api|_next/static|_next/image|favicon.ico|manifest\\.json|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
};