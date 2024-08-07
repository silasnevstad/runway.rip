import { Button } from "@/components/atoms/Buttons";
import TextHighlight from "@/components/atoms/TextHighlight";
import TrustedBy from "@/components/molecules/TrustedBy";
import Pricing from "@/components/organisms/Pricing";
import FAQ from "@/components/organisms/FAQ";
import Badge from "@/components/atoms/Badge";
import LandingHeader from "@/components/organisms/headers/LandingHeader";
import Footer from "@/components/organisms/footers/Footer";
import Examples from "@/components/organisms/Examples";
import { landingConfig } from "@/config";
import Card from "@/components/molecules/Card";
import BadgeCarousel from "@/components/molecules/BadgeCarousel";

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

    const renderList = (items, isSteps = false) => (
        <div className="flex flex-col gap-12 text-left">
            {items.map((item, index) => (
                <div key={index} className="flex flex-col gap-3 text-left">
                    <div className="flex gap-3">
                        {isSteps && (
                            <Badge variant="secondary" shape="circle">
                                {item.badge}
                            </Badge>
                        )}
                        <p className="text-2xl font-semibold">
                            {item.title}
                        </p>
                    </div>
                    <p className="text-lg opacity-50 font-semibold">
                        {item.description}
                    </p>
                </div>
            ))}
        </div>
    );

    const renderCards = (items) => (
        <div className="grid items-start grid-cols-3 gap-3 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3">
            {items.map((item, index) => (
                <Card
                    key={index}
                    imageSrc={item.imageSrc}
                    imageAlt={item.imageAlt}
                    imagePosition={'top'}
                    textAlign="bottom"
                    hoverEffect="outline"
                >
                    <h3 className={`text-xl font-semibold max-w-prose`}>{item.title}</h3>
                    <p className={`mt-1 text-md opacity-50 font-regular max-w-prose`}>{item.description}</p>
                </Card>
            ))}
        </div>
    );

    return (
        <main className="flex items-center flex-col w-full">
            <LandingHeader background={header.background} sticky={header.sticky} />
            <div className="flex items-center flex-col w-full z-1">
                <div className="flex flex-col justify-center h-screen">
                    <div
                        className="flex flex-col gap-6 max-w-[100ch] max-lg:max-w-[70ch] max-sm:max-w-[50ch] text-center place-items-center -mt-20">
                        <TextHighlight text={heroSection.textHighlight.text} highlight={heroSection.textHighlight.highlight} />
                        <p className="text-4xl max-sm:text-2xl font-semibold bg-gradient-to-r from-primary-500 from-20% to-red-500 to-80% bg-clip-text text-transparent">
                            {heroSection.subText}
                        </p>
                        <p className="text-lg opacity-60 font-semibold max-w-[40ch]">
                            {heroSection.description}
                        </p>
                        <div className="flex flex-col gap-2 m-5">
                            <Button>{heroSection.buttonText}</Button>
                            <p className="text-sm opacity-40">{heroSection.buttonSubText}</p>
                        </div>
                        {heroSection.trustedBy && <TrustedBy />}
                    </div>
                </div>
                <div className="flex flex-col -mt-16 gap-5 w-3/5 max-xl:w-4/6 max-lg:w-4/5 max-sm:w-5/6" id="how-it-works">
                    <h3 className="text-3xl font-semibold text-start mb-0 text-gray-800 dark:text-gray-100">
                        {howItWorks.title}
                        <span className="text-lg opacity-50 font-normal ml-5 bg-gradient-to-r from-bg-800 dark:from-bg-100 from-20% to-bg-900 dark:to-bg-0 to-80% bg-clip-text text-transparent">
                            {howItWorks.subtitle}
                        </span>
                    </h3>
                    <BadgeCarousel
                        words={['React', 'Vue', 'Angular', 'Svelte', 'Next.js']}
                        shape="pill"
                        fadeLeft={true}
                        fadeRight={true}
                        mode="scroll"
                        scrollSpeed={1}
                    />
                    {/*{howItWorks.layout === 'cards' ? renderCards(howItWorks.steps) : renderList(howItWorks.steps, true)}*/}
                </div>
                {features.show && (
                    <div className="flex flex-col gap-10 pt-20 w-4/5 max-xl:w-4/6 max-lg:w-4/6 max-sm:w-5/6" id="features">
                        <h3 className="text-3xl font-semibold text-center mb-5 text-gray-800 dark:text-gray-100">
                            {features.title}
                            <span className="text-lg opacity-50 font-normal ml-5 bg-gradient-to-r from-bg-800 dark:from-bg-100 from-20% to-bg-900 dark:to-bg-0 to-80% bg-clip-text text-transparent">
                                {features.subtitle}
                            </span>
                        </h3>
                        {features.layout === 'cards' ? renderCards(features.features) : renderList(features.features)}
                    </div>
                )}
                {examples.show && (
                    <div className="flex flex-col gap-10 mt-20 pt-20 w-3/5 max-xl:w-4/6 max-lg:w-4/6 max-sm:w-5/6" id="examples">
                        <h3 className="text-3xl font-semibold text-center mb-20">{examples.title}</h3>
                        <Examples />
                    </div>
                )}
                {pricing.show && (
                    <div className="flex flex-col gap-10 pt-20 mt-20 w-4/6 max-xl:w-5/6 max-lg:w-5/6 max-sm:5/6 max-sm:gap-0" id="pricing">
                        <h3 className="text-3xl font-semibold text-center mb-10">{pricing.title}</h3>
                        <Pricing />
                    </div>
                )}
                {faq && <FAQ />}
            </div>
            <Footer />
        </main>
    );
}
