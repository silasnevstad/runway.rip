import React from "react";
import {
    AiOutlineFile,
    AiOutlineFilePdf,
    AiOutlineFileWord,
    AiOutlineFileExcel,
    AiOutlineFileImage,
    AiOutlineFileZip,
    AiOutlineFilePpt,
    AiOutlineFileText,
} from "react-icons/ai";
import { FaRegFileVideo, FaRegFileAudio } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { mergeClasses } from "@/utils/styling";

const getFileExtension = (filename) => {
    const parts = filename.toLowerCase().split(".");
    return parts.length > 1 ? parts[parts.length - 1] : "";
};

const getFileIcon = (extension) => {
    switch (extension) {
        case "pdf":
            return <AiOutlineFilePdf />;
        case "doc":
        case "docx":
            return <AiOutlineFileWord />;
        case "xls":
        case "xlsx":
            return <AiOutlineFileExcel />;
        case "ppt":
        case "pptx":
            return <AiOutlineFilePpt />;
        case "jpg":
        case "jpeg":
        case "png":
        case "gif":
        case "bmp":
        case "svg":
            return <AiOutlineFileImage />;
        case "mp4":
        case "mov":
        case "avi":
            return <FaRegFileVideo />;
        case "mp3":
        case "wav":
        case "flac":
            return <FaRegFileAudio />;
        case "zip":
        case "rar":
        case "7z":
        case "tar":
            return <AiOutlineFileZip />;
        case "txt":
        case "md":
            return <AiOutlineFileText />;
        default:
            // Fallback icon if unknown extension
            return <AiOutlineFile />;
    }
};

const File = ({
    file,
    name,
    onRemove,
    showRemoveButton = false,
    color = "bg",
    iconBg = "primary",
    borderRadius = "lg",
    border = true,
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

    const containerClasses = mergeClasses(
        "group relative flex items-center gap-2 p-2",
        borderRadius && `rounded-${borderRadius}`,
        color && `bg-${color}-100 dark:bg-${color}-800`,
        border && `border border-${borderColor}-600 dark:border-${borderColor}-700`,
        className,
    )

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
                        bg-${color}-100 dark:bg-${color}-700 rounded-full p-0.5`
                    }
                    onClick={(e) => {
                        e.stopPropagation();
                        onRemove?.();
                    }}
                >
                    <FiX className="w-4 h-4 text-red-500" />
                </button>
            )}

            {/* Icon with background */}
            <div
                className={`flex items-center justify-center w-10 h-10 rounded-lg text-xl bg-${iconBg}-500/40 dark:bg-${iconBg}-500/50`}
                title={extension}
            >
                {icon}
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
