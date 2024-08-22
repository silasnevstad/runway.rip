const config = {
    appName: 'Runway',
    appDescription: 'Everything you need to launch your ideas.',
    domainName: 'runway.me',
    development: {
        apiBaseUrl: 'http://localhost:3000/api',
        apiKey: 'dev-secret-key',
    },
    production: {
        apiBaseUrl: 'https://runway.me/api',
        apiKey: 'prod-secret-key',
    },
    socialMedia: {
        twitter: 'https://twitter.com/runway',
        instagram: 'https://instagram.com/runway',
        github: 'https://github.com/runway-app',
    },
    contactEmail: 'support@runway.com',
    feedbackEmail: 'feedback@runway.com',
};

export const landingConfig = {
    header: {
        background: "bg-bg-50 dark:bg-bg-900 mx-sm:bg-opacity-80 mx-sm:dark:bg-opacity-10",
        sticky: true
    },
    heroSection: {
        textHighlight: {
            text: "Launch your ideas with a boost.",
            highlight: "a boost."
        },
        subText: "Everything you need to launch your ideas.",
        description: "Runway gives you everything you need to launch your ideas. From design to development, we've got you covered.",
        buttonText: "Get Started",
        buttonSubText: "No credit card required",
        trustedBy: true,
    },
    howItWorks: {
        title: "Get started in seconds",
        subtitle: "Launch in three simple steps.",
        layout: "list", // or "cards"
        steps: [
            {
                badge: 1,
                title: "Git Clone",
                description: "Download the boilerplate code using git clone.",
                imageSrc: "/path/to/image1.png",
                imageAlt: "Git Clone Image"
            },
            {
                badge: 2,
                title: "Code Away",
                description: "Start coding your idea with everything you need already set up.",
                imageSrc: "/path/to/image2.png",
                imageAlt: "Code Away Image"
            },
            {
                badge: 3,
                title: "Deploy",
                description: "Deploy your project with a single command.",
                imageSrc: "/path/to/image3.png",
                imageAlt: "Deploy Image"
            }
        ]
    },
    features: {
        title: "What's in Runway?",
        subtitle: "Everything you need to launch your ideas.",
        show: true,
        layout: "cards",
        features: [
            {
                title: "Fast & Efficient",
                description: "Runway is designed to be fast and efficient. We've optimized every part of the process to make sure you can launch your ideas as quickly as possible.",
                imageSrc: null,
                imageAlt: null
            },
            {
                title: "Ease of Use",
                description: "We've made Runway as easy to use as possible. With a simple command line interface, you can get started with your project in minutes.",
                imageSrc: null,
                imageAlt: null
            },
            {
                title: "Full Stack", // Stripe, Supabase, Next.js, Tailwind CSS, Mailgun
                description: "Runway is fully set up with everything you need, Stripe for payments, Supabase for database, Next.js for frontend, Tailwind CSS for design, and Mailgun for emails.",
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
        show: true
    },
    faq: true
};

const pricingConfig = {
    plans: [
        {
            title: "Starter",
            price: 100,
            description: "Get started with the basics.",
            features: [
                "Unlimited projects",
                "Unlimited users",
                "Basic support",
                "No credit card required"
            ],
            buttonText: "Get Started",
            buttonSubText: "No credit card required"
        },
        {
            title: "Pro",
            price: 200,
            description: "Unlock the full potential of Runway.",
            features: [
                "All Starter features",
                "Priority support",
                "Custom domain",
                "More features coming soon"
            ],
            buttonText: "Upgrade to Pro",
            buttonSubText: "No credit card required"
        }
    ]
};

export default config;