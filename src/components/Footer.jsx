import React from "react";

const HirezyLandingPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-teal-600 to-teal-700 text-white">
            {/* Header */}
            <header className="px-8 py-6">
                <div className="flex justify-between items-start">
                    {/* Left side - Main heading and CTA */}
                    <div className="flex-1 max-w-md">
                        <h1 className="text-4xl font-bold mb-6 leading-tight">
                            Start Streamlining Your
                            <br />
                            <span className="text-white">HR Today</span>
                        </h1>

                        <div className="flex items-center gap-4 mb-8">
                            <button className="bg-yellow-400 text-black px-4 py-2 rounded-full flex items-center gap-2 font-semibold">
                                Get A Demo
                                <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                                    <span className="text-white text-xs">
                                        ▶
                                    </span>
                                </div>
                            </button>

                            <div className="bg-white bg-opacity-20 rounded-full px-6 py-2">
                                <span className="text-sm opacity-80"></span>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 text-sm opacity-80">
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
                            <ul className="space-y-3 opacity-60">
                                <li>Home</li>
                                <li>About Us</li>
                                <li>Services</li>
                                <li>Pricing</li>
                                <li>Career</li>
                            </ul>
                        </div>

                        {/* Resources menu */}
                        <div>
                            <h3 className="font-semibold mb-4 opacity-70">
                                Resources
                            </h3>
                            <ul className="space-y-3 opacity-60">
                                <li>Blog Articles</li>
                                <li>Case Studies</li>
                                <li>Help Center</li>
                                <li>Privacy Policy</li>
                                <li>Terms of Service</li>
                            </ul>
                        </div>

                        {/* Platform menu */}
                        <div>
                            <h3 className="font-semibold mb-4 opacity-70">
                                Platform
                            </h3>
                            <ul className="space-y-3 opacity-60">
                                <li>Time Tracking</li>
                                <li>Reports</li>
                                <li>Payroll</li>
                                <li>Integrations</li>
                                <li>Compliance</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main content */}
            <main className="px-8 mt-16">
                {/* Large Hirezy logo */}
                <div className="mb-8">
                    <h2 className="text-9xl font-bold text-pink-200 opacity-90 tracking-wider">
                        Hirezy
                    </h2>
                </div>

                {/* Description text */}
                <p className="text-sm opacity-70 max-w-2xl mb-16 leading-relaxed">
                    Sitting on his armour-like back, and if he lifted his head a
                    little he could see his brown belly, slightly domed and
                    divided by arches into stiff sections... when Gregor Samsa
                    woke from dreams.
                </p>
            </main>

            {/* Footer */}
            <footer className="px-8 py-8">
                <div className="flex justify-between items-end">
                    {/* Left side - Copyright and links */}
                    <div className="flex items-center gap-8 text-sm opacity-60">
                        <span>© 2024 All Right Reserved by Hirezy</span>
                        <div className="flex gap-6">
                            <span>Security</span>
                            <span>Accessibility</span>
                            <span>Status</span>
                        </div>
                    </div>

                    {/* Right side - Social and contact info */}
                    <div className="text-right">
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
                            <div className="flex items-center gap-2">
                                <input
                                    type="email"
                                    placeholder="Your Email Address"
                                    className="bg-white bg-opacity-10 border border-white border-opacity-20 rounded px-3 py-2 text-sm placeholder-white placeholder-opacity-50 text-white"
                                />
                                <button className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center">
                                    <span className="text-sm">→</span>
                                </button>
                            </div>
                        </div>

                        {/* Contact Information */}
                        <div>
                            <h4 className="text-sm opacity-70 mb-2">
                                Contact Information
                            </h4>
                            <div className="flex gap-6 text-xs opacity-60">
                                <span> +1 (555) 123-4567</span>
                                <span> 123 Business Street</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default HirezyLandingPage;
