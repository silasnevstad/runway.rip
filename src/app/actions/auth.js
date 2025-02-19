'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';
import appConfig from '@/config';
import { SignupFormSchema, LoginFormSchema } from '@/app/lib/definitions';

export async function passwordSignup(formData) {
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
    redirect(appConfig.afterLoginPath);
}

export async function resetPassword(formData) {
    const email = formData.get('email');
    if (!email) {
        return { errors: { email: 'Email is required.' } };
    }

    const supabase = createClient();
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: process.env.NEXT_PUBLIC_URL + '/account/update-password',
    });
    if (error) {
        return { errors: { email: error.message } };
    }
    return { message: 'Check your email for a password reset link.' };
}

export async function passwordSignin(formData) {
    const validatedFields = LoginFormSchema.safeParse({
        email: formData.get('email'),
        password: formData.get('password'),
    });
    if (!validatedFields.success) {
        return { errors: validatedFields.error.flatten().fieldErrors };
    }

    const { email, password } = validatedFields.data;
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
        return { errors: { email: error.message } };
    }
    revalidatePath('/', 'layout');
    redirect(appConfig.afterLoginPath);
}

export async function passwordlessSignin(formData) {
    const email = formData.get('email');
    if (!email) {
        return { errors: { email: 'Email is required.' } };
    }
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
            emailRedirectTo: process.env.NEXT_PUBLIC_URL + '/auth/confirm',
        },
    });
    if (error) {
        return { errors: { email: error.message } };
    }
    return { message: 'Check your email for a magic link.' };
}

export async function signinWithOAuth(provider) {
    if (!provider) {
        return { errors: { provider: 'No OAuth provider specified.' } };
    }

    const supabase = createClient();
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider,
        options: { redirectTo: process.env.NEXT_PUBLIC_URL + '/auth/callback' },
    });
    if (error) {
        return { errors: { provider: error.message } };
    }
    if (data.url) {
        redirect(data.url);
    }

    redirect('/error');
}