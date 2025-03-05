import Button from "@/components/atoms/Button";
import TextHighlight from "@/components/atoms/TextHighlight";
import Image from "next/image";
import React from "react";
import {landingConfig} from "@/config";
import WaitlistForm from "@/components/molecules/WaitlistForm";
import MadeWith from "@/components/atoms/MadeWith";

export default function WaitlistPage() {
    return (
        <div className="flex flex-col h-screen items-center max-w-prose text-center gap-2 pb-10">
            <div className="flex items-start gap-2 absolute top-3 left-3">
                <Image src={"/logo.png"} alt={"runway"} width={22} height={22} className="block dark:hidden"/>
                <Image src={"/logo-white.png"} alt={"runway"} width={22} height={22} className="hidden dark:block"/>
                <h1 className="text-xl font-bold">Runway</h1>
            </div>
            <div className="flex flex-col gap-2 items-center mt-36">
                <MadeWith />
                <TextHighlight
                    text={landingConfig.hero.textHighlight.text}
                    highlight={landingConfig.hero.textHighlight.highlight}
                    // fromGradient="primary"
                    // toGradient="purple"
                    className={`text-${landingConfig.hero.textPosition} mt-6`}
                />
                <p className="text-lg opacity-60 font-semibold max-w-[50ch] mt-4">
                    A fully-loaded NextJS boilerplate to build your SaaS, AI tool, or web app and start monetizing in days, not weeks.
                </p>
            </div>
            <div className="flex flex-col gap-4 mt-20 max-w-80 w-80">
                <WaitlistForm />
                <Button href="/docs" variant="soft" color="green">
                    Docs
                </Button>
            </div>


            <div className="absolute bottom-2 flex items-center gap-2">
                <p className="text-sm opacity-60 font-semibold">
                    Coming soon!
                </p>
            </div>
        </div>
    );
}