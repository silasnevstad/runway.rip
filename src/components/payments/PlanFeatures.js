import { MdCheck, MdOutlineClose } from "react-icons/md";

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
                    <li key={idx} className="flex items-center gap-3 opacity-70">
                        {included ? (
                            // <FaCheck className="w-6 h-6 text-primary-500 bg-primary-500/20 rounded-full p-1 m-0 border" />
                            <MdCheck className="w-6 h-6 text-green-500" />
                        ) : (
                            // <FaXmark className="w-6 h-6 text-red-500 bg-red-500/20 rounded-full p-1 m-0 border" />
                            <MdOutlineClose className="w-6 h-6 text-red-500 " />
                        )}
                        <span className={`text-base font-medium ${included ? "" : "opacity-30 line-through decoration-2"}`}>
              {feat}
            </span>
                    </li>
                );
            })}
        </ul>
    );
}