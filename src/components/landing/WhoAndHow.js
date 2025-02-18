import React from "react";
import { landingConfig } from "@/config";

export default function WhoAndHow() {
    const { whoAndHow } = landingConfig;
    return (
        <div className="flex flex-row max-sm:flex-col items-start max-w-5xl gap-20 w-5/6">
            <div className="flex flex-col items-start w-full max-sm:w-full gap-2">
                <h2 className="text-3xl font-semibold text-left">{whoAndHow.whoTitle}</h2>
                <p className="text-lg opacity-60 mt-3 text-left max-w-lg">
                    {whoAndHow.whoText}
                </p>
            </div>
            <div className="flex flex-col items-start w-full max-sm:w-full gap-2">
                <h2 className="text-3xl font-semibold text-left">{whoAndHow.howTitle}</h2>
                <p className="text-lg opacity-60 mt-3 text-left max-w-lg">
                    {whoAndHow.howText}
                </p>
            </div>
        </div>
    );
};