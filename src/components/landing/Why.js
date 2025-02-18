import { TerminalCard } from "@/components/atoms/CustomCards";
import { landingConfig } from "@/config";

export default function Why() {
    const { why } = landingConfig;

    return (
        <section
            id="why"
            className={`flex flex-col items-center w-full`}
        >
            <div
                className="flex flex-col items-center w-3/5 max-xl:w-3/5 max-lg:w-4/6 max-sm:w-5/6"
                id="why"
            >
                <h2 className="text-4xl font-black text-gray-800 dark:text-gray-100 text-center mb-15 max-w-[30ch]">
                    {why.title}
                </h2>

                {/*<div className="flex flex-col gap-2 bg-green-500/70 dark:bg-orange-900/50 p-7 text-xl font-semibold text-center text-gray-100 dark:text-gray-500">*/}
                <TerminalCard className="flex flex-col gap-2 text-lg font-regular max-w-xl dark:bg-purple-900/10">
                    <span className="dark:text-red-400 text-red-500 ml-2">npx create-next-app</span>
                    <p>
                        + <span className="dark:text-red-400 text-red-500 font-semibold text-2xl -ml-1.5">3</span> hrs configuring auth
                    </p>
                    <p>
                        + <span className="dark:text-red-400 text-red-500 font-semibold text-2xl">3</span> hrs integrating payments
                    </p>
                    <p>
                        + <span className="dark:text-red-400 text-red-500 font-semibold text-2xl -ml-1.5">3</span> hrs setting up email
                    </p>
                    <p>
                        + <span className="dark:text-red-400 text-red-500 font-semibold text-2xl -ml-1.5">3</span> hrs designing UI
                    </p>
                    <p>
                        + <span className="dark:text-red-400 text-red-500 font-semibold text-2xl -ml-1.5">2</span> hrs adding SEO
                    </p>
                    <p>
                        + <span className="dark:text-red-400 text-red-500 font-semibold text-2xl -ml-1.5">2</span> hrs tracking analytics
                    </p>
                    <p>
                        + <span className="dark:text-red-400 text-red-500 font-semibold text-2xl -ml-1.5">2</span> hrs setting up API
                    </p>
                    <p>
                        + <span className="dark:text-red-400 text-red-500 font-semibold text-2xl -ml-1.5">2</span> hrs reading docs
                    </p>
                    <p>
                        + <span className="dark:text-red-400 text-red-500 font-semibold text-2xl -ml-1.5">4</span> hrs chasing bugs
                    </p>
                    <p>
                        <span className="dark:text-red-400 text-red-500 text-3xl font-semibold">24+ hrs...</span>
                    </p>
                    {/*<p className="mt-4">*/}
                    {/*    <span className="text-green-500">[~] →  $</span><span className="text-green-500 ml-2 font-semibold">.runway launch</span>*/}
                    {/*</p>*/}
                </TerminalCard>
                {/*</div>*/}
            </div>
        </section>
    );
};