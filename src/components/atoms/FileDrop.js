"use client";
import React, { useState, useRef, useCallback } from "react";
import { LuFilePlus } from "react-icons/lu";
import File from "@/components/atoms/File";
import { mergeClasses, renderIcon } from "@/utils/styling";

const FileDrop = ({
    text = "Drop files here, or click to select",
    subtext = "",
    color = "gray",
    activeColor = "primary",
    icon = <LuFilePlus />,
    borderRadius = "lg",
    borderClass = "border-2 border-dashed",
    className = "",
    accept = "*",
    multiple = true,
    onDrop,
    ...props
}) => {
    const [files, setFiles] = useState([]);
    const [dragOver, setDragOver] = useState(false);
    const fileInputRef = useRef(null);

    // Drag Events
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
            const newFiles = Array.from(e.dataTransfer.files);
            setFiles((prevFiles) => {
                const updated = [...prevFiles, ...newFiles];
                onDrop?.(updated);
                return updated;
            });
            e.dataTransfer.clearData();
        }
    };

    // File Selection
    const handleFileSelect = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            const newFiles = Array.from(e.target.files);
            setFiles((prevFiles) => {
                const updated = [...prevFiles, ...newFiles];
                onDrop?.(updated);
                return updated;
            });
        }
    };

    // Remove Files
    const handleRemoveFile = useCallback(
        (index) => {
            setFiles((prev) => {
                const updated = [...prev];
                updated.splice(index, 1);
                onDrop?.(updated);
                return updated;
            });
        },
        [onDrop]
    );

    const handleRemoveAll = useCallback(() => {
        setFiles([]);
        onDrop?.([]);
    }, [onDrop]);

    // Styling
    const containerClasses = mergeClasses(
        "flex flex-col cursor-pointer",
        borderRadius && `rounded-${borderRadius}`,
        files.length === 0 ? "p-8" : "p-4",
        borderClass,
        dragOver
            ? `border-${activeColor}-500/50 bg-${activeColor}-100/5`
            : `border-${color}-700/50 bg-${color}-900/5 dark:border-${color}-500/50 dark:bg-${color}-50/5`,
        className
    );

    // Prepare icon
    const iconClasses = mergeClasses(
        "h-12 w-12 mx-auto mb-3",
        dragOver ? `text-${activeColor}-500` : `text-${color}-500`
    );

    // Prepare icon
    const iconRendered = renderIcon(
        icon,
        null,
        iconClasses
    );

    return (
        <div
            className={containerClasses}
            onDragEnter={handleDragEnter}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            {...props}
        >
            {/* Hidden file input */}
            <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                accept={accept}
                multiple={multiple}
                onChange={handleFileSelect}
            />

            {/* If no files yet, show icon + text */}
            {files.length === 0 && (
                <>
                    {iconRendered && iconRendered}
                    <p className={`text-center text-md text-${color}-600 dark:text-${color}-400`}>
                        {text}
                    </p>
                    {subtext && (
                        <p className={`text-center text-sm text-${color}-400 dark:text-${color}-600`}>
                            {subtext}
                        </p>
                    )}
                </>
            )}

            {/* If files exist, show FileItem for each */}
            {files.length > 0 && (
                <div className="mt-2 w-full space-y-2">
                    <div className="flex flex-col gap-2">
                        {files.map((file, index) => (
                            <File
                                key={`${file.name}-${index}`}
                                file={file}
                                showRemoveButton
                                onRemove={() => handleRemoveFile(index)}
                            />
                        ))}
                    </div>

                    <div className="text-center mt-2">
                        <button
                            type="button"
                            className={
                                `text-sm text-${color}-500 dark:text-${color}-600 
                                hover:underline hover:text-${color}-800 dark:hover:text-${color}-300`
                            }
                            onClick={(e) => {
                                e.stopPropagation();
                                handleRemoveAll();
                            }}
                        >
                            Clear
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FileDrop;
