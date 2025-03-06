'use client';
import { useEffect, useRef, useState } from "react";
import { FaInfinity, FaArrowDown } from "react-icons/fa6";
import { StandoutCard } from "@/components/molecules/CustomCards";
import { landingConfig } from "@/config";
import {getBgColorClass} from "@/utils/styling";


const TimeSpentCard = ({ hours, text, infinite = false }) => (
    <div className="flex items-end text-xl font-semibold">
        <div className="flex items-center gap-1">
            <span className="text-gray-700 dark:text-gray-200 text-xl">+</span>
            <span className="text-red-400 font-semibold text-3xl -ml-1">{infinite ? <FaInfinity /> : hours}</span>
        </div>
        <span className="ml-2">{text}</span>
    </div>
);

// Dynamic dashed runway component
function Runway({ vertical = false, dashSize = 40, gapSize = 28, color = "primary" }) {
    const containerRef = useRef(null);
    const [numDashes, setNumDashes] = useState(0);

    useEffect(() => {
        const updateDashCount = () => {
            if (containerRef.current) {
                const availableSpace = vertical
                    ? containerRef.current.clientHeight
                    : containerRef.current.clientWidth;
                const dashCount = Math.floor(availableSpace / (dashSize + gapSize));
                setNumDashes(dashCount);
            }
        };

        updateDashCount();
        window.addEventListener("resize", updateDashCount);
        return () => window.removeEventListener("resize", updateDashCount);
    }, [dashSize, gapSize, vertical]);

    return (
        <div
            ref={containerRef}
            className={`flex ${vertical ? "flex-col h-full" : "w-full"} items-center min-w-0 flex-1 justify-between`}
            // style={{ gap: `${gapSize}px` }}
        >
            {Array.from({ length: numDashes }).map((_, index) => (
                <div
                    key={index}
                    className={`${getBgColorClass(color)} rounded-xs opacity-80 dark:opacity-60`}
                    style={{
                        width: vertical ? "8px" : `${dashSize}px`,
                        height: vertical ? `${dashSize}px` : "8px",
                    }}
                />
            ))}
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
                className="relative flex flex-col items-center w-3/5 max-xl:w-3/5 max-lg:w-4/6 max-sm:w-5/6 max-w-prose"
                id="why"
            >
                {/*<IoBriefcaseOutline className="absolute -top-16 -right-16 text-gray-200 dark:text-orange-500/20 text-[300px] opacity-10" />*/}
                <p className="text-4xl font-black text-gray-800 dark:text-gray-100 text-center mb-15 max-w-[30ch]">
                    Save endless hours of headaches and get right to business
                </p>

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
                    <TimeSpentCard infinite text="hrs maintaining code" />
                    <div className="flex items-end text-xl font-semibold mt-4">
                        <div className="flex items-center gap-1">
                            <span className="text-gray-700 dark:text-gray-200 text-xl">=</span>
                            <span className="text-red-400 font-semibold text-4xl">24+ hours</span>
                        </div>
                        <span className="ml-2">of <span className="underline">busy work</span></span>
                    </div>
                </StandoutCard>
            </div>

            <div className="flex items-center w-full gap-8 mt-28 sm:mt-32">
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
        </section>
    );
};