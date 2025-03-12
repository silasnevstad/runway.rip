"use client";

import React from "react";
import { FaCheck } from "react-icons/fa6";

import Card from "@/components/atoms/Card";
import { featuresConfig, landingConfig } from "@/config";
import { getTextColorClass, mergeClasses } from "@/utils/styling";

export default function FeaturesGrid({
    title = landingConfig.features.title,
    subtitle = landingConfig.features.subtitle,
    description = landingConfig.features.description,
    features = featuresConfig,
    titleColor = landingConfig.features.titleColor,
    cardBorderRadius = "lg",
    cardBorder = true,
    cardColor = "bg",
    cardVariant = "soft",
    highlightLastAttribute = landingConfig.features.highlightLastAttribute,
    gridClassName = "",
}) {
    return (
        <section
            id="features"
            className="flex flex-col items-center w-full"
        >
            <div
                className="flex flex-col items-center max-w-prose px-4"
            >
                {title && (
                    <p className={`text-md font-extrabold  text-center mb-2 ${getTextColorClass(titleColor)}`}>
                        {title}
                    </p>
                )}
                {subtitle && (
                    <p className="max-w-3xl text-4xl font-extrabold text-gray-900 dark:text-gray-100 text-center mb-4">
                        {subtitle}
                    </p>
                )}
                {description && (
                    <p className="max-w-4xl text-base font-normal text-gray-800 dark:text-gray-400 text-center mb-14">
                        {description}
                    </p>
                )}
            </div>
            <div className={mergeClasses("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-screen-xl px-4", gridClassName)}>
                {features.map((feature, index) => (
                    <Card
                        key={index}
                        className="flex flex-col items-start text-left justify-start bg-bg-0 dark:bg-bg-800 border-bg-200 dark:border-gray-800/50"
                        padding={24}
                        color={cardColor}
                        variant={cardVariant}
                        borderRadius={cardBorderRadius}
                        border={cardBorder}
                        scale
                        shadow
                    >
                        <feature.icon className="self-center text-6xl text-primary-600 dark:text-primary-500 my-5" />
                        <h3 className="text-lg font-bold">{feature.title}</h3>
                        {feature.description && (
                            <p className="max-w-prose mb-3 text-left text-[15px] opacity-80">{feature.description}</p>
                        )}
                        {feature.attributes && (
                            <ul className="mt-2 space-y-2">
                                {feature.attributes.map((f, i) => (
                                    <li key={i} className="flex items-center gap-2">
                                        <FaCheck className="text-green-500" />
                                        <p className={
                                            `flex-1 text-[15px] 
                                            ${highlightLastAttribute && i === feature.attributes.length - 1 && "text-green-500"}`
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