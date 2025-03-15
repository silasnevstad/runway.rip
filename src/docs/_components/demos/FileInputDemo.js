import FileInput from "@/components/atoms/FileInput";
import {DocumentArrowUpIcon} from "@heroicons/react/24/outline";
import React from "react";

export function FileInputDemo({
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
}) {
    return (
        <div className="flex flex-wrap gap-4 items-center">
            <FileInput
                text={text}
                placeholder={placeholder}
                color={color}
                variant={variant}
                borderRadius={borderRadius}
                border={border}
                icon={icon}
                className={className}
                buttonClassName={buttonClassName}
                inputClassName={inputClassName}
                onFileChange={onFileChange}
                {...props}
            />
        </div>
    );
}