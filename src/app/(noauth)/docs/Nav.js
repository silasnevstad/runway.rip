import {
    PlayIcon,
    BookOpenIcon,
    CursorArrowRaysIcon,
    MapIcon,
    PuzzlePieceIcon,
} from "@heroicons/react/24/outline";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";
import { TbUserShield } from "react-icons/tb";

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
            { title: "Payments", href: "/docs/tutorials/payments" },
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
        title: "Landing",
        href: "/docs/landing",
        icon: <LuLayoutDashboard className="w-5 h-5" />,
        items: [
            { title: "Header", href: "/docs/landing/header" },
            { title: "Hero", href: "/docs/landing/hero" },
            { title: "FeaturesCarousel", href: "/docs/landing/features-carousel" },
            { title: "FeaturesGrid", href: "/docs/landing/features-grid" },
            { title: "WithWithout", href: "/docs/landing/with-without" },
            { title: "Pricing", href: "/docs/landing/pricing" },
            { title: "FAQ", href: "/docs/landing/faq" },
            { title: "Footer", href: "/docs/landing/footer" },
        ],
    },
    {
        title: "Auth",
        href: "/docs/auth",
        icon: <TbUserShield className="w-5 h-5" />,
        items: [
            { title: "AccountCard", href: "/docs/auth/account-card" },
        ],
    },
    {
        title: "Components",
        href: "/docs/components",
        icon: <IoExtensionPuzzleOutline className="w-5 h-5" />,
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
            { title: "CheckoutButton", href: "/docs/components/checkout-button" },
            { title: "CodeBlock", href: "/docs/components/code-block" },
            { title: "Custom Cards", href: "/docs/components/custom-cards" },
            { title: "Divider", href: "/docs/components/divider" },
            { title: "Dropdown Text", href: "/docs/components/dropdown-text" },
            { title: "File", href: "/docs/components/file" },
            { title: "FileDrop", href: "/docs/components/file-drop" },
            { title: "FileInput", href: "/docs/components/file-input" },
            { title: "Indicator", href: "/docs/components/indicator" },
            { title: "Input", href: "/docs/components/input" },
            // { title: "LineGraph", href: "/docs/components/line-graph" },
            { title: "Loader", href: "/docs/components/loader" },
            // { title: "Menu", href: "/docs/components/menu" },
            { title: "Modal", href: "/docs/components/modal" },
            { title: "PricingPlans", href: "/docs/components/pricing-plans" },
            // { title: "RadarGraph", href: "/docs/components/radar-graph" },
            // { title: "SearchBar", href: "/docs/components/search-bar" },
            { title: "Select", href: "/docs/components/select" },
            { title: "Slider", href: "/docs/components/slider" },
            { title: "StarRating", href: "/docs/components/star-rating" },
            { title: "Switcher", href: "/docs/components/switcher" },
            { title: "TextArea", href: "/docs/components/textarea" },
            { title: "TextHighlight", href: "/docs/components/text-highlight" },
            { title: "TextLink", href: "/docs/components/text-link" },
            { title: "ThemeSwitcher", href: "/docs/components/theme-switcher" },
            { title: "Toggle", href: "/docs/components/toggle" },
            { title: "Tooltip", href: "/docs/components/tooltip" },
        ],
    },
];