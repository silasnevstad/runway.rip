// UNUSED, BUT HERE FOR REFERENCE IF YOU DECIDE TO USE IT
"use client";

import { createContext, useContext, useEffect, useState } from 'react';
import { getBrowserClient } from '@/utils/supabase/client';

const AuthContext = createContext(null);

export function AuthProvider({ children, initialUser = null }) {
    const [user, setUser] = useState(initialUser);
    const [isLoading, setIsLoading] = useState(!initialUser);

    useEffect(() => {
        const supabase = getBrowserClient();

        // On mount, if we have no initial user, fetch from supabase
        if (!initialUser) {
            supabase.auth.getUser().then(({ data: { user } }) => {
                setUser(user ?? null);
                setIsLoading(false);
            });
        } else {
            setIsLoading(false);
        }

        // Listen for client-side auth changes
        const { data: subscription } = supabase.auth.onAuthStateChange((event, session) => {
            if (event === 'SIGNED_OUT') {
                setUser(null);
            } else if (session?.user) {
                setUser(session.user);
            }
        });

        return () => {
            subscription?.unsubscribe();
        };
    }, [initialUser]);

    return (
        <AuthContext.Provider value={{ user, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
}

// Simple hook to consume it
export function useAuth() {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
    return ctx;
}