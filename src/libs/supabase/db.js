'use server';

import { supabase } from "@/libs/supabase/config";
import { createClient } from '@/utils/supabase/server';
import appConfig from '@/config';

// addLead adds a new lead to the waitlist table (for waiting list)
export async function addWaitlist(email) {
    return supabase.from('waitlist').insert({email});
}
