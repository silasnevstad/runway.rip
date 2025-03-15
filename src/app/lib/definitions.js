import { z } from 'zod';

export const LoginFormSchema = z.object({
    email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
    password: z.string().min(6, { message: 'Must be at least 6 characters long' }).trim(),
});

export const SignupFormSchema = z.object({
        email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
        password: z.string().min(6, { message: 'Must be at least 6 characters long' }).trim(),
        confirmPassword: z.string().trim(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: 'Passwords do not match',
        path: ['confirmPassword'],
    });

export const PasswordlessFormSchema = z.object({
    email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
});