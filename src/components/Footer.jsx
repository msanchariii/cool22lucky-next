import React from "react";
import { ArrowButton } from "./Button";

const footerLinks = {
    company: [
        { name: "Home", link: "#" },
        { name: "About Us", link: "#" },
        { name: "Services", link: "#" },
        { name: "Pricing", link: "#" },
        { name: "Career", link: "#" },
    ],
    resources: [
        { name: "Blog Articles", link: "#" },
        { name: "Case Studies", link: "#" },
        { name: "Help Center", link: "#" },
        { name: "Privacy Policy", link: "#" },
        { name: "Terms of Service", link: "#" },
    ],
    platform: [
        { name: "Time Tracking", link: "#" },
        { name: "Reports", link: "#" },
        { name: "Payroll", link: "#" },
        { name: "Integrations", link: "#" },
        { name: "Compliance", link: "#" },
    ],
};

const HirezyLandingPage = () => {
    return (
        <div className=" ">
            <section className="min-h-screen max-w-none bg-gradient-to-br from-teal-600 to-teal-700 text-white">
                {/* Header */}
                <div className="px-8 py-6 ">
                    <div className="flex flex-col lg:flex-row justify-between items-start">
                        {/* Left side - Main heading and CTA */}
                        <div className="flex-1 max-w-md">
                            <h1 className="text-4xl font-bold mb-6 leading-tight">
                                Start Streamlining Your
                            </h1>

                            <div className="flex items-center gap-4 mb-8">
                                <ArrowButton className="bg-golden text-black px-4 py-2 rounded-full flex items-center gap-2 font-semibold">
                                    Get A Demo
                                </ArrowButton>
                                <span className="text-white text-4xl font-bold leading-tight">
                                    HR Today
                                </span>

                                <div className="bg-white bg-opacity-20 rounded-full px-8 py-4 h-9">
                                    <span className="opacity-80"></span>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 opacity-80">
                                <span>Visit Our Website</span>
                                <div className="flex-1 h-px bg-white opacity-30"></div>
                                <span>https://hirezy.com</span>
                            </div>
                        </div>

                        {/* Right side - Navigation menus */}
                        <div className="flex gap-16 text-sm">
                            {/* Company menu */}
                            <div>
                                <h3 className="font-semibold mb-4 opacity-70">
                                    Company
                                </h3>
                                <ul className="space-y-3 opacity-90 text-white">
                                    {footerLinks.company.map((link) => (
                                        <li key={link.name}>
                                            <a href={link.link}>{link.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Resources menu */}
                            <div>
                                <h3 className="font-semibold mb-4 opacity-70">
                                    Resources
                                </h3>
                                <ul className="space-y-3 opacity-90 text-white">
                                    {footerLinks.resources.map((link) => (
                                        <li key={link.name}>
                                            <a href={link.link}>{link.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Platform menu */}
                            <div>
                                <h3 className="font-semibold mb-4 opacity-70">
                                    Platform
                                </h3>
                                <ul className="space-y-3 opacity-90 text-white">
                                    {footerLinks.platform.map((link) => (
                                        <li key={link.name}>
                                            <a href={link.link}>{link.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="border-t border-gray-300/40 border-opacity-20 mx-8 mt-8" />

                {/* Main content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-8 py-12">
                    <div className="px-8 mt-12 border-r border-gray-300/40 col-span-2 ">
                        {/* Large Hirezy logo */}
                        <div className="mb-8">
                            <h2 className="text-9xl font-semibold text-lavender-light opacity-90 tracking-wider">
                                Hirezy
                            </h2>
                        </div>

                        {/* Description text */}
                        <p className="text-sm opacity-70 max-w-2xl mb-16 leading-relaxed">
                            Sitting on his armour-like back, and if he lifted
                            his head a little he could see his brown belly,
                            slightly domed and divided by arches into stiff
                            sections... when Gregor Samsa woke from dreams.
                        </p>
                        <div className="flex items-center gap-8 text-sm opacity-60">
                            <span>© 2024 All Right Reserved by Hirezy</span>
                            <div className="flex gap-6">
                                <span>Security</span>
                                <span>Accessibility</span>
                                <span>Status</span>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="px-8 py-8">
                        <div className="flex justify-between items-end ">
                            {/* Left side - Copyright and links */}

                            {/* Right side - Social and contact info */}
                            <div className="">
                                {/* Follow Us section */}
                                <div className="mb-6">
                                    <h4 className="text-sm opacity-70 mb-2">
                                        Follow Us
                                    </h4>
                                    <div className="flex gap-4 text-xs opacity-60 justify-end">
                                        <span>LinkedIn</span>
                                        <span>Facebook</span>
                                        <span>Instagram</span>
                                        <span>Youtube</span>
                                        <span>Twitter/X</span>
                                    </div>
                                </div>

                                {/* Newsletter section */}
                                <div className="mb-6">
                                    <h4 className="text-sm opacity-70 mb-3">
                                        Subscribe Our Newsletter
                                    </h4>
                                    <div className="flex items-center gap-2 border border-white border-opacity-20 rounded-full px-3 py-2 w-fit ">
                                        <input
                                            type="email"
                                            placeholder="Your Email Address"
                                            className="bg-transparent bg-opacity-10  border-white border-opacity-20 rounded px-3 py-2 text-sm placeholder-white placeholder-opacity-50 text-white focus:ring-0 focus:ring-offset-0 focus:border-0 focus:outline-0"
                                        />
                                        <button className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center">
                                            <span className="text-sm">→</span>
                                        </button>
                                    </div>
                                </div>

                                {/* Contact Information */}
                                <div>
                                    <h4 className=" opacity-70 mb-2">
                                        Contact Information
                                    </h4>
                                    <div className="flex gap-6 text-xs opacity-60">
                                        <span> +1 (555) 123-4567</span>
                                        <span> 123 Business Street</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HirezyLandingPage;
