"use client";

import Switcher from "@/components/atoms/Switcher";
import {useState} from "react";

export default function SwitchDemo({
    options = [],           // { value, name, Icon?, image? }[]
    color,
    variant,
    size,
    borderRadius,
    vertical,
    animate,  // Animate with sliding indicator
    hover,
    border,
    buttonBorder,
    buttonShadow,
    tooltip,
    tooltipPosition,
    className,
    buttonClassName,
}) {
    const [selectedOption, setSelectedOption] = useState(options[0].value);

    return (
        <div className="flex flex-wrap gap-3">
            <Switcher
                options={options}
                selected={selectedOption}
                onChange={setSelectedOption}
                color={color}
                variant={variant}
                size={size}
                borderRadius={borderRadius}
                vertical={vertical}
                animate={animate}
                hover={hover}
                border={border}
                buttonBorder={buttonBorder}
                buttonShadow={buttonShadow}
                tooltip={tooltip}
                tooltipPosition={tooltipPosition}
                className={className}
                buttonClassName={buttonClassName}
            />
        </div>
    );
}
