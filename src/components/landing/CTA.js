import React from "react";

import Button from "@/components/atoms/Button";
import { DeparturesCard } from "@/components/molecules/CustomCards";
import appConfig, { landingConfig } from "@/config";
import WaitlistForm from "@/components/molecules/WaitlistForm";

export default function CTA({
    title = landingConfig.cta.title,
    subtitle = landingConfig.cta.subtitle,
    buttonText = landingConfig.cta.buttonText,
    buttonHref = landingConfig.cta.buttonHref,
}) {
    return (
        <section
            id="cta"
            className="flex flex-col items-center w-full max-sm:px-4"
        >
            {title && (
                <h1 className="max-w-prose text-5xl font-black text-center mb-4 text-gray-800 dark:text-gray-100">
                    {title}
                </h1>
            )}
            {subtitle && (
                <p className="text-xl font-semibold text-start opacity-90 mb-8">
                    {subtitle}
                </p>
            )}

            <DeparturesCard />

            {appConfig.waitlist.enabled ? (
                <WaitlistForm className="mt-10" />
            ) : (
                <Button
                    href={buttonHref}
                    color="yellow"
                    variant="soft"
                    size="lg"
                    scale
                    className="mt-6 px-8 font-semibold"
                >
                    {buttonText}
                </Button>
            )}
        </section>
    );
}