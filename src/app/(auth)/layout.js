import Header from "@/components/organisms/Header";
import React from "react";
import BaseLayout from "@/templates/BaseLayout";
import {createClient} from "@/utils/supabase/server";
import appConfig from "@/config";
import {redirect} from "next/navigation";

export default async function AuthenticatedLayout({ children }) {
    const supabase = await createClient();
    const { data: { user }, error } = await supabase.auth.getUser();
    if (error || !user) {
        redirect(appConfig.auth.unauthenticatedRedirect)
    }

    return (
        <BaseLayout>
            <Header
                user={user}
                navLinks={[
                    { title: "Dashboard", href: "/dashboard" },
                    { title: "Account", href: "/account" },
                ]}
            />
            {children}
        </BaseLayout>
    );
}