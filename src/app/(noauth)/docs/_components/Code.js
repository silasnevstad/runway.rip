'use client'

import CodeBlock from "@/components/atoms/CodeBlock";

const Code = ({ children, className, ...props }) => {
    // This handles inline code
    if (!className) {
        return <code className="bg-bg-400/40 dark:bg-bg-400/15 rounded px-1.5 py-1">{children}</code>;
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

    return (
        <CodeBlock
            language={language}
            showLineNumbers={true}
            startingLineNumber={1}
            darkTheme={false}
            wrapLines={true}
            copy
            showLanguage
            {...props}
        >
            {cleanedCode}
        </CodeBlock>
    );
}

export default Code;