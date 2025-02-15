'use client'

import {useEffect, useState} from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneLight, atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { useTheme } from "next-themes";
import { ClipboardIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import {vs2015} from "react-code-blocks";

const CodeBlock = ({
    children: code,
    language,
    showLineNumbers = false,
    startingLineNumber = 1,
    copy = false,
    wrapLines = false,
    showLanguage = false,
}) => {
    const { resolvedTheme } = useTheme();
    const [copied, setCopied] = useState(false);
    const [checkDarkTheme, setCheckDarkTheme] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setCheckDarkTheme(window.matchMedia("(prefers-color-scheme: dark)").matches);
        }
    }, []);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="flex w-full flex-col border border-bg-200 dark:border-gray-900 rounded-lg rounded-t-xl">
            {(copy || showLanguage) && (
                <div className="flex items-center justify-between p-2.5 pr-3 bg-bg-200 dark:bg-gray-900 rounded-t-lg">
                    {showLanguage ? (
                        <p className="text-xs font-medium opacity-50">
                            {language}
                        </p>
                    ) : <p></p>}
                    {copy && (
                        <div
                            className={`flex items-center gap-1 hover:opacity-90 ${copied ? 'opacity-90' : 'opacity-65'} transition-opacity cursor-pointer`}
                            onClick={handleCopy}
                        >
                            {copied ? (
                                <CheckCircleIcon className="w-5 h-5 text-green-500" />
                            ) : (
                                <ClipboardIcon className="w-5 h-5" />
                            )}
                            <button
                                className={`text-sm font-medium ${copied && 'text-green-500'} focus:outline-hidden`}
                            >
                                {copied ? 'Copied' : 'Copy'}
                            </button>
                        </div>
                    )}
                </div>
            )}

            <SyntaxHighlighter
                key={resolvedTheme}
                language={language}
                style={checkDarkTheme ? atomOneDark : atomOneLight}
                wrapLines={wrapLines}
                showLineNumbers={showLineNumbers}
                startingLineNumber={startingLineNumber}
                customStyle={{
                    borderRadius: '0.3rem',
                    borderTopLeftRadius: '0rem',
                    borderTopRightRadius: '0rem',
                    paddingTop: '.2rem',
                    paddingBottom: '.5rem',
                    paddingRight: '1rem',
                }}
                lineNumberStyle={{ opacity: 0.7 }}
            >
                {code.trim()}
            </SyntaxHighlighter>
        </div>
    );
};

export default CodeBlock;