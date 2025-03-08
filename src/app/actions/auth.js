"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import appConfig from "@/config";
import { SignupFormSchema, LoginFormSchema, PasswordlessFormSchema } from "@/app/lib/definitions";

export async function passwordSignup(prevState, formData) {
    const validatedFields = SignupFormSchema.safeParse({
        email: formData.get("email"),
        password: formData.get("password"),
        confirmPassword: formData.get("confirmPassword"),
    });
    if (!validatedFields.success) {
        return { errors: validatedFields.error.flatten().fieldErrors };
    }

    const supabase = await createClient();
    const { email, password } = validatedFields.data;
    const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            emailRedirectTo: process.env.WEBSITE_URL + appConfig.afterSignupPath,
        }
    });
    if (error) {
        return { errors: { email: error.message } };
    }

    revalidatePath(appConfig.afterSignupPath, "layout");
    redirect(appConfig.afterSignupPath);
}

export async function passwordSignin(prevState, formData) {
    const validatedFields = LoginFormSchema.safeParse({
        email: formData.get("email"),
        password: formData.get("password"),
    });
    if (!validatedFields.success) {
        return { errors: validatedFields.error.flatten().fieldErrors };
    }

    const { email, password } = validatedFields.data;
    const supabase = await createClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
        return { errors: { email: error.message } };
    }

    revalidatePath(appConfig.afterLoginPath, "layout");
    redirect(appConfig.afterLoginPath);
}

export async function passwordlessSignin(prevState, formData) {
    const validatedFields = PasswordlessFormSchema.safeParse({
        email: formData.get("email"),
    });
    if (!validatedFields.success) {
        return { errors: validatedFields.error.flatten().fieldErrors };
    }
    const { email } = validatedFields.data;
    const supabase = await createClient();
    const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
            emailRedirectTo: process.env.WEBSITE_URL + appConfig.afterLoginPath,
        },
    });
    if (error) {
        return { errors: { email: error.message } };
    }

    return { message: "Check your email for a magic link." };
}

export async function signinWithOAuth(provider) {
    if (!provider) {
        return { errors: { provider: "No OAuth provider specified." } };
    }

    const supabase = await createClient();
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider,
        options: { redirectTo: process.env.WEBSITE_URL + "/auth/callback" },
    });
    if (error) {
        return { errors: { provider: error.message } };
    }
    if (data.url) {
        redirect(data.url);
    }

    return { errors: { provider: "Unknown error during OAuth signin." } };
}

export async function signout() {
    const supabase = await createClient();
    const { error } = await supabase.auth.signOut();
    if (error) {
        return { errors: { signout: error.message } };
    }
}