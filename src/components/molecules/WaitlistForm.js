"use client";
import { useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";

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
            // Create a client instance (this will use your SUPABASE_URL and SUPABASE_ANON_KEY)
            const supabase = createClient();
            const { data, error } = await supabase.from('leads').insert({ email });
            if (error) {
                throw error;
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