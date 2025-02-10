'use server'

import { SignupFormSchema, LoginFormSchema } from '@/app/lib/definitions'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export async function signup(state, formData) {
    try {
        const validatedFields = SignupFormSchema.safeParse({
            email: formData.get('email'),
            password: formData.get('password'),
            confirmPassword: formData.get('confirmPassword'),
        });

        if (!validatedFields.success) {
            return {
                errors: validatedFields.error.flatten().fieldErrors,
            };
        }

        const supabase = createClient();
        const { email, password } = validatedFields.data;

        const { error } = await supabase.auth.signUp({ email, password });
        if (error) {
            return {
                errors: { email: error.message },
            };
        }

        revalidatePath('/', 'layout');
        redirect('/account');
    } catch (err) {
        return { errors: { general: 'An unexpected error occurred.' } };
    }
}

export async function signin(state, formData) {
    try {
        const validatedFields = LoginFormSchema.safeParse({
            email: formData.get('email'),
            password: formData.get('password'),
        });

        if (!validatedFields.success) {
            return {
                errors: validatedFields.error.flatten().fieldErrors,
            };
        }

        const supabase = createClient();
        const { email, password } = validatedFields.data;

        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) {
            return {
                errors: { email: error.message },
            };
        }

        revalidatePath('/', 'layout');
        redirect('/account');
    } catch (err) {
        return { errors: { general: 'An unexpected error occurred.' } };
    }
}

export async function signinwithgoogle() {
    try {
        const supabase = createClient();
        const { error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: `${process.env.NEXT_PUBLIC_URL}/auth/callback`,
            },
        });
        if (error) {
            console.log(error);
            return {
                errors: { email: error.message },
            };
        }

        revalidatePath('/', 'layout');
        redirect('/account');
    } catch (err) {
        return { errors: { general: 'An unexpected error occurred.' } };
    }
}

export async function signinwithgithub(state, formData) {
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithOAuth({
        provider: 'github',
        options: {
            redirectTo: `${process.env.NEXT_PUBLIC_URL}/auth/callback`,
        },
    });
    if (error) {
        return {
            errors: { email: error.message },
        };
    }

    revalidatePath('/', 'layout');
    redirect('/account');
}