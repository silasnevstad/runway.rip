import { FaCheck, FaXmark } from "react-icons/fa6";

export default function PlanFeatures({ planFeatures, allFeatures }) {
    // Sort so that included features appear first
    const sortedFeatures = [...allFeatures].sort((a, b) => {
        const inPlanA = planFeatures.includes(a);
        const inPlanB = planFeatures.includes(b);
        if (inPlanA && !inPlanB) return -1;
        if (!inPlanA && inPlanB) return 1;
        return 0;
    });

    return (
        <ul className="flex flex-col gap-3 my-4">
            {sortedFeatures.map((feat, idx) => {
                const included = planFeatures.includes(feat);
                return (
                    <li key={idx} className="flex items-center gap-3">
                        {included ? (
                            <FaCheck className="w-6 h-6 text-primary-500 bg-primary-500/20 rounded-full p-1 m-0 border" />
                        ) : (
                            <FaXmark className="w-6 h-6 text-red-500 bg-red-500/20 rounded-full p-1 m-0 border" />
                        )}
                        <span className={`text-base font-semibold ${included ? "" : "opacity-40"}`}>
              {feat}
            </span>
                    </li>
                );
            })}
        </ul>
    );
}