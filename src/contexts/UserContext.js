"use client";

import React, { useEffect, createContext, useState, useContext } from "react";
import { createClient } from "@/utils/supabase/client";

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const supabase = createClient();

    // Fetch both the auth user and the corresponding profile
    const fetchUserAndProfile = async () => {
        const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
        if (sessionError) {
            console.error("Session error:", sessionError);
            setUser(null);
            return;
        }
        const authUser = sessionData?.session?.user;
        if (authUser) {
            const { data: profile, error: profileError } = await supabase
                .from("profiles")
                .select("*")
                .eq("id", authUser.id)
                .single();
            if (profileError) {
                console.error("Profile fetch error:", profileError);
                setUser(authUser);
            } else {
                setUser({ ...authUser, profile });
            }
        } else {
            setUser(null);
        }
    };

    useEffect(() => {
        fetchUserAndProfile();
        const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
            if (session?.user) {
                fetchUserAndProfile();
            } else {
                setUser(null);
            }
        });
        return () => {
            authListener.subscription.unsubscribe();
        };
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
};