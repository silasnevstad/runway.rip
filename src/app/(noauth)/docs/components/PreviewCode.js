'use client'

import { useState } from "react";
import Switcher from "@/components/atoms/Switcher";

const PreviewCode = ({ children, preview }) => {
    const [showPreview, setShowPreview] = useState(true);

    return (
        <div className="my-4 flex flex-col w-full">
            <Switcher
                options={[
                    { name: 'Preview', value: 'preview' },
                    { name: 'Code', value: 'code' },
                ]}
                selected={showPreview ? 'preview' : 'code'}
                onChange={(value) => setShowPreview(value === 'preview')}
                className="mb-4 self-start"
            />
            {showPreview ?
                <div className="flex justify-center border rounded-lg border-bg-200 dark:border-bg-800 py-5 shadow-sm">
                    {preview}
                </div>
            :
                children
            }
        </div>
    );
}

export default PreviewCode;