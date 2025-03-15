'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { getBrowserClient } from '@/utils/supabase/client';
import { useAuth } from './AuthContext';

const UserProfileContext = createContext(null);

export function UserProvider({ children }) {
    const { user, isLoading: authLoading } = useAuth();
    const [profile, setProfile] = useState(null);
    const [loadingProfile, setLoadingProfile] = useState(false);
    const supabase = getBrowserClient();

    useEffect(() => {
        if (!authLoading && user) {
            // fetch the user's profile row, if appConfig.auth.profiles is true
            setLoadingProfile(true);
            supabase
                .from('profiles')
                .select('*')
                .eq('id', user.id)
                .single()
                .then(({ data, error }) => {
                    setLoadingProfile(false);
                    if (error) {
                        console.error('Error loading profile:', error);
                        setProfile(null);
                    } else {
                        setProfile(data);
                    }
                });
        } else {
            // user is null or not loaded yet
            setProfile(null);
        }
    }, [user, authLoading, supabase]);

    return (
        <UserProfileContext.Provider value={{ profile, loadingProfile }}>
            {children}
        </UserProfileContext.Provider>
    );
}

export function useUser() {
    const ctx = useContext(UserProfileContext);
    if (!ctx) throw new Error('useUserProfile must be used inside UserProfileProvider');
    return ctx;
}
