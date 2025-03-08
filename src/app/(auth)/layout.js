import Header from "@/components/organisms/Header";
import React from "react";

export default function AuthenticatedLayout({ children }) {
    return (
        <div className="flex flex-col min-h-screen bg-bg-0 dark:bg-bg-900">
            {/* Header */}
            <Header
                navLinks={[
                    { title: "Dashboard", href: "/dashboard" },
                    { title: "Account", href: "/account" },
                ]}
                background={"bg-bg-0 dark:bg-bg-800"}
            />

            <div className="flex flex-col grow">
                {children}
            </div>
        </div>
    );
}