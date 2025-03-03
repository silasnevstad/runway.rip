"use client";
import { useState } from 'react';
import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";
import { addLead } from "@/libs/supabase/db";

export default function WaitlistForm({
    color = 'primary',
    variant = 'soft',
}) {
    const [email, setEmail] = useState('');
    const [feedback, setFeedback] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);
        setFeedback('');
        try {
            const { data, error } = await addLead(email);
            console.log(error, error?.code);
            if (error && error.code === '23505') {
                setFeedback('You are already on the waitlist!');
                return;
            } else if (error) {
                setFeedback(`Error: ${error.message}`);
                return;
            }
            setFeedback('Thanks for joining our waitlist!');
            setEmail('');
        } catch (err) {
            setFeedback(`Error: ${err.message}`);
        } finally {
            setLoading(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
                {loading ? 'Submitting...' : 'Join Waitlist'}
            </Button>
            {feedback && <p>{feedback}</p>}
        </form>
    );
}