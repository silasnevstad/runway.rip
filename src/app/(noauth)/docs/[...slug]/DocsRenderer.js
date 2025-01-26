"use client";

import { MDXProvider } from "@mdx-js/react";
import { mdxComponents } from "../_components/mdx-components";

export default function DocsRenderer({ MdxComponent }) {
    if (!MdxComponent) {
        return <p>Missing MDX Component</p>;
    }

    return (
        <div className="w-full prose dark:prose-invert">
            <MDXProvider components={mdxComponents}>
                <MdxComponent />
            </MDXProvider>
        </div>
    );
}
