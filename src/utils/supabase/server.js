import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export async function createClient() {
    const cookieStore = await cookies();

    return createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        {
            cookies: {
                async getAll() {
                    // Await cookieStore.getAll() if necessary
                    return cookieStore.getAll();
                },
                async setAll(cookiesToSet) {
                    try {
                        for (const { name, value, options } of cookiesToSet) {
                            await cookieStore.set(name, value, options);
                        }
                    } catch {
                        // When called from a Server Component, ignore if middleware refresh tokens.
                    }
                },
            },
        }
    );
}