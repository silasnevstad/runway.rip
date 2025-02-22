"use client";
import { FaPlusCircle, FaPaperPlane } from "react-icons/fa";
import Input from "@/components/atoms/Input";

export function InputIconDemo() {
    return (
        <div className="flex flex-wrap gap-4 items-center">
            <Input
                label="Left Icon"
                placeholder="Left Icon"
                labelMode="none"
                leftIcon={<FaPlusCircle className="w-5 h-5" />}
                leftIconOnClick={() => alert("Left icon clicked!")}
                rightIcon={<FaPaperPlane className="w-5 h-5" />}
                rightIconOnClick={() => alert("Right icon clicked!")}
                focus={false}
                shadow
            />
        </div>
    );
}