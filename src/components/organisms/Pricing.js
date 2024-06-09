import PricingCard from "@/components/molecules/PricingCard";

const FEATURES = [
    "Feature 1",
    "Feature 2",
    "Feature 3",
    "Feature 4",
    "Feature 5",
    "Feature 6",
];

const Pricing = () => {
    return (
        <div className="flex max-md:flex-col gap-10 w-full max-sm:gap-8">
            <PricingCard title="Basic" oldPrice="$69" price="$49" includedFeatures={["Feature 1", "Feature 2", "Feature 3"]} allFeatures={FEATURES} isPopular={false}/>
            <PricingCard title="Pro" oldPrice="$149" price="$99" includedFeatures={FEATURES} allFeatures={FEATURES} isPopular={true}/>
        </div>
    );
}

export default Pricing;
