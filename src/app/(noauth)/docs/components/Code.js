'use client'

import { CodeBlock } from "react-code-blocks";
import CodeSyntaxHighlighter from "@/components/atoms/CodeSyntaxHighlighter";

const Code = ({ children, className, ...props }) => {
    // This handles inline code
    if (!className) {
        return <code className="bg-bg-500/50 dark:bg-bg-500/40 rounded px-1 py-0.5">{children}</code>;
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
}

export default Code;