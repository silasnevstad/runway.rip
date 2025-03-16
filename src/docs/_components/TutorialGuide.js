"use client";
import React, { useState } from 'react';
import Switcher from "@/components/atoms/Switcher";

const TutorialGuide = ({ options, children }) => {
    const childArray = React.Children.toArray(children).filter(child =>
        React.isValidElement(child)
    );
    const [selectedOption, setSelectedOption] = useState(options[0].value);

    // Find the index of the current option.
    const selectedIndex = options.findIndex(option => option.value === selectedOption);
    const selectedChild = childArray[selectedIndex];

    return (
        <div className="flex flex-col items-start">
            <Switcher
                options={options}
                selected={selectedOption}
                onChange={setSelectedOption}
                hover={true}
                size="md"
                borderRadius="lg"
                variant="soft"
                color="bg"
                animate={true}
            />
            {selectedChild}
        </div>
    );
};

export default TutorialGuide;