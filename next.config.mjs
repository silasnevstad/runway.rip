import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
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