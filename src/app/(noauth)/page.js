import LandingHeader from "@/components/organisms/headers/LandingHeader";
import Footer from "@/components/organisms/footers/Footer";
import { landingConfig } from "@/config";
import HowItWorksSection from "@/components/landing/HowItWorks";
import FeaturesSection from "@/components/landing/Features";
import Hero from "@/components/landing/Hero";
import Pricing from "@/components/landing/Pricing";
import FAQSection from "@/components/landing/FAQ";

export default function Landing() {
    const {
        header,
        heroSection,
        howItWorks,
        features,
        examples,
        pricing,
        faq
    } = landingConfig;

    return (
        <main className="flex items-center flex-col w-full">
            <LandingHeader background={header.background} sticky={header.sticky} />
            <div className="flex items-center flex-col w-full z-10">
                <Hero />
                <div className="-mt-24 flex flex-col items-center bg-linear-to-b from-bg-50 dark:from-bg-900 to-green-100 dark:to-green-900/45 w-full pb-10">
                    {features.show && <FeaturesSection />}
                </div>
                <div className="flex flex-col items-center bg-linear-to-b from-green-100 dark:from-green-900/45 to-bg-0 dark:to-bg-900 w-full pb-10">
                    {howItWorks.show && <HowItWorksSection />}
                </div>
                <div className="flex flex-col items-center bg-linear-to-b from-bg-0 dark:from-bg-900 to-primary-100 dark:to-primary-900/10 w-full pb-10">
                    {pricing.show && <Pricing />}
                </div>
                <div className="flex flex-col items-center bg-linear-to-b from-primary-100 dark:from-primary-900/10 to-bg-0 dark:to-bg-900 w-full pb-10">
                    {faq && <FAQSection />}
                </div>
            </div>
            <Footer />
        </main>
    );
}
