import FileDrop from "@/components/atoms/FileDrop";

export function FileDropDemo({
    text,
    textColor,
    idleBorderColor,
    activeBorderColor,
    activeBgColor,
    borderClass,
    icon,
    iconSize,
}) {
    return (
        <div className="flex flex-wrap gap-4 items-center">
            <FileDrop
                text={text}
                textColor={textColor}
                idleBorderColor={idleBorderColor}
                activeBorderColor={activeBorderColor}
                activeBgColor={activeBgColor}
                icon={icon}
                iconSize={iconSize}
                borderClass={borderClass}
            />
        </div>
    );
}