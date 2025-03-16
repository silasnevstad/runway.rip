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
            { title: "Launch ASAP", href: "/docs/tutorials/launch-asap" },
            { title: "User authentication", href: "/docs/tutorials/auth" },
            {
                title: "Payments",
                href: "/docs/tutorials/payments",
                items: [
                    { title: "One Time Payments", href: "/docs/tutorials/one-time-payments" },
                    { title: "Subscriptions", href: "/docs/tutorials/subscriptions" },
                    { title: "Usage Billing", href: "/docs/tutorials/usage-billing" },
            ]},
            { title: "Creating Pages", href: "/docs/tutorials/creating-pages" },
            { title: "API Routes", href: "/docs/tutorials/api-routes" },
            { title: "Setting up DB", href: "/docs/tutorials/database" },
            { title: "Stripe", href: "/docs/tutorials/stripe" },
            { title: "Supabase", href: "/docs/tutorials/supabase" },
            { title: "Policies", href: "/docs/tutorials/policies" },
            { title: "Bonus", href: "/docs/tutorials/bonus" },
            // { title: "Deployment", href: "/docs/tutorials/deployment" },
        ],
    },
    {
        title: "Features",
        href: "/docs/features",
        icon: <CursorArrowRaysIcon className="w-4 h-4" />,
        items: [
            { title: "Auth", href: "/docs/features/auth" },
            { title: "Payments", href: "/docs/features/payments" },
            { title: "Database", href: "/docs/features/database" },
            { title: "SEO", href: "/docs/features/seo" },
            { title: "Emails", href: "/docs/features/emails" },
            { title: "Analytics", href: "/docs/features/analytics" },
            { title: "Security", href: "/docs/features/security" },
            { title: "Error Handling", href: "/docs/features/error-handling" },
            { title: "Config", href: "/docs/features/config" },
        ],
    },
    {
        title: "Components",
        href: "/docs/components",
        icon: <IoExtensionPuzzleOutline className="w-5 h-5" />,
        items: [
            {
                title: "Landing",
                href: "/docs/components/landing",
                items: [
                    { title: "Header", href: "/docs/components/landing/header" },
                    { title: "Hero", href: "/docs/components/landing/hero" },
                    { title: "FeaturesCarousel", href: "/docs/components/landing/features-carousel" },
                    { title: "FeaturesGrid", href: "/docs/components/landing/features-grid" },
                    { title: "WithWithout", href: "/docs/components/landing/with-without" },
                    { title: "Pricing", href: "/docs/components/landing/pricing" },
                    { title: "CTA", href: "/docs/components/landing/cta" },
                    { title: "FAQ", href: "/docs/components/landing/faq" },
                    { title: "Footer", href: "/docs/components/landing/footer" },
                ],
            },
            {
                title: "Auth",
                href: "/docs/components/auth",
                items: [
                    { title: "AccountCard", href: "/docs/components/auth/account-card" },
                    { title: "AuthForm", href: "/docs/components/auth/auth-form" },
                    { title: "AuthInput", href: "/docs/components/auth/auth-input" },
                    { title: "OAuthButton", href: "/docs/components/auth/oauth-button" },
                ],
            },
            {
                title: "Payments",
                href: "/docs/components/payments",
                items: [
                    { title: "CheckoutButton", href: "/docs/components/payments/checkout-button" },
                    { title: "PricingCard", href: "/docs/components/payments/pricing-card" },
                    { title: "PricingPlans", href: "/docs/components/payments/pricing-plans" },
                ],
            },
            { title: "Accordion", href: "/docs/components/accordion" },
            { title: "Alert", href: "/docs/components/alert" },
            { title: "Avatar", href: "/docs/components/avatar" },
            { title: "AvatarList", href: "/docs/components/avatar-list" },
            { title: "Badge", href: "/docs/components/badge" },
            { title: "Breadcrumb", href: "/docs/components/breadcrumb" },
            { title: "Button", href: "/docs/components/button" },
            { title: "Card", href: "/docs/components/card" },
            // { title: "Carousel", href: "/docs/components/carousel" },
            { title: "Checkbox", href: "/docs/components/checkbox" },
            // { title: "CheckoutButton", href: "/docs/components/checkout-button" },
            { title: "CodeBlock", href: "/docs/components/code-block" },
            { title: "Custom Cards", href: "/docs/components/custom-cards" },
            { title: "Divider", href: "/docs/components/divider" },
            { title: "Dropdown Item", href: "/docs/components/dropdown-item" },
            { title: "File", href: "/docs/components/file" },
            { title: "FileDrop", href: "/docs/components/file-drop" },
            { title: "FileInput", href: "/docs/components/file-input" },
            { title: "Indicator", href: "/docs/components/indicator" },
            { title: "Input", href: "/docs/components/input" },
            // { title: "LineGraph", href: "/docs/components/line-graph" },
            { title: "Loader", href: "/docs/components/loader" },
            // { title: "Menu", href: "/docs/components/menu" },
            { title: "Modal", href: "/docs/components/modal" },
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
            { title: "Toast", href: "/docs/components/toast" },
            { title: "ToastProvider", href: "/docs/components/toast-provider" },
            { title: "Toggle", href: "/docs/components/toggle" },
            { title: "Tooltip", href: "/docs/components/tooltip" },
        ],
    },
];