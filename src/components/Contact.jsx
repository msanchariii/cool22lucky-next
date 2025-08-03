"use client";
import React, { useState } from "react";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";

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
                        <p className="text-sm font-medium uppercase text-sky-dark mb-2">
                            Need Help?
                        </p>
                        <h2 className="text-4xl font-semibold mb-4">
                            Frequently Asked <br /> Questions Answered <br />{" "}
                            For You
                        </h2>
                        <p className="text-gray-600 mb-6 max-w-lg">
                            Find quick answers to common questions about our
                            platform, features, and support. If you need more
                            help, feel free to reach out to our team anytime.
                        </p>
                        <div className="space-y-4 text-sm">
                            <div className="flex items-center gap-3 transition-transform duration-300 hover:scale-105">
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border-2 p-1 border-gray-200">
                                    <LuPhoneCall className="w-5 h-5 text-gray-600" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-gray-500 font-normal">
                                        Call Us
                                    </span>
                                    <span className="font-semibold">
                                        +1 (555) 123-4567
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 transition-transform duration-300 hover:scale-105">
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border-2 p-1 border-gray-200">
                                    <MdOutlineMail className="w-5 h-5 text-gray-600" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-gray-500 font-normal">
                                        Mail Us
                                    </span>
                                    <span className="font-semibold">
                                        contact@hirezy.com
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column (Accordion) */}
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`border-b border-gray-300 pb-4 cursor-pointer transition-shadow duration-300 ${
                                    openIndex === index ? "" : ""
                                }`}
                                onClick={() => toggle(index)}
                            >
                                <div className="flex justify-between items-center text-lg font-medium">
                                    <span className="text-lg">
                                        {faq.question}
                                    </span>
                                    <span
                                        className="transition-transform duration-300"
                                        style={{
                                            display: "inline-block",
                                            transform:
                                                openIndex === index
                                                    ? "rotate(180deg)"
                                                    : "rotate(0deg)",
                                        }}
                                    >
                                        {openIndex === index ? "−" : "+"}
                                    </span>
                                </div>
                                <div
                                    style={{
                                        maxHeight:
                                            openIndex === index
                                                ? "500px"
                                                : "0px",
                                        overflow: "hidden",
                                        transition:
                                            "max-height 0.4s cubic-bezier(0.4,0,0.2,1)",
                                    }}
                                >
                                    {openIndex === index && (
                                        <p className="mt-2 text-gray-600 text-sm animate-fade-in">
                                            {faq.answer}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <style jsx>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(-8px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fade-in {
                    animation: fade-in 0.4s ease;
                }
            `}</style>
        </div>
    );
};

export default FAQs;
