'use client';

import React, { useState } from 'react';
import Switch from "@/components/atoms/Switch";

const TutorialGuide = ({ options, firstPage, secondPage }) => {
    const [selectedOption, setSelectedOption] = useState(options[0].value);

    return (
        <div className="flex flex-col items-start">
            <Switch
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
