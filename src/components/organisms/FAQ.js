import DropdownText from "@/components/atoms/DropdownText";

const FAQS = [
    {
        title: "What is the refund policy?",
        description: "We offer a 30-day money back guarantee if you are not satisfied with our product."
    },
    {
        title: "How do I cancel my subscription?",
        description: "You can cancel your subscription by logging into your account and clicking the cancel button."
    },
    {
        title: "Can I upgrade my plan?",
        description: "Yes, you can upgrade your plan at any time by logging into your account and selecting the upgrade option."
    },
    {
        title: "Do you offer a free trial?",
        description: "Yes, we offer a 14-day free trial for all new customers."
    }
];

const FAQ = () => {
    return (
        <div className="flex flex-col w-4/6">
            {FAQS.map((faq, index) => (
                <DropdownText key={index} title={faq.title} content={faq.description}/>
            ))}
        </div>
    );
}

export default FAQ;