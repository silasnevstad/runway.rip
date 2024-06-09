import { Button } from "@/components/atoms/Buttons";
import TextHighlight from "@/components/atoms/TextHighlight";
import TrustedBy from "@/components/molecules/TrustedBy";
import Pricing from "@/components/organisms/Pricing";
import FAQ from "@/components/organisms/FAQ";
import Badge from "@/components/atoms/Badge";
import LandingHeader from "@/components/organisms/headers/LandingHeader";
import Footer from "@/components/organisms/footers/Footer";
import Examples from "@/components/organisms/Examples";

export default function Landing() {
    return (
        <main className="flex items-center flex-col w-full">
            <LandingHeader background={"bg-bg-100"} />
            {/*<Header />*/}
            <div className="flex items-center flex-col p-4 w-full z-1">
                <div className="flex flex-col justify-center h-screen -mb-60">
                    <div
                        className="flex flex-col gap-6 max-w-[70ch] max-lg:max-w-[50ch] max-sm:max-w-[40ch] text-center place-items-center -mt-40">
                        <TextHighlight text={"Launch your ideas with a boost."} highlight={"a boost."} />
                        {/* linear gradient text*/}
                        <p className="text-4xl max-sm:text-2xl font-semibold bg-gradient-to-r from-primary-500 from-20% to-green-500 to-80% bg-clip-text text-transparent">
                            Everything you need to launch your ideas.
                        </p>
                        <p className="text-lg opacity-60 font-semibold max-w-[40ch]">
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            FastStack gives you everything you need to launch your ideas. From design to development, we've
                            got you covered.
                        </p>
                        <div className="flex flex-col gap-2 m-8">
                            <Button>Get Started</Button>
                            <p className="text-sm opacity-40">No credit card required</p>
                        </div>
                        <TrustedBy />
                    </div>
                </div>
                <div className="flex flex-col gap-10 pt-20 w-3/5 max-xl:w-4/6 max-lg:w-4/5 max-sm:5/6" id="how-it-works">
                    <h3 className="text-3xl font-semibold text-center mb-20">How it works</h3>
                    <div className="flex gap-20">
                        <div className="flex flex-col gap-12 text-left">
                            <div className="flex flex-col gap-3 text-left">
                                <div className="flex gap-3">
                                    <Badge variant="secondary" shape="circle">
                                        1
                                    </Badge>
                                    <p className="text-2xl font-semibold">
                                        Git Clone
                                    </p>
                                </div>
                                <p className="text-lg opacity-50 font-semibold">
                                    Download the boilerplate code using git clone.
                                </p>
                            </div>
                            <div className="flex flex-col gap-3 text-left">
                                <div className="flex gap-3">
                                    <Badge variant="secondary" shape="circle">
                                        2
                                    </Badge>
                                    <p className="text-2xl font-semibold">
                                        Code Away
                                    </p>
                                </div>
                                <p className="text-lg opacity-50 font-semibold">
                                    Starting coding your idea with everything you need already setup.
                                </p>
                            </div>
                            <div className="flex flex-col gap-3 text-left">
                                <div className="flex gap-3">
                                    <Badge variant="secondary" shape="circle">
                                        3
                                    </Badge>
                                    <p className="text-2xl font-semibold">
                                        Deploy
                                    </p>
                                </div>
                                <p className="text-lg opacity-50 font-semibold">
                                    Deploy your project with a single command.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-2 text-left">
                                <p className="text-2xl font-semibold">
                                    Git Clone
                                </p>
                                <p className="text-lg opacity-60 font-semibold">
                                    Download the boilerplate code using git clone.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-10 mt-20 pt-20 w-3/5 max-xl:w-4/6 max-lg:w-4/6 max-sm:w-5/6" id="how-it-works">
                    <h3 className="text-3xl font-semibold text-center mb-20">Examples</h3>
                    <Examples />
                </div>
                <div className="flex flex-col gap-10 pt-20 mt-20 w-4/6 max-xl:w-5/6 max-lg:w-5/6 max-sm:5/6 max-sm:gap-0"
                     id="pricing">
                    <h3 className="text-3xl font-semibold text-center mb-10">Pricing</h3>
                    <Pricing/>
                </div>
                <FAQ/>
            </div>
            <Footer />
        </main>
    );
}
