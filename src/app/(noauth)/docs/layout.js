import DocumentationPageLayout from '@/components/organisms/DocPage';

export default function DocumentationLayout({ children }) {
    return (
        <section className="flex w-full min-h-screen">
            <DocumentationPageLayout>
                {children}
            </DocumentationPageLayout>
        </section>
    );
}