"use client";

import React from "react";
import Image from "next/image";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";
import Button from "@/components/atoms/Button";
import TextHighlight from "@/components/atoms/TextHighlight";
import TrustedBy from "@/components/molecules/TrustedBy";
import { landingConfig } from "@/config";
import MadeWith from "@/components/atoms/MadeWith";
import {GiftIcon} from "@heroicons/react/24/outline";

export default function Hero({
    textPosition = "center",
    imageSrc = "",
    imageAlt = "",
}) {
    const { heroSection } = landingConfig;

    return (
        <section className="relative flex items-center justify-center w-full min-h-screen py-16">
            <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8 -mt-18">
                <div className={
                    `flex flex-col-reverse gap-10  lg:items-center
                    ${textPosition === "right" ? "lg:flex-row-reverse" : textPosition === "center" ? "lg:flex-col-reverse" : "lg:flex-row"}`
                }>
                    {/* Text Content */}
                    <div className={
                        `w-full lg:w-full flex flex-col gap-5 
                        ${textPosition === "center" ? "items-center" : textPosition === "right" ? "items-end" : "items-start"}`
                    }>
                        {/* Made With Logos */}
                        <MadeWith className="-mt-8" />

                        <TextHighlight
                            text={heroSection.textHighlight.text}
                            highlight={heroSection.textHighlight.highlight}
                            effect="gradient"
                            gradientColors={["from-primary-600", "to-purple-500"]}
                            className={`text-${textPosition}`}
                        />

                        <p className={`text-lg opacity-60 font-semibold max-w-[45ch] text-${textPosition}`}>
                            {heroSection.description}
                        </p>

                        <div className={
                            `flex flex-col gap-3 mt-5
                            ${textPosition === "right" ? "items-end" : textPosition === "center" ? "items-center" : "items-start"}`
                        }>
                            <Button className="w-fit" onClick={() => window.location.href = "#pricing"}>
                                <RocketLaunchIcon className="w-5 h-5" />
                                {heroSection.buttonText}
                            </Button>
                            <p className="flex items-center text-sm opacity-100 font-semibold">
                                <GiftIcon className="w-5 h-5 mr-1 text-primary-500" />
                                <span className="text-primary-500 mr-1">100$</span> off for first 1000 users (12 left)
                            </p>
                        </div>

                        {heroSection.trustedBy && (
                            <div className="mt-8">
                                <TrustedBy />
                            </div>
                        )}
                    </div>

                    {/* Right Column (Image or Placeholder) */}
                    <div className="w-full lg:w-1/2 flex justify-center">
                        {/* Replace below with your own image or illustration */}
                        {imageSrc && (
                            <div className="relative w-full max-w-md aspect-[16/9] bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm mb-10 -mt-5">
                                <Image
                                    src={imageSrc}
                                    alt={imageAlt}
                                    fill
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
