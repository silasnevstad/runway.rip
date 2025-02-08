'use client';

import React, { useState } from 'react';
import { FiFilePlus } from 'react-icons/fi';
import {mergeClasses} from "@/utils/classNames";  // Importing a file icon from react-icons

const FileInput = ({
    onFileChange = () => { },
    text = 'Choose File',
    placeholder = 'No file selected',
    className = '',
    buttonClassName = '',
    inputClassName = '',
    color = 'gray',
    buttonIcon: IconComponent = FiFilePlus,
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

    return (
        <div className={mergeClasses(`flex justify-center items-center rounded-lg`, className)}>
            <button
                className={
                    mergeClasses(
                        `bg-${color}-700 dark:bg-${color}-800 text-white p-2 border  border-${color}-700 dark:border-${color}-800 cursor-pointer flex items-center rounded-l-lg px-4 whitespace-nowrap`,
                        buttonClassName
                    )
                }
                onClick={handleButtonClick}
            >
                <IconComponent className="mr-2" />
                {text}
            </button>
            <input
                type="text"
                className={
                    mergeClasses(`flex items-center border-1 border-l-0 whitespace-nowrap p-2 rounded-r-lg border-${color}-700 dark:border-${color}-800 bg-bg-100 dark:bg-bg-800`,
                        inputClassName
                    )
                }
                placeholder={placeholder}
                value={file ? file.name : ''}
                readOnly
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