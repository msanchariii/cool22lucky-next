import React from "react";

const AppPromoAndVideo = () => {
    return (
        <div className="w-full">
            {/* --- App Download Section --- */}
            <section className="bg-[#F3F4FF] px-6 md:px-20 py-16">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-10">
                    {/* App Screenshots */}
                    <div className="col-span-2 flex justify-center gap-4">
                        <img
                            src="/your-app-screen1.png"
                            alt="App Screenshot 1"
                            className="w-32 md:w-44 rounded-xl shadow-lg"
                        />
                        <img
                            src="/your-app-screen2.png"
                            alt="App Screenshot 2"
                            className="w-32 md:w-44 rounded-xl shadow-lg"
                        />
                    </div>

                    {/* Download Info */}
                    <div className="text-center lg:text-left">
                        <span className="text-xs uppercase text-blue-500 font-medium tracking-wide">
                            Data Driven Coaching
                        </span>
                        <h2 className="text-3xl font-bold mt-2 mb-4">
                            Download the{" "}
                            <span className="text-[#1C1C1C]">
                                Epzik app now!
                            </span>
                        </h2>
                        <p className="text-sm text-gray-600 mb-6">
                            Your ultimate travel partner. Carries the
                            information you need while traveling.
                        </p>
                        <div className="flex justify-center lg:justify-start gap-4">
                            <img
                                src="/google-play-badge.png"
                                alt="Google Play"
                                className="h-10"
                            />
                            <img
                                src="/app-store-badge.png"
                                alt="App Store"
                                className="h-10"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Video or Steps Section --- */}
            <section className="bg-[#F5F6F7] px-6 md:px-20 py-16 text-center">
                {/* Video Placeholder */}
                <div className="max-w-4xl mx-auto mb-10">
                    <div className="w-full h-64 md:h-[400px] bg-gray-300 rounded-xl flex items-center justify-center">
                        <button className="text-4xl">▶</button>
                    </div>
                </div>

                {/* Section Heading */}
                <div>
                    <p className="text-xs tracking-widest text-blue-500 font-medium mb-2">
                        Easy Process
                    </p>
                    <h3 className="text-3xl font-semibold">
                        Streamline Hiring in Four Simple Steps
                    </h3>
                </div>
            </section>
        </div>
    );
};

export default AppPromoAndVideo;
