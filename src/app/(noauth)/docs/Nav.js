import { PlayIcon, BookOpenIcon, CursorArrowRaysIcon, MapIcon, PuzzlePieceIcon } from "@heroicons/react/24/outline";

export const DocsNav = [
    {
        title: "Get started",
        href: "/docs",
        icon: <PlayIcon className="w-6 h-6" />,
        items: [
            { title: "Installation", href: "/docs/installation" },
            { title: "Project Structure", href: "/docs/project-structure" },
        ]
    },
    {
        title: "Tutorials",
        href: "/docs/tutorials",
        icon: <MapIcon className="w-6 h-6" />,
        items: [
            { title: "Launch in 5 minutes", href: "/docs/tutorials/ship-in-5-minutes" },
            { title: "Static page", href: "/docs/tutorials/static-page" },
            { title: "User authentication", href: "/docs/tutorials/authentication" },
            { title: "API call", href: "/docs/tutorials/api-call" },
            { title: "Stripe Subscriptions", href: "/docs/tutorials/stripe-subscriptions" },
        ]
    },
    {
        title: "Features",
        href: "/docs/features",
        icon: <CursorArrowRaysIcon className="w-6 h-6" />,
        items: [
            { title: "SEO", href: "/docs/features/seo" },
            { title: "Database", href: "/docs/features/database" },
            { title: "Emails", href: "/docs/features/emails" },
            { title: "Payments", href: "/docs/features/payments" },
            { title: "Auth", href: "/docs/features/auth" },
        ]
    },
    {
        title: "Components",
        href: "/docs/components",
        icon: <PuzzlePieceIcon className="w-6 h-6" />,
        items: [
            { title: "Accordian", href: "/docs/components/accordian" },
            { title: "Avatar", href: "/docs/components/avatar" },
            { title: "Badge", href: "/docs/components/badge" },
            { title: "Breadcrumb", href: "/docs/components/breadcrumb" },
            { title: "Button", href: "/docs/components/button" },
            { title: "Card", href: "/docs/components/card" },
            { title: "Carousel", href: "/docs/components/carousel" },
            { title: "Checkbox", href: "/docs/components/checkbox" },
            { title: "CodeBlock", href: "/docs/components/codeblock" },
            { title: "Divider", href: "/docs/components/divider" },
            { title: "Dropdown", href: "/docs/components/dropdown" },
            { title: "FileDrop", href: "/docs/components/filedrop" },
            { title: "Indicator", href: "/docs/components/indicator" },
            { title: "Input", href: "/docs/components/input" },
            { title: "LineGraph", href: "/docs/components/linegraph" },
            { title: "Loader", href: "/docs/components/loader" },
            { title: "Menu", href: "/docs/components/menu" },
            { title: "Modal", href: "/docs/components/modal" },
            { title: "PricingCard", href: "/docs/components/pricingcard" },
            { title: "RadarGraph", href: "/docs/components/radargraph" },
            { title: "Select", href: "/docs/components/select" },
            { title: "Switch", href: "/docs/components/switch" },
            { title: "SyntaxHighlighter", href: "/docs/components/syntaxhighlighter" },
            { title: "TextHighlight", href: "/docs/components/texthighlight" },
            { title: "Timeline", href: "/docs/components/timeline" },
            { title: "Toggle", href: "/docs/components/toggle" },
            { title: "Tooltip", href: "/docs/components/tooltip" },
        ]
    },
];