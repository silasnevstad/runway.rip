'use client'

import { CopyBlock, CodeBlock as ReactCodeBlock, atomOneLight, atomOneDark } from 'react-code-blocks';

const CodeBlock = ({
    language,
    code,
    showLineNumbers = false,
    startingLineNumber = 1,
    copy = false,
    darkTheme = true,
}) => {

    if (copy) {
        return (
            <CopyBlock
                text={code}
                language={language}
                theme={darkTheme ? atomOneDark : atomOneLight}
                codeBlock={true}
                wrapLines
                showLineNumbers={showLineNumbers}
                startingLineNumber={startingLineNumber}
                codeBlockStyle={{ position: 'relative', borderRadius: '0.5rem' }}
                buttonStyle={{ position: 'absolute', top: '0.5rem', right: '0.5rem', zIndex: 10, cursor: 'pointer' }}
            />
        );
    }

    return (
        <ReactCodeBlock
            text={code}
            language={language}
            theme={darkTheme ? atomOneDark : atomOneLight}
            codeBlock={true}
            wrapLines
            showLineNumbers={showLineNumbers}
            startingLineNumber={startingLineNumber}
        />
    );
};

export default CodeBlock;