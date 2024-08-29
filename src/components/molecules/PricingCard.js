import {CheckIcon, RocketLaunchIcon, XMarkIcon} from "@heroicons/react/24/solid";
import Badge from "@/components/atoms/Badge";
import Button from "@/components/atoms/Button";
import config from "@/config";

const PricingCard = ({ title, oldPrice, price, includedFeatures, allFeatures, isPopular }) => {
    const { appName } = config;
    return (
        <div className={`relative flex flex-col gap-6 px-8 py-10 rounded-2xl w-full bg-bg-0 dark:bg-gray-900 shadow-sm ${isPopular ? "border-2 border-primary-400" : ""}`}>
            {isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge shape="pill" style="solid">
                        <span className="font-semibold">Most Popular</span>
                    </Badge>
                </div>
            )}
            <h3 className={`text-2xl font-medium opacity-80 ${isPopular ? "text-primary-500" : ""}`}>{title}</h3>
            <div className="flex gap-2 items-end">
                <p className="text-lg font-semibold opacity-40 line-through mb-2 mr-2">${oldPrice}</p>
                <p className="text-5xl font-bold max-md:text-4xl">
                    ${price}
                </p>
                <p className="text-sm font-semibold opacity-60">USD</p>
            </div>

            <ul className="flex flex-col gap-3 mt-3 mb-5">
            {allFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                        {includedFeatures.includes(feature) ? (
                            <CheckIcon className="w-6 h-6 text-primary-500" />
                        ) : (
                            <XMarkIcon className="w-6 h-6 text-red-500" />
                        )}
                        <span className={`text-base font-semibold ${includedFeatures.includes(feature) ? "opacity-100" : "opacity-40"}`}>{feature}</span>
                    </li>
                ))}
            </ul>
            <Button>
                <RocketLaunchIcon className="w-5 h-5" />
                Get {appName}
            </Button>
            <p className="text-base font-semibold opacity-40 text-center -mt-2">Pay once, unlimited uses!</p>
        </div>
    );
}

export default PricingCard;