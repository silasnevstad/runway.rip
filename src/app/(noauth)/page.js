import Button from "@/components/atoms/Button";
import TextHighlight from "@/components/atoms/TextHighlight";
import TrustedBy from "@/components/molecules/TrustedBy";
import Pricing from "@/components/organisms/Pricing";
import FAQ from "@/components/organisms/FAQ";
import LandingHeader from "@/components/organisms/headers/LandingHeader";
import Footer from "@/components/organisms/footers/Footer";
import { landingConfig } from "@/config";
import Card from "@/components/molecules/Card";
import BadgeCarousel from "@/components/molecules/BadgeCarousel";
import Image from "next/image";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";
import { Cog8ToothIcon, RocketLaunchIcon as RocketLaunchIconOutline } from "@heroicons/react/24/outline";
import { FiGithub } from "react-icons/fi";
import Features from "@/components/organisms/Features";

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
                <div className="flex flex-col justify-center h-svh max-h-[1000px] min-h-96">
                    <div
                        className="flex flex-col gap-5 max-w-[60ch] max-lg:max-w-[60ch] max-sm:max-w-[53ch] text-center place-items-center"
                    >
                        <div className="flex gap-3 items-center">
                            <p className="text-lg max-sm:text-sm font-semibold opacity-60">
                                Made with:
                            </p>
                            <Image src={"/logos/nextjs-white.png"} alt={"nextjs"} width={25} height={25} className="hidden dark:block" />
                            <Image src={"/logos/nextjs.png"} alt={"nextjs"} width={25} height={25} className="block dark:hidden" />
                            <Image src={"/logos/tailwindcss.png"} alt={"tailwindcss"} width={25} height={25} />
                            <Image src={"/logos/supabase.png"} alt={"supabase"} width={25} height={25} />
                            <Image src={"/logos/mailgun.png"} alt={"mailgun"} width={25} height={25} />
                            <Image src={"/logos/stripe.png"} alt={"stripe"} width={25} height={25} className="rounded-lg" />
                        </div>
                        <TextHighlight
                            text="Code less, launch faster."
                            highlight="launch faster."
                            effect="gradient"
                            gradientColors={['from-primary-600', 'to-purple-500']}
                        />
                        <p className="text-lg opacity-60 font-semibold max-w-[50ch]">
                            {heroSection.description}
                        </p>
                        <div className="flex flex-col items-center gap-2 m-5 mt-10">
                            <Button>
                                <RocketLaunchIcon className="w-5 h-5" />
                                Get Runway
                            </Button>
                            <p className="text-sm opacity-40 font-semibold">
                                {heroSection.buttonSubText}
                            </p>
                        </div>
                        {heroSection.trustedBy && <TrustedBy />}
                    </div>
                </div>
                <div className="-mt-24 flex flex-col items-center bg-gradient-to-b from-bg-50 dark:from-bg-900 to-green-100 dark:to-green-900/45 w-full pb-10">
                    {features.show && (
                        <div className="flex flex-col items-center w-4/5 max-xl:w-4/6 max-lg:w-4/6 max-sm:w-5/6"
                             id="features">
                            <h3 className="text-3xl font-semibold text-center mb-0 text-gray-800 dark:text-gray-100">
                                {features.title}
                            </h3>
                            <h4 className="mt-2 mb-4 text-lg opacity-50 font-normal ml-5 bg-gradient-to-r from-bg-800 dark:from-bg-100 from-20% to-bg-900 dark:to-bg-0 to-80% bg-clip-text text-transparent">
                                    {features.subtitle}
                            </h4>
                            <Features/>
                        </div>
                    )}
                </div>
                <div
                    className="flex flex-col items-center bg-gradient-to-b from-green-100 dark:from-green-900/45 to-bg-0 dark:to-bg-900 w-full pb-10">
                    <div className="flex flex-col pt-32 gap-5 w-3/5 max-xl:w-4/6 max-lg:w-4/5 max-sm:w-5/6" id="how-it-works">
                        <h3 className="text-4xl font-semibold text-start mb-0 text-gray-800 dark:text-gray-100">
                            {howItWorks.title}
                            <span
                                className="text-xl opacity-50 font-normal ml-5 bg-gradient-to-r from-bg-800 dark:from-bg-100 from-20% to-bg-900 dark:to-bg-0 to-80% bg-clip-text text-transparent">
                                {howItWorks.subtitle}
                            </span>
                        </h3>
                        <BadgeCarousel
                            words={['Supabase', 'Tailwind CSS', 'Mailgun', 'Stripe', 'Next.js']}
                            shape="pill"
                            fadeRight={true}
                            mode="scroll"
                            scrollSpeed={1}
                        />
                        <div className="flex flex-col gap-5 text-left mt-5">
                            <div className="flex flex-col gap-2 text-left" animate={false}>
                                <div className="flex gap-2">
                                    <FiGithub className="w-6 h-6"/>
                                    <p className="text-xl font-semibold opacity-90">
                                        Git clone
                                    </p>
                                </div>
                                <p className="text-md opacity-50 font-normal">
                                    Download the project to your computer.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 text-left" animate={false}>
                                <div className="flex gap-2">
                                    <Cog8ToothIcon className="w-6 h-6"/>
                                    <p className="text-xl font-semibold opacity-90">
                                        Customize
                                    </p>
                                </div>
                                <p className="text-md opacity-50 font-normal">
                                    Customize the the project and make it your own.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 text-left" animate={false}>
                                <div className="flex gap-2">
                                    <RocketLaunchIconOutline className="w-6 h-6"/>
                                    <p className="text-xl font-semibold opacity-90">
                                        Deploy
                                    </p>
                                </div>
                                <p className="text-md opacity-50 font-normal">
                                    Deploy your project and share it with the world.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {pricing.show && (
                    <div className="flex flex-col items-center bg-gradient-to-b from-bg-0 dark:from-bg-900 to-primary-100 dark:to-primary-900/10 w-full pb-10">
                        <div className="flex flex-col items-center gap-5 pt-20 mt-20 w-4/6 max-xl:w-5/6 max-lg:w-5/6 max-sm:5/6 max-sm:gap-0"
                            id="pricing">
                            <h3 className="text-2xl font-semibold text-center text-primary-500">{pricing.title}</h3>
                            <h2 className="text-5xl font-black max-w-[20ch] text-center mb-14 text-gray-800 dark:text-gray-100">
                                {pricing.subtitle}
                            </h2>
                            <Pricing />
                        </div>
                    </div>
                )}
                {faq &&
                    <div className="flex flex-col items-center bg-gradient-to-b from-primary-100 dark:from-primary-900/10 to-bg-0 dark:to-bg-900 w-full pb-10">
                        <div className="flex flex-col gap-10 pt-20 mt-20 w-3/5 max-xl:w-4/6 max-lg:w-4/5 max-sm:w-10/12">
                            <FAQ />
                        </div>
                    </div>
                }
            </div>
            <Footer />
        </main>
    );
}
