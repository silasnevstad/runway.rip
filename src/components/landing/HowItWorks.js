"use client";

import React from "react";
import BadgeCarousel from "@/components/molecules/BadgeCarousel";
import { FiGithub } from "react-icons/fi";
import { Cog8ToothIcon, RocketLaunchIcon as RocketLaunchIconOutline } from "@heroicons/react/24/outline";
import { landingConfig } from "@/config";
import Timeline from "@/components/molecules/Timeline";
import TimelineItem from "@/components/atoms/TimelineItem";

export default function HowItWorks() {
    const { howItWorks } = landingConfig;

    return (
        <section
            id="how-it-works"
            className="flex flex-col items-center w-full gap-2"
        >
            <div className="flex flex-col pt-32 gap-5 w-3/5 max-xl:w-4/6 max-lg:w-4/5 max-sm:w-5/6">
                <h3 className="text-4xl font-semibold text-start mb-0 text-gray-800 dark:text-gray-100">
                    {howItWorks.title}
                    <span className="text-base font-mono text-primary-500 opacity-90 font-normal ml-5">
                        {howItWorks.subtitle}
                    </span>
                </h3>

                <BadgeCarousel
                    words={["Supabase", "Stripe", "Next.js", "Tailwind CSS", "Mailgun"]}
                />

                <div className="flex flex-col gap-5 text-left mt-5">
                    {/* 1) Git clone */}
                    <Step
                        Icon={FiGithub}
                        title="Git clone"
                        description="Download the project to your computer."
                    />
                    {/* 2) Customize */}
                    <Step
                        Icon={Cog8ToothIcon}
                        title="Customize"
                        description="Adjust and personalize the project."
                    />
                    {/* 3) Deploy */}
                    <Step
                        Icon={RocketLaunchIconOutline}
                        title="Deploy"
                        description="Share your project with the world."
                    />
                </div>
            </div>
        </section>
    );
}

function Step({ Icon, title, description }) {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex gap-2">
                <Icon className="w-6 h-6" />
                <p className="text-xl font-semibold opacity-90">{title}</p>
            </div>
            <p className="text-md opacity-50 font-normal">{description}</p>
        </div>
    );
}
