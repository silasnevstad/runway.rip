import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const connectionString = process.env.NEXT_PUBLIC_SUPABASE_DATABASE_URL

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// const sql = postgres(connectionString);

export { supabase }