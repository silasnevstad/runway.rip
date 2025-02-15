import React from "react";
import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import Pricing from "@/components/landing/Pricing";
import FAQ from "@/components/landing/FAQ";
import Why from "@/components/landing/Why";
import WhoAndHow from "@/components/landing/WhoAndHow";
import TextLink from "@/components/atoms/TextLink";
import appConfig, { landingConfig } from "@/config";

export default function Landing() {
    const { appName } = appConfig;
    const {
        backgrounds,
        header,
        heroSection,
        why,
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
                    logoSrc: header.logo.src,
                    logoAlt: header.logo.alt,
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
                <div className={`w-full ${backgrounds.hero}`}>
                    <Hero
                        textPosition={heroSection.textPosition}
                        imageSrc={heroSection.image.src}
                        imageAlt={heroSection.image.alt}
                    />
                </div>

                {/* Features Section */}
                <div className={`-mt-24 flex flex-col items-center w-full pb-10 ${backgrounds.features}`}>
                    {features.show && <Features />}
                </div>

                {/* Why Section */}
                <div className={`flex flex-col items-center w-full ${backgrounds.howItWorks}`}>
                    {why.show && <Why />}
                </div>

                {/* Who and How Section */}
                <div className={`flex flex-col items-center w-full mt-44 ${backgrounds.whoAndHow}`}>
                    {whoAndHow && <WhoAndHow />}
                </div>

                <div className="">
                    <TextLink href="/docs" className="text-2xl font-black text-center my-15 max-w-[30ch]" grow>
                        Check out the <span className="text-primary-500">docs</span> for more info!
                    </TextLink>
                </div>

                {/* How It Works Section */}
                <div className={`flex flex-col items-center w-full pb-10`}>
                    {howItWorks.show && <HowItWorks />}
                </div>

                {/* Pricing Section */}
                <div className={`flex flex-col items-center w-full pb-10 mt-30 ${backgrounds.pricing}`}>
                    {pricing.show && <Pricing />}
                </div>

                {/* FAQ Section */}
                <div className={`flex flex-col items-center w-full pb-20 ${backgrounds.faq}`}>
                    {faq.show && <FAQ />}
                </div>
            </div>

            <Footer />
        </main>
    );
}
