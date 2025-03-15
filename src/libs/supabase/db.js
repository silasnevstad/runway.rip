'use server';

import { supabase } from "@/libs/supabase/config";
import { createClient } from '@/utils/supabase/server';
import appConfig from '@/config';

// fetchProfile is optional
export async function fetchProfile() {
    if (!appConfig.auth.profiles) return null;

    const supabaseClient = createClient();
    // Always re-validate the user on the server:
    const {
        data: { user },
    } = await supabaseClient.auth.getUser();
    if (!user) {
        return null;
    }

    // If user is logged in, get their profile row
    const { data, error } = await supabaseClient
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

    if (error) {
        return null; // Or handle error
    }

    return data;
}

// addLead adds a new lead to the waitlist table (for waiting list)
export async function addWaitlist(email) {
    return supabase.from('waitlist').insert({email});
}
