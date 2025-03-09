import TextLink from "@/components/atoms/TextLink";
import {getSEOTags} from "@/libs/seo";
import appConfig from "@/config";

export const metadata = getSEOTags({
    title: `License Agreement | ${appConfig.appName}`,
    canonicalUrlRelative: "/policies/license",
});

export default function LicenseAgreement() {
    return (
        <div className="flex flex-col items-center w-full gap-8 p-8">
            {/* Back Button */}
            <TextLink href="/policies" className="absolute top-4 left-4 text-md text-gray-700 dark:text-gray-300" fade>
                &larr; Back to Policies
            </TextLink>

            <div className="w-full max-w-xl mt-2">
                {/* Title */}
                <h1 className="mt-4 text-3xl font-semibold text-gray-900 dark:text-gray-100">
                    Runway Boilerplate License Agreement
                </h1>

                {/* TL;DR Section */}
                <section className="mt-6">
                    <h2 className="text-md font-bold text-gray-600 dark:text-gray-500">
                        TL;DR;
                    </h2>
                    <div className="flex flex-col gap-2 mt-2 text-[16px] text-gray-900 dark:text-gray-400">
                        <span>
                            • <strong>Personal License</strong>: Build unlimited projects for personal or client work (internal use only).
                        </span>
                        <span>
                            • Redistribution, resale, public sharing, or any form of external distribution is strictly prohibited.
                        </span>
                    </div>
                </section>

                <section className="mt-6">
                    <p className="text-[17px] text-gray-900 dark:text-gray-400">
                        This License Agreement (“Agreement”) is a binding legal agreement between you, the Licensee, and
                        Runway (“Licensor”), represented by Silas Nevstad, regarding the use of the Runway boilerplate ("Product")
                        available at <a href="/" className="text-primary-500 hover:underline">https://runway.rip</a> ("Website").
                        By downloading, accessing, or using the Product, Licensee agrees to be bound by the terms and conditions
                        of this Agreement.
                    </p>
                </section>

                {/* 1. Grant of License */}
                <section className="mt-6">
                    <h2 className="text-md font-semibold text-gray-600 dark:text-gray-500">
                        1. Grant of License
                    </h2>
                    <h3 className="mt-2 text-md font-medium text-gray-700 dark:text-gray-400">
                        1.1 Personal License:
                    </h3>
                    <p className="text-[17px] text-gray-900 dark:text-gray-400">
                        Subject to the terms and conditions of this Agreement, upon purchase, Licensor grants Licensee a
                        non‑exclusive, non‑transferable, and non‑sublicensable Personal license to use the Product solely
                        to create unlimited projects  and develop applications or websites for for personal or commercial use.
                        Such use is limited to internal business activities only.
                    </p>
                </section>

                {/* 2. Restrictions */}
                <section className="mt-6">
                    <h2 className="text-md font-semibold text-gray-600 dark:text-gray-500">
                        2. Restrictions
                    </h2>
                    <p className="mt-2 text-[17px] text-gray-900 dark:text-gray-400">
                        Licensee shall not, and may not permit any third party to:
                        <br />– Resell, redistribute, share, post online, or otherwise disseminate the Product or any substantial part thereof.
                        <br />– Modify, create derivative works from, or reverse-engineer the Product if such modifications result in sharing or commercial resale.
                        <br />– Remove, alter, or obscure any copyright or proprietary notices included in the Product.
                        <br />– Use the Product in any manner that violates applicable laws or infringes on third-party rights.
                        <br />– Sub-license, rent, lease, or transfer the Product or any rights granted herein.
                    </p>
                </section>

                {/* 3. Ownership and Intellectual Property */}
                <section className="mt-6">
                    <h2 className="text-md font-semibold text-gray-600 dark:text-gray-500">
                        3. Ownership and Intellectual Property
                    </h2>
                    <p className="mt-2 text-[17px] text-gray-900 dark:text-gray-400">
                        Licensor retains all ownership, title, and intellectual property rights in and to the Product.
                        No rights other than the limited license expressly granted herein are transferred to Licensee.
                    </p>
                </section>

                {/* 4. Refunds */}
                <section className="mt-6">
                    <h2 className="text-md font-semibold text-gray-600 dark:text-gray-500">
                        4. Refunds
                    </h2>
                    <p className="mt-2 text-[17px] text-gray-900 dark:text-gray-400">
                        Due to the digital nature of the Product, all sales are final. No refunds or exchanges will be provided once access is granted.
                    </p>
                </section>

                {/* 5. Disclaimer and Limitation of Liability */}
                <section className="mt-6">
                    <h2 className="text-md font-semibold text-gray-600 dark:text-gray-500">
                        5. Disclaimer and Limitation of Liability
                    </h2>
                    <p className="mt-2 text-[17px] text-gray-900 dark:text-gray-400">
                        THE PRODUCT IS PROVIDED “AS IS” WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED. LICENSOR DISCLAIMS
                        ALL WARRANTIES, INCLUDING, WITHOUT LIMITATION, WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                        PURPOSE, AND NONINFRINGEMENT.
                    </p>
                    <p className="mt-2 text-[17px] text-gray-900 dark:text-gray-400">
                        TO THE MAXIMUM EXTENT PERMITTED BY LAW, LICENSOR SHALL NOT BE LIABLE FOR
                        ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR IN CONNECTION WITH
                        THE USE OR INABILITY TO USE THE PRODUCT, EVEN IF RUNWAY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                    </p>
                </section>

                {/* 6. Termination */}
                <section className="mt-6">
                    <h2 className="text-md font-semibold text-gray-600 dark:text-gray-500">
                        6. Termination
                    </h2>
                    <p className="mt-2 text-[17px] text-gray-900 dark:text-gray-400">
                        Licensor may terminate your license immediately if you breach any term of this Agreement.
                        Upon termination, you must immediately cease using the Product and destroy all copies.
                    </p>
                </section>

                {/* 7. Governing Law and Dispute Resolution */}
                <section className="mt-6">
                    <h2 className="text-md font-semibold text-gray-600 dark:text-gray-500">
                        7. Governing Law and Dispute Resolution
                    </h2>
                    <p className="mt-2 text-[17px] text-gray-900 dark:text-gray-400">
                        This Agreement shall be governed by and construed in accordance with the laws of the Commonwealth of Massachusetts.
                        Any dispute, controversy, or claim arising out of or relating to this Agreement shall be subject to the exclusive
                        jurisdiction of the courts located in Boston, Massachusetts.
                    </p>
                </section>

                {/* 8. Amendments & Updates */}
                <section className="mt-6">
                    <h2 className="text-md font-semibold text-gray-600 dark:text-gray-500">
                        8. Entire Agreement
                    </h2>
                    <p className="mt-2 text-[17px] text-gray-900 dark:text-gray-400">
                        Licensor reserves the right to update or modify this Agreement at any time. Any such modifications
                        will be posted on the official Website (https://runway.rip) and will become effective [30] days after
                        notice is provided via the Website and/or to your registered email address. Continued use of the
                        Product after such changes constitutes your acceptance of the updated terms.
                    </p>
                </section>

                {/* 8. Entire Agreement */}
                <section className="mt-6">
                    <h2 className="text-md font-semibold text-gray-600 dark:text-gray-500">
                        9. Entire Agreement
                    </h2>
                    <p className="mt-2 text-[17px] text-gray-900 dark:text-gray-400">
                        This Agreement constitutes the entire agreement between you and Licensor regarding the Product and
                        supersedes all prior or contemporaneous agreements, representations, or understandings.
                    </p>
                </section>

                <p className="mt-8 text-md text-gray-600 dark:text-gray-500">
                    Last updated: March 9th, 2025
                </p>
            </div>
        </div>
    );
}
