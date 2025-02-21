'use client'

import {useEffect, useState} from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneLight, atomOneDark, tomorrowNightEighties, arta } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { useTheme } from "next-themes";
import { ClipboardIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

const CodeBlock = ({
    children: code,
    language,
    showLineNumbers = false,
    startingLineNumber = 1,
    copy = false,
    wrapLines = false,
    wrapLongLines = true,
    showLanguage = false,
}) => {
    const { resolvedTheme } = useTheme();
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="flex w-full flex-col border border-bg-200 dark:border-gray-800/30 rounded-lg">
            {(copy || showLanguage) && (
                <div className="flex items-center justify-between p-2.5 pr-3 bg-bg-100 dark:bg-bg-800 rounded-t-lg border-b border-bg-200 dark:border-gray-800/40">
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
                                <CheckCircleIcon className="w-5 h-5 text-green-500/50" />
                            ) : (
                                <ClipboardIcon className="w-5 h-5" />
                            )}
                        </div>
                    )}
                </div>
            )}

            <SyntaxHighlighter
                key={resolvedTheme}
                language={language}
                style={resolvedTheme === "dark" ? tomorrowNightEighties : atomOneLight}
                wrapLines={wrapLines}
                wrapLongLines={wrapLongLines}
                showLineNumbers={showLineNumbers}
                startingLineNumber={startingLineNumber}
                customStyle={{
                    borderRadius: '0.3rem',
                    borderTopLeftRadius: '0rem',
                    borderTopRightRadius: '0rem',
                    paddingTop: '.2rem',
                    paddingBottom: '.5rem',
                    paddingRight: '1rem',
                    fontSize: '0.85rem',
                }}
                lineNumberStyle={{ opacity: 0.35, fontSize: '0.85rem' }}
            >
                {code.trim()}
            </SyntaxHighlighter>
        </div>
    );
};

export default CodeBlock;