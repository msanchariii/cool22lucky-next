import React from "react";

const PricingPlans = () => {
    return (
        <div className="min-h-screen bg-[#2D2538] text-white px-6 py-16">
            <div className="text-center mb-12">
                <p className="uppercase text-sm text-gray-400 tracking-widest">
                    Flexible Plans
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mt-2">
                    Affordable Pricing For Every Business Size
                </h2>
                <div className="mt-4 flex justify-center gap-4">
                    <button className="bg-[#4B3E57] text-white px-4 py-2 rounded-full">
                        Monthly
                    </button>
                    <button className="bg-[#4B3E57] text-gray-400 px-4 py-2 rounded-full">
                        Yearly
                    </button>
                </div>
            </div>

            <div className="relative flex flex-col md:flex-row items-center justify-center gap-6 max-w-6xl mx-auto mt-12">
                {/* Starter Plan (Back Left) */}
                <div className="bg-white text-black p-6 rounded-xl w-full md:w-1/3 transform scale-95 -translate-x-4 md:-translate-x-8 z-10 shadow-md">
                    <h3 className="text-xl font-semibold mb-1">Starter Plan</h3>
                    <p className="text-sm mb-6">
                        Ideal for small teams and startups one morning, when
                        Gregor Samsa horrible vermin.
                    </p>
                    <h2 className="text-4xl font-bold mb-4">
                        $29{" "}
                        <span className="text-base font-normal">/Month</span>
                    </h2>
                    <ul className="space-y-2 text-sm">
                        <li>✔ Job posting & candidate tracking</li>
                        <li>✔ AI-powered resume screening</li>
                        <li>✔ Basic onboarding automation</li>
                        <li>✔ Employee directory management</li>
                        <li>✔ Payroll processing (limited)</li>
                    </ul>
                    <button className="mt-6 bg-black text-white py-2 px-4 rounded-full">
                        Get Started
                    </button>
                </div>

                {/* Growth Plan (Front Center) */}
                <div className="bg-[#82D3E7] text-black p-6 rounded-xl w-full md:w-1/3 z-20 shadow-2xl relative transform scale-105">
                    <span className="absolute top-4 right-4 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                        Popular
                    </span>
                    <h3 className="text-xl font-semibold mb-1">Growth Plan</h3>
                    <p className="text-sm mb-6">
                        Best for growing businesses one morning, when Gregor
                        Samsa horrible vermin.
                    </p>
                    <h2 className="text-4xl font-bold mb-4">
                        $79{" "}
                        <span className="text-base font-normal">/Month</span>
                    </h2>
                    <ul className="space-y-2 text-sm">
                        <li>✔ All Starter features</li>
                        <li>✔ Advanced AI recruitment tools</li>
                        <li>✔ Performance & productivity tracking</li>
                        <li>✔ Payroll & benefits automation</li>
                        <li>✔ Customizable reporting & analytics</li>
                        <li>✔ Live chat & priority support</li>
                        <li>✔ Payroll processing (unlimited)</li>
                    </ul>
                    <button className="mt-6 bg-black text-white py-2 px-4 rounded-full">
                        Get Started
                    </button>
                </div>

                {/* Enterprise Plan (Back Right) */}
                <div className="bg-white text-black p-6 rounded-xl w-full md:w-1/3 transform scale-95 translate-x-4 md:translate-x-8 z-10 shadow-md">
                    <h3 className="text-xl font-semibold mb-1">
                        Enterprise Plan
                    </h3>
                    <p className="text-sm mb-6">
                        Designed for large organizations one morning, when
                        Gregor Samsa horrible vermin.
                    </p>
                    <h2 className="text-4xl font-bold mb-4">Custom</h2>
                    <ul className="space-y-2 text-sm">
                        <li>✔ All Growth features</li>
                        <li>✔ Unlimited job postings & users</li>
                        <li>✔ Dedicated account manager</li>
                        <li>✔ API access & custom integrations</li>
                        <li>✔ Advanced security & compliance</li>
                    </ul>
                    <button className="mt-6 bg-black text-white py-2 px-4 rounded-full">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PricingPlans;
