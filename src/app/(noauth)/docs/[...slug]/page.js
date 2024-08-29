import fs from "node:fs";
import path from "node:path";
import { compileMDX } from "next-mdx-remote/rsc";
import { useMDXComponents } from "@/app/(noauth)/docs/components/mdx-components";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { LinkIcon } from "@heroicons/react/24/outline";
import TextLink from "@/components/atoms/TextLink";
import { UserIcon } from "@heroicons/react/24/solid";

export const dynamic = "force-static";

const contentSource = "src/app/(noauth)/docs/content";

export function generateStaticParams() {
    const targets = fs.readdirSync(path.join(process.cwd(), contentSource), {
        recursive: true,
    });

    const files = [];

    for (const target of targets) {
        if (
            fs
                .lstatSync(
                    path.join(process.cwd(), contentSource, target.toString())
                )
                .isDirectory()
        ) {
            continue;
        }

        files.push(target);
    }

    return files.map((file) => ({
        slug: file.toString().replace(".mdx", "").split("/"),
    }));
}

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
                    <a href={site.url} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm gap-1 text-blue-500 hover:underline">
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
    const source = fs.readFileSync(
        path.join(process.cwd(), contentSource, params.slug.join("/")) + ".mdx",
        "utf8"
    );

    const components = useMDXComponents({
        Accordion: require("@/components/molecules/Accordion").default,
        Input: require("@/components/atoms/Input").default,
        Badge: require("@/components/atoms/Badge").default,
        Avatar: require("@/components/atoms/Avatar").Avatar,
        LetterAvatar: require("@/components/atoms/Avatar").LetterAvatar,
        AvatarList: require("@/components/atoms/Avatar").AvatarList,
        Card: require("@/components/molecules/Card").default,
        Slider: require("@/components/atoms/Slider").default,
        Switch: require("@/components/atoms/Switch").default,
        TextLink: require("@/components/atoms/TextLink").default,
        DropdownText: require("@/components/atoms/DropdownText").default,
        Breadcrumb: require("@/components/atoms/Breadcrumb").default,
        Loader: require("@/components/atoms/Loader").default,
        CodeBlock: require("@/components/atoms/CodeBlock").default,
        UserIcon: UserIcon,
    });

    const { content, frontmatter } = await compileMDX({
        source,
        options: {
            mdxOptions: {
                rehypePlugins: [rehypeHighlight, rehypeSlug],
                remarkPlugins: [remarkGfm],
            },
            parseFrontmatter: true,
        },
        components,
    });

    const pageTitle = frontmatter.title;
    const pageDescription = frontmatter.description;
    const relatedContent = frontmatter.related || [];
    const relatedSites = frontmatter.sites || [];
    const onThisPage = frontmatter.onThisPage || [];

    return (
        <div className="flex flex-col w-full items-start md:flex-row gap-8 justify-between mt-10">
            <div className="flex-grow max-w-prose">
                <h1 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    {pageTitle}
                </h1>
                {pageDescription && (
                    <p className="text-xl text-gray-800 dark:text-gray-200 mb-8">{pageDescription}</p>
                )}
                <div className="w-full">
                    {content}
                </div>
            </div>
            <div className="max-md:hidden md:sticky md:top-28 self-start md:w-64 space-y-4">
                {relatedContent.length > 0 && <RelatedContent items={relatedContent}/>}
                {relatedSites.length > 0 && <RelatedSites sites={relatedSites}/>}
                {onThisPage.length > 0 && <OnThisPage items={onThisPage}/>}
            </div>
        </div>
    );
}