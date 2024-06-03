import Sidebar from "@/components/organisms/Sidebar";
import {UserProvider} from "@/contexts/UserContext";
import Header from "@/components/organisms/headers/Header";

export default function AuthenticatedLayout({ children }) {
    return (
        <UserProvider>
            <div className="flex min-h-screen bg-bg-50 dark:bg-bg-800">
                <Sidebar />
                <div className="flex flex-col flex-grow">
                    {/*<Header />*/}
                    {children}
                </div>
            </div>
        </UserProvider>
    );
}