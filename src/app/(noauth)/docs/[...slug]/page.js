import fs from 'fs/promises';
import path from 'path';
import { notFound } from 'next/navigation';
import { compileMDX } from 'next-mdx-remote/rsc';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

import { mdxComponents } from '@/docs/_components/mdx-components';
import DocsPage from '@/docs/_components/DocsPage';

const DOCS_DIR = path.join(
    process.cwd(),
    'src',
    'docs',
    'content'
);

// SSR on-demand. No `generateStaticParams`.
export const dynamic = 'force-dynamic';
// Or you can do: export const revalidate = 60; // if you want next to cache the HTML

export default async function Page({ params }) {
    // Build file path
    const filePath = path.join(DOCS_DIR, ...params.slug) + '.mdx';
    let source;
    try {
        await fs.access(filePath);
        source = await fs.readFile(filePath, 'utf8');
    } catch {
        notFound();
    }

    const { content, frontmatter } = await compileMDX({
        source,
        components: mdxComponents,
        options: {
            parseFrontmatter: true,
            mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [rehypeHighlight, rehypeSlug],
            },
        },
    });

    return (
        <DocsPage
            title={frontmatter?.title ?? 'Untitled'}
            description={frontmatter?.description}
            content={content}
            onThisPage={frontmatter?.onThisPage ?? []}
            relatedDocs={frontmatter?.related ?? []}
            relatedSites={frontmatter?.sites ?? []}
        />
    );
}
