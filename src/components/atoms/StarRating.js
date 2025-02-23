import React from 'react';
import { StarIcon } from "@heroicons/react/24/solid";

const StarRating = ({
    numStars = 3,
    halfStars = 0,
    color = "yellow",
    showExcess = false  // whats a better name for this? Answer: showHalfStars
}) => {
    const stars = [];
    for (let i = 0; i < showExcess ? 5 : numStars; i++) {
        stars.push(<StarIcon key={i} className={`h-6 w-6 ${i < numStars ? `text-${color}-400` : 'text-gray-300'}`} />);
    }

    return (
        <div className="flex items-center gap-0.5">
            {stars}
        </div>
    );
};

export default StarRating;