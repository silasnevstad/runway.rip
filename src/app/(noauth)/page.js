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
import CTA from "@/components/landing/CTA";
import Footer from "@/components/organisms/Footer";
import { getSchemaTags } from "@/libs/seo";
import appConfig, { landingConfig } from "@/config";

// Customize a section with padding and background color
const SectionWrapper = ({ show = true, className = "", children }) => {
    if (!show) return null;
    return <div className={`flex flex-col items-center w-full z-10 ${className}`}>{children}</div>;
};

export default function LandingPage() {
    return (
        <>
            {getSchemaTags({})}
            <main className="flex items-center flex-col w-full">
                <Header />

                <Hero />

                <SectionWrapper show={landingConfig.features.show} className="-mt-30 pb-30">
                    {landingConfig.features.type === "grid" ? <FeaturesGrid /> : <FeaturesCarousel />}
                </SectionWrapper>

                <SectionWrapper show={landingConfig.withWithouts.show} className="pt-30 pb-28 sm:pb-32 bg-bg-50 dark:bg-bg-800">
                    <WithWithout />
                </SectionWrapper>

                <SectionWrapper show={landingConfig.why.show} className="pt-30 pb-28 sm:pb-32 bg-bg-50 dark:bg-bg-800">
                    <Why />
                </SectionWrapper>

                <SectionWrapper show={landingConfig.why.show} className="pb-40 bg-bg-50 dark:bg-bg-800">
                    <HowItWorks />
                </SectionWrapper>

                <SectionWrapper show={landingConfig.what.show} className="py-10">
                    <ImageSection
                        image={landingConfig.what.imageSrc}
                        alt={landingConfig.what.imageAlt}
                        title={landingConfig.what.title}
                        subtitle={landingConfig.what.subtitle}
                        description={landingConfig.what.description}
                        position={landingConfig.what.position}
                    />
                </SectionWrapper>

                <SectionWrapper show={landingConfig.who.show} className="py-10">
                    <ImageSection
                        image={landingConfig.who.imageSrc}
                        alt={landingConfig.who.imageAlt}
                        title={landingConfig.who.title}
                        subtitle={landingConfig.who.subtitle}
                        description={landingConfig.who.description}
                        position={landingConfig.who.position}
                    />
                </SectionWrapper>

                <SectionWrapper show={landingConfig.how.show} className="py-10">
                    <ImageSection
                        image={landingConfig.how.imageSrc}
                        alt={landingConfig.how.imageAlt}
                        title={landingConfig.how.title}
                        subtitle={landingConfig.how.subtitle}
                        description={landingConfig.how.description}
                        position={landingConfig.how.position}
                    />
                </SectionWrapper>

                <SectionWrapper show={landingConfig.pricing.show && appConfig.payment.enabled} className="pb-10 pt-30">
                    <Pricing />
                </SectionWrapper>

                <SectionWrapper show={landingConfig.faq.show} className="mt-40 mb-30">
                    <FAQ />
                </SectionWrapper>

                <SectionWrapper show={landingConfig.cta.show} className="pt-30 pb-28 sm:pb-32">
                    <CTA />
                </SectionWrapper>

                <Footer />
            </main>
        </>
    );
}
