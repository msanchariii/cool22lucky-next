import React from "react";
import { FaApple, FaAppStore } from "react-icons/fa";

export default function DownloadApp() {
    return (
        <section className="max-w-none">
            <div className="bg-[#f4f1fc] px-8 grid grid-cols-1 md:grid-cols-2 items-center justify-center ">
                <img
                    src="/assets/app.png"
                    alt="App Screen 1"
                    className="h-full w-auto object-contain "
                />
                {/* </div> */}

                {/* Right Content */}
                <div className="text-center md:text-left max-w-md flex flex-col gap-6">
                    <h2 className="uppercase w-fit text-sm text-lavender-darkest p-1 rounded-full px-4 bg-linear-to-r from-lavender-dark to-transparent font-semibold tracking-wide">
                        Data Driven Coaching
                    </h2>
                    <h1 className="text-3xl md:text-4xl font-semibold mt-2 mb-4">
                        Download the{" "}
                        <span className="text-[#31302f] font-bold">
                            Epzik app now!
                        </span>
                    </h1>
                    <p className="text-gray-500 mb-6">
                        Your ultimate travel partner. Carries the information
                        you need while travelling.
                    </p>

                    {/* App Store Buttons */}
                    <div className="flex justify-center md:justify-start space-x-4">
                        <button className="bg-white py-2 px-4 flex items-center rounded-lg shadow hover:shadow-md transition">
                            <img
                                src="/assets/playstore.jpg"
                                className="h-8 w-8 inline-block"
                            />
                            <div className="flex flex-col text-left ml-2 ">
                                <p className="text-xs font-medium">
                                    Download on the
                                </p>

                                <p className="text-lg font-bold">Play Store</p>
                            </div>
                        </button>
                        <button className="bg-white py-2 px-4 flex items-center rounded-lg shadow hover:shadow-md transition">
                            <FaApple className="h-8 w-8 inline-block" />
                            <div className="flex flex-col text-left ml-2 ">
                                <p className="text-xs font-medium">
                                    Download on the
                                </p>

                                <p className="text-lg font-bold">App Store</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
