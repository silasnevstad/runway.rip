"use client";

import React from "react";

import Accordion from "@/components/molecules/Accordion";
import { faqConfig, landingConfig } from "@/config";

export default function FAQ({
    title = landingConfig.faq.title,
    subtitle = landingConfig.faq.subtitle,
}) {
    return (
        <section
            id="faq"
            className="flex flex-col items-center w-full sm:w-5/6 lg:w-5/6 max-w-7xl px-6 sm:px-4"
        >
            <div
                className="flex sm:flex-row flex-col justify-between gap-10 mb-10 max-sm:px-6"
            >
                <div className="flex flex-col w-full gap-2">
                    {title && <h3 className="text-3xl lg:text-4xl font-semibold text-left max-w-[20ch]">{title}</h3>}
                    {subtitle && <p className="text-md opacity-60 font-semibold">{subtitle}</p>}
                </div>
                <div className="flex flex-col w-full max-sm:w-full">
                    <Accordion items={faqConfig} dropdownProps={{ iconType: "plus-minus", className: "text-lg" }} />
                </div>
            </div>
        </section>
    );
}