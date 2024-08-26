import UserSidebar from "@/components/organisms/Sidebars/UserSidebar";
import { UserProvider } from "@/contexts/UserContext";

export default function AuthenticatedLayout({ children }) {
    return (
        <UserProvider>
            <div className="flex min-h-screen bg-bg-50 dark:bg-bg-800">
                <UserSidebar />
                <div className="flex flex-col flex-grow">
                    {/*<Header />*/}
                    {children}
                </div>
            </div>
        </UserProvider>
    );
}