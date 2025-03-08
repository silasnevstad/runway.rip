import React from "react";

import Header from "@/components/organisms/Header";
import Hero from "@/components/landing/Hero";
import FeaturesCarousel from "@/components/landing/FeaturesCarousel";
import FeaturesGrid from "@/components/landing/FeaturesGrid";
import Why from "@/components/landing/Why";
import WithWithout from "@/components/landing/WithWithout";
import HowItWorks from "@/components/landing/HowItWorks";
import ImageSection from "@/components/landing/ImageSection";
import Pricing from "@/components/landing/Pricing";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/organisms/Footer";
import { getSchemaTags } from "@/libs/seo";
import { landingConfig } from "@/config";

import Button from "@/components/atoms/Button";
import { DeparturesCard } from "@/components/molecules/CustomCards";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";

export default function LandingPage() {
    const {
        header,
        hero,
        features,
        withWithouts,
        what,
        who,
        how,
        why,
        howItWorks,
        pricing,
        faq,
        footer
    } = landingConfig;

    return (
        <>
            {getSchemaTags({})}
            <main className="flex items-center flex-col w-full">
                <Header
                    navLinks={header.navLinks}
                    background={header.background}
                    sticky={header.sticky}
                    showLogo={header.showLogo}
                    showAppName={header.showAppName}
                    ctaButton={header.ctaButton}
                />

                <div className="flex items-center flex-col w-full z-10">
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

                    {features.show && (
                        <div className={`-mt-30 flex flex-col items-center w-full pb-30 z-10`}>
                            {features.type === "grid" ? <FeaturesGrid /> : <FeaturesCarousel />}
                        </div>
                    )}

                    {withWithouts.show && (
                        <div className={`flex flex-col items-center w-full z-10 pt-30 pb-28 sm:pb-32 bg-bg-50 dark:bg-bg-800`}>
                            <WithWithout />
                        </div>
                    )}

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

                    {what.show && (
                        <div className={`flex flex-col items-center w-full pt-9 z-10 pb-10`}>
                            <ImageSection
                                image={what.imageSrc}
                                alt={what.imageAlt}
                                title={what.title}
                                subtitle={what.subtitle}
                                description={what.description}
                                position={what.position}
                            />
                        </div>
                    )}

                    {who.show && (
                        <div className={`flex flex-col items-center w-full pt-9 z-10 pb-10`}>
                            <ImageSection
                                image={who.imageSrc}
                                alt={who.imageAlt}
                                title={who.title}
                                subtitle={who.subtitle}
                                description={who.description}
                                position={who.position}
                            />
                        </div>
                    )}

                    {how.show && (
                        <div className={`flex flex-col items-center w-full pt-9 z-10 pb-10`}>
                            <ImageSection
                                image={how.imageSrc}
                                alt={how.imageAlt}
                                title={how.title}
                                subtitle={how.subtitle}
                                description={how.description}
                                position={how.position}
                            />
                        </div>
                    )}

                    {pricing.show && (
                        <div className={`flex flex-col items-center w-full pb-10 pt-30 z-10`}>
                            <Pricing />
                        </div>
                    )}

                    {faq.show && (
                        <div className={`flex flex-col items-center mt-40 mb-30 xl:w-3/5 lg:w-4/6 md:w-4/5 w-10/12`}>
                             <FAQ
                                title={faq.title}
                                subtitle={faq.subtitle}
                            />
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
                    background={footer.background}
                    border={footer.showBorder}
                    showLogo={footer.showLogo}
                    showAppName={footer.showAppName}
                    showAppDescription={footer.showAppDescription}
                    showCopyright={footer.showCopyright}
                    showMadeWith={footer.showMadeWith}
                    showThemeSwitcher={footer.showThemeSwitcher}
                    showSocials={footer.showSocials}
                    navLinks={footer.navLinks}
                    legalLinks={footer.legalLinks}
                />
            </main>
        </>
    );
}
