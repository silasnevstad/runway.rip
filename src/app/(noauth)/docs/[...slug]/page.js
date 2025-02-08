import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

import { LinkIcon } from "@heroicons/react/24/outline";
import TextLink from "@/components/atoms/TextLink";
import { mdxComponents } from "../_components/mdx-components";

const DOCS_DIR = path.join(process.cwd(), "src", "app", "(noauth)", "docs", "content");

function getAllMdxFilesRecursively(dir, baseDir = dir) {
    let result = [];
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            result = result.concat(getAllMdxFilesRecursively(fullPath, baseDir));
        } else if (entry.isFile() && entry.name.endsWith(".mdx")) {
            // e.g. "content/components/accordion.mdx" => ["components","accordion"]
            const relativePath = path
                .relative(baseDir, fullPath)
                .replace(/\.mdx$/, "");
            const slugArray = relativePath.split(path.sep);
            result.push(slugArray);
        }
    }
    return result;
}

export async function generateStaticParams() {
    const files = getAllMdxFilesRecursively(DOCS_DIR);
    return files.map((slugArray) => ({ slug: slugArray }));
}

const RelatedContent = ({ items }) => (
    <div className="border border-gray-300 dark:border-gray-800 p-4 rounded-lg">
        <h3 className="text-md font-semibold mb-2 opacity-80">Related Content</h3>
        <ul className="space-y-2">
            {items.map((item, index) => (
                <li key={index}>
                    <TextLink href={item.href} className="text-sm text-blue-500" underline>
                        {item.title}
                    </TextLink>
                </li>
            ))}
        </ul>
    </div>
);

const RelatedSites = ({ sites }) => (
    <div className="border border-gray-300 dark:border-gray-800 p-4 rounded-lg mt-4">
        <h3 className="text-md font-semibold mb-2 opacity-80">Related Sites</h3>
        <ul className="space-y-2">
            {sites.map((site, index) => (
                <li key={index}>
                    <a
                        href={site.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm gap-1 text-blue-500 hover:underline"
                    >
                        <LinkIcon className="w-4 h-4 inline-block mr-1" />
                        {site.title}
                    </a>
                </li>
            ))}
        </ul>
    </div>
);

const OnThisPage = ({ items }) => (
    <div className="border border-gray-300 dark:border-gray-800 p-4 rounded-lg mt-4">
        <h3 className="text-md font-semibold mb-2 opacity-80">On This Page</h3>
        <ul className="space-y-2">
            {items.map((item, index) => (
                <li key={index}>
                    <TextLink href={item.href} className="text-sm text-blue-500 hover:underline">
                        {item.title}
                    </TextLink>
                </li>
            ))}
        </ul>
    </div>
);

export default async function DocsPage({ params }) {
    const filePath = path.join(DOCS_DIR, ...params.slug) + ".mdx";
    if (!fs.existsSync(filePath)) {
        notFound();
    }

    const source = fs.readFileSync(filePath, "utf8");

    const { content, frontmatter } = await compileMDX({
        source,
        components: mdxComponents, // custom shortcodes or overrides
        options: {
            parseFrontmatter: true,
            mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [rehypeHighlight, rehypeSlug],
            },
        },
    });

    const relatedContent = frontmatter?.related || [];
    const relatedSites = frontmatter?.sites || [];
    const onThisPage = frontmatter?.onThisPage || [];

    return (
        <div className="flex flex-col w-full items-start gap-8 md:flex-row justify-between">
            {/* Left - main docs area */}
            <div className="flex-1 min-w-0 overflow-x-auto">
                <h1 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    {frontmatter?.title || "Untitled"}
                </h1>
                {frontmatter?.description && (
                    <p className="text-xl text-gray-800 dark:text-gray-200 mb-8">
                        {frontmatter.description}
                    </p>
                )}

                {/* The compiled React element */}
                <div className="prose dark:prose-invert max-w-none">
                    {content}
                </div>
            </div>

            {/* Right - sidebars */}
            <div className="max-lg:hidden md:sticky md:top-28 self-start md:w-44 flex-shrink-0 space-y-4">
                {relatedContent.length > 0 && <RelatedContent items={relatedContent} />}
                {relatedSites.length > 0 && <RelatedSites sites={relatedSites} />}
                {onThisPage.length > 0 && <OnThisPage items={onThisPage} />}
            </div>
        </div>
    );
}
