/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://runway.rip',
    generateRobotsTxt: true,
}