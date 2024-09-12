export default function Layout({ children }) {
    return (
        <section className="flex flex-col items-center w-full min-h-screen bg-bg-50 dark:bg-bg-900">
            {children}
        </section>
    );
}
