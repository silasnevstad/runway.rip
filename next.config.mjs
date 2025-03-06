/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],

    experimental: {
        optimizePackageImports: ['icon-library'],
    },

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
                pathname: '/**',
            },
        ],
    },

    webpack(config) {
        config.resolve.fallback = {
            ...config.resolve.fallback,

            fs: false,
        };

        return config;
    },
}

// Merge MDX config with Next.js config
export default nextConfig;