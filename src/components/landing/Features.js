"use client";

import React, {useState} from "react";
import {FaCheck} from "react-icons/fa";
import Image from "next/image";
import Card from "@/components/atoms/Card";
import TextLink from "@/components/atoms/TextLink";
import Carousel from "@/components/molecules/Carousel";
import { landingConfig, featuresConfig } from "@/config";

export default function Features() {
    const { features } = landingConfig;
    const [selectedFeature, setSelectedFeature] = useState(0);
    //  get device time in HH:MM + 10 minutes from now for launch time
    const currentTime = new Date() // get current date
    const hours = currentTime.getHours() // get current hours
    const ampm = hours >= 12 ? 'PM' : 'AM' // set AM/PM
    // 12 hours format (21 = 09, 22 = 10, 23 = 11, 24 = 12) so % 12 and also add 0 if less than 10
    const hours12 = `${hours % 12 || 12}`.padStart(2, '0')
    const minutes = currentTime.getMinutes() // get current minutes

    return (
        <section
            id="features"
            className="flex flex-col items-center w-full"
        >
            <div className="flex flex-col items-center w-4/5 max-xl:w-4/6 max-lg:w-4/6 max-sm:w-5/6"
                 id="features">
                <p className="text-lg font-mono text-orange-500 opacity-90 font-normal ml-5">
                    const launchTime = {hours12}:{minutes + 10} {ampm}
                </p>
                <h3 className="text-2xl sm:text-3xl font-semibold text-center mb-0 text-gray-800 dark:text-gray-100">
                    {features.title}
                </h3>
                <h4 className="mt-2 mb-4 text-lg opacity-50 font-normal ml-5 text-center">
                    {features.subtitle}
                </h4>
            </div>
            {/* 1) NARROW CONTAINER for icon grid / text */}
            <div className="max-w-5xl w-full mx-auto px-4 py-6 flex flex-col items-center justify-center gap-6">
                {/* Top icon grid */}
                <div className="grid grid-cols-3 sm:grid-cols-6">
                    {featuresConfig.map((feat, index) => {
                        const isActive = selectedFeature === index;
                        return (
                            <div
                                key={feat.title}
                                className={`cursor-pointer transform transition-transform duration-200 ease-in-out px-2 py-3 rounded-lg
                                     ${isActive ? "scale-105 text-primary-500 dark:text-primary-400" : "text-gray-600 scale-100"}`}
                                onClick={() => setSelectedFeature(index)}
                            >
                                <div className="flex flex-col items-center gap-2">
                                    <feat.icon className="text-3xl shrink-0" />
                                    <span className="text-sm font-semibold text-center">{feat.title}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="w-full">
                <Carousel
                    currentIndex={selectedFeature}
                    onChange={(i) => setSelectedFeature(i)}
                    mode="multi"
                    fadeCenter
                    autoPlay={true}
                    interval={5000}
                    showArrows={false}
                    showIndicators={false}
                >
                    {featuresConfig.map((feat, idx) => (
                        <FeatureCard
                            key={idx}
                            feature={feat}
                            onClick={() => setSelectedFeature(idx)}
                            isActive={selectedFeature === idx}
                        />
                    ))}
                </Carousel>
            </div>
        </section>
    );
}

function FeatureCard({ key, feature, isActive, onClick }) {
    return (
        <Card
            key={key}
            className={
                `relative flex flex-col items-start text-start transition-all
                ${isActive ? "shadow-xl" : "shadow-md opacity-90"}
                w-[440px] sm:w-[440px] cursor-pointer
            `}
            onClick={onClick}
        >
            <div className="flex items-center gap-2 mb-3">
                <feature.icon className="text-2xl text-primary-500" />
                <h3 className="text-xl font-bold">{feature.title}</h3>
            </div>
            {feature.description && (
                <p className="text-gray-600 max-w-prose mb-3">{feature.description}</p>
            )}

            {feature.features && (
                <ul className="mt-2 space-y-2">
                    {feature.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-2">
                            <FaCheck className="text-green-500" />
                            <p className="text-gray-600">{f}</p>
                        </li>
                    ))}
                </ul>
            )}

            {feature.imageSrc && (
                <div className="absolute bottom-3 right-3 flex items-center gap-2 mt-2 text-sm">
                    <p className="text-gray-600">with</p>
                    <Image
                        src={feature.imageSrc}
                        alt={feature.imageAlt}
                        width={25}
                        height={25}
                        className="rounded-lg"
                    />
                    <p className="text-gray-600">{feature.imageAlt}</p>
                </div>
            )}
            {feature.docs && (
                <div className="absolute bottom-3 right-3 flex items-center gap-2 mt-2">
                    <p className="text-gray-600 font-semibold">Check out</p>
                    <TextLink href="/docs" variant="underline" className="text-primary-500 font-semibold">
                        the docs
                    </TextLink>
                </div>
            )}
        </Card>
    );
}