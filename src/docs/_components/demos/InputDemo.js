"use client";
import { PlusCircleIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";
import Input from "@/components/atoms/Input";

export function InputIconDemo() {
    return (
        <div className="flex flex-wrap gap-4 items-center">
            <Input
                label="Left Icon"
                placeholder="Left Icon"
                labelMode="none"
                leftIcon={<PlusCircleIcon className="w-5 h-5" />}
                leftIconOnClick={() => alert("Left icon clicked!")}
                rightIcon={<PaperAirplaneIcon className="w-5 h-5" />}
                rightIconOnClick={() => alert("Right icon clicked!")}
                focus={false}
                shadow
            />
        </div>
    );
}