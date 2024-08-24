'use client'

import React, { useState } from 'react';
import { MdPayment, MdOutlineVerifiedUser, MdOutlineLock, MdOutlineMail, MdOutlineSpaceDashboard } from "react-icons/md";
import { GoDatabase } from "react-icons/go";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { FaCheck } from "react-icons/fa";
import Badge from "@/components/atoms/Badge";
import Image from "next/image";
import Card from "@/components/molecules/Card";
import {TextLink} from "@/components/atoms/Buttons";

const Features = () => {
    const [selectedFeature, setSelectedFeature] = useState(0);

    const features = [
        {
            title: 'Payments',
            features: [
                'Securely accept payments',
                'Manage subscriptions',
                'Ensure PCI compliance'
            ],
            description: 'Securely accept payments and manage subscriptions with Stripe integration. Handle transactions effortlessly while ensuring PCI compliance, allowing you to focus on growing your business.',
            icon: MdPayment,
            imageSrc: "/logos/stripe.png",
            imageAlt: "Stripe",
        },
        {
            title: 'Authentication',
            features: [
                'Email/password login',
                'Social auth',
                'Role-based access control'
            ],
            description: 'Implement robust user authentication and authorization using Supabase. Secure your app with features like email/password login, social auth, and role-based access control, all backed by industry-standard security practices.',
            icon: MdOutlineVerifiedUser,
            imageSrc: "/logos/supabase.png",
            imageAlt: "Supabase",
        },
        {
            title: 'Database',
            features: [
                'SQL database',
                'Real-time data sync',
            ],
            description: 'Harness the power of Supabase\'s PostgreSQL database for your application. Enjoy real-time data sync, powerful querying, and automatic API generation. Scale your database with ease and utilize advanced features as needed.',
            icon: GoDatabase,
            imageSrc: "/logos/supabase.png",
            imageAlt: "Supabase",
        },
        {
            title: 'Email',
            features: [
                'Email verification',
                'Transactional emails',
                'Newsletters',
            ],
            description: 'Integrate seamless email communication with Mailgun. Send transactional emails and newsletters with high deliverability. Benefit from email validation, tracking, and analytics to keep your users engaged and informed.',
            icon: MdOutlineMail,
            imageSrc: "/logos/mailgun.png",
            imageAlt: "Mailgun",
        },
        {
            title: 'SEO',
            features: [
                'Meta tags',
                'Sitemaps',
                'Structured data',
            ],
            description: 'Boost your online visibility with built-in SEO tools. Automatically generate meta tags, sitemaps, and structured data. Benefit from server-side rendering for improved search engine performance and easy management of SEO essentials.',
            icon: PiMagnifyingGlassBold,
            docs: true,
        },
        {
            title: 'Components',
            description: 'Accelerate development with our library of pre-built, customizable components. From basic UI elements to complex widgets, our component system offers flexibility and consistency, complete with responsive layouts and accessibility features.',
            icon: MdOutlineSpaceDashboard,
            docs: true,
        }
    ];

    return (
        <div className="flex flex-col items-center gap-10 w-4/5 max-xl:w-4/6 max-lg:w-4/6 max-sm:w-5/6" id="features">
            <div className="grid grid-cols-3 gap-4 sm:grid-cols-6">
                {features.map((feature, index) => (
                    <Badge
                        key={index}
                        className="w-24 h-24 flex flex-col justify-center items-center cursor-pointer"
                        onClick={() => setSelectedFeature(index)}
                        shape="square"
                        color={selectedFeature === index ? 'primary' : ''}
                    >
                        <div className="flex flex-col items-center gap-2 cursor-pointer">
                            <feature.icon className="text-3xl"/>
                            <span className="text-xs font-semibold">{feature.title}</span>
                        </div>
                    </Badge>
                ))}
            </div>
            <Card className="relative flex flex-col items-center text-center bg-transparent" animate={false} hoverEffect="none">
                <h3 className="text-xl font-bold mb-2">{features[selectedFeature].title}</h3>
                {features[selectedFeature].description && <p className="text-gray-600 max-w-prose">{features[selectedFeature].description}</p>}
                {features[selectedFeature].features && (
                    <ul className="text-left mt-4">
                        {features[selectedFeature].features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-2">
                                <FaCheck className="text-green-500"/>
                                <p className="text-gray-600">{feature}</p>
                            </li>
                        ))}
                    </ul>
                )}
                {features[selectedFeature].imageSrc &&
                    <div className="absolute bottom-3 right-3 flex items-center gap-2 mt-10">
                        <p className="text-gray-600">with</p>
                        <Image
                            src={features[selectedFeature].imageSrc}
                            alt={features[selectedFeature].imageAlt}
                            width={30}
                            height={30}
                            className="rounded-lg"
                        />
                        <p className="text-gray-600">{features[selectedFeature].imageAlt}</p>
                    </div>
                }
                {features[selectedFeature].docs &&
                    <div className="flex items-center gap-1 mt-4">
                        <p className="text-gray-600 font-semibold">Check out</p>
                        <TextLink href="/docs" variant="underline" className="text-primary-500 font-semibold">the docs</TextLink>
                    </div>
                }
            </Card>
        </div>
    )
}

export default Features;