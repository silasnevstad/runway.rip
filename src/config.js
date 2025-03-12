import { FaMagnifyingGlassChart, FaRegCreditCard, FaUserShield } from "react-icons/fa6";
import { LuDatabase, LuLayoutDashboard, LuMail } from "react-icons/lu";
import { Cog8ToothIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";
import { LuGithub } from "react-icons/lu";

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
        instagram: 'https://instagram.com/runway',
        github: 'https://github.com/runway-app',
        linkedin: ''
    },

    // Auth
    auth: {
        methods: ['password', 'google', 'github'],  // options: password, magiclink, google, apple, github
        protectedRoutes: [
            '/dashboard',
            '/account',
        ],
        afterLoginPath: '/account',
        afterSignupPath: '/confirm-email',  // This is only need if
    },


    // Email
    emails: {
        support: "Runway Support <support@mail.runway.rip>",
        noReply: "Runway <noreply@mail.runway.rip>",
    },

    // Waitlist / Pre-Launch Mode:
    waitlist: {
        enabled: true,
    },

    payment: {
        enabled: true,
        requiredCustomerId: true,
        afterCheckoutPath: '/account',
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
            // { title: "Pricing", href: "#pricing" },
            { title: "FAQ", href: "#faq" },
        ],
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
            // Either use the gradients or the color.
            fromGradient: "primary",
            toGradient: "purple",
            // color: "primary"
        },
        textPosition: "center",
        description: "A Next.js boilerplate with everything you need, so you can focus on innovating rather than configuring.",

        buttonText: "Get Started",
        buttonHref: "#pricing",
        buttonSubText: "",

        image: {
            // src: "/images/hero.svg",
            // alt: "Hero Image"
        },

        trustedBy: {
            show: false,
            text: "Trusted by 200+ people",
            avatars: [
                { src: "/avatar1.png", alt: "Avatar 1"},
                { src: "/avatar2.png", alt: "Avatar 2"},
                { src: "/avatar3.png", alt: "Avatar 3"},
                { src: "/avatar1.png", alt: "Avatar 1"},
            ],
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
        title: "Tired of starting from scratch?",
        subtitle: "Tired of having to set up auth, payments, databases, components, SEO,... the list goes on. Runway has everything you need to launch your ideas.",
        titleColor: "primary",
    },

    withWithouts: {
        show: false,
        title: "Tired of spending hours configuring and maintaining?",
        withoutTitle: "Without Runway",
        withTitle: "With Runway",
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
        show: false,
        position: "left",
        title: "What is Runway?",
        subtitle: "A complete Next.js boilerplate",
        description: "Runway is a...",
        imageSrc: "/images/rocket-boy.svg",
        imageAlt: "Rocket Launch",
    },

    who: {
        show: false,
        position: "right",
        title: "Who's this for?",
        subtitle: "For developers, designers, and entrepreneurs.",
        description: "Anyone who wants to build...",
        // include imageSrc, imageAlt if you want to show an image
    },

    how: {
        show: false,
        position: "left",
        title: "How this works?",
        subtitle: "Get started in seconds.",
        description: "It works by...",
        // include imageSrc, imageAlt if you want to show an image
    },

    pricing: {
        show: true,
        title: "Pricing",
        subtitle: "Save hours of headaches and get right to business!",
        // Scroll down to see the pricingConfig
    },

    faq: {
        show: true,
        title: "Frequently Asked Questions",
        subtitle: "",
        // Scroll down to see the FAQs
    },

    cta: {
        show: true,
        title: "Get Runway, launch, and go!",
        subtitle: "Stop waiting and start building your project today.",
        buttonText: "Launch",
        buttonHref: "#hero",
    },

    footer: {
        background: "bg-bg-0 dark:bg-bg-900",
        showLogo: true,
        showAppName: true,
        showAppDescription: true,
        showCopyright: true,
        showMadeWith: true,
        showThemeSwitcher: true,
        showSocials: true,
        showBorder: true,
        rounded: true,
        navLinks: [
            { title: "Pricing", href: "#pricing" },
            { title: "Documentation", href: "/docs" },
            { title: "Support", href: "#" },
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
                    oldPrice: 99,
                    price: 49,
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
                    oldPrice: 149,
                    price: 99,
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
        features: ["Magic links & Social auth", "Email/password login", "Login/Signup pages", "Protected routes", "3+ hours saved"],
        icon: FaUserShield,
        imageSrc: "/logos/supabase.png",
        imageAlt: "Supabase",
        imageHref: "https://supabase.com"
    },
    {
        title: "Payments",
        description: "Securely accept payments and manage subscriptions with Stripe integration.",
        features: ["One time payments", "Subscriptions", "Webhook handling (to update user's account)", "Invoices", "3+ hours saved"],
        icon: FaRegCreditCard,
        imageSrc: "/logos/stripe.png",
        imageAlt: "Stripe",
        imageHref: "https://stripe.com"
    },
    {
        title: "Database",
        features: ["SQL database", "Real-time data sync", "User database", "3+ hours saved"],
        description: "Harness Supabase’s PostgreSQL DB for real-time data sync.",
        icon: LuDatabase,
        imageSrc: "/logos/supabase.png",
        imageAlt: "Supabase",
        imageHref: "https://supabase.com"
    },
    {
        title: "Email",
        features: ["Email verification", "Transactional emails", "Newsletters", "3+ hours saved"],
        description: "Integrate seamless email communication with Resend.",
        icon: LuMail,
        imageSrc: "/logos/resend.png",
        imageClassName: "rounded-lg bg-black",
        imageAlt: "Resend",
        imageHref: "https://resend.com"
    },
    {
        title: "SEO",
        features: ["Meta tags", "Sitemaps", "Structured data", "3+ hours saved"],
        description: "Boost your visibility with built-in SEO tools, auto meta tags, etc.",
        icon: FaMagnifyingGlassChart,
        docs: true
    },
    {
        title: "Components",
        features: ["Pre-built components", "Customizable UI", "Responsive design", "10+ hours saved"],
        description: "Use our library of pre-built, customizable components.",
        icon: LuLayoutDashboard,
        docs: true
    }
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
        title: "What is the refund policy?",
        content: "We offer a 30-day money back guarantee if you are not satisfied with our product."
    },
    {
        title: "How do I cancel my subscription?",
        content: "You can cancel your subscription by logging into your account and clicking the cancel button."
    },
    {
        title: "Can I upgrade my plan?",
        content: "Yes, you can upgrade your plan at any time by logging into your account and selecting the upgrade option."
    },
    {
        title: "Do you offer a free trial?",
        content: "Yes, we offer a 14-day free trial for all new customers."
    }
];

// NOT NEEDED (JUST FOR EXAMPLE)
// Example of subscription pricing config
export const pricingSubcriptionConfig = {
    promo: {
        show: true,
        price: 50,
        text: "off for first 1000 users (12 left)",
        code: "LAUNCH",
    },
    plans: [
        {  // Starter Plan
            mode: "subscription", // Recurring
            intervals: [
                {
                    name: "monthly",
                    label: "Monthly",
                    oldPrice: 29,
                    price: 19,
                    discountLabel: "Save 40%",
                    priceId: "price_monthly_xxx"
                },
                {
                    name: "yearly",
                    label: "Yearly",
                    oldPrice: 199,
                    price: 99,
                    discountLabel: "Save 50%",
                    priceId: "price_yearly_xxx"
                }
            ],
            title: "Starter",
            description: "",
            subText: "Pay monthly or yearly.",
            isPopular: false,
            features: [
                "NextJS boilerplate",
                "Component library",
                "Database",
                "Payments",
                "Auth",
                "Email Service",
                "Lifetime updates",
            ],
        },
        { // Pro Plan
            mode: "subscription", // "payment" (One-time purchase) or "subscription" (Recurring)
            intervals: [
                {
                    name: "monthly",
                    label: "Monthly",
                    oldPrice: 49,
                    price: 29,
                    discountLabel: "Save 40%",
                    priceId: "price_monthly_xxx"
                },
                {
                    name: "yearly",
                    label: "Yearly",
                    oldPrice: 399,
                    price: 299,
                    discountLabel: "Save 50%",
                    priceId: "price_yearly_xxx"
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

// LEAVE UNTOUCHED, UNLESS YOU WANT TO ADD MORE
export const availableOAuthProviders = [
    { name: 'google', logoSrc: '/logos/google.png', logoAlt: 'Google' },
    { name: 'apple', logoSrc: '/logos/apple.png', logoAlt: 'Apple' },
    { name: 'github', logoSrc: '/logos/github.png', logoAlt: 'GitHub' },
];

export default appConfig;