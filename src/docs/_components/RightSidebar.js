"use client";

import { useEffect, useState } from "react";
import TextLink from "@/components/atoms/TextLink";

function SidebarSection({ title, items }) {
    return (
        <div className="rounded-sm p-1">
            {title && (
                <h3 className="text-xs font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wide mb-3">
                    {title}
                </h3>
            )}
            <div className="space-y-2">
                {items.map((item, i) => (
                    item.href && item.title && <TextLink
                        key={i}
                        href={item.href}
                        className="text-xs md:text-sm block text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                    >
                        {item.title}
                    </TextLink>
                ))}
            </div>
        </div>
    );
}


function OnThisPage({ items }) {
    const [activeId, setActiveId] = useState(null);

    useEffect(() => {
        // Get heading elements in the DOM that match the IDs from `items`
        const headingElements = items
            .map((item) => {
                // item.href might be "#some-id"
                const id = item.href.replace(/^#/, "");
                return document.getElementById(id);
            })
            .filter(Boolean);

        // Create an observer that sets activeId when headings intersect
        const observer = new IntersectionObserver(
            (entries) => {
                // Filter out the headings that are currently in view
                const visible = entries.filter((entry) => entry.isIntersecting);
                if (visible.length > 0) {
                    // Pick the heading closest to the top
                    const topMost = visible.reduce((prev, current) =>
                        prev.boundingClientRect.top < current.boundingClientRect.top
                            ? prev
                            : current
                    );
                    setActiveId(topMost.target.id);
                }
            },
            {
                // You can tweak this margin to adjust when items get "activated"
                rootMargin: "0px 0px -65% 0px",
            }
        );

        // Observe all heading elements
        headingElements.forEach((el) => observer.observe(el));
        return () => {
            headingElements.forEach((el) => observer.unobserve(el));
        };
    }, [items]);

    return (
        <div className="rounded-sm p-1">
            {/*<h3 className="text-xs font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wide mb-3">*/}
            {/*    On This Page*/}
            {/*</h3>*/}
            <div className="-ml-2">
                {items.map((item, i) => {
                    const id = item.href.replace(/^#/, "");
                    const isActive = id === activeId;
                    return (
                        <TextLink
                            key={i}
                            href={item.href}
                            className={`
                                text-xs md:text-sm block border-l-2 pl-2 py-1
                                ${isActive
                                    ? "text-gray-900 font-medium dark:text-gray-100 border-gray-900 dark:border-gray-300"
                                    : "text-gray-600 dark:text-gray-400 border-gray-500 dark:border-gray-800"
                                }
                                hover:text-gray-800 dark:hover:text-gray-200
                            `}
                        >
                            {item.title}
                        </TextLink>
                    );
                })}
            </div>
        </div>
    );
}

export { SidebarSection, OnThisPage };