import Button from "@/components/atoms/Button";
import TextLink from "@/components/atoms/TextLink";
import TextHighlight from "@/components/atoms/TextHighlight";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";
import {landingConfig} from "@/config";

export default function WaitlistPage() {
    return (
        <div className="flex flex-col h-screen items-center justify-center max-w-prose text-center gap-2 pb-10">
            <div className="flex items-start gap-2 absolute top-3 left-3">
                <Image src={"/logo.png"} alt={"runway"} width={22} height={22} className="block dark:hidden"/>
                <Image src={"/logo-white.png"} alt={"runway"} width={22} height={22} className="hidden dark:block"/>
                <h1 className="text-xl font-bold">Runway</h1>
            </div>
            <div className="flex flex-col gap-1 items-center">
                <TextHighlight
                    text={landingConfig.hero.textHighlight.text}
                    highlight={landingConfig.hero.textHighlight.highlight}
                    // gradientColors={["primary", "purple"]}
                    className={`text-${landingConfig.hero.textPosition} mt-6`}
                    // highlightClassName={`from-primary-600`}
                />
                <div className="flex gap-3 items-center">
                    <p className="font-semibold opacity-50">
                        Made with:
                    </p>
                    <Image src={"/logos/nextjs-white.png"} alt={"nextjs"} width={20} height={20} className="hidden dark:block" />
                    <Image src={"/logos/nextjs.png"} alt={"nextjs"} width={20} height={20} className="block dark:hidden" />
                    <Image src={"/logos/tailwindcss.png"} alt={"tailwindcss"} width={20} height={20}/>
                    <Image src={"/logos/supabase.png"} alt={"supabase"} width={20} height={20}/>
                    <Image src={"/logos/mailgun.png"} alt={"mailgun"} width={20} height={20}/>
                    <Image src={"/logos/stripe.png"} alt={"stripe"} width={20} height={20} className="rounded-md"/>
                </div>
                <p className="text-lg opacity-60 font-semibold max-w-[50ch] mt-4">
                    A fully-loaded NextJS boilerplate to build your SaaS, AI tool, or web app and start monetizing in days, not weeks.
                </p>
            </div>
            <div className="flex items-center max-sm:flex-col gap-2 mt-10">
                <Button variant="soft" disabled>
                    Coming soon!
                </Button>
                <Button href="/docs" variant="soft" className="bg-green-500 hover:bg-green-600">
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