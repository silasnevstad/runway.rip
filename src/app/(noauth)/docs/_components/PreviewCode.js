'use client'

import { useState } from "react";
import Switcher from "@/components/atoms/Switcher";

const PreviewCode = ({ children, preview, border = false }) => {
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
                shape="rounded-xl"
            />
            {showPreview ?
                <div
                    className={`flex justify-center ${border && 'border rounded-lg border-bg-200 dark:border-gray-900'} py-5`}>
                    {preview}
                </div>
                :
                <div
                    className="flex w-full flex-col -mt-3">
                    {children}
                </div>

            }
        </div>
    );
}

export default PreviewCode;