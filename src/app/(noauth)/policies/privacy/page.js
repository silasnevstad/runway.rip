import TextLink from "@/components/atoms/TextLink";
import { getSEOTags } from "@/libs/seo";
import appConfig from "@/config";

export const metadata = getSEOTags({
    title: `Privacy Policy | ${appConfig.appName}`,
    canonicalUrlRelative: "/policies/privacy",
});

export default function PrivacyPolicy() {
    return (
        <div className="flex flex-col items-center w-full gap-8 p-8">
            {/* Back Button */}
            <TextLink href="/policies" className="absolute top-4 left-4 text-sm text-gray-700 dark:text-gray-300" fade>
                &larr; Back to Policies
            </TextLink>

            <div className="w-full max-w-xl mt-2">
                {/* Title */}
                <h1 className="mt-4 text-3xl font-semibold text-gray-900 dark:text-gray-100">
                    Privacy Policy
                </h1>

                {/* 1. Introduction */}
                <section className="mt-6">
                    <h2 className="text-sm font-semibold text-gray-600 dark:text-gray-500">
                        1. Introduction
                    </h2>
                    <p className="mt-2 text-base text-gray-900 dark:text-gray-400">
                        Your privacy is important to us. Runway for Next.js (“Runway”) is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our website and the Product.
                    </p>
                </section>

                {/* 2. Information We Collect */}
                <section className="mt-6">
                    <h2 className="text-sm font-semibold text-gray-600 dark:text-gray-500">
                        2. Information We Collect
                    </h2>

                    <h3 className="mt-3 text-sm font-medium text-gray-700 dark:text-gray-400">
                        Personal Data:
                    </h3>
                    <p className="text-base text-gray-900 dark:text-gray-400">
                        When you register for an account using email/password, magic links, or OAuth (via Google, GitHub, or Apple), we collect your email address and any profile information provided (e.g., from usrinfo.profile).
                    </p>

                    <h3 className="mt-3 text-sm font-medium text-gray-700 dark:text-gray-400">
                        Usage Data:
                    </h3>
                    <p className="text-base text-gray-900 dark:text-gray-400">
                        We use umami analytics to track page visits, sign-ups, and purchases on the site where the Product is sold.
                    </p>

                    <h3 className="mt-3 text-sm font-medium text-gray-700 dark:text-gray-400">
                        Feedback:
                    </h3>
                    <p className="text-base text-gray-900 dark:text-gray-400">
                        We retain any information you provide via our feedback email.
                    </p>
                </section>

                {/* 3. Purpose and Legal Basis */}
                <section className="mt-6">
                    <h2 className="text-sm font-semibold text-gray-600 dark:text-gray-500">
                        3. Purpose and Legal Basis
                    </h2>
                    <p className="mt-2 text-base text-gray-900 dark:text-gray-400">
                        We collect your data to manage user accounts, improve our services, process payments via Stripe, and send emails via Resend. For users in regulated regions, we process data based on your consent and/or our legitimate interests as required by applicable law.
                    </p>
                </section>

                {/* 4. How Your Data is Used and Shared */}
                <section className="mt-6">
                    <h2 className="text-sm font-semibold text-gray-600 dark:text-gray-500">
                        4. How Your Data is Used and Shared
                    </h2>
                    <p className="mt-2 text-base text-gray-900 dark:text-gray-400">
                        We use your data to operate, maintain, and improve Runway for Next.js. Your personal data may be shared with our third‑party service providers—including Supabase (authentication and database), Stripe (payments), Resend (emails), and umami (analytics)—who are contractually bound to protect your data.
                    </p>
                </section>

                {/* 5. Data Retention and Security */}
                <section className="mt-6">
                    <h2 className="text-sm font-semibold text-gray-600 dark:text-gray-500">
                        5. Data Retention and Security
                    </h2>
                    <p className="mt-2 text-base text-gray-900 dark:text-gray-400">
                        We retain your data only as long as necessary to fulfill our services. We implement commercially reasonable technical and organizational measures (such as encryption and access controls) to protect your data.
                    </p>
                </section>

                {/* 6. Your Rights */}
                <section className="mt-6">
                    <h2 className="text-sm font-semibold text-gray-600 dark:text-gray-500">
                        6. Your Rights
                    </h2>
                    <p className="mt-2 text-base text-gray-900 dark:text-gray-400">
                        Depending on your jurisdiction, you may have the right to access, correct, delete, or restrict the processing of your data. To exercise these rights, please contact us at <a href="mailto:hello@runway.rip" className="text-primary-600 hover:underline">hello@runway.rip</a>.
                    </p>
                </section>

                {/* 7. International Data Transfers */}
                <section className="mt-6">
                    <h2 className="text-sm font-semibold text-gray-600 dark:text-gray-500">
                        7. International Data Transfers
                    </h2>
                    <p className="mt-2 text-base text-gray-900 dark:text-gray-400">
                        Our service is available internationally, and your data may be transferred across borders. We use standard contractual clauses and other safeguards to ensure your data remains protected.
                    </p>
                </section>

                {/* 8. Policy Updates */}
                <section className="mt-6">
                    <h2 className="text-sm font-semibold text-gray-600 dark:text-gray-500">
                        8. Policy Updates
                    </h2>
                    <p className="mt-2 text-base text-gray-900 dark:text-gray-400">
                        We may update this Privacy Policy periodically. Any changes will be reflected by an updated “Last Updated” date, and material changes may be communicated to you.
                    </p>
                </section>

                {/* 9. Contact */}
                <section className="mt-6">
                    <h2 className="text-sm font-semibold text-gray-600 dark:text-gray-500">
                        9. Contact Us
                    </h2>
                    <p className="mt-2 text-base text-gray-900 dark:text-gray-400">
                        If you have any questions about this Privacy Policy or our data practices, please contact us at <a href="mailto:hello@runway.rip" className="text-primary-600 hover:underline">hello@runway.rip</a>.
                    </p>
                </section>

                <p className="mt-8 text-sm text-gray-600 dark:text-gray-500">
                    Last updated: February 18, 2025
                </p>
            </div>
        </div>
    );
}
