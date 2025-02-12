import DocsShell from "./_components/DocsShell";

export const metadata = {
    title: "Docs | Runway",
    description: "Documentation for the Runway",
};

export default function DocsLayout({ children }) {
    return (
        <section className="flex w-full min-h-screen">
            <DocsShell>
                {children}
            </DocsShell>
        </section>
    );
}
