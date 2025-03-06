import React from "react";
import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import Hero from "@/components/landing/Hero";
import FeaturesCarousel from "@/components/landing/FeaturesCarousel";
import HowItWorks from "@/components/landing/HowItWorks";
import FAQ from "@/components/landing/FAQ";
import Why from "@/components/landing/Why";
import { landingConfig } from "@/config";
import {DeparturesCard} from "@/components/molecules/CustomCards";
import {getSchemaTags} from "@/libs/seo";

export default function Landing({schemaData = {}}) {
    const {
        hero,
        why,
        howItWorks,
        pricing,
        faq
    } = landingConfig;

    return (
        <>
            {getSchemaTags({})}
            <main className="flex items-center flex-col w-full">
                {/* Header */}
                <Header
                    navLinks={[
                        { title: "Features", href: "#features" },
                        { title: "Pricing", href: "#pricing" },
                        { title: "FAQ", href: "#faq" },
                    ]}
                    background={"bg-bg-0 dark:bg-bg-800"}
                />

                <div className="flex items-center flex-col w-full z-10">
                    {/* Hero Section */}
                    <div className="w-full h-full bg-bg-50 dark:bg-bg-800">
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
                    </div>


                    {/* Features Section */}
                    <div className={`-mt-30 flex flex-col items-center w-full pb-28 z-10 bg-bg-50 dark:bg-bg-800`}>
                        <FeaturesCarousel />
                    </div>

                    {/* Why Section */}
                    <div className={`flex flex-col items-center w-full z-10  pt-28 pb-28 sm:pb-32`}>
                        {why.show && <Why />}
                    </div>

                    {/* How It Works Section */}
                    <div className={`flex flex-col items-center w-full pb-40`}>
                        {howItWorks.show && <HowItWorks />}
                    </div>

                    {/* Pricing Section */}
                    <div className={`flex flex-col items-center w-full pb-10 pt-30 z-10 bg-bg-50 dark:bg-bg-800`}>
                        {pricing.show && <Pricing />}
                    </div>

                    <div className={`flex flex-col items-center w-full pt-9 z-10 pb-10`}>
                        <DeparturesCard />
                    </div>

                    {/* FAQ Section */}
                    <div className={`flex flex-col items-center mt-40 mb-20 xl:w-3/5 lg:w-4/6 md:w-4/5 w-10/12`}>
                        {faq.show && <FAQ />}
                    </div>
                </div>

                <Footer
                    border
                />
            </main>
        </>
    );
}
