"use client";
import React, { useState } from "react";

const FAQs = () => {
    const [openIndex, setOpenIndex] = useState(0); // First FAQ open by default

    const faqs = [
        {
            question: "How does help with HR and workforce management?",
            answer: "Our platform automates hiring, payroll, onboarding, and employee tracking, reducing manual tasks. It offers efficiencies, ensures compliance, and integrates seamlessly with tools like Slack, QuickBooks, and Google Workspace.",
        },
        {
            question:
                "Can I integrate this HR software third-party applications?",
            answer: "Yes, our API supports a wide range of third-party integrations.",
        },
        {
            question: "What security do you have to protect my HR data?",
            answer: "We follow industry-leading security protocols including encryption, SSO, and multi-factor authentication.",
        },
        {
            question: "Which pricing plan is best for my company’s size?",
            answer: "Our pricing is flexible for startups to enterprises — the Growth Plan is best for scaling teams.",
        },
        {
            question: "What customer support is available for users?",
            answer: "We offer 24/7 live chat, email, and dedicated account managers for enterprise users.",
        },
        {
            question: "Is there a free trial available a subscription plan?",
            answer: "Yes, we offer a 14-day free trial for all plans with no credit card required.",
        },
    ];

    const toggle = (index) => {
        setOpenIndex(index === openIndex ? -1 : index);
    };

    return (
        <div className="p-4">
            <section className="bg-white max-w-none py-16 px-4 md:px-16">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Left Column */}
                    <div>
                        <p className="text-xs uppercase text-gray-500 mb-2">
                            Need Help?
                        </p>
                        <h2 className="text-3xl font-bold mb-4">
                            Frequently Asked Questions Answered For You
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Find quick answers to common questions about our
                            platform, features, and support. If you need more
                            help, feel free to reach out to our team anytime.
                        </p>
                        <div className="space-y-4 text-sm">
                            <div className="flex items-center gap-3">
                                <span className="text-xl">📞</span>
                                <span>+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-xl">📧</span>
                                <span>contact@hirezy.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column (Accordion) */}
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="border-b border-gray-300 pb-4 cursor-pointer"
                                onClick={() => toggle(index)}
                            >
                                <div className="flex justify-between items-center text-lg font-medium">
                                    <span>{faq.question}</span>
                                    <span>
                                        {openIndex === index ? "−" : "+"}
                                    </span>
                                </div>
                                {openIndex === index && (
                                    <p className="mt-2 text-gray-600 text-sm">
                                        {faq.answer}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQs;
