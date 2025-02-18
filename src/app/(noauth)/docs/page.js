import Card from "@/components/atoms/Card";

export const metadata = {
    title: "Docs | Runway",
};

// Card for Example doc page to go to
const ExampleTutorialCard = ({ className, title, description, href }) => {
    return (
        <Card href={href} className={className} lift>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{title}</h2>
            <p className="text-gray-800 dark:text-gray-200">{description}</p>
        </Card>
    );
};

export default function DocsIndexPage() {
    return (
        <div className="w-full h-full min-h-screen md:mt-5 lg:mt-14">
            <div className="flex flex-col gap-4 mb-10 max-w-prose">
                <h1 className="text-4xl font-bold">Welcome to the Runway Docs! 👋</h1>
                <p className="max-w-prose">
                    Browse through the documentation to learn more about Runway and how to use it.
                </p>
            </div>
            <div className="flex flex-col gap-4 mb-6 w-full">
                <h2 className="text-2xl font-semibold">Recommended Tutorials</h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <ExampleTutorialCard title="Launch in 5 minutes" description="Get started with Runway" href="/docs/launch-in-5-minutes" className="bg-green-500/40 dark:bg-green-500/20" />
                    <ExampleTutorialCard title="Deploying Models" description="Deploy your models with Runway" href="/docs/deploying-models" className="bg-blue-500/40 dark:bg-blue-500/20" />
                    <ExampleTutorialCard title="Custom Models" description="Create your own custom models" href="/docs/custom-models" className="bg-yellow-500/40 dark:bg-yellow-500/20" />
                </div>
            </div>

        </div>
    );
}