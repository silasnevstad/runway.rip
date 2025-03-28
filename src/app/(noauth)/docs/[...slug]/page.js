import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { mdxComponents } from "@/docs/_components/mdx-components";
import DocsPage from "@/docs/_components/DocsPage";
import { getSEOTags } from "@/libs/seo";

const DOCS_DIR = path.join(process.cwd(), "src", "docs", "content");

function getAllMdxFilesRecursively(dir, baseDir = dir) {
    let result = [];
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            result = result.concat(getAllMdxFilesRecursively(fullPath, baseDir));
        } else if (entry.isFile() && entry.name.endsWith(".mdx")) {
            const relativePath = path.relative(baseDir, fullPath).replace(/\.mdx$/, "");
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

export const dynamicParams = true;

async function getFrontmatter(filePath) {
    if (!fs.existsSync(filePath)) {
        return null;
    }
    const source = fs.readFileSync(filePath, "utf8");
    const { frontmatter } = await compileMDX({
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
    return frontmatter;
}

// Dynamically generate metadata based on MDX frontmatter
export async function generateMetadata({ params }) {
    const { slug } = await params;
    const filePath = path.join(DOCS_DIR, ...slug) + ".mdx";
    const frontmatter = await getFrontmatter(filePath);

    // Use frontmatter values if available, fallback otherwise.
    return getSEOTags({
        title: `${frontmatter?.title} | Runway Documentation` || "Runway Documentation",
        description: frontmatter?.description,
        canonicalUrlRelative: `/docs/${slug.join("/")}`,
    });
}

export default async function Page({ params }) {
    const { slug } = await params;
    const filePath = path.join(DOCS_DIR, ...slug) + ".mdx";

    if (!fs.existsSync(filePath)) {
        notFound();
    }

    // Read the raw MDX source from the file
    const source = fs.readFileSync(filePath, "utf8");

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

    if (!content || !frontmatter) {
        throw new Error("MDX compilation failed: no content returned.");
    }

    return (
        <DocsPage
            title={frontmatter?.title ?? "Untitled"}
            description={frontmatter?.description}
            content={content}
            onThisPage={frontmatter?.onThisPage || []}
            relatedDocs={frontmatter?.related || []}
            relatedSites={frontmatter?.sites || []}
        />
    );
}
