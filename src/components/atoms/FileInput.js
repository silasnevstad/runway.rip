"use client";
import React, { useState } from 'react';
import { FiFilePlus } from 'react-icons/fi';
import { mergeClasses } from "@/utils/classNames";

const FileInput = ({
    text = 'Choose File',
    placeholder = 'No file selected',
    border = true,
    color = 'green',
    borderRadius = 'lg',
    icon = <FiFilePlus />,
    className = '',
    buttonClassName = '',
    inputClassName = '',
    onFileChange,
    ...props
}) => {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
            onFileChange(selectedFile);
        }
    };

    const handleButtonClick = () => {
        document.getElementById('hiddenFileInput').click();
    };

    const buttonClasses = mergeClasses(
        `bg-${color}-600 dark:bg-${color}-400`,
        `text-white dark:text-gray-900 p-2 cursor-pointer flex items-center px-4 whitespace-nowrap gap-1`,
        border ? `border-1 border-${color}-700 dark:border-${color}-500` : `border-1 border-${color}-600 dark:border-${color}-800`,
        borderRadius && `rounded-l-${borderRadius}`,
        buttonClassName
    );

    const inputClasses = mergeClasses(
        `flex items-center whitespace-nowrap p-2`,
        `bg-bg-100 dark:bg-bg-900`,
        border ? `border-1 border-l-0 border-${color}-700 dark:border-${color}-500`
            : `border-1 border-l-0 border-bg-50/50 dark:border-bg-900`,
        borderRadius && `rounded-r-${borderRadius}`,
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