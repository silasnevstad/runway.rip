import Sidebar from "@/components/organisms/Sidebar";
import {UserProvider} from "@/contexts/UserContext";

export default function AuthenticatedLayout({ children }) {
    return (
        <UserProvider>
            <div className="flex min-h-screen bg-bg-50 dark:bg-bg-800">
                <Sidebar />
                <div className="flex flex-col flex-grow">
                    {children}
                </div>
            </div>
        </UserProvider>
    );
}