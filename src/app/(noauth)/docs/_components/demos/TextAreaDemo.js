"use client";
import { useState } from "react";
import TextArea from "@/components/atoms/TextArea";
import {FaX} from "react-icons/fa6";

export function TextAreaDemo() {
    const [value, setValue] = useState("");
    const [numWords, setNumWords] = useState(0);

    const handleChange = (e) => {
        setValue(e.target.value);
        setNumWords(e.target.value.split(" ").filter(Boolean).length);
    }

    const handleClear = () => {
        setValue("");
        setNumWords(0);
    }

    return (
        <div className="flex w-full">
            <TextArea
                id="notes"
                label="Notes"
                placeholder="Leave notes..."
                value={value}
                onChange={handleChange}
                padding={10}
                borderRadius={"xl"}
                bottomRightSlot={
                    <button
                        className="rounded-xl p-2 text-sm bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-600"
                        onClick={handleClear}
                    >
                        <FaX className="w-4 h-4" />
                    </button>
                }
                bottomLeftSlot={
                    <span className="text-xs text-gray-400">
                        {numWords} words
                    </span>
                }
            />
        </div>
    );
}

