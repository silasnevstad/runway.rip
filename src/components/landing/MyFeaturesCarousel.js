"use client";
import React, {useState} from "react";
import { FaCheck } from "react-icons/fa6";
import Image from "next/image";
import Card from "@/components/atoms/Card";
import TextLink from "@/components/atoms/TextLink";
import Carousel from "@/components/molecules/Carousel";
import { landingConfig, featuresConfig } from "@/config";
import {getTextColorClass} from "@/utils/styling";


export default function MyFeaturesCarousel({
    title = "Features",
    subtitle = landingConfig.features.title,
    description = landingConfig.features.subtitle,
    features = featuresConfig,
    autoPlay = true,
    interval = 5000,
    titleColor = "primary",
    cardBorderRadius = "5xl",
    cardBorder = true,
    cardColor = "bg",
    cardVariant = "soft",
    highlightLastFeature = true
}) {
    const [selectedFeature, setSelectedFeature] = useState(0);
    const currentTime = new Date()
    const hours = currentTime.getHours()
    const ampm = hours >= 12 ? 'PM' : 'AM'
    const hours12 = `${hours % 12 || 12}`.padStart(2, '0')
    const minutes = currentTime.getMinutes()

    return (
        <section
            id="features"
            className="flex flex-col items-center w-full"
        >
            <div
                className="flex flex-col items-center w-4/5 max-xl:w-4/6 max-lg:w-4/6 max-sm:w-5/6 max-w-prose"
            >
                <p className="text-lg font-mono text-orange-500 opacity-90 font-normal mb-2">
                    const launchTime = {hours12}:{minutes + 6} {ampm}
                </p>
                {title && (
                    <p className={`text-md font-extrabold  text-center mb-2 ${getTextColorClass(titleColor)}`}>
                        {title}
                    </p>
                )}
                {subtitle && (
                    <p className="max-w-3xl text-4xl font-extrabold text-gray-800 dark:text-gray-100 text-center mb-4">
                        {subtitle}
                    </p>
                )}
                {description && (
                    <p className="max-w-4xl text-base font-normal text-gray-600 dark:text-gray-400 text-center mb-8">
                        {description}
                    </p>
                )}
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-6 max-w-5xl w-full gap-0 mx-auto px-4 py-6 mb-4">
                {features.map((feat, index) => {
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

            <div className="w-full overflow-hidden">
                <Carousel
                    currentIndex={selectedFeature}
                    onChange={(i) => setSelectedFeature(i)}
                    mode="multi"
                    fadeCenter
                    sideOpacity={0.4}
                    autoPlay={autoPlay}
                    interval={interval}
                    showArrows={false}
                    showIndicators={false}
                    margin={20}
                >
                    {featuresConfig.map((feat, idx) => (
                        <FeatureCard
                            key={idx}
                            feature={feat}
                            onClick={() => setSelectedFeature(idx)}
                            isActive={selectedFeature === idx}
                            cardColor={cardColor}
                            cardVariant={cardVariant}
                            cardBorderRadius={cardBorderRadius}
                            cardBorder={cardBorder}
                            highlightLastFeature={highlightLastFeature}
                        />
                    ))}
                </Carousel>
            </div>
        </section>
    );
}

function FeatureCard({
                         key,
                         feature,
                         isActive,
                         cardColor,
                         cardVariant,
                         cardBorderRadius,
                         cardBorder,
                         highlightLastFeature,
                         onClick,
                     }) {
    return (
        <Card
            key={key}
            className={
                `relative flex flex-col items-start text-start transition-all
                ${isActive ? "shadow-xl" : "shadow-md"}
                w-[440px] sm:w-[440px] cursor-pointer
                bg-bg-0 dark:bg-bg-800 border-bg-200 dark:border-gray-800/50
            `}
            color={cardColor}
            variant={cardVariant}
            borderRadius={cardBorderRadius}
            border={cardBorder}
            onClick={onClick}
        >
            <div className="flex items-center gap-2 mb-3">
                {feature.icon && <feature.icon className="text-2xl text-primary-500" />}
                {feature.title && <h3 className="text-xl font-bold">{feature.title}</h3>}
            </div>
            {feature.description && (
                <p className="opacity-70 max-w-prose mb-3">{feature.description}</p>
            )}

            {feature.features && (
                <ul className="mt-2 space-y-2">
                    {feature.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-2">
                            <FaCheck className="text-green-500" />
                            <p className={
                                `flex-1 text-[15px] 
                                ${highlightLastFeature && i === feature.features.length - 1 && "text-green-500 font-semibold"}`
                            }>
                                {f}
                            </p>
                        </li>
                    ))}
                </ul>
            )}

            {feature.imageSrc && (
                <div
                    className="absolute bottom-3 right-3 flex items-center gap-2 mt-2 text-sm"
                    onClick={() => window.open(feature.imageHref, "_blank")}
                >
                    <p className="text-gray-600">with</p>
                    <Image
                        src={feature.imageSrc}
                        alt={feature.imageAlt}
                        width={30}
                        height={30}
                        className={`rounded-lg ${feature.imageClassName}`}
                    />
                    <p className="text-gray-600 underline">{feature.imageAlt}</p>
                </div>
            )}
            {feature.docs && (
                <div className="absolute bottom-3 right-3 flex items-center gap-2 mt-2">
                    <p className="text-gray-600 font-semibold">Check out</p>
                    <TextLink href="/docs" variant="underline" className="font-semibold" color="primary">
                        the docs
                    </TextLink>
                </div>
            )}
        </Card>
    );
}