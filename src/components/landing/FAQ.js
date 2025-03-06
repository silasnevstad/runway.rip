"use client";

import React from "react";
import { faqConfig } from "@/config";
import Accordion from "@/components/molecules/Accordion";

export default function FAQ({
    title = "Frequently Asked Questions",
    subtitle = "Have a question? We have an answer.",
}) {
    return (
        <section
            id="faq"
            className="flex flex-col items-center w-full"
        >
            <div
                className="flex sm:flex-row flex-col justify-between gap-10 mb-10"
            >
                <div className="flex flex-col w-full gap-2">
                    {title && <h3 className="text-3xl font-semibold text-left max-w-[20ch]">{title}</h3>}
                    {/*{subtitle && <p className="text-md opacity-60 font-semibold">{subtitle}</p>}*/}
                </div>
                <div className="flex flex-col w-full max-sm:w-full">
                    <Accordion items={faqConfig} dropdownProps={{ iconType: "plus-minus" }} />
                </div>
            </div>
        </section>
    );
}