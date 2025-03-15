"use client";
import { useState } from 'react';
import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";
import { addWaitlist } from "@/libs/supabase/db";
import {mergeClasses} from "@/utils/styling";

export default function WaitlistForm({
    color = "primary",
    variant = "soft",
    className = "",
}) {
    const [email, setEmail] = useState('');
    const [buttonText, setButtonText] = useState('Join the waitlist');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);
        setButtonText('Joining...');
        try {
            const { data, error } = await addWaitlist(email);
            if (error && error.code === '23505') {
                setButtonText('Already on waitlist!');
                setTimeout(() => {
                    setButtonText('Join the waitlist');
                }, 3000);
                return;
            } else if (error) {
                // temporary error message
                setButtonText(`${error.message}`);
                setTimeout(() => {
                    setButtonText('Join the waitlist');
                }, 3000);
                return;
            }
            setButtonText('Thanks for joining!');
            setTimeout(() => {
                setButtonText('Join the waitlist');
            }, 3000);
            setEmail('');
        } catch (err) {
            setButtonText(`Error: ${err.message}`);
        } finally {
            setLoading(false);
        }
    }

    return (
        <form
            id="waitlist-form"
            onSubmit={handleSubmit}
            className={mergeClasses("flex flex-col gap-4", className)}
        >
            <Input
                type="email"
                placeholder="Enter your email"
                variant={variant}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <Button
                type="submit"
                disabled={loading}
                color={color}
                variant={variant}
                loading={loading}
            >
                {buttonText}
            </Button>
        </form>
    );
}