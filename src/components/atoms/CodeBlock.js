'use client'

import { useState } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneLight, atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { useTheme } from "next-themes";
import { ClipboardIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

const CodeBlock = ({
    children: code,
    language,
    showLineNumbers = false,
    startingLineNumber = 1,
    copy = false,
    wrapLines = false,
    showLanguage = false,
}) => {
    const { theme } = useTheme();
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    }

    return (
        <div className="flex w-full flex-col bg-gray-900 dark:bg-bg-800 border border-bg-200 dark:border-gray-900 rounded-lg rounded-t-xl">
            {copy || showLanguage ? (
                <div className="flex items-center justify-between p-2 pr-3 bg-bg-200 dark:bg-gray-900 rounded-t-lg">
                    {showLanguage ? (
                        <p className="text-xs font-medium opacity-30">
                            {language}
                        </p>
                    ) : (<p></p>)}
                    {copy && (
                        <div
                            className={
                                `flex items-center gap-1 hover:opacity-90 ${copied ? 'opacity-90' : 'opacity-65'} transition-opacity cursor-pointer`
                            }
                            onClick={handleCopy}
                        >
                            {copied ? (
                                <CheckCircleIcon className="w-5 h-5 text-green-500"/>
                            ) : (
                                <ClipboardIcon className="w-5 h-5"/>
                            )}
                            <button className={`text-sm font-medium ${copied && 'text-green-500'} focus:outline-none`}>
                                {copied ? 'Copied' : 'Copy'}
                            </button>
                        </div>
                    )}
                </div>
            ) : null}
            <SyntaxHighlighter
                language={language}
                style={theme === 'dark' ? atomOneLight : atomOneDark}
                wrapLines={wrapLines}
                showLineNumbers={showLineNumbers}
                startingLineNumber={startingLineNumber}
                customStyle={{
                    borderRadius: '0.3rem',
                    borderTopLeftRadius: '0rem',
                    borderTopRightRadius: '0rem',
                    backgroundColor: 'transparent'
                }}
                lineNumberStyle={{opacity: 0.7}}
            >
                {code.trim()}
            </SyntaxHighlighter>
        </div>
    );
};

export default CodeBlock;