"use client";
import React, { useState, useRef, useCallback } from "react";
import { DocumentArrowUpIcon } from "@heroicons/react/24/outline";
import File from "@/components/atoms/File";
import {BORDER_RADIUS, COLOR_VARIANTS, getTextColorClass, mergeClasses, renderIcon} from "@/utils/styling";

const FileDrop = ({
    text = "Drop files here, or click to select",
    subtext = "",
    color = "gray",
    variant = "soft",
    activeColor = "primary",
    icon = <DocumentArrowUpIcon />,
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
    const colorSet = COLOR_VARIANTS[color][variant] || COLOR_VARIANTS.bg.soft;
    const activeColorSet = COLOR_VARIANTS[activeColor][variant] || COLOR_VARIANTS.primary.soft;
    const borderRadiusClass = BORDER_RADIUS[borderRadius] || BORDER_RADIUS.lg;

    const containerClasses = mergeClasses(
        "flex flex-col cursor-pointer",
        borderRadius && borderRadiusClass,
        files.length === 0 ? "p-8" : "p-4",
        borderClass,
        dragOver
            ? `${activeColorSet.border} ${activeColorSet.bg}`
            : `${colorSet.border} ${colorSet.bg}`,
        "bg-opacity-50 dark:bg-opacity-50",
        className
    );

    const iconClasses = mergeClasses(
        "h-12 w-12 mx-auto mb-3",
        dragOver ? getTextColorClass(activeColor) : getTextColorClass(color)
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
                    {icon && renderIcon(
                        icon,
                        null,
                        iconClasses
                    )}
                    <p className={`text-center text-md ${colorSet.text}`}>
                        {text}
                    </p>
                    {subtext && (
                        <p className={`text-center text-sm ${colorSet.text}`}>
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
                                `text-sm ${colorSet.text} 
                                 hover:underline ${activeColorSet.hoverText}`
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
