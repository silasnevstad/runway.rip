const config = {
    appName: 'Runway',
    appDescription: 'Everything you need to launch your ideas.',
    domainName: 'runway.rip',
    socialMedia: {
        twitter: 'https://twitter.com/runway',
        instagram: 'https://instagram.com/runway',
        github: 'https://github.com/runway-app',
    },
    emailSubdomain: "mail",
    supportEmail: "Runway Support <support@runway.rip>",
    noReplyEmail: "Runway <noreply@runway.rip>",
    pricingPlans: [
        {
            type: "starter",
            title: "Starter",
            oldPrice: 69,
            price: 49,
            description: "Get started with the basics.",
            features: [
                "NextJS boilerplate",
                "Component library",
                "SEO tools",
                "Stripe",
                "Supabase",
                "Mailgun",
            ],
            priceId: "price_1Pr8LGGjMg6waABSg1bjDLEQ"
        },
        {
            type: "pro",
            title: "Pro",
            oldPrice: 149,
            price: 99,
            description: "Unlock the full potential of Runway.",
            features: [
                "NextJS boilerplate",
                "Component library",
                "SEO tools",
                "Stripe",
                "Supabase",
                "Mailgun",
                "Lifetime updates"
            ],
            isPopular: true,
            priceId: "price_1Pr8LfGjMg6waABSu7URa9qT"
        }
    ]
};

export const landingConfig = {
    header: {
        background: "border-b-none border-b-bg-300 dark:border-b-bg-700 bg-bg-50 dark:bg-bg-900 mx-sm:bg-bg-50/80 mx-sm:dark:bg-bg-900/10",
        sticky: false,
        logo: {
            src: "/logo.png",
            alt: "Runway Logo"
        },
    },
    heroSection: {
        textHighlight: {
            text: "Code less, launch faster",
            highlight: "less "
        },
        description: "A fully-loaded NextJS boilerplate to build your SaaS, AI tool, or web app and start monetizing in days, not weeks.",
        buttonText: "Get Started",
        buttonSubText: "No credit card required",
        trustedBy: false,
    },
    howItWorks: {
        title: "Get started in seconds",
        subtitle: "Launch in three simple steps.",
        layout: "list", // or "cards"
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
        ]
    },
    features: {
        title: "Tired of starting from scratch?",
        subtitle: "Everything you need to launch your ideas.",
        show: true,
        layout: "cards",
        features: [
            {
                title: "Payments with Stripe",
                description: "Accept payments securely within minutes of deployment. Our Stripe integration handles everything from processing to subscription management.",
                imageSrc: "/logos/stripe.png",
                imageAlt: "Stripe Logo",
                imageClassName: "rounded-lg"
            },
            {
                title: "Database with Supabase",
                description: "Leverage Supabase for real-time databases, authentication, and automatic APIs. Scale your backend effortlessly with this powerful Firebase alternative.",
                imageSrc: "/logos/supabase.png",
                imageAlt: "Supabase Logo",
                imageClassName: "rounded-lg"
            },
            {
                title: "Email Service with Mailgun",
                description: "Send transactional emails, newsletters, and automated responses with ease. Keep your users engaged with high deliverability rates and detailed analytics.",
                imageSrc: "/logos/mailgun.png",
                imageAlt: "Mailgun Logo",
                imageClassName: "rounded-lg"
            },
            {
                title: "Sleek Design with Tailwind CSS",
                description: "Create beautiful, responsive designs quickly using this utility-first CSS framework. Customize your look effortlessly while maintaining consistency across your project.",
                imageSrc: "/logos/tailwindcss.png",
                imageAlt: "Tailwind CSS Logo",
                imageClassName: "rounded-lg"
            },
            {
                title: "Next.js for Powerful Frontend",
                description: "Build a fast, SEO-friendly frontend with server-side rendering and intuitive routing. Create modern web applications that users love.",
                imageSrc: "/logos/nextjs.png",
                imageAlt: "Next.js Logo",
                imageClassName: "rounded-lg"
            },
            {
                title: "Ease of Use",
                description: "We've made Runway as easy to use as possible. With a simple command line interface, you can get started with your project in minutes.",
                imageSrc: null,
                imageAlt: null
            },
            {
                title: "Customizable",
                description: "Runway is fully customizable. You can change anything you want to make it fit your project perfectly.",
                imageSrc: null,
                imageAlt: null
            },
            {
                title: "Save Time",
                description: "With Runway, you can save hours of coding. We've done all the hard work so you can focus on building your project.",
                imageSrc: null,
                imageAlt: null
            },
            {
                title: "No Lock-In",
                description: "Runway is designed to be open and flexible. You can take your project and run it anywhere you want.",
                imageSrc: null,
                imageAlt: null
            },
        ]
    },
    examples: {
        title: "Examples",
        show: true
    },
    pricing: {
        title: "Pricing",
        subtitle: "Use Runway to save hours of coding and launch faster.",
        show: true
    },
    faq: true
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
                    oldPrice: 69,
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

export default config;