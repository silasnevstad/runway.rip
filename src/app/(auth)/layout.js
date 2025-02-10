import UserSidebar from "@/components/organisms/sidebars/UserSidebar";
import { UserProvider } from "@/contexts/UserContext";
import { ThemeProvider } from "next-themes";

export default function AuthenticatedLayout({ children }) {
    return (
        <ThemeProvider attribute="class">
            <UserProvider>
                <div className="flex min-h-screen bg-bg-50 dark:bg-bg-800">
                    <UserSidebar />
                    <div className="flex flex-col grow">
                        {children}
                    </div>
                </div>
            </UserProvider>
        </ThemeProvider>
    );
}