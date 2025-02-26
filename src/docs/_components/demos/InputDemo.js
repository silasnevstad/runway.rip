"use client";
import { PlusCircleIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";
import Input from "@/components/atoms/Input";

export function InputIconDemo() {
    return (
        <Input
            label="Left Icon"
            placeholder="Input with buttons"
            labelMode="none"
            leftIcon={<PlusCircleIcon />}
            leftIconOnClick={() => alert("Left icon clicked!")}
            rightIcon={<PaperAirplaneIcon />}
            rightIconOnClick={() => alert("Right icon clicked!")}
            focus={false}
            shadow
        />
    );
}