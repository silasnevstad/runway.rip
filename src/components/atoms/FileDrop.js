'use client';

import React, { useState } from 'react';
import { LuFilePlus } from "react-icons/lu";

const FileDrop = ({
    onDrop,
    className = '',
    textColor = 'text-gray-500',
    text = 'Drop files here, or click to select'
}) => {
    const [dragOver, setDragOver] = useState(false);

    const handleDragEnter = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragOver(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragOver(false);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragOver(true);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragOver(false);
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            onDrop(e.dataTransfer.files);
            e.dataTransfer.clearData();
        }
    };

    const handleFileSelect = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            onDrop(e.target.files);
        }
    };

    return (
        <div
            className={`flex flex-col p-8 border-2 border-dashed ${dragOver ? 'border-blue-500 bg-blue-100' : 'border-gray-300'} rounded-lg cursor-pointer ${className}`}
            onDragEnter={handleDragEnter}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => document.getElementById('fileInput').click()}
        >
            <input
                type="file"
                id="fileInput"
                style={{display: 'none'}}
                multiple
                onChange={handleFileSelect}
            />
            {/*<h1 className="text-center text-xl text-gray-700 font-semibold">Add File</h1>*/}
            <p className={`text-center ${textColor}`}>{text}</p>
            <LuFilePlus className={`mt-4 mx-auto text-5xl ${textColor}`}/>

        </div>
    );
};

export default FileDrop;
