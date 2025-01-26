"use client";
import { useEffect } from "react";

export default function Error({ error, reset }) {
    useEffect(() => {
        console.error("Docs Error Boundary:", error);
    }, [error]);

    return (
        <div className="p-10 text-center">
            <h2 className="text-2xl font-bold">Something went wrong in the docs.</h2>
            <p className="my-2">{error?.message}</p>
            <button
                onClick={() => reset()}
                className="px-4 py-2 rounded bg-blue-600 text-white"
            >
                Try again
            </button>
        </div>
    );
}
