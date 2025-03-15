import { NextResponse } from 'next/server';
import { arcjetHandleRequest } from '@/libs/arcjet/arcjet';
import { updateSession } from '@/utils/supabase/middleware';
import appConfig from '@/config';

export async function middleware(request) {
    // Run Arcjet protection if enabled.
    if (appConfig.arcjet.enabled) {
        const arcjetResponse = await arcjetHandleRequest(request);
        if (arcjetResponse) return arcjetResponse;
    }

    // If auth is disabled globally, skip session refresh or route protection.
    if (!appConfig.auth.enabled) {
        return NextResponse.next();
    }

    // Otherwise, refresh the user's session (SSR-based)
    const { user, supabaseResponse } = await updateSession(request);
    const { pathname } = request.nextUrl;

    // Check for authentication on protected routes (from appConfig.protectedRoutes)
    const isProtectedRoute = appConfig.auth.protectedRoutes.some((protectedPath) =>
        pathname.startsWith(protectedPath)
    );
    if (isProtectedRoute && !user) {
        const url = request.nextUrl.clone();
        url.pathname = appConfig.auth.unauthenticatedRedirect;
        return NextResponse.redirect(url);
    }

    return supabaseResponse;
}

// Restrict which routes run the middleware
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
