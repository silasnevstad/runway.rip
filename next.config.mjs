import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],

    experimental: {
        optimizePackageImports: ['icon-library'],
    },

    webpack(config) {
        config.resolve.fallback = {
            ...config.resolve.fallback,

            fs: false,
        };

        return config;
    },
};

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//     enabled: process.env.ANALYZE === 'true',
// })
import withBundleAnalyzer from '@next/bundle-analyzer';



// Merge MDX config with Next.js config
export default nextConfig;