"use client";

import Switch from "@/components/atoms/Switch";
import {useState} from "react";

export default function SwitchDemo({
    options,
    shape,
    vertical,
    tooltip,
    tooltipPosition,
    activeColor,
    inactiveColor,
    activeBgColor,
    inactiveBgColor
}) {
    const [selectedOption, setSelectedOption] = useState(options[0].value);

    return (
        <div className="flex flex-wrap gap-3">
            <Switch
                options={options}
                selected={selectedOption}
                onChange={setSelectedOption}
                shape={shape}
                vertical={vertical}
                tooltip={tooltip}
                tooltipPosition={tooltipPosition}
                activeTextColor={activeColor}
                inactiveTextColor={inactiveColor}
                activeBgColor={activeBgColor}
                inactiveBgColor={inactiveBgColor}
            />
        </div>
    );
}
