import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';
import appConfig from "@/config";

export async function POST(request) {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
        await supabase.auth.signOut();
    }
    revalidatePath(appConfig.auth.afterLogoutPath);
    return NextResponse.redirect(new URL(appConfig.auth.afterLogoutPath, request.url), { status: 302 });
}
