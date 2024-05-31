import React from 'react';
import { StarIcon } from "@heroicons/react/24/solid";

const StarRating = ({ numStars }) => {
    const stars = [];
    for (let i = 0; i < numStars; i++) {
        stars.push(<StarIcon key={i} className="h-6 w-6 text-yellow-400" />);
    }

    return (
        <div className="flex items-center gap-1">
            {stars}
        </div>
    );
};

export default StarRating;