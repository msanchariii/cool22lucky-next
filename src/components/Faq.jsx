"use client";
import { Phone, Mail, Plus, Minus } from "lucide-react";
import { useState } from "react";

export default function Faq() {
    const [openFAQ, setOpenFAQ] = useState(0); // First FAQ open by default

    const faqs = [
        {
            question: "How does help with HR and workforce management?",
            answer: "Our platform automates hiring, payroll, onboarding, and employee tracking, reducing manual tasks. It enhances efficiency, ensures compliance, and integrates seamlessly with tools like Slack, QuickBooks, and Google Workspace.",
        },
        {
            question:
                "Can I integrate this HR software third-party applications?",
            answer: "Yes, our HR software offers extensive integration capabilities with popular business tools including Slack, Microsoft Teams, QuickBooks, Salesforce, Google Workspace, and many other third-party applications through our API and pre-built connectors.",
        },
        {
            question: "What security do you have to protect my HR data?",
            answer: "We implement enterprise-grade security measures including end-to-end encryption, SOC 2 Type II compliance, GDPR compliance, regular security audits, multi-factor authentication, and role-based access controls to ensure your HR data remains secure and protected.",
        },
        {
            question: "Which pricing plan is best for my company's size?",
            answer: "Our pricing scales with your needs: Starter plan for small teams (1-10 employees), Professional for growing companies (11-100 employees), and Enterprise for large organizations (100+ employees). Each plan includes different features and support levels tailored to company size.",
        },
        {
            question: "What customer support is available for users?",
            answer: "We provide comprehensive customer support including 24/7 live chat, email support, phone support during business hours, extensive documentation, video tutorials, webinar training sessions, and dedicated account managers for Enterprise customers.",
        },
        {
            question: "Is there a free trial available a subscription plan?",
            answer: "Yes, we offer a 14-day free trial with full access to all features. No credit card required to start your trial. You can explore all functionalities and see how our platform fits your HR needs before committing to a subscription plan.",
        },
    ];

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? -1 : index);
    };

    return (
        <section>
            <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Left Column - FAQ Header and Contact */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-sm font-medium text-blue-600 tracking-wide uppercase mb-4">
                                    NEED HELP?
                                </h3>
                                <p className="text-4xl sm:text-5xl font-semibold text-gray-900 ">
                                    Frequently Asked <br /> Questions Answered
                                    <br /> For You Kutta
                                </p>
                                <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                                    Find quick answers to common questions about
                                    our platform, features, pricing, and
                                    support. If you need more help, feel free to
                                    reach out to our team anytime.
                                </p>
                            </div>

                            {/* Contact Information */}
                            <div className="space-y-6 pt-8">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-200">
                                        <Phone className="w-5 h-5 text-gray-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">
                                            Call Us
                                        </p>
                                        <p className="text-lg font-semibold text-gray-900">
                                            +1 (555) 123-4567
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-200">
                                        <Mail className="w-5 h-5 text-gray-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">
                                            Mail Us
                                        </p>
                                        <p className="text-lg font-semibold text-gray-900">
                                            Contact@hirezy.com
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - FAQ Items */}
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className=" rounded-lg border-b border-b-gray-300  overflow-hidden "
                                >
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="w-full px-6 py-5 text-left flex justify-between items-center  transition-colors duration-200"
                                    >
                                        <h3 className="text-sm font-semibold text-gray-900 pr-4">
                                            {faq.question}
                                        </h3>
                                        <div className="flex-shrink-0">
                                            {openFAQ === index ? (
                                                <Minus className="w-5 h-5 text-gray-600" />
                                            ) : (
                                                <Plus className="w-5 h-5 text-gray-600" />
                                            )}
                                        </div>
                                    </button>

                                    {openFAQ === index && (
                                        <div className="px-6 pb-5">
                                            <div className="border-t border-gray-100 pt-4">
                                                <p className="text-gray-600 leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
