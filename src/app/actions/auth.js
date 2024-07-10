'use server'

import { SignupFormSchema, LoginFormSchema } from '@/app/lib/definitions'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import {createClient} from "@/utils/supabase/server";

export async function signup(state, formData) {
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

    const { error } = await supabase.auth.signUp({
        email,
        password,
    })

    if (error) {
        return {
            errors: {
                email: error.message,
            },
        }
    }

    revalidatePath('/', 'layout');
    redirect('/account');
}

export async function signin(state, formData) {
    // Validate form fields
    const validatedFields = LoginFormSchema.safeParse({
        email: formData.get('email'),
        password: formData.get('password'),
    })

    // If any form fields are invalid, return early
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const supabase = createClient();

    const { email, password } = validatedFields.data;

    const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
    })

    if (error) {
        return {
            errors: {
                email: error.message,
            },
        }
    }

    revalidatePath('/', 'layout');
    redirect('/account');
}
