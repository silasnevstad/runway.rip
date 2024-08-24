import PricingCard from "@/components/molecules/PricingCard";
import { pricingConfig } from "@/config";

const Pricing = () => {
    const { plans } = pricingConfig;
    console.log(plans[-1]);
    // const allFeatures = plans[-1].features;
    const allFeatures = [
        "NextJS boilerplate",
        "Component library",
        "SEO tools",
        "Stripe",
        "Supabase",
        "Mailgun",
        "Priority support",
        "Discord community",
        "Lifetime updates"
    ];
    return (
        <div className="flex max-md:flex-col gap-10 w-full max-sm:gap-8">
            {plans.map((plan, index) => (
                <PricingCard key={index} title={plan.title} oldPrice={plan.oldPrice} price={plan.price} includedFeatures={plan.features} allFeatures={allFeatures} isPopular={plan.isPopular}/>
            ))}
        </div>
    );
}

export default Pricing;
