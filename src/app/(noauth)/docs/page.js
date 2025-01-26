export const metadata = {
    title: "Runway Docs Home",
};

export default function DocsIndexPage() {
    return (
        <div className="max-w-prose">
            <h1 className="text-4xl font-bold mb-4">Welcome to the Runway Docs! 👋</h1>
            <p className="mb-6">
                Browse through the documentation to learn more about Runway and how to use it.
            </p>
            <p>Pick a topic from the sidebar to get started!</p>
        </div>
    );
}