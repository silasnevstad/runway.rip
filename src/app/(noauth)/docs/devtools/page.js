import TextLink from "@/components/atoms/TextLink";

export const metadata = {
    title: "Docs | Runway",
};

export default function Page() {
    return (
        <div className="w-full h-full min-h-screen md:mt-5 lg:mt-14 max-md:p-2">
            <div className="flex-1 min-w-0 md:mx-auto max-w-4xl">
                <div className="flex flex-col gap-2 mb-10">
                    <h1 className="text-2xl font-bold">Developer Tools & Resources</h1>
                    <p className="max-w-prose">
                        Here are some great websites and tools I've found useful.
                    </p>
                </div>

                {/* Flex container for categories */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 pb-20 w-full">
                    {/* Design */}
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Design</h3>
                        <ul className="flex flex-col gap-1 underline">
                            <li>
                                <TextLink href="https://www.pexels.com/">Pexels</TextLink>
                            </li>
                            <li>
                                <TextLink href="https://www.unsplash.com/">Unsplash</TextLink>
                            </li>
                            <li>
                                <TextLink href="https://www.remove.bg/">Remove.bg</TextLink>
                            </li>
                            <li>
                                <TextLink href="https://coolors.co">Coolors</TextLink>
                            </li>
                            <li>
                                <TextLink href="https://heroicons.com/outline">
                                    Heroicons
                                </TextLink>
                            </li>
                            <li>
                                <TextLink href="https://www.figma.com/">Figma</TextLink>
                            </li>
                        </ul>
                    </div>

                    {/* Development & Testing */}
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Development & Testing</h3>
                        <ul className="flex flex-col gap-1 underline">
                            <li>
                                <TextLink href="https://github.com/">GitHub</TextLink>
                            </li>
                            <li>
                                <TextLink href="https://gitlab.com/">GitLab</TextLink>
                            </li>
                            <li>
                                <TextLink href="https://www.postman.com/">Postman</TextLink>
                            </li>
                            <li>
                                <TextLink href="https://www.heroku.com/">Heroku</TextLink>
                            </li>
                            <li>
                                <TextLink href="https://www.aws.amazon.com/">AWS</TextLink>
                            </li>
                            <li>
                                <TextLink href="https://www.docker.com/">Docker</TextLink>
                            </li>
                            <li>
                                <TextLink href="https://stackoverflow.com/">
                                    Stack Overflow
                                </TextLink>
                            </li>
                        </ul>
                    </div>

                    {/* Integrations */}
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Integrations</h3>
                        <ul className="flex flex-col gap-1 underline">
                            <li>
                                <TextLink href="https://stripe.com/docs">Stripe</TextLink>
                            </li>
                            <li>
                                <TextLink href="https://supabase.com/docs">Supabase</TextLink>
                            </li>
                            <li>
                                <TextLink href="https://resend.com/docs">Resend</TextLink>
                            </li>
                            <li>
                                <TextLink href="https://firebase.google.com/docs">
                                    Firebase Docs
                                </TextLink>
                            </li>
                            <li>
                                <TextLink href="https://nextjs.org/docs">Next.js</TextLink>
                            </li>
                            <li>
                                <TextLink href="https://tailwindcss.com/docs">
                                    Tailwind Docs
                                </TextLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
