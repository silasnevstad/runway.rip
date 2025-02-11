'use client'
import React from 'react';
import Button from '@/components/atoms/Button';
import { loadStripe } from '@stripe/stripe-js';
import { useRouter } from 'next/navigation';

const ButtonCheckout = ({ mode = 'payment', planType }) => {
    const router = useRouter();

    const handleCheckout = async () => {
        try {
            const res = await fetch('/api/checkout_sessions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ type: planType, mode }),
            });
            const { sessionId } = await res.json();

            if (sessionId) {
                const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
                const { error } = await stripe.redirectToCheckout({ sessionId });
                if (error) console.error(error);
            }
        } catch (err) {
            console.error('Checkout error', err);
        }
    };

    return (
        <Button onClick={handleCheckout} className="w-full">
            Subscribe Now
        </Button>
    );
};

export default ButtonCheckout;
