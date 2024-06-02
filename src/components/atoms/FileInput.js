'use client';

import React, { useState } from 'react';
import { FiFilePlus } from 'react-icons/fi';  // Importing a file icon from react-icons

const FileInput = ({
    onFileChange = () => { },
    text = 'Choose File',
    className = '',
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
        <div className={`flex items-center rounded-lg ${className}`}>
            <button
                className="bg-gray-800 text-white p-2 cursor-pointer flex items-center rounded-l-lg px-4 whitespace-nowrap"
                onClick={handleButtonClick}>
                <FiFilePlus className="mr-2" />
                {text}
            </button>
            <input
                type="text"
                className="flex-grow p-2 border border-gray-300 rounded-r-lg"
                placeholder="no file selected"
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