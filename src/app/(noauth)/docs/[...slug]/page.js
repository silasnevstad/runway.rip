import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

import { LinkIcon } from "@heroicons/react/24/outline";
import TextLink from "@/components/atoms/TextLink";

// Example: your custom React components:
import { mdxComponents } from "../_components/mdx-components";

// 1. Base content dir
const DOCS_DIR = path.join(process.cwd(), "src", "app", "(noauth)", "docs", "content");

/**
 * Recursively gather all .mdx files -> build { slug: string[] }
 */
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

/** Next 13 static route generation */
export async function generateStaticParams() {
    const files = getAllMdxFilesRecursively(DOCS_DIR);
    return files.map((slugArray) => ({ slug: slugArray }));
}

// Example sidebars
const RelatedContent = ({ items }) => (
    <div className="border border-gray-300 dark:border-gray-800 p-4 rounded-lg">
        <h3 className="text-md font-semibold mb-2 opacity-80">Related Content</h3>
        <ul className="space-y-2">
            {items.map((item, index) => (
                <li key={index}>
                    <TextLink href={item.href} className="text-sm text-blue-500" icon underline>
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

/** The main dynamic docs page */
export default async function DocsPage({ params }) {
    // 1. Construct .mdx file path
    const filePath = path.join(DOCS_DIR, ...params.slug) + ".mdx";
    if (!fs.existsSync(filePath)) {
        notFound();
    }

    // 2. Read raw file content
    const source = fs.readFileSync(filePath, "utf8");

    // 3. Compile MDX to a ReactNode with next-mdx-remote/rsc
    const { content, frontmatter } = await compileMDX({
        source,
        components: mdxComponents, // custom shortcodes or overrides
        options: {
            parseFrontmatter: true, // also parse frontmatter
            mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [rehypeHighlight, rehypeSlug],
            },
        },
    });

    // 4. Gather frontmatter for sidebars
    const relatedContent = frontmatter?.related || [];
    const relatedSites = frontmatter?.sites || [];
    const onThisPage = frontmatter?.onThisPage || [];

    // 5. Return the *server-rendered* MDX content
    //    content is an actual React element at this point – no function passing required
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
