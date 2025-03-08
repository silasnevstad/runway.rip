"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";
import { GiftIcon } from "@heroicons/react/24/outline";

import Button from "@/components/atoms/Button";
import TextHighlight from "@/components/atoms/TextHighlight";
import MadeWith from "@/components/atoms/MadeWith";
import AvatarsTestimonial from "@/components/organisms/AvatarsTestimonial";
import { getTextColorClass, mergeClasses } from "@/utils/styling";
import { pricingConfig } from "@/config";

const layoutDirection = {
    left: "flex-row",
    center: "flex-col",
    right: "flex-row-reverse",
};

const alignment = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
};

export default function Hero({
    textHighlight = {
        text: "Most engaging hook ever!",
        highlight: "ever!",
        color: "",
        fromGradient: "primary",
        toGradient: "purple",
    },
    description = "Your app description",
    buttonText = "Get started",
    buttonSubText = "",
    showTrustedBy = true,
    trustedBy = {
        text: "Trusted by the best",
        avatars: [
            { src: "/avatar1.png", alt: "Avatar 1"},
            { src: "/avatar2.png", alt: "Avatar 2"},
            { src: "/avatar3.png", alt: "Avatar 3"},
            { src: "/avatar1.png", alt: "Avatar 1"},
        ],
    },
    textPosition = "center", // 'left' | 'center' | 'right'
    imageSrc = "",
    imageAlt = "",
    backgroundGlow = "",
    glowOpacity = 0.5,
    glowSize = "30%",
    glowBlur = 100,
    className = "",
}) {
    const router = useRouter();

    const containerClasses = mergeClasses(
        "relative flex w-full min-h-screen h-full justify-center items-center px-9 sm:px-6 lg:px-8",
        textPosition !== "center" && "max-w-7xl",
        className
    );

    const directionClasses = layoutDirection[textPosition] || layoutDirection.center;
    const alignmentClasses = alignment[textPosition] || alignment.center;

    return (
        <section className={containerClasses}>
            {backgroundGlow && (
                <div
                    className={`absolute inset-0 z-10 pointer-events-none ${getTextColorClass(backgroundGlow)}`}
                    style={{
                        backgroundImage: `radial-gradient(circle, currentColor 0%, transparent ${glowSize})`,
                        filter: `blur(${glowBlur}px)`,
                        opacity: glowOpacity,
                    }}
                />
            )}

            <div className="w-full z-10 -mt-30">
                <div className={`flex gap-10 items-center ${directionClasses}`}>
                    {/* Text Content */}
                    <div className={`w-full flex flex-col gap-4 max-w-3xl ${alignmentClasses}`}>
                        <MadeWith />

                        <TextHighlight
                            className={`mt-6 ${alignmentClasses}`}
                            text={textHighlight.text}
                            highlight={textHighlight.highlight}
                            color={textHighlight.color}
                            fromGradient={textHighlight.fromGradient}
                            toGradient={textHighlight.toGradient}
                        />

                        <p className="text-lg font-semibold max-w-[45ch]">
                            {description}
                        </p>

                        <div className={`flex flex-col gap-3 mt-14 ${alignmentClasses}`}>
                            <Button
                                className="px-12"
                                onClick={() => router.push("#pricing")}
                            >
                                <RocketLaunchIcon className="w-5 h-5" />
                                {buttonText}
                            </Button>
                            {buttonSubText && (
                                <p className="text-sm opacity-60 font-semibold">{buttonSubText}</p>
                            )}
                            {pricingConfig.promo.show && (
                                <p className="flex items-center text-sm font-semibold">
                                    <GiftIcon className="w-5 h-5 mr-1 text-green-500" />
                                    <span className="text-green-500 mr-1">{pricingConfig.promo.price}$</span>
                                    {pricingConfig.promo.text}
                                </p>
                            )}
                        </div>

                        {showTrustedBy && (
                            <div className="mt-10">
                                <AvatarsTestimonial
                                    text={trustedBy.text}
                                    avatars={trustedBy.avatars}
                                />
                            </div>
                        )}
                    </div>

                    {/* Image Section */}
                    <div className="w-full lg:w-1/2 flex justify-center">
                        {imageSrc && (
                            <div className="relative w-full max-w-lg aspect-[16/9]">
                                <Image src={imageSrc} alt={imageAlt} fill />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
