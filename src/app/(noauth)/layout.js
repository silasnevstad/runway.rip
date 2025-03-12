import BaseLayout from "@/templates/BaseLayout";

export default function Layout({ children }) {
    return (
        <BaseLayout header={false} footer={false}>
            {children}
        </BaseLayout>
    );
}
