'use client'

import Checkbox from "@/components/atoms/Checkbox";
import {useState} from "react";

const ClientSideCheckbox = (props) => {
    const [isChecked, setIsChecked] = useState(props.checked || false);
    return (
        <Checkbox
            {...props}
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
        />
    );
};

export default ClientSideCheckbox;