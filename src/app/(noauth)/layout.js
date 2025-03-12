import BaseLayout from "@/templates/BaseLayout";

export default function Layout({ children }) {
    return (
        <BaseLayout>
            {children}
        </BaseLayout>
    );
}
