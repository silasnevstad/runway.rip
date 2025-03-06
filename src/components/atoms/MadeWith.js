import Image from "next/image";
import React from "react";
import { mergeClasses } from "@/utils/styling";


export default function MadeWith({
    className = "",
    items = [
        { src: "/logos/nextjs-white.png", alt: "nextjs", className: "hidden dark:block" },
        { src: "/logos/nextjs.png", alt: "nextjs", className: "block dark:hidden" },
        { src: "/logos/tailwindcss.png", alt: "tailwindcss" },
        { src: "/logos/supabase.png", alt: "supabase" },
        { src: "/logos/mailgun.png", alt: "mailgun" },
        { src: "/logos/stripe.png", alt: "stripe", className: "rounded-lg" },
    ],
}) {
    return (
        <div className={mergeClasses(`flex gap-3 items-center opacity-90`, className)}>
            <p className="text-sm font-semibold">
                Made with:
            </p>
            {items.map((item, idx) => (
                <Image key={idx} src={item.src} alt={item.alt} width={25} height={25} className={item.className} />
            ))}
        </div>
    )
}