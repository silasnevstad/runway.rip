"use client";

import React from "react";
import FAQ from "@/components/organisms/FAQ";
import { landingConfig } from "@/config";

export default function FAQSection() {
    const { faq } = landingConfig;
    if (!faq) return null;

    return (
        <section
            id="faq"
            className="flex flex-col items-center w-full"
        >
            <div className="flex flex-col gap-10 pt-20 mt-20 w-3/5 max-xl:w-4/6 max-lg:w-4/5 max-sm:w-10/12">
                <FAQ />
            </div>
        </section>
    );
}