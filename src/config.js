const config = {
    appName: 'Runway',
    appDescription: 'Everything you need to launch your ideas.',
    domainName: 'runway.me',
    development: {
        apiBaseUrl: 'http://localhost:3000/api',
        apiKey: 'dev-secret-key',
    },
    production: {
        apiBaseUrl: 'https://runway.com/api',
        apiKey: 'prod-secret-key',
    },
    socialMedia: {
        twitter: 'https://twitter.com/runway',
        instagram: 'https://instagram.com/runway',
        github: 'https://github.com',
    },
    contactEmail: 'support@runway.com',
};

module.exports = config;