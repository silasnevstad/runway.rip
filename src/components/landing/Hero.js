"use client";

import React from "react";
import Image from "next/image";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";
import Button from "@/components/atoms/Button";
import TextHighlight from "@/components/atoms/TextHighlight";
import { landingConfig } from "@/config";
import MadeWith from "@/components/atoms/MadeWith";
import { GiftIcon } from "@heroicons/react/24/outline";
import AvatarsTestimonial from "@/components/organisms/testimonials/Avatars";

export default function Hero({
    textPosition = "center",
    imageSrc = "",
    imageAlt = "",
    backgroundGlow = "",
    glowOpacity = .5,
    glowSize = "30%",
    glowBlur = 100
}) {
    const { hero } = landingConfig;

    return (
        <section
            className={
            `relative flex w-full min-h-screen h-full justify-center
            ${textPosition !== "center" && "max-w-7xl"}
            py-16 px-9 sm:px-6 lg:px-8`
        }>
            {backgroundGlow && (
                <div
                    className={`absolute inset-0 -z-10 pointer-events-none text-${backgroundGlow}-500`}
                    style={{
                        backgroundImage: `radial-gradient(circle, currentColor 0%, transparent ${glowSize})`,
                        filter: `blur(${glowBlur}px)`,
                        opacity: glowOpacity,
                    }}
                />
            )}

            <div className="w-full z-10 mt-10">
                <div className={
                    `flex gap-10 items-center
                    ${textPosition === "right" ? "flex-row-reverse" : textPosition === "center" ? "flex-col" : "flex-row"}`
                }>
                    {/* Text Content */}
                    <div className={
                        `w-full flex flex-col gap-4 max-w-3xl
                        ${textPosition === "center" ? "items-center" : textPosition === "right" ? "items-end" : "items-start"}`
                    }>
                        {/* Made With Logos */}
                        <MadeWith />

                        <TextHighlight
                            className={`text-${textPosition} mt-6`}
                            text={hero.textHighlight.text}
                            highlight={hero.textHighlight.highlight}
                            fromGradient={hero.textHighlight.fromGradient}
                            toGradient={hero.textHighlight.toGradient}
                        />

                        <p className={`text-lg opacity-60 font-semibold max-w-[45ch] text-${textPosition}`}>
                            {hero.description}
                        </p>

                        <div className={
                            `flex flex-col gap-3 mt-14
                            ${textPosition === "right" ? "items-end" : textPosition === "center" ? "items-center" : "items-start"}`
                        }>
                            <Button className="px-12" onClick={() => window.location.href = "#pricing"}>
                                <RocketLaunchIcon className="w-5 h-5" />
                                {hero.buttonText}
                            </Button>
                            {hero.buttonSubText && (
                                <p className="text-sm opacity-60 font-semibold">{hero.buttonSubText}</p>
                            )}
                            {hero.promo.show && (
                                <p className="flex items-center text-sm opacity-100 font-semibold">
                                    <GiftIcon className="w-5 h-5 mr-1 text-green-500" />
                                    <span className="text-green-500 mr-1">{hero.promo.price}$</span> {hero.promo.text}
                                </p>
                            )}
                        </div>

                        {hero.trustedBy.show && (
                            <div className="mt-10">
                                <AvatarsTestimonial
                                    text={hero.trustedBy.text}
                                    avatars={hero.trustedBy.avatars}
                                />
                            </div>
                        )}
                    </div>

                    {/* Right Column (Image or Placeholder) */}
                    <div className="w-full lg:w-1/2 flex justify-center">
                        {imageSrc && (
                            <div className="relative w-full h-full max-w-lg aspect-[16/9]">
                                <Image src={imageSrc} alt={imageAlt} fill />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
