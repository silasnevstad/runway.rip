'use client'

import { CopyBlock } from 'react-code-blocks';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneLight, atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

const SyntaxHighlighter = ({
    children: code,
    language,
    showLineNumbers = false,
    startingLineNumber = 1,
    copy = false,
    darkTheme = true,
}) => {

    if (copy) {
        return (
            <CopyBlock
                text={code.trim()}
                language={language}
                style={darkTheme ? atomOneDark : atomOneLight}
                codeBlock
                wrapLines
                showLineNumbers={showLineNumbers}
                startingLineNumber={startingLineNumber}
                customStyle={{ borderRadius: '0.3rem' }}
                lineNumberStyle={{ opacity: 0.5 }}
            />
        );
    }

    return (
        <SyntaxHighlighter
            language={language}
            style={darkTheme ? atomOneDark : atomOneLight}
            codeBlock
            wrapLines
            showLineNumbers={showLineNumbers}
            startingLineNumber={startingLineNumber}
            customStyle={{ borderRadius: '0.3rem' }}
            lineNumberStyle={{ opacity: 0.5 }}
        >
            {code.trim()}
        </SyntaxHighlighter>
    );
};

export default SyntaxHighlighter;