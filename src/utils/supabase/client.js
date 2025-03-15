import { createBrowserClient } from '@supabase/ssr';

let browserSupabaseClient = null;

/**
 * Returns a (singleton) browser client for real-time usage, onAuthStateChange, etc.
 */
export function getBrowserClient() {
    if (!browserSupabaseClient) {
        browserSupabaseClient = createBrowserClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL,
            process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
        );
    }
    return browserSupabaseClient;
}