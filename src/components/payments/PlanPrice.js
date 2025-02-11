export default function PlanPrice({ interval }) {
    if (!interval) return null;
    const { oldPrice, price, discountLabel, label } = interval;

    return (
        <div className="flex flex-col items-start gap-1">
            <div className="flex items-end gap-2">
                {oldPrice && (
                    <p className="text-lg font-semibold opacity-40 line-through">${oldPrice}</p>
                )}
                <p className="text-5xl font-bold">${price}</p>
            </div>

            {/* E.g. "Monthly", "Yearly", or "One-Time" */}
            <p className="text-sm font-semibold opacity-60">{label}</p>

            {discountLabel && (
                <span className="inline-block bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">
          {discountLabel}
        </span>
            )}
        </div>
    );
}