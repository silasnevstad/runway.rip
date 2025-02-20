import React from 'react';
import { StarIcon } from "@heroicons/react/24/solid";

const StarRating = ({ numStars }) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        stars.push(<StarIcon key={i} className={`h-6 w-6 ${i < numStars ? 'text-yellow-400' : 'text-gray-300'}`} />);
    }

    return (
        <div className="flex items-center gap-0.5">
            {stars}
        </div>
    );
};

export default StarRating;