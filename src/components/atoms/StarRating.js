"use client";
import React, { useState } from 'react';
import { StarIcon } from "@heroicons/react/24/solid";

export default function StarRating({
    totalStars = 5,
    rating,
    onRatingChange,
    responsive = false,
    color = "yellow",
    initialRating = 0,
    className = "",
    ...props
}) {
    // Uncontrolled internal state only used if 'rating' is not provided externally
    const [internalRating, setInternalRating] = useState(initialRating);
    // State for hovered rating (used only if responsive is true)
    const [hoveredRating, setHoveredRating] = useState(null);
    // If `rating` prop is passed in, that means parent is controlling
    const currentRating = rating !== undefined ? rating : internalRating;
    // Display rating is either the hovered rating or the current rating
    const displayRating = hoveredRating !== null ? hoveredRating : currentRating;

    const handleMouseEnter = (index) => {
        if (!responsive) return;
        setHoveredRating(index + 1);
    };

    const handleMouseLeave = () => {
        if (!responsive) return;
        setHoveredRating(null);
    };

    const handleClick = (index) => {
        if (!responsive) return;
        const newRating = index + 1;
        // If a callback is provided, let the parent control the rating
        if (onRatingChange) {
            onRatingChange(newRating);
        } else {
            // Otherwise, store the rating in internal state (uncontrolled scenario)
            setInternalRating(newRating);
        }
    };

    const stars = Array.from({ length: totalStars }, (_, index) => {
        const filled = index < displayRating;
        return (
            <StarIcon
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(index)}
                className={
                    `h-6 w-6
                    transition duration-200 ease-in-out
                    ${responsive ? 'cursor-pointer hover:scale-105' : ''}
                    ${filled ? `text-${color}-400` : 'text-gray-400 dark:text-gray-700'}`
                }
                aria-hidden="true"
            />
        );
    });

    return (
        <div className="flex items-center gap-0.5" {...props}>
            {stars}
        </div>
    );
}
