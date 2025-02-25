import React from "react";
import {
    DocumentIcon,
    DocumentTextIcon ,
    PhotoIcon,
    VideoCameraIcon,
    MusicalNoteIcon,
    ArchiveBoxIcon,
    PresentationChartBarIcon,
    DocumentArrowUpIcon,
    XMarkIcon
} from "@heroicons/react/24/outline";
import {BORDER_RADIUS, COLOR_VARIANTS, getTextColorClass, mergeClasses, renderIcon} from "@/utils/styling";

const getFileExtension = (filename) => {
    const parts = filename.toLowerCase().split(".");
    return parts.length > 1 ? parts[parts.length - 1] : "";
};

const getFileIcon = (extension) => {
    switch (extension) {
        case "pdf":
            return <DocumentIcon />;
        case "doc":
        case "docx":
            return <DocumentTextIcon />;
        case "xls":
        case "xlsx":
            return <DocumentTextIcon />;
        case "ppt":
        case "pptx":
            return <PresentationChartBarIcon />;
        case "jpg":
        case "jpeg":
        case "png":
        case "gif":
        case "bmp":
        case "svg":
            return <PhotoIcon />;
        case "mp4":
        case "mov":
        case "avi":
            return <VideoCameraIcon />;
        case "mp3":
        case "wav":
        case "flac":
            return <MusicalNoteIcon />;
        case "zip":
        case "rar":
        case "7z":
        case "tar":
            return <ArchiveBoxIcon />;
        case "txt":
        case "md":
            return <DocumentTextIcon />;
        default:
            // Fallback icon if unknown extension
            return <DocumentIcon />;
    }
};

const File = ({
    file,
    name,
    onRemove,
    showRemoveButton = false,
    color = "gray",
    variant = "solid",
    iconColor = "green",
    borderRadius = "lg",
    border = false,
    borderColor = "gray",
    showFileType = true,
    showFileSize = true,
    className = "",
    ...props
}) => {
    // Extract the displayed file name
    const fileName = name || file?.name || "Untitled";
    const extension = getFileExtension(fileName);
    const icon = getFileIcon(extension);

    const colorSet = COLOR_VARIANTS[color][variant] || COLOR_VARIANTS.bg.soft;
    const iconColorSet = COLOR_VARIANTS[iconColor][variant] || COLOR_VARIANTS.primary.soft;
    const borderRadiusClass = BORDER_RADIUS[borderRadius] || BORDER_RADIUS.lg;

    const containerClasses = mergeClasses(
        "group relative flex items-center gap-2 p-2",
        borderRadius && borderRadiusClass,
        colorSet.bg,
        border && `border ${colorSet.border}`,
        className,
    );

    const iconClasses = mergeClasses(
        "p-2 w-10 h-10 rounded-lg text-xl text-white",
        getTextColorClass(iconColor),
    );

    return (
        <article
            className={containerClasses}
            {...props}
        >
            {/* Remove Button (top-right) */}
            {showRemoveButton && (
                <button
                    type="button"
                    className={
                        `hidden group-hover:flex absolute -top-2.5 -right-2.5  
                        text-gray-500 hover:text-gray-700 dark:hover:text-gray-300
                        ${colorSet.bg} rounded-full p-0.5`
                    }
                    onClick={(e) => {
                        e.stopPropagation();
                        onRemove?.();
                    }}
                >
                    <XMarkIcon className="w-4 h-4 text-red-500" />
                </button>
            )}

            {/* Icon with background */}
            <div
                className={`flex items-center rounded-lg ${iconColorSet.bg}`}
                title={extension}
            >
                {renderIcon(icon, null, "p-2 w-10 h-10 rounded-lg text-xl text-white")}
            </div>

            {/* File Name & Size */}
            <div className="flex-1">
                <p className="text-sm font-medium truncate">{fileName}</p>
                {file && (
                    <p className="text-xs text-gray-500">
                        {showFileType && `${extension.toUpperCase()} • `}
                        {showFileSize && `${(file.size / 1024).toFixed(2)} KB`}
                    </p>
                )}
            </div>
        </article>
    );
};

export default File;
