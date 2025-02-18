import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

import { mdxComponents } from "../_components/mdx-components";
import DocsContentShell from "@/app/(noauth)/docs/_components/DocsContentShell";


const DOCS_DIR = path.join(process.cwd(), "src", "app", "(noauth)", "docs", "content");

function getAllMdxFilesRecursively(dir, baseDir = dir) {
    let result = [];
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            result = result.concat(getAllMdxFilesRecursively(fullPath, baseDir));
        } else if (entry.isFile() && entry.name.endsWith(".mdx")) {
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

export default async function DocsPage({ params }) {
    // Build file path from slug
    const filePath = path.join(DOCS_DIR, ...params.slug) + ".mdx";
    if (!fs.existsSync(filePath)) {
        notFound();
    }

    // Read & compile
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

    // Grab the optional frontmatter arrays
    const onThisPage = frontmatter?.onThisPage || [];
    const relatedDocs = frontmatter?.related || [];
    const relatedSites = frontmatter?.sites || [];

    // Pass it to our docs shell
    return (
        <DocsContentShell
            title={frontmatter?.title ?? "Untitled"}
            description={frontmatter?.description}
            content={content}
            onThisPage={onThisPage}
            relatedDocs={relatedDocs}
            relatedSites={relatedSites}
        />
    );
}