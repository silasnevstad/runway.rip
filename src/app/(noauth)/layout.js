export default function HeaderLayout({ children }) {
    return (
        <section className="flex flex-col items-center w-full min-h-screen mx-auto bg-bg-50 dark:bg-bg-900">
            {children}
        </section>
    );
}
