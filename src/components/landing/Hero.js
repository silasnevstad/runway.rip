"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { GiftIcon } from "@heroicons/react/24/outline";

import Button from "@/components/atoms/Button";
import TextHighlight from "@/components/atoms/TextHighlight";
import AvatarsTestimonial from "@/components/organisms/AvatarsTestimonial";
import { mergeClasses } from "@/utils/styling";
import appConfig, { landingConfig, pricingConfig } from "@/config";
import BackgroundGlow from "@/components/atoms/BackgroundGlow";
import WaitlistForm from "@/components/molecules/WaitlistForm";

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
        text: landingConfig.hero.textHighlight.text,
        highlight: landingConfig.hero.textHighlight.highlight,
        color: landingConfig.hero.textHighlight.color,
        fromGradient: landingConfig.hero.textHighlight.fromGradient,
        toGradient: landingConfig.hero.textHighlight.toGradient,
    },
    description = landingConfig.hero.description,
    buttonText = landingConfig.hero.buttonText,
    buttonHref = landingConfig.hero.buttonHref,
    buttonSubText = landingConfig.hero.buttonSubText,
    showTrustedBy = landingConfig.hero.trustedBy.show,
    trustedByText =  landingConfig.hero.trustedBy.text,
    textPosition = landingConfig.hero.textPosition, // 'left' | 'center' | 'right'
    imageSrc = landingConfig.hero.image.src,
    imageAlt = landingConfig.hero.image.alt,
    backgroundGlowColor = landingConfig.hero.backgroundGlowColor,
    backgroundGlowPosition = landingConfig.hero.backgroundGlowPosition,
    backgroundGlowOpacity = landingConfig.hero.backgroundGlowOpacity,
    backgroundGlowSize = landingConfig.hero.backgroundGlowSize,
    backgroundGlowBlur = landingConfig.hero.backgroundGlowBlur,
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
        <section id="hero" className={containerClasses}>
            {backgroundGlowColor && (
                <BackgroundGlow
                    color={backgroundGlowColor}
                    opacity={backgroundGlowOpacity}
                    size={backgroundGlowSize}
                    blur={backgroundGlowBlur}
                    position={backgroundGlowPosition}
                />
            )}

            <div className="w-full z-10 -mt-30">
                <div className={`flex gap-10 items-center ${directionClasses}`}>
                    {/* Text Content */}
                    <div className={`w-full flex flex-col gap-4 max-w-4xl ${alignmentClasses}`}>
                        {/*<MadeWith />*/}

                        <TextHighlight
                            className={`mt-6 ${alignmentClasses}`}
                            text={textHighlight.text}
                            highlight={textHighlight.highlight}
                            color={textHighlight.color}
                            fromGradient={textHighlight.fromGradient}
                            toGradient={textHighlight.toGradient}
                        />

                        <p className="text-lg lg:text-xl mt-2 font-semibold max-w-[45ch]">
                            {description}
                        </p>


                        <div className={`flex flex-col gap-3 mt-14 ${alignmentClasses}`}>
                            {appConfig.waitlist.enabled ? (
                                <WaitlistForm />
                            ) : (
                                <>
                                    {buttonText && (
                                        <Button
                                            className="px-12"
                                            href={buttonHref}
                                        >
                                            {buttonText}
                                        </Button>
                                    )}
                                    {buttonSubText && (
                                        <p className="text-sm opacity-60 font-semibold">{buttonSubText}</p>
                                    )}
                                    {pricingConfig.promo.show && (
                                        <p className="flex items-center text-sm font-semibold">
                                            <GiftIcon className="w-5 h-5 mr-1 text-green-500" />
                                            <span className="text-green-500 mr-1">{appConfig.payment.promo.price}$</span>
                                            {pricingConfig.promo.text}
                                        </p>
                                    )}
                                </>
                            )}
                        </div>

                        {showTrustedBy && (
                            <div className="mt-10">
                                <AvatarsTestimonial
                                    text={trustedByText}
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
