import React from "react";
import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import Hero from "@/components/landing/Hero";
import FeaturesCarousel from "@/components/landing/FeaturesCarousel";
import HowItWorks from "@/components/landing/HowItWorks";
import Pricing from "@/components/landing/Pricing";
import FAQ from "@/components/landing/FAQ";
import Why from "@/components/landing/Why";
import appConfig, { landingConfig } from "@/config";

export default function Landing() {
    const { appName } = appConfig;
    const {
        header,
        hero,
        why,
        who,
        how,
        whoAndHow,
        howItWorks,
        features,
        examples,
        pricing,
        faq
    } = landingConfig;

    return (
        <main className="flex items-center flex-col w-full">
            {/* Header */}
            <Header
                navLinks={[
                    { title: "Features", href: "#features" },
                    { title: "Pricing", href: "#pricing" },
                    { title: "FAQ", href: "#faq" },
                ]}
                background={"bg-bg-0 dark:bg-bg-900"}
            />

            <div className="flex items-center flex-col w-full z-10">
                {/* Hero Section */}
                <Hero
                    textHighlight={{
                        text: hero.textHighlight.text,
                        highlight: hero.textHighlight.highlight,
                        color: hero.textHighlight.color,
                        fromGradient: hero.textHighlight.fromGradient,
                        toGradient: hero.textHighlight.toGradient,
                    }}
                    description={hero.description}
                    buttonText={hero.buttonText}
                    buttonSubText={hero.buttonSubText}
                    showPromo={hero.promo.show}
                    promo={hero.promo}
                    showTrustedBy={hero.trustedBy.show}
                    trustedBy={hero.trustedBy}
                    textPosition={hero.textPosition}
                    imageSrc={hero.image.src}
                    imageAlt={hero.image.alt}
                />

                {/* Features Section */}
                <div className={`-mt-30 flex flex-col items-center w-full pb-28 z-10`}>
                    <FeaturesCarousel />
                </div>

                {/* Why Section */}
                <div className={`flex flex-col items-center w-full z-10 bg-bg-100 dark:bg-bg-800 pt-28 pb-28 sm:pb-32`}>
                    {why.show && <Why />}
                </div>

                {/* How It Works Section */}
                <div className={`flex flex-col items-center w-full bg-bg-100 dark:bg-bg-800 pb-30`}>
                    {howItWorks.show && <HowItWorks />}
                </div>

                {/* Pricing Section */}
                <div className={`flex flex-col items-center w-full pb-10 mt-30 z-10`}>
                    {pricing.show && <Pricing />}
                </div>

                {/* FAQ Section */}
                <div className={`flex flex-col items-center w-full pt-20 mt-20 w-3/5 max-xl:w-4/6 max-lg:w-4/5 max-sm:w-10/12`}>
                    {faq.show && <FAQ />}
                </div>
            </div>

            <Footer
                border
            />
        </main>
    );
}
