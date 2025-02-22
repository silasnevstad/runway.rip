import FileDrop from "@/components/atoms/FileDrop";

export function FileDropDemo({
    text,
    subtext,
    color,
    activeColor,
    icon,
    borderRadius,
    borderClass,
    className,
    accept,
    multiple,
    onDrop,
}) {
    return (
        <div className="flex flex-wrap gap-4 items-center">
            <FileDrop
                text={text}
                subtext={subtext}
                color={color}
                activeColor={activeColor}
                icon={icon}
                borderRadius={borderRadius}
                borderClass={borderClass}
                className={className}
                accept={accept}
                multiple={multiple}
                onDrop={onDrop}
            />
        </div>
    );
}