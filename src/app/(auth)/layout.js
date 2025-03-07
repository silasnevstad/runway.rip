export default function AuthenticatedLayout({ children }) {
    return (
        <div className="flex min-h-screen bg-bg-0 dark:bg-bg-900">
            <div className="flex flex-col grow">
                {children}
            </div>
        </div>
    );
}