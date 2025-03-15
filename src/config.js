
import { FaMagnifyingGlassChart, FaRegCreditCard, FaUserShield } from "react-icons/fa6";
import { LuDatabase, LuLayoutDashboard, LuMail } from "react-icons/lu";
import { Cog8ToothIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";
import { LuGithub } from "react-icons/lu";
import {openEmailSupport} from "@/utils/email";
import {CgMore, CgMoreO} from "react-icons/cg";

const appConfig = {
    // General
    appName: 'Runway',
    appDescription: 'Everything you need to launch your ideas.',
    domain: 'runway.rip',
    legal: {
        policies: {
            privacy: '/policies/privacy',
            terms: '/policies/terms',
            license: '/policies/license'
        }
    },
    socialMedia: {
        twitter: 'https://twitter.com/runway',
        // instagram: 'https://instagram.com/runway',
        // github: 'https://github.com/runway-app',
        // linkedin: ''
    },

    // Auth
    auth: {
        enabled: false,
        profiles: false, // using a profiles table?
        methods: ['password', 'google', 'github'],  // options: password, magiclink, google, apple, github
        protectedRoutes: [
            '/dashboard',
            '/account',
        ],
        unauthenticatedRedirect: '/login',
        afterLoginPath: '/account',
        afterLogoutPath: '/',
        afterSignupPath: '/confirm-email',  // This is only need if
    },


    // Email
    emails: {
        support: "Runway Support <support@mail.runway.rip>",
        noReply: "Runway <noreply@mail.runway.rip>",
    },

    // Waitlist / Pre-Launch Mode:
    waitlist: {
        enabled: false,
    },

    // Payments
    payment: {
        enabled: true,
        requiredCustomerId: false,
        afterCheckoutPath: '/',
    },

    // Security (bot detection, rate limiting, attack protection, etc.)
    arcjet: {
        enabled: true, // toggle security integration
        globalProtection: true, // If true, every route will be protected.
        protectedRoutes: ['/dashboard', '/account', '/api/secure'], // Optionally, list routes to protect
        mode: 'LIVE', // 'LIVE' to block request, 'DRY_RUN' to just log
    },
};

export const landingConfig = {
    header: {
        fixed: false,
        background: "bg-transparent dark:bg-transparent",
        showLogo: true,
        showAppName: true,
        navLinks: [
            { title: "Features", href: "#features" },
            { title: "Pricing", href: "#pricing" },
            { title: "FAQ", href: "#faq" },
        ],
        auth: false,  // shows AccountCard or sign up button
        // Uncomment to enable
        // ctaButton: {
        //     label: 'Sign Up',
        //     href: '/signup',
        //     props: {
        //         variant: "soft",
        //         border: true,
        //         borderRadius: "full",
        //         size: "sm"
        //     }
        // },
    },

    hero: {
        textHighlight: {
            text: "Code less, launch faster.",
            highlight: "launch faster.", // If you want no highlight, set to ""
            // Either use the gradients or the highlight color.
            fromGradient: "primary",
            toGradient: "purple",
            // color: "primary"
        },
        textPosition: "center",
        description: "A Next.js boilerplate with everything you need, so you can focus on innovating rather than configuring.",

        buttonText: "Get Started",
        buttonHref: "#pricing", // or perhaps /signup
        buttonSubText: "",

        image: {
            // src: "/images/hero.svg",
            // alt: "Hero Image"
        },

        trustedBy: {
            show: false,
            text: "Trusted by 200+ people",
        },

        backgroundGlowColor: "primary",
        backgroundGlowPosition: "top",
        backgroundGlowOpacity: 0.3,
        backgroundGlowSize: "60%",
        backgroundGlowBlur: 0,
    },

    features: {
        show: true,
        type: "carousel", // "carousel" or "grid"
        title: "Features",
        subtitle: "Tired of starting from scratch?",
        description: "Tired of having to set up auth, payments, databases, components, SEO,... everytime you start a new project. Runway has everything you need to launch your ideas.",
        titleColor: "primary",
        highlightLastAttribute: true,
        // scroll down to see the featuresConfig
    },

    why: {
        show: true,
        title: "Save endless hours of headaches and get right to business",
    },

    howItWorks: {
        show: true,
        title: "Launch in minutes.",
        subtitle: "",
        description: "",
    },

    what: {
        show: true,
        position: "center",
        title: "A message from the creator",
        subtitle: "By a developer, for developers.",
        // imageSrc: "/images/rocket-boy.svg",
        // imageAlt: "Rocket Launch",
    },

    who: {
        show: false,
        position: "center",
        title: "Who's this for?",
        subtitle: "For developers, designers, and entrepreneurs.",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut 
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
        aliquip ex ea commodo consequat.`,
        // include imageSrc, imageAlt if you want to show an image
    },

    how: {
        show: false,
        position: "left",
        title: "How this works?",
        subtitle: "Get started in seconds.",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut 
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
        aliquip ex ea commodo consequat.`,
        // include imageSrc, imageAlt if you want to show an image
    },

    withWithouts: {
        show: false,
        title: "Lorem ipsum dolor sit amet",
        withoutTitle: "Without Your Service",
        withTitle: "With Your Service",
        // scroll down to see the withWithoutsConfig
    },

    pricing: {
        show: true,
        title: "Pricing",
        subtitle: "Pay once, use forever.",
        // Scroll down to see the pricingConfig
    },

    faq: {
        show: true,
        title: "Frequently Asked Questions",
        subtitle: "Have more questions?",
        // Scroll down to see the FAQs
    },

    cta: {
        show: true,
        title: "Get Runway, launch, and go!",
        subtitle: "Stop waiting and start building your project today.",
        buttonText: "Launch",
        buttonHref: "#pricing",
    },

    footer: {
        background: "bg-bg-0 dark:bg-bg-900",
        showLogo: true,
        showAppName: true,
        showAppDescription: true,
        showCopyright: true,
        showMadeWith: false,
        showThemeSwitcher: true,
        showSocials: true,
        showBorder: true,
        rounded: true,
        navLinks: [
            { title: "Documentation", href: "/docs" },
            { title: "Pricing", href: "#pricing" },
            { title: "Features", href: "#features" },
            { title: "FAQ", href: "#faq" },
            { title: "Support", onClick: () => openEmailSupport() },
        ],
        legalLinks: [
            { title: "Privacy Policy", href: "/policies/privacy" },
            { title: "Terms of Service", href: "/policies/terms" },
            { title: "License", href: "/policies/license" },
        ],
    }
};

export const pricingConfig = {
    promo: {
        show: true,
        price: 50,
        text: "off for first 1000 users (12 left)",
        code: "LAUNCH",
    },
    plans: [
        {  // Starter Plan
            mode: "payment", // "payment" (One-time purchase) or "subscription" (Recurring)
            intervals: [
                {
                    label: "",
                    oldPrice: 149,
                    price: 99,
                    priceId: "price_1QzuhUGjMg6waABSeUThW8Mw"  // COPY YOUR PRICE ID IN HERE
                }
            ],
            title: "Starter",
            description: "",
            subText: "Pay once, use forever.",
            isPopular: false,
            features: [
                "NextJS boilerplate",
                "Component library",
                "Database",
                "Payments",
                "Auth",
                "Email Service",
                "Lifetime updates",
            ]
        },
        { // Pro Plan
            mode: "payment", // "payment" (One-time purchase) or "subscription" (Recurring)
            intervals: [
                {
                    label: "",
                    oldPrice: 249,
                    price: 199,
                    priceId: "price_1QzuhyGjMg6waABScXMOVTDF" // COPY YOUR PRICE ID IN HERE
                }
            ],
            title: "All-in",
            description: "",
            subText: "Pay once, use forever.",
            isPopular: true,
            features: [
                "NextJS boilerplate",
                "Component library",
                "Database",
                "Payments",
                "Auth",
                "Email Service",
                "SEO tools",
                "Lifetime updates",
            ]
        }
    ]
};

export const featuresConfig = [
    {
        title: "Auth",
        description: "Implement robust user authentication and authorization using Supabase.",
        attributes: ["Magic links & Social auth", "Email/password login", "Login/Signup pages", "Protected routes", "3+ hours saved"],
        icon: FaUserShield,
        imageSrc: "/logos/supabase.png",
        imageAlt: "Supabase",
        imageHref: "https://supabase.com"
    },
    {
        title: "Payments",
        description: "Securely accept payments and manage subscriptions with Stripe integration.",
        attributes: ["One time payments", "Subscriptions", "Usage Based", "Webhook handling", "3+ hours saved"],
        icon: FaRegCreditCard,
        imageSrc: "/logos/stripe.png",
        imageAlt: "Stripe",
        imageHref: "https://stripe.com"
    },
    {
        title: "Database",
        attributes: ["SQL database", "Real-time data sync", "User database", "3+ hours saved"],
        description: "Harness Supabase’s PostgreSQL DB for real-time data sync.",
        icon: LuDatabase,
        imageSrc: "/logos/supabase.png",
        imageAlt: "Supabase",
        imageHref: "https://supabase.com"
    },
    {
        title: "Email",
        attributes: ["Email verification", "Transactional emails", "Newsletters", "2+ hours saved"],
        description: "Integrate seamless email communication with Resend or Mailgun.",
        icon: LuMail,
        imageSrc: "/logos/resend.png",
        imageClassName: "rounded-lg bg-black",
        imageAlt: "Resend",
        imageHref: "https://resend.com"
    },
    {
        title: "SEO",
        attributes: ["Meta tags", "Sitemaps", "Structured data", "3+ hours saved"],
        description: "Boost your visibility with built-in SEO tools, auto meta tags, etc.",
        icon: FaMagnifyingGlassChart,
        docs: true
    },
    {
        title: "Components",
        attributes: ["Component library", "Pre-built Landing Page", "Responsive design", "10+ hours saved"],
        description: "Use our library of customizable components. Easily have a landing page.",
        icon: LuLayoutDashboard,
        docs: true
    },
    {
        title: "More",
        attributes: ["Analytics", "Security", "Landing Page", "5+ hours saved"],
        description: "Get more done with our all-in-one solution.",
        icon: CgMoreO,
        docs: true
    },
];

export const withWithoutsConfig = {
    withouts: [
        "Manually configure authentication",
        "Spend hours creating components",
        "Read through endless documentation",
        "Setup payments and subscriptions",
        "Manage your own database",
        "Spend hours on SEO",
        "Setup email sending",
        "Spend hours creating landing pages",
    ],
    withs: [
        "Authentication already configured",
        "Payments and subscriptions ready to go",
        "50+ components ready to use",
        "Database already setup",
        "SEO optimized",
        "Email setup",
        "Landing page ready",
        "Login and signup pages ready",
    ],
};

export const landingSteps = [
    {
        title: "Git clone",
        description: "Download the project to your computer.",
        duration: "<1 min",
        tags: [],
        icon: LuGithub,
    },
    {
        title: "Customize",
        description: "Set up and personalize the boilerplate.",
        duration: "~5 min",
        tags: [],
        icon: Cog8ToothIcon,
    },
    {
        title: "Deploy",
        description: "Share your project with the world.",
        duration: "~5 min",
        tags: [],
        icon: RocketLaunchIcon,
    }
];


export const faqConfig = [
    {
        title: "What do I get?",
        content: "You get a fully functional Next.js boilerplate with everything you need to launch your ideas. It includes authentication (password, magic link, and oauth), payments (one-time, subscriptions, and usage based), database, email service, and more.",
    },
    {
        title: "How often is Runway updated?",
        content: "I use Runway for all my own projects, so I will be updating it regularly. You will get lifetime updates for free.",
    },
    {
        title: "Can I get a refund?",
        content: "Once you've purchased Runway, it will be yours forever, so no refunds are available. However, if you have any issues, please reach out to me and I'll do my best to help you.",
    },
];

// LEAVE UNTOUCHED, UNLESS YOU WANT TO ADD MORE
export const availableOAuthProviders = [
    { name: 'google', logoSrc: '/logos/google.png', logoAlt: 'Google' },
    { name: 'apple', logoSrc: '/logos/apple.png', logoAlt: 'Apple' },
    { name: 'github', logoSrc: '/logos/github.png', logoAlt: 'GitHub' },
];

export default appConfig;