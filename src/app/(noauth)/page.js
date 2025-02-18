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
import BackgroundBlur from "@/components/atoms/BackgroundBlur";

export default function Landing() {
    const { appName } = appConfig;
    const {
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
                <div className={`w-full`}>
                    <Hero
                        textPosition={heroSection.textPosition}
                        imageSrc={heroSection.image.src}
                        imageAlt={heroSection.image.alt}
                    />
                </div>

                {/* Features Section */}
                <div className={`-mt-28 flex flex-col items-center w-full pb-28 z-10`}>
                    {features.show && <Features />}
                </div>

                {/*<BackgroundBlur top={250} color={"from-green-600/40 dark:from-green-500/30"}/>*/}

                {/* Why Section */}
                <div className={`flex flex-col items-center w-full z-10 bg-bg-100 dark:bg-bg-800 pt-20 pb-20`}>
                    {why.show && <Why />}
                </div>

                {/* How It Works Section */}
                <div className={`flex flex-col items-center w-full pb-10`}>
                    {howItWorks.show && <HowItWorks />}
                </div>


                {/* Pricing Section */}
                <div className={`flex flex-col items-center w-full pb-10 mt-30 z-10`}>
                    {pricing.show && <Pricing />}
                </div>

                {/*<BackgroundBlur top={600} color={"from-primary-600/40 dark:from-primary-500/30"}/>*/}

                {/* Who and How Section */}
                <div className={`flex flex-col items-center w-full mt-24 pt-20 pb-10 z-10  bg-bg-100 dark:bg-bg-800 gap-20`}>
                    {whoAndHow && <WhoAndHow />}
                    <p  className="text-2xl font-black text-center my-10 max-w-[30ch] flex flex-row gap-2" >
                        Check out the <TextLink href="/docs" className="text-primary-500" grow>docs</TextLink> for more info!
                    </p>
                </div>

                {/* FAQ Section */}
                <div className={`flex flex-col items-center w-full pb-20`}>
                    {faq.show && <FAQ />}
                </div>
            </div>

            <Footer />
        </main>
    );
}
