import { updateSession } from '@/utils/supabase/middleware';

export async function middleware(request) {
    return await updateSession(request);
}

export const config = {
    matcher: [
        // Example ignoring:
        // - _next/static and _next/image (Next.js internals)
        // - favicon.ico
        // - public files (like .png .jpg)
        // - any route that is fully public (like /public or /docs)
        '/((?!_next/static|_next/image|favicon.ico|docs||.*\\.(?:png|jpg|jpeg|svg|gif)).*)',
    ],
};