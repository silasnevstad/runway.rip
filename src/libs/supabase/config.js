import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;
const connectionString = process.env.NEXT_PUBLIC_SUPABASE_DATABASE_URL;

if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Supabase URL and anon key must be set in your environment variables.");
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export { supabase };