import { createClient } from "@/utils/supabase/server";
import ClientUserProvider from "@/contexts/UserContext";

export default async function UserProvider({ children }) {
    const supabase = await createClient();
    const { data: { user }, error } = await supabase.auth.getUser();

    let userData = null;
    if (error) {
        // If the error indicates no session, ignore it.
        if (error.message !== "Auth session missing!") {
            console.error("Error fetching verified user:", error);
        }
    }

    if (user) {
        // Optionally fetch extra profile data
        const { data: profile, error: profileError } = await supabase
            .from("profiles")
            .select("*")
            .eq("id", user.id)
            .single();
        if (profileError) {
            console.error("Profile fetch error:", profileError);
            userData = user;
        } else {
            userData = { ...user, profile };
        }
    }

    return (
        <ClientUserProvider initialUser={userData}>
            {children}
        </ClientUserProvider>
    );
}