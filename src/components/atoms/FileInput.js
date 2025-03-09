"use client";
import React, { useState } from 'react';
import { DocumentArrowUpIcon } from "@heroicons/react/24/outline";
import {BORDER_RADIUS, COLOR_VARIANTS, mergeClasses} from "@/utils/styling";

const FileInput = ({
    text = "Choose File",
    placeholder = "No file selected",
    color = "primary",
    variant = "solid",
    borderRadius = "lg",
    border = true,
    icon = <DocumentArrowUpIcon />,
    className = "",
    buttonClassName = "",
    inputClassName = "",
    onFileChange,
    ...props
}) => {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
            onFileChange?.(selectedFile);
        }
    };

    const handleButtonClick = () => {
        document.getElementById('hiddenFileInput').click();
    };

    const colorSet = COLOR_VARIANTS[color][variant] || COLOR_VARIANTS.bg.soft;
    const borderRadiusClass = BORDER_RADIUS[borderRadius] || BORDER_RADIUS.lg;

    const buttonClasses = mergeClasses(
        colorSet.bg,
        colorSet.text,
        `p-2 cursor-pointer flex items-center px-4 whitespace-nowrap gap-1`,
        border && `border-1 ${colorSet.border}`,
        borderRadius && borderRadiusClass,
        "rounded-r-none",
        buttonClassName
    );

    const inputClasses = mergeClasses(
        `flex items-center whitespace-nowrap p-2`,
        `bg-bg-100 dark:bg-bg-900`,
        border && `border-1 ${colorSet.border}`,
        borderRadius && borderRadiusClass,
        "rounded-l-none",
        inputClassName
    );

    return (
        <div className={mergeClasses(`flex justify-center items-center rounded-lg`, className)}>
            <button className={buttonClasses} onClick={handleButtonClick}>
                {icon}
                {text}
            </button>
            <input
                type="text"
                className={inputClasses}
                placeholder={placeholder}
                value={file ? file.name : ''}
                readOnly
                {...props}
                aria-label={text}
            />
            <input
                type="file"
                id="hiddenFileInput"
                onChange={handleFileChange}
                style={{ display: 'none' }}
            />
        </div>
    );
};

export default FileInput;