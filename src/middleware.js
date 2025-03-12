import { NextResponse } from 'next/server';
import { updateSession } from '@/utils/supabase/middleware';
import { arcjetHandleRequest } from "@/libs/arcjet/arcjet";
import appConfig from '@/config';

export async function middleware(request) {
    // Run Arcjet protection if enabled.
    if (appConfig.arcjet.enabled) {
        const arcjetResponse = await arcjetHandleRequest(request);
        if (arcjetResponse) return arcjetResponse;
    }

    // Update session via Supabase
    const { user, supabaseResponse } = await updateSession(request);
    const { pathname } = request.nextUrl;

    // Check for authentication on protected routes (from appConfig.protectedRoutes)
    const isProtectedRoute = appConfig.auth.protectedRoutes.some((protectedPath) =>
        pathname.startsWith(protectedPath)
    );
    if (isProtectedRoute && !user) {
        const url = request.nextUrl.clone();
        url.pathname = '/login';  // Redirect to /login if not authenticated
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