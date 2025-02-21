import {
    PlayIcon,
    BookOpenIcon,
    CursorArrowRaysIcon,
    MapIcon,
    PuzzlePieceIcon,
} from "@heroicons/react/24/outline";

export const DocsNav = [
    {
        title: "Get started",
        href: "/docs/getting-started",
        icon: <PlayIcon className="w-4 h-4" />,
        items: [
            { title: "Overview", href: "/docs" },
            { title: "Installation", href: "/docs/installation" },
            { title: "Project Structure", href: "/docs/project-structure" },
        ],
    },
    {
        title: "Tutorials",
        href: "/docs/tutorials",
        icon: <MapIcon className="w-4 h-4" />,
        items: [
            { title: "Launch in 5 minutes", href: "/docs/tutorials/launch-in-5-minutes" },
            { title: "Stripe Setup", href: "/docs/tutorials/stripe" },
            { title: "Supabase Setup", href: "/docs/tutorials/supabase" },
            { title: "User authentication", href: "/docs/tutorials/authentication" },
            { title: "API call", href: "/docs/tutorials/api-call" },
            { title: "One Time Payments", href: "/docs/tutorials/one-time-payments" },
            { title: "Subscriptions", href: "/docs/tutorials/subscriptions" },
            { title: "Domain", href: "/docs/tutorials/domain-setup" },
            { title: "Emails", href: "/docs/tutorials/email-setup" },
        ],
    },
    {
        title: "Features",
        href: "/docs/features",
        icon: <CursorArrowRaysIcon className="w-4 h-4" />,
        items: [
            { title: "SEO", href: "/docs/features/seo" },
            { title: "Database", href: "/docs/features/db" },
            { title: "Emails", href: "/docs/features/emails" },
            { title: "Payments", href: "/docs/features/payments" },
            { title: "Auth", href: "/docs/features/auth" },
        ],
    },
    {
        title: "Components",
        href: "/docs/components",
        icon: <PuzzlePieceIcon className="w-5 h-5" />,
        items: [
            { title: "Accordion", href: "/docs/components/accordion" },
            { title: "Alert", href: "/docs/components/alert" },
            { title: "Avatar", href: "/docs/components/avatar" },
            { title: "AvatarList", href: "/docs/components/avatar-list" },
            { title: "Badge", href: "/docs/components/badge" },
            { title: "Breadcrumb", href: "/docs/components/breadcrumb" },
            { title: "Button", href: "/docs/components/button" },
            { title: "Card", href: "/docs/components/card" },
            { title: "Checkbox", href: "/docs/components/checkbox" },
            { title: "CodeBlock", href: "/docs/components/code-block" },
            { title: "Divider", href: "/docs/components/divider" },
            { title: "Dropdown Text", href: "/docs/components/dropdown-text" },
            { title: "FileDrop", href: "/docs/components/file-drop" },
            { title: "FileInput", href: "/docs/components/file-input" },
            { title: "Indicator", href: "/docs/components/indicator" },
            { title: "Input", href: "/docs/components/input" },
            { title: "LineGraph", href: "/docs/components/line-graph" },
            { title: "Loader", href: "/docs/components/loader" },
            // { title: "Menu", href: "/docs/components/menu" },
            // { title: "Modal", href: "/docs/components/modal" },
            // { title: "RadarGraph", href: "/docs/components/radar-graph" },
            // { title: "Select", href: "/docs/components/select" },
            { title: "SearchBar", href: "/docs/components/search-bar" },
            { title: "Slider", href: "/docs/components/slider" },
            { title: "Switch", href: "/docs/components/switch" },
            { title: "TextLink", href: "/docs/components/text-link" },
            // { title: "Timeline", href: "/docs/components/timeline" },
            { title: "Toggle", href: "/docs/components/toggle" },
            { title: "Tooltip", href: "/docs/components/tooltip" },
        ],
    },
];