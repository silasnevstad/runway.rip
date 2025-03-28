import Card from "@/components/atoms/Card";
import {getSEOTags} from "@/libs/seo";
import Badge from "@/components/atoms/Badge";
import Switcher from "@/components/atoms/Switcher";
import Input from "@/components/atoms/Input";
import MadeWithTag from "@/components/atoms/MadeWithTag";
import React from "react";

export const metadata = getSEOTags({
    title: "Documentation | Runway",
    canonicalUrlRelative: "/docs",
});


const TutorialCard = ({ className, title, description, href }) => {
    return (
        <Card href={href} variant="soft" className={`${className}`} lift>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{title}</h2>
            <p className="text-gray-800 dark:text-gray-200">{description}</p>
        </Card>
    );
};

export default function DocsIndexPage() {
    return (
        <div className="w-full h-full min-h-screen md:mt-5 lg:mt-14 max-md:p-2">
            <div className="flex-1 min-w-0 md:mx-auto max-w-4xl">
                <div className="flex flex-col gap-2 mb-10 max-w-prose">
                    <h1 className="text-2xl font-bold">Welcome to the Runway Docs! 👋</h1>
                    <p className="max-w-prose">
                        Browse through the documentation to learn more about Runway and how to use it.
                    </p>
                </div>
                <div className="flex flex-col gap-4 mb-6 w-full">
                    <h2 className="text-2xl font-semibold">Recommended Tutorials</h2>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        <TutorialCard title="Installing" description="Get Runway up and running locally" href="/docs/installation" />
                        <TutorialCard title="Launch in 5 minutes" description="Get started with Runway" href="/docs/tutorials/launch-asap" />
                        <TutorialCard title="Config.js" description="Configure the app to your needs" href="/docs/features/config" />
                    </div>
                </div>
            </div>

            <div className="fixed bottom-6 right-6">
                <MadeWithTag />
            </div>
        </div>
    );
}