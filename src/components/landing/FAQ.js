"use client";

import React from "react";

import Accordion from "@/components/molecules/Accordion";
import appConfig, { faqConfig, landingConfig } from "@/config";
import TextLink from "@/components/atoms/TextLink";
import DropdownItem from "@/components/atoms/DropdownItem";

export default function FAQ({
    title = landingConfig.faq.title,
    subtitle = landingConfig.faq.subtitle,
}) {
    return (
        <section
            id="faq"
            className="flex flex-col items-center w-full sm:w-5/6 lg:w-full max-w-7xl px-6 sm:px-4"
        >
            <div
                className="flex sm:flex-row flex-col justify-between gap-10 mb-10 max-sm:px-6 w-full"
            >
                <div className="flex flex-col w-full gap-2">
                    {title && <h3 className="text-3xl lg:text-4xl font-semibold text-left max-w-[30ch]">{title}</h3>}
                    {subtitle && <div className="flex flex-wrap items-center text-md opacity-60 gap-[5px] font-semibold">
                        <p> Have more questions? Reach out to me at </p>
                        <TextLink href="mailto:silas@mail.runway.rip" color="primary" className="underline">
                            email
                        </TextLink>
                        <p>or</p>
                        <TextLink href={appConfig.socialMedia.twitter} color="primary" className="underline">
                            Twitter
                        </TextLink>
                        <span className="-ml-1">.</span>
                    </div>}
                </div>
                <div className="flex flex-col w-full max-sm:w-full">
                    <Accordion items={faqConfig} dropdownProps={{ iconType: "plus-minus", className: "text-[17px]", headerClassName: "text-lg font-medium" }} />
                    <DropdownItem iconType="plus-minus" className="text-[17px]" headerClassName="font-medium text-lg" contentClassName="flex items-center flex-wrap gap-1.5" header="What if I have questions?">
                        If you have any questions, reach out to me at
                        <TextLink href="mailto:silas@mail.runway.rip" color="primary" className="">silas@mail.runway.rip</TextLink>
                        or <TextLink href={appConfig.socialMedia.twitter} color="primary" className="">Twitter</TextLink>
                    </DropdownItem>

                </div>
            </div>
        </section>
    );
}