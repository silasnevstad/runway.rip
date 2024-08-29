'use client'

import React, { useState } from 'react';
import { FiCopy, FiCheck } from 'react-icons/fi';

const CodeBlock = ({
    children,
    language = 'plain',
    showLineNumbers = false,
    startingLineNumber = 1,
}) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(children);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const codeLines = children.trim().split('\n');

    return (
        <div className={`text-sm mt-4 mb-6 bg-bg-50 dark:bg-bg-900 text-gray-100 rounded-lg 
            border-l border-r border-b border-bg-400 dark:border-gray-700`}>
            <div className={`flex items-center justify-between bg-bg-600 dark:bg-bg-700 px-4 py-3 
                border-b border-gray-500 dark:border-gray-700 rounded-t-lg`}>
                <span className="text-sm opacity-60">{language}</span>
                <button
                    onClick={handleCopy}
                    className="text-sm flex items-center space-x-1 transition-colors duration-200"
                >
                    {copied ? (
                        <FiCheck className="text-green-500" />
                    ) : (
                        <FiCopy className={`text-gray-400 hover:text-gray-200`} />
                    )}
                </button>
            </div>
            <div className="font-mono overflow-x-auto text-black dark:text-white">
                <pre className="p-4 py-5">
                    {codeLines.map((line, index) => (
                        <div key={index} className="table-row">
                            {showLineNumbers && (
                                <span className="table-cell text-right pr-4 select-none opacity-50">
                                    {startingLineNumber + index}
                                </span>
                            )}
                            <code className="table-cell">{line}</code>
                        </div>
                    ))}
                </pre>
            </div>
        </div>
    );
};

export default CodeBlock;