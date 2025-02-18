import { UserProvider } from "@/contexts/UserContext";
import { ThemeProvider } from "next-themes";

export default function AuthenticatedLayout({ children }) {
    return (
        <ThemeProvider attribute="class">
            <UserProvider>
                <div className="flex min-h-screen bg-bg-0 dark:bg-bg-900">
                    <div className="flex flex-col grow">
                        {children}
                    </div>
                </div>
            </UserProvider>
        </ThemeProvider>
    );
}