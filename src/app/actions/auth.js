'use server'

import { SignupFormSchema, LoginFormSchema } from '@/app/lib/definitions';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';

const next = '/account';

export async function signup(state, formData) {
    try {
        const validatedFields = SignupFormSchema.safeParse({
            email: formData.get('email'),
            password: formData.get('password'),
            confirmPassword: formData.get('confirmPassword'),
        });
        if (!validatedFields.success) {
            return { errors: validatedFields.error.flatten().fieldErrors };
        }
        const supabase = createClient();
        const { email, password } = validatedFields.data;
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) {
            return { errors: { email: error.message } };
        }
        revalidatePath('/', 'layout');
        redirect(next);
    } catch (err) {
        return { errors: { general: "An unexpected error occurred." } };
    }
}

export async function signin(state, formData) {
    try {
        const validatedFields = LoginFormSchema.safeParse({
            email: formData.get('email'),
            password: formData.get('password'),
        });
        if (!validatedFields.success) {
            return { errors: validatedFields.error.flatten().fieldErrors };
        }
        const supabase = createClient();
        const { email, password } = validatedFields.data;
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) {
            return { errors: { email: error.message } };
        }
        revalidatePath('/', 'layout');
        redirect(next);
    } catch (err) {
        return { errors: { general: "An unexpected error occurred." } };
    }
}

export async function passwordlessSignin(state, formData) {
    try {
        const email = formData.get('email');
        if (!email) {
            return { errors: { email: "Email is required." } };
        }
        const supabase = createClient();
        const { error } = await supabase.auth.signInWithOtp({
            email,
            options: { emailRedirectTo: process.env.NEXT_PUBLIC_URL + '/auth/confirm' }
        });
        if (error) {
            return { errors: { email: error.message } };
        }
        return { message: "Check your email for a magic link." };
    } catch (err) {
        return { errors: { general: "An unexpected error occurred." } };
    }
}

export async function signinWithOAuth(state, formData) {
    try {
        const provider = formData.get('provider');
        const supabase = createClient();
        const { error } = await supabase.auth.signInWithOAuth({
            provider,
            options: {
                redirectTo: process.env.NEXT_PUBLIC_URL + '/auth/callback'
            }
        });
        if (error) {
            return { errors: { provider: error.message } };
        }
        revalidatePath('/', 'layout');
        redirect(next);
    } catch (err) {
        return { errors: { general: "An unexpected error occurred." } };
    }
}
