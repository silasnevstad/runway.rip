'use client';

import DropdownText from "@/components/atoms/DropdownText";
import Accordion from "@/components/molecules/Accordion";

const FAQS = [
    {
        title: "What is the refund policy?",
        content: "We offer a 30-day money back guarantee if you are not satisfied with our product."
    },
    {
        title: "How do I cancel my subscription?",
        content: "You can cancel your subscription by logging into your account and clicking the cancel button."
    },
    {
        title: "Can I upgrade my plan?",
        content: "Yes, you can upgrade your plan at any time by logging into your account and selecting the upgrade option."
    },
    {
        title: "Do you offer a free trial?",
        content: "Yes, we offer a 14-day free trial for all new customers."
    }
];

const FAQ = () => {
    return (
        <div
            className="flex max-sm:flex-col justify-between gap-10 mb-10"
            id="faq"
        >
            <h3 className="text-3xl font-semibold text-left max-w-[20ch]">Frequently Asked Questions</h3>
            <div className="flex flex-col w-10/12 max-sm:w-full">
                <Accordion items={FAQS} />
            </div>
        </div>
    );
}

export default FAQ;