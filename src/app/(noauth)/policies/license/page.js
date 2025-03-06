import TextLink from "@/components/atoms/TextLink";
import {getSEOTags} from "@/libs/seo";

export const metadata = getSEOTags({
    title: "License Agreement | Runway",
    canonicalUrlRelative: "/policies/license",
});

export default function LicenseAgreement() {
    return (
        <div className="flex flex-col items-center w-full gap-8 p-8">
            {/* Back Button */}
            <TextLink href="/policies" className="absolute top-4 left-4 text-sm text-gray-700 dark:text-gray-300" fade>
                &larr; Back to Policies
            </TextLink>

            <div className="w-full max-w-xl mt-2">
                {/* Title */}
                <h1 className="mt-4 text-3xl font-semibold text-gray-900 dark:text-gray-100">
                    License Agreement
                </h1>

                {/* TL;DR Section */}
                <section className="mt-6">
                    <h2 className="text-sm font-semibold text-gray-600 dark:text-gray-500">
                        TL;DR;
                    </h2>
                    <p className="mt-2 text-base text-gray-900 dark:text-gray-400">
                        Personal License: Build unlimited projects as an individual. <br />
                        Team License: Build unlimited projects as a team.
                    </p>
                </section>

                <section className="mt-6">
                    <p className="text-base text-gray-900 dark:text-gray-400">
                        This License Agreement ("Agreement") is a legal agreement between you, the user ("Licensee") and Runway for Next.js ("Licensor"), represented by Silas Nevstad, for the use of the Runway for Next.js boilerplate ("Product") available at <a href="/" className="text-primary-500 hover:underline">https://runway.rip</a> ("Website"). By downloading, accessing, or using the Product, Licensee agrees to be bound by the terms and conditions of this Agreement.
                    </p>
                </section>

                {/* 1. Grant of License */}
                <section className="mt-6">
                    <h2 className="text-sm font-semibold text-gray-600 dark:text-gray-500">
                        1. Grant of License
                    </h2>
                    <h3 className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-400">
                        1.1 Personal License:
                    </h3>
                    <p className="text-base text-gray-900 dark:text-gray-400">
                        Subject to the terms of this Agreement, upon purchase, you are granted a non‑exclusive, non‑transferable, and non‑sublicensable Personal License to use Runway for Next.js to create unlimited projects for personal or commercial use.
                    </p>
                    <h3 className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-400">
                        1.2 Team License:
                    </h3>
                    <p className="text-base text-gray-900 dark:text-gray-400">
                        If applicable, a Team License permits multiple members within a single organization to use the Product for creating unlimited projects and to share the code internally.
                    </p>
                </section>

                {/* 2. Restrictions */}
                <section className="mt-6">
                    <h2 className="text-sm font-semibold text-gray-600 dark:text-gray-500">
                        2. Restrictions
                    </h2>
                    <p className="mt-2 text-base text-gray-900 dark:text-gray-400">
                        You shall not:
                        <br />– Resell or redistribute the Runway for Next.js boilerplate as a standalone product.
                        <br />– Remove, alter, or obscure any copyright, trademark, or other proprietary notices.
                        <br />– Use the Product in violation of any applicable laws or third‑party rights.
                        <br />– Sub-license, rent, lease, or transfer the Product or any rights granted herein.
                    </p>
                </section>

                {/* 3. Ownership and Intellectual Property */}
                <section className="mt-6">
                    <h2 className="text-sm font-semibold text-gray-600 dark:text-gray-500">
                        3. Ownership and Intellectual Property
                    </h2>
                    <p className="mt-2 text-base text-gray-900 dark:text-gray-400">
                        Runway for Next.js retains all ownership and intellectual property rights in and to the Product. This Agreement does not transfer any ownership rights to you.
                    </p>
                </section>

                {/* 4. Refunds */}
                <section className="mt-6">
                    <h2 className="text-sm font-semibold text-gray-600 dark:text-gray-500">
                        4. Refunds
                    </h2>
                    <p className="mt-2 text-base text-gray-900 dark:text-gray-400">
                        Due to the nature of digital products, all sales of Runway for Next.js are final. No refunds or exchanges will be provided once access is granted.
                    </p>
                </section>

                {/* 5. Disclaimer and Limitation of Liability */}
                <section className="mt-6">
                    <h2 className="text-sm font-semibold text-gray-600 dark:text-gray-500">
                        5. Disclaimer and Limitation of Liability
                    </h2>
                    <p className="mt-2 text-base text-gray-900 dark:text-gray-400">
                        THE PRODUCT IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NONINFRINGEMENT.
                    </p>
                    <p className="mt-2 text-base text-gray-900 dark:text-gray-400">
                        TO THE MAXIMUM EXTENT PERMITTED BY LAW, RUNWAY FOR NEXT.JS SHALL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATING TO THE USE OR INABILITY TO USE THE PRODUCT. Our total liability shall not exceed the purchase price of the Product.
                    </p>
                </section>

                {/* 6. Termination */}
                <section className="mt-6">
                    <h2 className="text-sm font-semibold text-gray-600 dark:text-gray-500">
                        6. Termination
                    </h2>
                    <p className="mt-2 text-base text-gray-900 dark:text-gray-400">
                        We reserve the right to terminate your license immediately if you breach any term of this Agreement. Upon termination, you must cease all use of the Product and destroy all copies in your possession.
                    </p>
                </section>

                {/* 7. Governing Law and Dispute Resolution */}
                <section className="mt-6">
                    <h2 className="text-sm font-semibold text-gray-600 dark:text-gray-500">
                        7. Governing Law and Dispute Resolution
                    </h2>
                    <p className="mt-2 text-base text-gray-900 dark:text-gray-400">
                        This Agreement shall be governed by and construed in accordance with the laws of Massachusetts. Any dispute arising out of or in connection with this Agreement shall be subject to the exclusive jurisdiction of the courts located in Massachusetts.
                    </p>
                </section>

                {/* 8. Entire Agreement */}
                <section className="mt-6">
                    <h2 className="text-sm font-semibold text-gray-600 dark:text-gray-500">
                        8. Entire Agreement
                    </h2>
                    <p className="mt-2 text-base text-gray-900 dark:text-gray-400">
                        This Agreement constitutes the entire agreement between you and Runway for Next.js regarding the Product and supersedes all prior or contemporaneous agreements, representations, and understandings.
                    </p>
                </section>

                <p className="mt-8 text-sm text-gray-600 dark:text-gray-500">
                    Last updated: February 18, 2025
                </p>
            </div>
        </div>
    );
}
