"use client";

import React, { useState, useRef } from "react";
import { mergeClasses } from "@/utils/classNames";
import { LuFilePlus } from "react-icons/lu";

const FileDrop = ({
    onDrop,
    className = "",
    text = "Drop files here, or click to select",
    textColor = "text-gray-600 dark:text-gray-400",
    idleBorderColor = "border-gray-300",
    activeBorderColor = "border-blue-500",
    activeBgColor = "bg-blue-100",
    icon: IconComponent = LuFilePlus,
    iconSize = "text-5xl",
    borderClass = "border-2 border-dashed",
}) => {
    const [dragOver, setDragOver] = useState(false);
    const fileInputRef = useRef(null);

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

    const containerClasses = mergeClasses(
        "flex flex-col p-8 rounded-lg cursor-pointer",
        borderClass,
        dragOver
            ? mergeClasses(activeBorderColor, activeBgColor)
            : idleBorderColor,
        className
    );

    const iconClasses = mergeClasses("mt-4 mx-auto", iconSize, textColor);

    return (
        <div
            className={containerClasses}
            onDragEnter={handleDragEnter}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current && fileInputRef.current.click()}
        >
            <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                multiple
                onChange={handleFileSelect}
            />
            <p className={mergeClasses("text-center", textColor)}>{text}</p>
            {IconComponent && <IconComponent className={iconClasses} />}
        </div>
    );
};

export default FileDrop;
