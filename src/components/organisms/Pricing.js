import PricingCard from "@/components/molecules/PricingCard";
import { pricingConfig } from "@/config";

const Pricing = () => {
    const { plans } = pricingConfig;
    const allFeatures = plans[plans.length - 1].features;
    return (
        <div className="flex max-md:flex-col gap-10 w-full max-sm:gap-8">
            {plans.map((plan, index) => (
                <PricingCard key={index} type={plan.type} title={plan.title} oldPrice={plan.oldPrice} price={plan.price} includedFeatures={plan.features} allFeatures={allFeatures} isPopular={plan.isPopular}/>
            ))}
        </div>
    );
}

export default Pricing;
