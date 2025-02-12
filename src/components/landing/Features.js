"use client";

import Features from "@/components/organisms/Features";
import { landingConfig } from "@/config";

export default function FeaturesSection() {
    const { features } = landingConfig;

    return (
        <section
            id="features"
            className="flex flex-col items-center w-full"
        >
            <div className="flex flex-col items-center w-4/5 max-xl:w-4/6 max-lg:w-4/6 max-sm:w-5/6"
                 id="features">
                <h3 className="text-3xl font-semibold text-center mb-0 text-gray-800 dark:text-gray-100">
                    {features.title}
                </h3>
                <h4 className="mt-2 mb-4 text-lg opacity-50 font-normal ml-5 bg-linear-to-r from-bg-800 dark:from-bg-100 from-20% to-bg-900 dark:to-bg-0 to-80% bg-clip-text text-transparent">
                    {features.subtitle}
                </h4>
            </div>
            <Features/>
        </section>
    );
}
