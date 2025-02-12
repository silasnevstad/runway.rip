"use client";

import React from "react";
import Image from "next/image";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";
import Button from "@/components/atoms/Button";
import TextHighlight from "@/components/atoms/TextHighlight";
import TrustedBy from "@/components/molecules/TrustedBy";
import { landingConfig } from "@/config"; // if you want

export default function Hero() {
    const { heroSection } = landingConfig;

    return (
        <section className="flex flex-col items-center w-full z-10">
            <div className="flex flex-col justify-center h-svh max-h-[1000px] min-h-96">
                <div className="flex flex-col gap-5 max-w-[60ch] text-center place-items-center">
                    {/* Made with: images */}
                    <div className="flex gap-3 items-center">
                        <p className="text-lg max-sm:text-sm font-semibold opacity-60">
                            Made with:
                        </p>
                        <Image src="/logos/nextjs-white.png" alt="nextjs" width={25} height={25} className="hidden dark:block" />
                        <Image src="/logos/nextjs.png" alt="nextjs" width={25} height={25} className="block dark:hidden" />
                        <Image src="/logos/tailwindcss.png" alt="tailwindcss" width={25} height={25} />
                        <Image src="/logos/supabase.png" alt="supabase" width={25} height={25} />
                        <Image src="/logos/mailgun.png" alt="mailgun" width={25} height={25} />
                        <Image src="/logos/stripe.png" alt="stripe" width={25} height={25} className="rounded-lg" />
                    </div>

                    <TextHighlight
                        text="Code less, launch faster."
                        highlight="launch faster."
                        effect="gradient"
                        gradientColors={["from-primary-600", "to-purple-500"]}
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
        </section>
    );
}
