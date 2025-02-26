"use client";
import React from "react";
import { FaCheck } from "react-icons/fa6";
import Card from "@/components/atoms/Card";
import { featuresConfig, landingConfig } from "@/config";
import { getTextColorClass } from "@/utils/styling";

export default function FeaturesGrid({
    title = "Features",
    subtitle = landingConfig.features.title,
    description = landingConfig.features.subtitle,
    features = featuresConfig,
    titleColor = "primary",
    cardBorderRadius = "lg",
    cardBorder = true,
    cardColor = "bg",
    cardVariant = "soft",
    highlightLastFeature = true,
}) {
    return (
        <section
            id="features"
            className="flex flex-col items-center w-full"
        >
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
                <p className="max-w-4xl text-base font-normal text-gray-600 dark:text-gray-400 text-center mb-14">
                    {description}
                </p>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-screen-xl px-4">
                {features.map((feature, index) => (
                    <Card
                        key={index}
                        className="flex flex-col items-center justify-start bg-bg-0 dark:bg-bg-800 border-bg-200 dark:border-gray-800/50"
                        padding={24}
                        color={cardColor}
                        variant={cardVariant}
                        borderRadius={cardBorderRadius}
                        border={cardBorder}
                        scale
                        shadow
                    >
                        <div className="flex flex-col items-center w-full gap-2 mb-3">
                            <feature.icon className="text-3xl text-primary-500" />
                            <h3 className="text-lg font-bold">{feature.title}</h3>
                        </div>
                        {feature.description && (
                            <p className="max-w-prose mb-3 text-center text-[15px] opacity-80">{feature.description}</p>
                        )}

                        {feature.features && (
                            <ul className="mt-2 space-y-2">
                                {feature.features.map((f, i) => (
                                    <li key={i} className="flex items-center gap-2">
                                        <FaCheck className="text-green-500" />
                                        <p className={
                                            `flex-1 text-[15px] 
                                            ${highlightLastFeature && i === feature.features.length - 1 && "text-green-500"}`
                                        }>
                                            {f}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </Card>
                ))}
            </div>
        </section>
    );
}