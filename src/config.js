import {FaMagnifyingGlassChart, FaRegCreditCard, FaUserShield} from "react-icons/fa6";
import { LuDatabase, LuLayoutDashboard, LuMail } from "react-icons/lu";

const appConfig = {
    appName: 'Runway',
    appDescription: 'Everything you need to launch your ideas.',
    domainName: 'runway.rip',
    socialMedia: {
        twitter: 'https://twitter.com/runway',
        instagram: 'https://instagram.com/runway',
        github: 'https://github.com/runway-app',
        linkedin: ''
    },
    emailSubdomain: "mail",
    supportEmail: "Runway Support <support@runway.rip>",
    noReplyEmail: "Runway <noreply@runway.rip>",
    authMethods: ['magiclink', 'google', 'github'],  // password, magiclink, google, github, apple, facebook
    protectedRoutes: [
        '/private',
        '/account',
    ],
    emailRedirectPath: '/auth',
    // Where to send a user after successful login
    afterLoginPath: '/account',
    // Default "noauth" pages that should not be forced to have a user
    publicRoutes: ['/login', '/sign-up', '/auth', '/error'],
};

export const pricingConfig = {
    plans: [
        {
            type: "starter",
            mode: "payment", // One-time purchase
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
            ],
            intervals: [
                {
                    name: "one_time",
                    label: "",
                    oldPrice: 99,
                    price: 49,
                    priceId: "price_XXX"
                }
            ]
        },
        {
            type: "pro",
            mode: "payment", // One-time purchase
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
            ],
            intervals: [
                {
                    name: "one_time",
                    label: "",
                    oldPrice: 149,
                    price: 99,
                    priceId: "price_XXX"
                }
            ]
        }
    ]
};

export const landingConfig = {
    header: {
        background: "border-b-none bg-bg-0 dark:bg-bg-900 mx-sm:bg-bg-50/80 mx-sm:dark:bg-bg-900/10",
        sticky: false,
        logo: {
            src: "/logo.png",
            alt: "Runway Logo"
        },
    },
    heroSection: {
        textPosition: "left",
        image: {
            src: "/path/to/image.png",
            alt: "Hero Image"
        },
        textHighlight: {
            text: "Code less, launch faster.",
            highlight: "launch faster."
        },
        description: "A NextJS boilerplate to build your SaaS, AI tool, or web app and start monetizing in hours, not weeks.",
        buttonText: "Get Started",
        buttonSubText: "No credit card required",
        trustedBy: false,
    },
    why: {
        show: true,
        title: "Save endless hours of setup and headaches and get right to business",
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
        show: false,
        title: "Get started in seconds",
        subtitle: "let takeoffTime = now() + 5",
        steps: [
            {
                badge: 1,
                title: "Git Clone",
                description: "Download the project to your computer.",
                imageSrc: "/path/to/image1.png",
                imageAlt: "Git Clone Image"
            },
            {
                badge: 2,
                title: "Customize",
                description: "Customize the configuration to fit your project and make it your own.",
                imageSrc: "/path/to/image2.png",
                imageAlt: "Code Away Image"
            },
            {
                badge: 3,
                title: "Deploy",
                description: "Deploy your project and share it with the world.",
                imageSrc: "/path/to/image3.png",
                imageAlt: "Deploy Image"
            }
        ],
    },
    features: {
        show: true,
        title: "Tired of starting from scratch?",
        subtitle: "Everything you need to launch your ideas. Tired of having to set up auth, payments, databases, components, SEO,... the list goes on. Runway has you covered.",
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
        features: ["Email/password login", "Social auth", "Login/Signup pages"],
        description: "Implement robust user authentication and authorization using Supabase.",
        icon: FaUserShield,
        imageSrc: "/logos/supabase.png",
        imageAlt: "Supabase"
    },
    {
        title: "Payments",
        features: ["Securely accept payments", "Manage subscriptions", "Ensure PCI compliance"],
        description: "Securely accept payments and manage subscriptions with Stripe integration.",
        icon: FaRegCreditCard,
        imageSrc: "/logos/stripe.png",
        imageAlt: "Stripe"
    },
    {
        title: "Database",
        features: ["SQL database", "Real-time data sync"],
        description: "Harness Supabase’s PostgreSQL DB for real-time data sync.",
        icon: LuDatabase,
        imageSrc: "/logos/supabase.png",
        imageAlt: "Supabase"
    },
    {
        title: "Email",
        features: ["Email verification", "Transactional emails", "Newsletters"],
        description: "Integrate seamless email communication with Mailgun.",
        icon: LuMail,
        imageSrc: "/logos/mailgun.png",
        imageAlt: "Mailgun"
    },
    {
        title: "SEO",
        features: ["Meta tags", "Sitemaps", "Structured data"],
        description: "Boost your visibility with built-in SEO tools, auto meta tags, etc.",
        icon: FaMagnifyingGlassChart,
        docs: true
    },
    {
        title: "Components",
        features: ["Pre-built components", "Customizable UI", "Responsive design"],
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
            type: "starter",
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
            type: "pro",
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