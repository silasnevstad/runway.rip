"use client";

import React from "react";
import { faqConfig, landingConfig } from "@/config";
import Accordion from "@/components/molecules/Accordion";

export default function FAQ() {
    const { faq } = landingConfig;
    if (!faq) return null;

    return (
        <section
            id="faq"
            className="flex flex-col items-center w-full"
        >
            <div className="flex flex-col gap-10 pt-20 mt-20 w-3/5 max-xl:w-4/6 max-lg:w-4/5 max-sm:w-10/12">
                <div
                    className="flex max-sm:flex-col justify-between gap-10 mb-10"
                    id="faq"
                >
                    <h3 className="text-3xl font-semibold text-left max-w-[20ch]">{faq.title}</h3>
                    <div className="flex flex-col w-10/12 max-sm:w-full">
                        <Accordion items={faqConfig} />
                    </div>
                </div>
            </div>
        </section>
    );
}