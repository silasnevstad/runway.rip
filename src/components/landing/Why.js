import { FaArrowDown } from "react-icons/fa";

import { StandoutCard } from "@/components/atoms/CustomCards";
import { landingConfig } from "@/config";

const TimeSpentCard = ({ hours, text }) => (
    <div className="flex items-end text-xl font-semibold">
        <div className="flex items-center gap-1">
            <span className="text-gray-700 dark:text-gray-200 text-xl">+</span>
            <span className="text-red-400 font-semibold text-3xl -ml-1">{hours}</span>
        </div>
        <span className="ml-2">{text}</span>
    </div>
);

// a dashed line, horizontal or vertical, with a line width of w-width and color of color
// do not use border-t border-dashed since this does not let use change the width and gap
function Runway({ vertical = false, width = "16", color = "primary" }) {
    //  we need a smart way to calculate how many divs we need to fill the space
    // calculate the outer width of the div, then divide by the width of the div + ga
    return (
        <div className={`flex ${vertical ? "flex-col h-full" : "w-full"} items-center space-x-6 min-w-0 flex-1`}>
            <div className={`${vertical ? `w-2 h-${width}` : `w-${width} h-2`}  h-2 bg-${color}-500 dark:bg-${color}-500`} />
            <div className={`${vertical ? `w-2 h-${width}` : `w-${width} h-2`} bg-${color}-500 dark:bg-${color}-500`} />
            <div className={`${vertical ? `w-2 h-${width}` : `w-${width} h-2`} bg-${color}-500 dark:bg-${color}-500`} />
            <div className={`${vertical ? `w-2 h-${width}` : `w-${width} h-2`} bg-${color}-500 dark:bg-${color}-500`} />
            <div className={`${vertical ? `w-2 h-${width}` : `w-${width} h-2`} bg-${color}-500 dark:bg-${color}-500`} />
            <div className={`${vertical ? `w-2 h-${width}` : `w-${width} h-2`} bg-${color}-500 dark:bg-${color}-500`} />
        </div>
    );
}

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
                <StandoutCard innerClassName="flex flex-col gap-2 text-xl font-regular max-w-xl p-10">
                    <TimeSpentCard hours="3" text="hrs configuring auth" />
                    <TimeSpentCard hours="3" text="hrs integrating payments" />
                    <TimeSpentCard hours="3" text="hrs setting up email" />
                    <TimeSpentCard hours="3" text="hrs designing UI" />
                    <TimeSpentCard hours="2" text="hrs adding SEO" />
                    <TimeSpentCard hours="2" text="hrs tracking analytics" />
                    <TimeSpentCard hours="2" text="hrs setting up API" />
                    <TimeSpentCard hours="2" text="hrs reading docs" />
                    <TimeSpentCard hours="4" text="hrs chasing bugs" />
                    <div className="flex items-end text-xl font-semibold mt-4">
                        <div className="flex items-center gap-1">
                            <span className="text-gray-700 dark:text-gray-200 text-xl">=</span>
                            <span className="text-red-400 font-semibold text-4xl">24+ hours</span>
                        </div>
                        <span className="ml-2">of <span className="underline">busy work</span></span>
                    </div>
                </StandoutCard>

                <div className="flex items-center w-full gap-4 mt-20">
                    {/*dashed divider horizontal*/}
                    <Runway />
                    <div className="flex items-center gap-2 text-lg text-center">
                        <p className="text-gray-800 dark:text-gray-100 whitespace-nowrap">
                            <span className="font-semibold">With Runway,</span> there's a better way.
                        </p>
                        <FaArrowDown className="text-xl animate-bounce" />
                    </div>
                    <Runway />
                </div>
            </div>
        </section>
    );
};