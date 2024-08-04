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
        background: "bg-bg-50 dark:bg-bg-800 mx-sm:bg-opacity-80 mx-sm:dark:bg-opacity-10",
    },
    heroSection: {
        textHighlight: {
            text: "Launch your ideas with a boost.",
            highlight: "a boost."
        },
        subText: "Everything you need to launch your ideas.",
        description: "FastStack gives you everything you need to launch your ideas. From design to development, we've got you covered.",
        buttonText: "Get Started",
        buttonSubText: "No credit card required",
        trustedBy: true,
    },
    howItWorks: {
        title: "How it works",
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
        title: "Features",
        show: true,
        layout: "cards",
        features: [
            {
                title: "Fast",
                description: "FastStack is designed to be fast and efficient. We've optimized every part of the process to make sure you can launch your ideas as quickly as possible.",
                imageSrc: null,
                imageAlt: null
            },
            {
                title: "Easy",
                description: "We've made FastStack as easy to use as possible. With a simple command line interface, you can get started with your project in minutes.",
                imageSrc: null,
                imageAlt: null
            },
            {
                title: "Powerful",
                description: "FastStack is built on top of powerful technologies like Next.js and Tailwind CSS. This means you get all the benefits of these technologies without having to worry about the setup.",
                imageSrc: null,
                imageAlt: null
            }
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

export default config;