import React from "react";

export default function EpzikPromo() {
    return (
        <div className="bg-[#f4f1fc] p-8 flex flex-col md:flex-row items-center justify-center min-h-screen space-y-8 md:space-y-0 md:space-x-10">
            {/* Left Image Mockups */}
            <div className="flex space-x-6">
                <img
                    src="/mockup1.png"
                    alt="App Screen 1"
                    className="w-40 md:w-60 rounded-xl shadow-lg"
                />
                <img
                    src="/mockup2.png"
                    alt="App Screen 2"
                    className="w-40 md:w-60 rounded-xl shadow-lg"
                />
            </div>

            {/* Right Content */}
            <div className="text-center md:text-left max-w-md">
                <div className="text-sm font-medium text-[#a295fa] tracking-wide uppercase">
                    Data-Driven Coaching
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                    Download the{" "}
                    <span className="text-[#31302f]">Epzik app now!</span>
                </h1>
                <p className="text-gray-500 mb-6">
                    Your ultimate travel partner. Carries the information you
                    need while travelling.
                </p>

                {/* App Store Buttons */}
                <div className="flex justify-center md:justify-start space-x-4">
                    <img
                        src="/google-play-badge.png"
                        alt="Google Play"
                        className="w-32"
                    />
                    <img
                        src="/app-store-badge.png"
                        alt="App Store"
                        className="w-32"
                    />
                </div>
            </div>
        </div>
    );
}
