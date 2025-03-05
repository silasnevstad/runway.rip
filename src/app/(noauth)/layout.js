export default function Layout({ children }) {
    return (
        <section className="flex flex-col items-center w-full min-h-screen bg-bg-0 dark:bg-bg-950">
            {children}
        </section>
    );
}
