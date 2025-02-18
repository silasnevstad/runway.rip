import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],

    future: {

        // by default, if you customize webpack config, they switch back to version 4.
        // Looks like backward compatibility approach.
        webpack5: true,
    },

    webpack(config) {
        config.resolve.fallback = {

            // if you miss it, all the other options in fallback, specified
            // by next.js will be dropped.
            ...config.resolve.fallback,

            fs: false, // the solution
        };

        return config;
    },
}

const withMDX = createMDX({
    extension: /\.(md|mdx)$/,
    options: {
        // Add remark/rehype plugins if you want:
        // remarkPlugins: [...],
        // rehypePlugins: [...],
    },
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)