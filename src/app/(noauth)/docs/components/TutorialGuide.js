'use client'

import React, { useState } from 'react';
import Switch from "@/components/atoms/Switch";

const TutorialGuide = ({ options, children }) => {
    const [selectedOption, setSelectedOption] = useState(options[0].value);

    return (
        <div className="flex flex-col items-start">
            <Switch
                options={options}
                selected={selectedOption}
                onChange={setSelectedOption}
                hover={true}
                shape="rounded-xl"
                className="mb-8"
            />
            {React.Children.map(children, child =>
                React.cloneElement(child, { selectedOption })
            )}
        </div>
    );
};

export default TutorialGuide;