import { FaMagnifyingGlassChart, FaRegCreditCard, FaUserShield } from "react-icons/fa6";
import { LuDatabase, LuLayoutDashboard, LuMail } from "react-icons/lu";

const appConfig = {
    // General
    appName: 'Runway',
    appDescription: 'Everything you need to launch your ideas.',
    domain: 'runway.rip',

    // Links
    socialMedia: {
        twitter: 'https://twitter.com/runway',
        instagram: 'https://instagram.com/runway',
        github: 'https://github.com/runway-app',
        linkedin: ''
    },
    legal: {
        policies: {
            privacy: '/policies/privacy',
            terms: '/policies/terms',
            license: '/policies/license'
        }
    },

    // Email
    subdomain: "mail",
    supportEmail: "Runway Support <support@mail.runway.rip>",
    adminEmail: "Silas at Runway <silas@mail.runway.rip>",
    noReplyEmail: "Runway <noreply@mail.runway.rip>",
    forwardRepliesTo: "silas.nevstad@gmail.com",

    // Auth
    authMethods: ['password', 'google', 'github'],  // options: password, magiclink, google, apple, github
    protectedRoutes: [
        '/dashboard',
        '/account',
    ],
    afterLoginPath: '/account',
    afterSignupPath: '/confirm-email',  // This is only need if

    // Waitlist / Pre-Launch Mode:
    // When enabled and the environment is production (NODE_ENV === 'production'), all routes not specified
    // in waitlistAllowedRoutes will be redirected to waitlistRedirect. This is useful for when you are still
    // building your app and want to collect emails before launch.
    waitlistMode: false,
    waitlistAllowedRoutes: ['/waitlist', '/docs'],
    waitlistRedirect: '/waitlist',

    // Payment Integration Options
    // Set to true to enable integration with Supabase profiles (creates & tracks Stripe customers)
    useCustomerIntegration: true,
    afterCheckoutPath: '/thank-you',
};

export const pricingConfig = {
    plans: [
        {
            mode: "payment", // "payment" (One-time purchase) or "subscription" (Recurring)
            intervals: [
                {
                    label: "",
                    oldPrice: 99,
                    price: 49,
                    priceId: "price_1QzuhUGjMg6waABSeUThW8Mw"  // "price_1Pr8LGGjMg6waABSg1bjDLEQ"
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
        {
            mode: "payment", // One-time purchase
            intervals: [
                {
                    label: "",
                    oldPrice: 149,
                    price: 99,
                    priceId: "price_1QzuhyGjMg6waABScXMOVTDF" // "price_1Pr8LfGjMg6waABSu7URa9qT"
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

export const landingConfig = {
    header: {
        background: "border-b-none bg-bg-0 dark:bg-bg-900 mx-sm:bg-bg-50/80 mx-sm:dark:bg-bg-900/10",
        sticky: false,
        logo: true,
    },
    hero: {
        textPosition: "center",
        image: {
            // src: "/hero.png",
            alt: "Hero Image"
        },
        textHighlight: {
            text: "Code less, launch faster.",
            highlight: "launch faster.",
            fromGradient: "primary",
            toGradient: "purple",
        },
        description: "Everything you need in a Next.js boilerplate, so you can focus on innovation instead of configuration.",
        buttonText: "Get Started",
        promo: {
            show: true,
            price: 50,
            text: "off for first 1000 users (12 left)",
        },
        trustedBy: {
            show: true,
            text: "Trusted by 200+ people",
            avatars: [
                { src: "/avatar1.png", alt: "Avatar 1"},
                { src: "/avatar2.png", alt: "Avatar 2"},
                { src: "/avatar3.png", alt: "Avatar 3"},
                { src: "/avatar1.png", alt: "Avatar 1"},
            ],
        }
    },
    features: {
        show: true,
        title: "Tired of starting from scratch?",
        subtitle: "Tired of having to set up auth, payments, databases, components, SEO,... the list goes on. Runway has everything you need to launch your ideas.",
    },
    why: {
        show: true,
        title: "Save endless hours of headaches and get right to business",
    },
    who: {
        show: true,
        title: "Who's this for?",
        subtitle: "For developers, designers, and entrepreneurs.",
        text: "For developers, designers, and entrepreneurs. Anyone who wants to build and launch a web app quickly and skip out on all the tedious hassle.",
    },
    how: {
        show: true,
        title: "How this works?",
        subtitle: "Get started in seconds.",
        text: "It's a NextJS boilerplate that includes everything you need to build and launch your web app. With Runway, you can get started in seconds and start monetizing your project in hours, not weeks.",
    },
    whoAndHow: {
        show: true,
        whoTitle: "Who's this for?",
        whoSubtitle: "For developers, designers, and entrepreneurs.",
        whoText: "For developers, designers, and entrepreneurs. Anyone who wants to build and launch a web app quickly and skip out on all the tedious hassle.",
        howTitle: "How this works?",
        howSubtitle: "Get started in seconds.",
        howText: "It's a NextJS boilerplate that includes everything you need to build and launch your web app. With Runway, you can get started in seconds and start monetizing your project in hours, not weeks.",
    },
    howItWorks: {
        show: true,
        title: "Get started in seconds",
        subtitle: "Focus on what matters most",
    },
    pricing: {
        title: "Pricing",
        subtitle: "Use Runway to save hours of coding and launch faster.",
        show: true
    },
    faq: {
        show: true,
        title: "Frequently Asked Questions",
    }
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
]

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

// Example of subscription pricing config
export const pricingSubscriptionConfig = {
    plans: [
        {
            mode: "subscription", // Recurring
            title: "Starter",
            description: "Get started with the basics.",
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
            ]
        },
        {
            mode: "subscription", // Recurring
            title: "Pro",
            description: "Unlock the full potential of Runway.",
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
            ],
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
            ]
        }
    ]
};

export default appConfig;