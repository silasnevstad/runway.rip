
import { FaMagnifyingGlassChart, FaRegCreditCard, FaUserShield } from "react-icons/fa6";
import { LuDatabase, LuLayoutDashboard, LuMail } from "react-icons/lu";
import { Cog8ToothIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";
import { LuGithub } from "react-icons/lu";
import {openEmailSupport} from "@/utils/email";

const appConfig = {
    // General
    appName: 'Runway',      appDescription: 'Everything you need to launch your ideas.',
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
        enabled: true,
        profiles: true, // using a profiles table?
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
        type: 'one-time', // 'one-time', 'subscription', 'usage'
        requiredCustomerId: true,
        afterCheckoutPath: '/account',
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
        auth: true,  // shows AccountCard or sign up button
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
            text: "Lorem ipsum dolor sit amet.",
            highlight: "sit amet.", // If you want no highlight, set to ""
            // Either use the gradients or the highlight color.
            fromGradient: "primary",
            toGradient: "purple",
            // color: "primary"
        },
        textPosition: "center",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

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

        backgroundGlowColor: "",
        backgroundGlowPosition: "top",
        backgroundGlowOpacity: 0.3,
        backgroundGlowSize: "60%",
        backgroundGlowBlur: 0,
    },

    features: {
        show: true,
        type: "carousel", // "carousel" or "grid"
        title: "Features",
        subtitle: "Lorem ipsum dolor sit amet",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        titleColor: "primary",
        highlightLastAttribute: true,
        // scroll down to see the featuresConfig
    },

    what: {
        position: "left",
        title: "What is Runway?",
        subtitle: "By a developer, for developers.",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut 
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
        aliquip ex ea commodo consequat.`,

        // imageSrc: "/images/rocket-boy.svg",
        // imageAlt: "Rocket Launch",
    },

    who: {
        show: true,
        position: "right",
        title: "Who's this for?",
        subtitle: "For developers, designers, and entrepreneurs.",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut 
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
        aliquip ex ea commodo consequat.`,
        // include imageSrc, imageAlt if you want to show an image
    },

    how: {
        show: true,
        position: "left",
        title: "How this works?",
        subtitle: "Get started in seconds.",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut 
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
        aliquip ex ea commodo consequat.`,
        // include imageSrc, imageAlt if you want to show an image
    },

    withWithouts: {
        show: true,
        title: "Lorem ipsum dolor sit amet",
        withoutTitle: "Without Your Service",
        withTitle: "With Your Service",
        // scroll down to see the withWithoutsConfig
    },

    pricing: {
        show: true,
        title: "Pricing",
        subtitle: "Lorem ipsum dolor sit amet",
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
        title: "Ready to get started?",
        subtitle: "Stop waiting and start...",
        buttonText: "Get Started",
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

// export const pricingConfig = {
//     promo: {
//         show: true,
//         price: 50,
//         text: "off for first 1000 users (12 left)",
//         code: "LAUNCH",
//     },
//     plans: [
//         {  // Starter Plan
//             mode: "payment", // "payment" (One-time purchase) or "subscription" (Recurring)
//             intervals: [
//                 {
//                     label: "",
//                     oldPrice: 99,
//                     price: 49,
//                     priceId: "price_1QzuhUGjMg6waABSeUThW8Mw"  // COPY YOUR PRICE ID IN HERE
//                 }
//             ],
//             title: "Starter",
//             description: "",
//             subText: "Pay once, use forever.",
//             isPopular: false,
//             features: [
//                 "NextJS boilerplate",
//                 "Component library",
//                 "Database",
//                 "Payments",
//                 "Auth",
//                 "Email Service",
//                 "Lifetime updates",
//             ]
//         },
//         { // Pro Plan
//             mode: "payment", // "payment" (One-time purchase) or "subscription" (Recurring)
//             intervals: [
//                 {
//                     label: "",
//                     oldPrice: 149,
//                     price: 99,
//                     priceId: "price_1QzuhyGjMg6waABScXMOVTDF" // COPY YOUR PRICE ID IN HERE
//                 }
//             ],
//             title: "All-in",
//             description: "",
//             subText: "Pay once, use forever.",
//             isPopular: true,
//             features: [
//                 "NextJS boilerplate",
//                 "Component library",
//                 "Database",
//                 "Payments",
//                 "Auth",
//                 "Email Service",
//                 "SEO tools",
//                 "Lifetime updates",
//             ]
//         }
//     ]
// };

export const featuresConfig = [
    {
        title: "Feature 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        attributes: ["Feature 1", "Feature 2", "Feature 3"],
        icon: FaUserShield,
    },
    {
        title: "Feature 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        attributes: ["Feature 1", "Feature 2", "Feature 3"],
        icon: FaRegCreditCard,
    },
    {
        title: "Feature 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        attributes: ["Feature 1", "Feature 2", "Feature 3"],
        icon: LuDatabase,
    },
    {
        title: "Feature 4",
        attributes: ["Feature 1", "Feature 2", "Feature 3"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        icon: LuMail,
    },
    {
        title: "Feature 5",
        attributes: ["Feature 1", "Feature 2", "Feature 3"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        icon: LuLayoutDashboard,
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
export const pricingConfig = {
    promo: {
        show: true,
        price: 50,
        text: "off for first 1000 users (12 left)",
        code: "LAUCNH20",
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
                    priceId: "price_1R1o2HGjMg6waABSFbKVt0yY"
                },
                {
                    name: "yearly",
                    label: "Yearly",
                    oldPrice: 199,
                    price: 99,
                    discountLabel: "Save 50%",
                    priceId: "price_1QzufqGjMg6waABSiJOX02ad"
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
                    priceId: "price_1QzufNGjMg6waABSI2F3rZY0"
                },
                {
                    name: "yearly",
                    label: "Yearly",
                    oldPrice: 399,
                    price: 299,
                    discountLabel: "Save 50%",
                    priceId: "price_1R1o2xGjMg6waABSOuBztFXC"
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