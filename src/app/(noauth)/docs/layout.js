import DocumentationPageLayout from '@/app/(noauth)/docs/components/DocPage';

export default function DocumentationLayout({ children }) {
    return (
        <section className="flex w-full min-h-screen">
            <DocumentationPageLayout>
                {children}
            </DocumentationPageLayout>
        </section>
    );
}