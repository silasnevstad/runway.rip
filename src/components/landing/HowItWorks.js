"use client";

import React from "react";
import { Cog8ToothIcon, RocketLaunchIcon as RocketLaunchIconOutline } from "@heroicons/react/24/outline";
import { LuGithub } from "react-icons/lu";
import { landingConfig } from "@/config";
import Badge from "@/components/atoms/Badge";
import { StandoutCard } from "@/components/molecules/CustomCards";

export default function HowItWorks() {
    const { howItWorks } = landingConfig;

    return (
        <section
            id="how-it-works"
            className="flex flex-col items-center w-full gap-2"
        >
            <div className="flex flex-col gap-5">
                <div className="flex flex-col items-center gap-2">
                    <h3 className="text-4xl font-semibold text-start mb-0 text-gray-800 dark:text-gray-100">
                        {howItWorks.title}
                    </h3>
                    <p className="text-base font-mono text-primary-500 opacity-90">
                        {howItWorks.subtitle}
                    </p>
                </div>

                <StandoutCard innerClassName="flex flex-col md:flex-col gap-10 text-left shadow-md">
                    {/* 1) Git clone */}
                    <Step
                        number={1}
                        Icon={LuGithub}
                        title="Git clone"
                        description="Download the project to your computer."
                        duration="<1"
                    />
                    {/* 2) Customize */}
                    <Step
                        number={2}
                        Icon={Cog8ToothIcon}
                        title="Customize"
                        description="Adjust and personalize the project."
                        duration="~5"
                    />
                    {/* 3) Deploy */}
                    <Step
                        number={3}
                        Icon={RocketLaunchIconOutline}
                        title="Deploy"
                        description="Share your project with the world."
                        duration="~5"
                    />
                </StandoutCard>
            </div>
        </section>
    );
}

function Step({ number, Icon, title, description, duration, tags }) {
    return (
        <div className="flex flex-row gap-4 items-center group">
            <div className="relative p-3 rounded-2xl group-hover:bg-primary-500/90 z-10">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-7xl font-semibold text-gray-500/10 dark:text-gray-500/5 group-hover:hidden z-0">
                    {number}
                </div>
                <Icon className="w-9 h-9 text-primary-500 dark:group-hover:text-gray-200 group-hover:text-gray-50 z-20" />
            </div>
            <div className="flex flex-col gap-1 items-start">
                <p className="text-xl font-semibold opacity-90">
                    {title}
                    <span className="text-sm font-bold text-orange-500 ml-2">
                        {duration && `${duration} min`}
                    </span>
                </p>
                <div className="flex gap-1 items-start">
                    {description && <p className="text-md opacity-50 font-normal text-center">{description}</p>}
                    {tags && (
                        <div className="flex flex-row gap-2">
                            {tags.map((tag) => (
                                <Badge key={tag.name} color={tag.color} style="solid">
                                    {tag.name}
                                </Badge>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
