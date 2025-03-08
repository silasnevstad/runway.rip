"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

const UserContext = createContext({ user: null });

export default function ClientUserProvider({ initialUser, children }) {
    const [user, setUser] = useState(initialUser);
    const supabase = createClient();
    const router = useRouter();

    useEffect(() => {
        const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
            if (session?.user) {
                router.refresh();
            } else {
                setUser(null);
            }
        });
        return () => {
            authListener.subscription.unsubscribe();
        };
    }, [supabase, router]);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}

export const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
};
