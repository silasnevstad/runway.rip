import React from "react";
import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import Hero from "@/components/landing/Hero";
import FeaturesCarousel from "@/components/landing/FeaturesCarousel";
import Why from "@/components/landing/Why";
import HowItWorks from "@/components/landing/HowItWorks";
import Button from "@/components/atoms/Button";
import FAQ from "@/components/landing/FAQ";
import { DeparturesCard } from "@/components/molecules/CustomCards";
import { getSchemaTags } from "@/libs/seo";
import { landingConfig } from "@/config";
import ImageSection from "@/components/landing/ImageSection";
import {RocketLaunchIcon} from "@heroicons/react/24/solid";
import Pricing from "@/components/landing/Pricing";


export default function Landing({schemaData = {}}) {
    const {
        hero,
        what,
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
                        showTrustedBy={hero.trustedBy.show}
                        trustedBy={hero.trustedBy}
                        textPosition={hero.textPosition}
                        imageSrc={hero.image.src}
                        imageAlt={hero.image.alt}
                    />

                    <div className={`-mt-30 flex flex-col items-center w-full pb-30 z-10`}>
                        <FeaturesCarousel />
                    </div>

                    {why.show && (
                        <div className={`flex flex-col items-center w-full z-10  pt-30 pb-28 sm:pb-32 bg-bg-50 dark:bg-bg-800`}>
                            <Why />
                        </div>
                    )}

                    {howItWorks.show && (
                        <div className={`flex flex-col items-center w-full pb-40 bg-bg-50 dark:bg-bg-800`}>
                            <HowItWorks />
                        </div>
                    )}

                    {/*Pricing Section*/}
                    {pricing.show && (
                        <div className={`flex flex-col items-center w-full pb-10 pt-30 z-10`}>
                            <Pricing />
                        </div>
                    )}

                    {what.show && (
                        <div className={`flex flex-col items-center w-full pt-9 z-10 pb-10`}>
                            <ImageSection
                                image={what.imageSrc}
                                alt={what.imageAlt}
                                title={what.title}
                                subtitle={what.subtitle}
                                description={what.description}
                                position="right"
                            />
                        </div>
                    )}

                    {faq.show && (
                        <div className={`flex flex-col items-center mt-40 mb-30 xl:w-3/5 lg:w-4/6 md:w-4/5 w-10/12`}>
                             <FAQ />
                        </div>
                    )}

                    <div className={`flex flex-col items-center w-full z-10 mt-20 mb-30`}>
                        <h1 className="text-5xl font-black text-start mb-4 text-gray-800 dark:text-gray-100">
                            Get Runway, launch, and go!
                        </h1>
                        <p className="text-xl font-semibold  opacity-90 mb-8">
                            Stop waiting and start building your project today.
                        </p>
                        <DeparturesCard />
                        <Button
                            href="#pricing"
                            color="yellow"
                            variant="soft"
                            className="mt-6 font-semibold"
                        >
                            <RocketLaunchIcon className="w-5 h-5" />
                            Launch
                        </Button>
                    </div>
                </div>

                <Footer
                    border
                />
            </main>
        </>
    );
}
