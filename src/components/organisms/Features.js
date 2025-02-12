"use client";

import React, { useState } from "react";
import { MdPayment, MdOutlineVerifiedUser, MdOutlineMail, MdOutlineSpaceDashboard } from "react-icons/md";
import { GoDatabase } from "react-icons/go";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";
import TextLink from "@/components/atoms/TextLink";
import Card from "@/components/molecules/Card";
import Carousel from "@/components/molecules/Carousel";

const featuresData = [
    {
        title: "Auth",
        features: ["Email/password login", "Social auth", "Role-based access control"],
        description: "Implement robust user authentication and authorization using Supabase.",
        icon: MdOutlineVerifiedUser,
        imageSrc: "/logos/supabase.png",
        imageAlt: "Supabase"
    },
    {
        title: "Payments",
        features: ["Securely accept payments", "Manage subscriptions", "Ensure PCI compliance"],
        description: "Securely accept payments and manage subscriptions with Stripe integration.",
        icon: MdPayment,
        imageSrc: "/logos/stripe.png",
        imageAlt: "Stripe"
    },
    {
        title: "Database",
        features: ["SQL database", "Real-time data sync"],
        description: "Harness Supabase’s PostgreSQL DB for real-time data sync.",
        icon: GoDatabase,
        imageSrc: "/logos/supabase.png",
        imageAlt: "Supabase"
    },
    {
        title: "Email",
        features: ["Email verification", "Transactional emails", "Newsletters"],
        description: "Integrate seamless email communication with Mailgun.",
        icon: MdOutlineMail,
        imageSrc: "/logos/mailgun.png",
        imageAlt: "Mailgun"
    },
    {
        title: "SEO",
        features: ["Meta tags", "Sitemaps", "Structured data"],
        description: "Boost your visibility with built-in SEO tools, auto meta tags, etc.",
        icon: PiMagnifyingGlassBold,
        docs: true
    },
    {
        title: "Components",
        features: ["Pre-built components", "Customizable UI", "Responsive design"],
        description: "Use our library of pre-built, customizable components.",
        icon: MdOutlineSpaceDashboard,
        docs: true
    }
];

export default function Features() {
    const [selectedFeature, setSelectedFeature] = useState(0);

    return (
        <section id="features" className="w-full flex flex-col">
            {/* 1) NARROW CONTAINER for icon grid / text */}
            <div className="max-w-5xl w-full mx-auto px-4 py-6 flex flex-col items-center justify-center gap-6">
                {/* Top icon grid */}
                <div className="grid grid-cols-3 sm:grid-cols-6">
                    {featuresData.map((feat, index) => {
                        const isActive = selectedFeature === index;
                        return (
                            <div
                                key={feat.title}
                                className={`cursor-pointer transform transition-transform duration-200 ease-in-out
                  px-2 py-3 rounded-lg
                  ${isActive ? "scale-105 text-primary-500 dark:text-primary-400" : "text-gray-600 scale-100"}
                `}
                                onClick={() => setSelectedFeature(index)}
                            >
                                <div className="flex flex-col items-center gap-2">
                                    <feat.icon className="text-3xl shrink-0" />
                                    <span className="text-xs font-semibold text-center">{feat.title}</span>
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
                    infinite
                    autoPlay={true}
                    showArrows={false}
                    showIndicators={false}
                >
                    {featuresData.map((feat, idx) => (
                        <FeatureCard key={idx} feature={feat} />
                    ))}
                </Carousel>
            </div>
        </section>
    );
}

function FeatureCard({ feature, isActive }) {
    return (
        <Card
            className={`relative flex flex-col items-start text-start mx-auto transition-all
        ${isActive ? "shadow-xl" : "shadow-md opacity-90"}
        w-[280px] sm:w-[440px]
      `}
            hoverEffect="none"
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
                <div className="absolute bottom-3 right-3 flex items-center gap-2 mt-2">
                    <p className="text-gray-600">with</p>
                    <Image
                        src={feature.imageSrc}
                        alt={feature.imageAlt}
                        width={30}
                        height={30}
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
