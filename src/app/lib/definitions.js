import { z } from 'zod';

export const LoginFormSchema = z.object({
    email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
    password: z.string().min(8, { message: 'Must be at least 8 characters long' }).trim(),
});

export const SignupFormSchema = z.object({
        email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
        password: z.string().min(8, { message: 'Must be at least 8 characters long' }).trim(),
        confirmPassword: z.string().min(8, { message: 'Must be at least 8 characters long' }).trim(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: 'Passwords do not match',
        path: ['confirmPassword'],
    });