import { updateSession } from '@/utils/supabase/middleware';

export async function middleware(request) {
    return updateSession(request);
}

export const config = {
    matcher: [
        // The matcher below ensures the middleware runs for all routes except:
        // - Next.js internals (like _next/static and _next/image)
        // - Favicon and typical public image files.
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|svg|gif)).*)',
    ],
};