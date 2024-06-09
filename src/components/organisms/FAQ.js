'use client';

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
        <div
            className="flex max-sm:flex-col justify-between gap-10 pt-20 mt-20 mb-10 w-3/5 max-xl:w-4/6 max-lg:w-4/5 max-sm:w-10/12"
            id="faq"
        >
            <h3 className="text-3xl font-semibold text-left max-w-[20ch]">Frequently Asked Questions</h3>
            <div className="flex flex-col w-10/12 max-sm:w-full">
                {FAQS.map((faq, index) => (
                    <DropdownText key={index} title={faq.title} content={faq.description}/>
                ))}
            </div>
        </div>
    );
}

export default FAQ;