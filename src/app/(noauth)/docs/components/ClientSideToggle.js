'use client'

import Toggle from "@/components/atoms/Toggle";
import {useState} from "react";

const ClientSideToggle = (props) => {
    const [isChecked, setIsChecked] = useState(props.checked || false);
    return (
        <Toggle
            {...props}
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
        />
    );
};

export default ClientSideToggle;