import React from "react";
import { ArrowRight } from "lucide-react";

const PricingPlans = () => {
    const pricingData = [
        {
            plan: "Starter Plan",
            description:
                "Ideal for small teams and startups one morning, when Gregor Samsa horrible vermin.",
            price: "$29",
            features: [
                "Job posting & candidate tracking",
                "AI-powered resume screening",
                "Basic onboarding automation",
                "Employee directory management",
                "Payroll processing (limited)",
            ],
        },
        {
            plan: "Growth Plan",
            description:
                "Best for growing businesses one morning, when Gregor Samsa horrible vermin.",
            price: "$79",
            isPopular: true,
            features: [
                "All Starter features",
                "Advanced AI recruitment tools",
                "Performance & productivity tracking",
                "Payroll & benefits automation",
                "Customizable reporting & analytics",
                "Live chat & priority support",
                "Payroll processing (unlimited)",
            ],
        },
        {
            plan: "Enterprise Plan",
            description:
                "Designed for large organizations one morning, when Gregor Samsa horrible vermin.",
            price: "Custom",
            features: [
                "All Growth features",
                "Unlimited job postings & users",
                "Dedicated account manager",
                "API access & custom integrations",
                "Advanced security & compliance",
            ],
        },
    ];

    return (
        <section className="p-4 max-w-none w-full ">
            <div className="min-h-screen bg-[#4a3c52] text-white py-24">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <p className="text-gray-300 text-sm tracking-widest uppercase mb-4">
                            FLEXIBLE PLANS
                        </p>
                        <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                            Affordable Pricing For
                            <br />
                            Every Business Size
                        </h1>

                        {/* Toggle Buttons */}
                        <div className="flex justify-center gap-2">
                            <button className="bg-[#5fb3b6] text-white px-6 py-2 rounded-full font-medium">
                                Monthly
                            </button>
                            <button className="bg-[#5a4966] text-gray-300 px-6 py-2 rounded-full font-medium hover:bg-[#6b5577] transition-colors">
                                Yearly
                            </button>
                        </div>
                    </div>

                    {/* Pricing Cards */}
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-0">
                        {/* Starter Plan */}
                        <div className="bg-white text-gray-800 rounded-2xl p-8 w-full max-w-sm lg:max-w-xs relative lg:mr-2 z-10 shadow-xl">
                            <h3 className="text-xl font-bold mb-3">
                                {pricingData[0].plan}
                            </h3>
                            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                                {pricingData[0].description}
                            </p>

                            <div className="mb-6">
                                <span className="text-4xl font-bold">
                                    {pricingData[0].price}
                                </span>
                                <span className="text-gray-500 text-base ml-1">
                                    / Month
                                </span>
                            </div>

                            <ul className="space-y-3 mb-8">
                                {pricingData[0].features.map(
                                    (feature, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start gap-3 text-sm"
                                        >
                                            <div className="w-4 h-4 bg-gray-800 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                                                <svg
                                                    className="w-2 h-2 text-white"
                                                    fill="currentColor"
                                                    viewBox="0 0 8 8"
                                                >
                                                    <path d="M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z" />
                                                </svg>
                                            </div>
                                            <span className="text-black">
                                                {feature}
                                            </span>
                                        </li>
                                    )
                                )}
                            </ul>

                            <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 px-6 rounded-full font-medium flex items-center justify-between transition-colors group">
                                <span>Get Started</span>
                                {/* <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /> */}
                                <div className=" bg-gray-800 text-white rounded-full p-1 group-hover:translate-x-1 transition-transform">
                                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </div>
                            </button>
                        </div>

                        {/* Growth Plan (Popular) */}
                        <div className="bg-sky text-black rounded-2xl p-8 w-full max-w-sm relative z-20 shadow-2xl lg:scale-110">
                            {/* Popular Badge */}
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                <span className="bg-orange text-white px-4 py-1 rounded-full text-sm font-medium">
                                    Popular ⚡
                                </span>
                            </div>

                            <h3 className="text-xl font-bold mb-3 mt-2">
                                {pricingData[1].plan}
                            </h3>
                            <p className="text-sky-dark font-medium text-sm mb-6 leading-relaxed">
                                {pricingData[1].description}
                            </p>

                            <div className="mb-6">
                                <span className="text-4xl font-bold">
                                    {pricingData[1].price}
                                </span>
                                <span className="text-teal-800 text-base ml-1">
                                    / Month
                                </span>
                            </div>

                            <ul className="space-y-3 mb-8">
                                {pricingData[1].features.map(
                                    (feature, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start gap-3 text-sm"
                                        >
                                            <div className="w-4 h-4 bg-black rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                                                <svg
                                                    className="w-2 h-2 text-white"
                                                    fill="currentColor"
                                                    viewBox="0 0 8 8"
                                                >
                                                    <path d="M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z" />
                                                </svg>
                                            </div>
                                            <span>{feature}</span>
                                        </li>
                                    )
                                )}
                            </ul>

                            <button className="w-full bg-teal-700 hover:bg-teal-800 text-white py-3 px-6 rounded-full font-medium flex items-center justify-between transition-colors group">
                                <span>Get Started</span>
                                <div className=" bg-white text-sky-dark rounded-full p-1 group-hover:translate-x-1 transition-transform">
                                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </div>
                            </button>
                        </div>

                        {/* Enterprise Plan */}
                        <div className="bg-white text-gray-800 rounded-2xl p-8 w-full max-w-sm lg:max-w-xs relative lg:ml-2 z-10 shadow-xl">
                            <h3 className="text-xl font-bold mb-3">
                                {pricingData[2].plan}
                            </h3>
                            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                                {pricingData[2].description}
                            </p>

                            <div className="mb-6">
                                <span className="text-4xl font-bold">
                                    {pricingData[2].price}
                                </span>
                            </div>

                            <ul className="space-y-3 mb-8">
                                {pricingData[2].features.map(
                                    (feature, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start gap-3 text-sm"
                                        >
                                            <div className="w-4 h-4 bg-gray-800 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                                                <svg
                                                    className="w-2 h-2 text-white"
                                                    fill="currentColor"
                                                    viewBox="0 0 8 8"
                                                >
                                                    <path d="M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z" />
                                                </svg>
                                            </div>
                                            <span>{feature}</span>
                                        </li>
                                    )
                                )}
                            </ul>

                            <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 px-6 rounded-full font-medium flex items-center justify-between transition-colors group">
                                <span>Get Started</span>
                                <div className=" bg-gray-800 text-white rounded-full p-1 group-hover:translate-x-1 transition-transform">
                                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingPlans;
