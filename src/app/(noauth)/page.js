import React from "react";
import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
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
                brand={{
                    logoSrc: header.logo ? "/logo.png" : "",
                    logoAlt: "Runway Logo",
                    appName: appName,
                    appHref: "/",
                }}
                navLinks={[
                    { label: "Features", href: "#features" },
                    { label: "Pricing", href: "#pricing" },
                    { label: "FAQ", href: "#faq" },
                ]}
                background={header.background}
                sticky={header.sticky}
            />

            <div className="flex items-center flex-col w-full z-10">
                {/* Hero Section */}
                <Hero
                    textPosition={hero.textPosition}
                    imageSrc={hero.image.src}
                    imageAlt={hero.image.alt}
                />

                {/* Features Section */}
                <div className={`-mt-30 flex flex-col items-center w-full pb-28 z-10`}>
                    {features.show && <Features />}
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
                <div className={`flex flex-col items-center w-full pt-10 pb-20`}>
                    {faq.show && <FAQ />}
                </div>
            </div>

            <Footer />
        </main>
    );
}
