"use client";
import React, { useState } from 'react';
import Switcher from "@/components/atoms/Switcher";

const TutorialGuide = ({ options, firstPage, secondPage }) => {
    const [selectedOption, setSelectedOption] = useState(options[0].value);

    return (
        <div className="flex flex-col items-start">
            <Switcher
                options={options}
                selected={selectedOption}
                onChange={setSelectedOption}
                hover={true}
                shape="rounded-xl"
            />
            {selectedOption === options[0].value ? firstPage : secondPage}
        </div>
    );
};

export default TutorialGuide;
