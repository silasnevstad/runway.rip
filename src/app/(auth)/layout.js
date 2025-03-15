import Header from "@/components/organisms/Header";
import React from "react";
import BaseLayout from "@/templates/BaseLayout";
import {createClient} from "@/utils/supabase/server";
import appConfig from "@/config";

export default async function AuthenticatedLayout({ children }) {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    let profile = null;
    if (appConfig.auth.profiles) {
        const { data, error } = await supabase
            .from("profiles")
            .select("*")
            .eq("id", user?.id)
            .single();
        if (error) {
            console.error("Error fetching profile:", error);
        } else {
            profile = data;
        }
    }
    return (
        <BaseLayout>
            <Header user={user} profile={profile} />
            {children}
        </BaseLayout>
    );
}