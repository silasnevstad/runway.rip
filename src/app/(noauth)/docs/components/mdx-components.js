import Image from "next/image";
import Link from "next/link";
import CodeBlock from "@/components/atoms/CodeBlock";
import Divider from "@/components/atoms/Divider";
import CodeSyntaxHighlighter from "@/components/atoms/CodeSyntaxHighlighter";

export function useMDXComponents(components) {
    return {
        h1: ({ children }) => <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>,
        h2: ({ children }) => <h2 className="text-3xl font-semibold mt-6 mb-3">{children}</h2>,
        h3: ({ children }) => <h3 className="text-2xl font-medium mt-8 mb-2">{children}</h3>,
        p: ({ children }) => <p className="my-2 leading-relaxed">{children}</p>,
        ul: ({ children }) => <ul className="list-disc list-inside my-4">{children}</ul>,
        ol: ({ children }) => <ol className="list-decimal list-inside my-4">{children}</ol>,
        li: ({ children }) => <li className="my-1">{children}</li>,
        Required: ({ children }) => (
            <div className="bg-bg-200 dark:bg-bg-800 border-l-4 border-yellow-500 px-4 py-1 my-2">
                {children}
            </div>
        ),
        Info: ({ children }) => (
            <div className="bg-bg-200 dark:bg-bg-800 border-l-4 border-blue-500 p-4 my-4">
                {children}
            </div>
        ),
        Tip: ({ children }) => (
            <div className="bg-bg-200 dark:bg-bg-800 border-l-4 border-green-500 p-4 my-4">
                {children}
            </div>
        ),
        Warning: ({ children }) => (
            <div className="bg-bg-200 dark:bg-bg-800 border-l-4 border-red-500 p-4 my-4">
                {children}
            </div>
        ),
        Divider: Divider,
        a: ({ href, children }) => (
            <Link href={href} className="text-blue-500 hover:text-blue-700 underline">
                {children}
            </Link>
        ),
        img: (props) => (
            <Image
                className="my-4 rounded-lg"
                {...props}
                width={600}
                height={400}
                layout="responsive"
            />
        ),
        code: ({ children, className, ...props }) => {
            // This handles inline code
            if (!className) {
                return <code className="bg-bg-300 dark:bg-bg-500/40 rounded px-1 py-0.5">{children}</code>;
            }

            // This handles code blocks (remove hljs class)
            const language = className.replace('language-', '').replace('hljs', '').trim();

            // Function to extract text content from React elements
            const extractText = (element) => {
                if (typeof element === 'string') return element;
                if (Array.isArray(element)) return element.map(extractText).join('');
                if (element && typeof element === 'object' && 'props' in element) {
                    return extractText(element.props.children);
                }
                return '';
            };

            // Extract the text content
            const codeString = extractText(children);

            // Remove backticks if present and unescape HTML entities
            const cleanedCode = codeString.replace(/`/g, '').replace(/&lt;/g, '<').replace(/&gt;/g, '>');

            if (language === 'bash') {
                return (
                    <CodeBlock
                        language={language}
                        showLineNumbers={true}
                        startingLineNumber={1}
                        darkTheme={true}
                        {...props}
                    >
                        {cleanedCode}
                    </CodeBlock>
                );
            }

            return (
                <CodeSyntaxHighlighter
                    language={language}
                    showLineNumbers={true}
                    startingLineNumber={1}
                    darkTheme={true}
                    wrapLines={true}
                    {...props}
                >
                    {cleanedCode}
                </CodeSyntaxHighlighter>
            );
        },
        pre: ({ children }) => <div className="my-4">{children}</div>,
        blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">
                {children}
            </blockquote>
        ),
        table: ({ children }) => (
            <div className="overflow-x-auto my-10">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800 rounded-lg">
                    {children}
                </table>
            </div>
        ),
        th: ({ children }) => (
            <th className="px-6 py-3 bg-gray-800 dark:bg-gray-900 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase">
                {children}
            </th>
        ),
        td: ({ children }) => (
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200 border-b border-gray-200 dark:border-gray-800">
                {children}
            </td>
        ),
        ...components,
    };
}