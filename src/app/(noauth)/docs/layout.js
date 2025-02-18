import DocsLayout from "./_components/DocsLayout";

export const metadata = {
    title: "Docs | Runway",
    description: "Documentation for the Runway",
};

export default function Layout({ children }) {
    return (
        <section className="flex w-full min-h-screen bg-bg-50 dark:bg-bg-900">
            <DocsLayout>
                {children}
            </DocsLayout>
        </section>
    );
}
