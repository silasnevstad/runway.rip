import TextLink from "@/components/atoms/TextLink";

export default function TermsOfService() {
    return (
        <div className="flex flex-col items-center w-full gap-8 p-8">
            {/* Back Button */}
            <TextLink href="/policies" className="absolute top-4 left-4 text-sm text-gray-700 dark:text-gray-300" fade>
                &larr; Back to Policies
            </TextLink>

            <div className="w-full max-w-xl mt-2">
                {/* Title */}
                <h1 className="mt-4 text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    Terms and Conditions
                </h1>

                <p className="mt-2 text-base text-gray-900 dark:text-gray-400">
                    Thank you for using Runway!
                </p>

                {/* 1. Introduction */}
                <section className="mt-3">
                    <h2 className="text-sm font-semibold text-gray-600 dark:text-gray-500">
                        1. Introduction
                    </h2>
                    <p className="mt-2 text-base text-gray-900 dark:text-gray-400">
                        By using Runway for Next.js (the “Product”), you (“Licensee” or “User”) confirm your acceptance of, and agree to be bound by, these Terms and Conditions (“Agreement”). This Agreement governs your access to and use of the Product, including the associated website where it is sold.
                    </p>
                </section>

                {/* 2. Agreement to Terms */}
                <section className="mt-6">
                    <h2 className="text-sm font-semibold text-gray-600 dark:text-gray-500">
                        2. Agreement to Terms
                    </h2>
                    <p className="mt-2 text-base text-gray-900 dark:text-gray-400">
                        This Agreement takes effect on the date you first access or download the Product. If you do not agree with any part of these terms, you must not use the Product.
                    </p>
                </section>

                {/* 3. License Grant and Restrictions */}
                <section className="mt-6">
                    <h2 className="text-sm font-semibold text-gray-600 dark:text-gray-500">
                        3. License Grant and Restrictions
                    </h2>

                    <h3 className="mt-3 text-sm font-medium text-gray-700 dark:text-gray-400">
                        3.1 License Grant:
                    </h3>
                    <p className="text-base text-gray-900 dark:text-gray-400">
                        Upon purchase, you are granted a non‑exclusive, non‑transferable, and non‑sublicensable license to use Runway for Next.js to build, host, and manage your own websites or applications.
                    </p>

                    <h3 className="mt-3 text-sm font-medium text-gray-700 dark:text-gray-400">
                        3.2 Usage Restrictions:
                    </h3>
                    <p className="text-base text-gray-900 dark:text-gray-400">
                        – You may use the Product to develop an unlimited number of projects for personal or commercial purposes.
                        <br />– You may not, under any circumstances, redistribute, resell, sublicense, lease, or otherwise make the Product available as a standalone code or package to any third party.
                        <br />– You may not modify or remove any proprietary notices contained in the Product.
                    </p>

                    <h3 className="mt-3 text-sm font-medium text-gray-700 dark:text-gray-400">
                        3.3 Termination Rights:
                    </h3>
                    <p className="text-base text-gray-900 dark:text-gray-400">
                        We reserve the right to terminate your license immediately and without notice if you breach any term of this Agreement.
                    </p>
                </section>

                {/* 4. Payment and Refunds */}
                <section className="mt-6">
                    <h2 className="text-sm font-semibold text-gray-600 dark:text-gray-500">
                        4. Payment and Refunds
                    </h2>
                    <p className="mt-2 text-base text-gray-900 dark:text-gray-400">
                        Due to the nature of digital products, all sales of Runway for Next.js are final. No refunds or exchanges will be provided once access is granted.
                    </p>
                </section>

                {/* 5. Disclaimer */}
                <section className="mt-6">
                    <h2 className="text-sm font-semibold text-gray-600 dark:text-gray-500">
                        5. Disclaimer
                    </h2>
                    <p className="mt-2 text-base text-gray-900 dark:text-gray-400">
                        THE PRODUCT IS PROVIDED “AS IS” WITHOUT ANY WARRANTY, EXPRESS OR IMPLIED, INCLUDING, WITHOUT LIMITATION, WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON‑INFRINGEMENT. We do not warrant that the Product will operate uninterrupted or error‑free.
                    </p>
                </section>

                {/* 6. Limitation of Liability */}
                <section className="mt-6">
                    <h2 className="text-sm font-semibold text-gray-600 dark:text-gray-500">
                        6. Limitation of Liability
                    </h2>
                    <p className="mt-2 text-base text-gray-900 dark:text-gray-400">
                        TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL WE BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATING TO YOUR USE OF THE PRODUCT. Our total liability shall not exceed the amount you paid for the Product.
                    </p>
                </section>

                {/* 7. Indemnification */}
                <section className="mt-6">
                    <h2 className="text-sm font-semibold text-gray-600 dark:text-gray-500">
                        7. Indemnification
                    </h2>
                    <p className="mt-2 text-base text-gray-900 dark:text-gray-400">
                        You agree to indemnify, defend, and hold harmless Runway for Next.js and its affiliates, officers, and employees from any claims, damages, liabilities, costs, or expenses arising from your use or misuse of the Product or your violation of this Agreement.
                    </p>
                </section>

                {/* 8. General Provisions */}
                <section className="mt-6">
                    <h2 className="text-sm font-semibold text-gray-600 dark:text-gray-500">
                        8. General Provisions
                    </h2>
                    <p className="mt-2 text-base text-gray-900 dark:text-gray-400">
                        This Agreement constitutes the entire agreement between you and Runway for Next.js regarding the Product and supersedes any prior agreements. If any provision is held invalid or unenforceable, the remaining provisions will remain in full force and effect. We reserve the right to update these terms from time to time; continued use of the Product constitutes your acceptance of any such changes.
                    </p>
                </section>

                <p className="mt-8 text-sm text-gray-600 dark:text-gray-500">
                    Last updated: February 18, 2025
                </p>
            </div>
        </div>
    );
}
