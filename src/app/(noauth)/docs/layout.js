import Sidebar from "@/components/organisms/sidebars/Sidebar";
import DocumentationSidebar from "@/components/organisms/sidebars/DocumentationSidebar";
import { FaPlay, FaBook, FaCubes, FaPuzzlePiece } from 'react-icons/fa';
import BreadcrumbTitle from "@/components/atoms/BreadcrumbTitle";

const documentationSections = [
    {
        title: "Get started",
        href: "/docs",
        icon: <FaPlay className="w-5 h-5" />,
        items: [
            { title: "Intro", href: "/docs/intro" },
            { title: "Quick start", href: "/docs/quick-start" },
        ]
    },
    {
        title: "Tutorials",
        href: "/docs/tutorials",
        icon: <FaBook className="w-5 h-5" />,
        items: [
            { title: "Ship in 5 minutes", href: "/docs/tutorials/ship-in-5-minutes" },
            { title: "Static page", href: "/docs/tutorials/static-page" },
            { title: "User authentication", href: "/docs/tutorials/authentication" },
            { title: "API call", href: "/docs/tutorials/api-call" },
            { title: "Private page", href: "/docs/tutorials/private-page" },
            { title: "Stripe Subscriptions", href: "/docs/tutorials/stripe-subscriptions" },
            { title: "Privacy policy with AI", href: "/docs/tutorials/privacy-policy-ai" },
        ]
    },
    {
        title: "Features",
        href: "/docs/features",
        icon: <FaCubes className="w-5 h-5" />,
        items: [
            { title: "SEO", href: "/docs/features/seo" },
            { title: "Database", href: "/docs/features/database" },
            { title: "Emails", href: "/docs/features/emails" },
            { title: "Payments", href: "/docs/features/payments" },
            { title: "Google OAuth", href: "/docs/features/google-oauth" },
            { title: "Magic Links", href: "/docs/features/magic-links" },
            { title: "Customer support", href: "/docs/features/customer-support" },
            { title: "Error handling", href: "/docs/features/error-handling" },
            { title: "Analytics", href: "/docs/features/analytics" },
        ]
    },
    {
        title: "Components",
        href: "/docs/components",
        icon: <FaPuzzlePiece className="w-5 h-5" />,
        items: [
            { title: "UI Kit", href: "/docs/components/ui-kit" },
            { title: "Forms", href: "/docs/components/forms" },
            { title: "Layouts", href: "/docs/components/layouts" },
        ]
    },
];

export default function DocumentationLayout({ children }) {
    return (
        <section className="flex w-full min-h-screen">
            <Sidebar
                alwaysOpen={true}
                position="left"
                width="w-64"
                collapsedWidth="w-16"
                bgColor="bg-bg-100 dark:bg-gray-900"
                textColor="text-black dark:text-white"
            >
                <DocumentationSidebar sections={documentationSections} />
            </Sidebar>
            <main className="ml-64 w-full p-10 pt-16">
                <BreadcrumbTitle sections={documentationSections} />
                {children}
            </main>
        </section>
    );
}