import { ThemeProvider } from "next-themes";

export default function Layout({ children }) {
    return (
        <ThemeProvider attribute="class">
            <section className="flex flex-col items-center w-full min-h-screen bg-bg-50 dark:bg-bg-900">
                {children}
            </section>
        </ThemeProvider>
    );
}
