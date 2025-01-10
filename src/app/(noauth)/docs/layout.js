import DocumentationPage from '@/app/(noauth)/docs/components/DocPage';

export default function DocumentationLayout({ children }) {
    return (
        <section className="flex w-full min-h-screen">
            <DocumentationPage>
                {children}
            </DocumentationPage>
        </section>
    );
}