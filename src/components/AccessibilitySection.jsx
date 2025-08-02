import React from "react";
import { ArrowButton } from "./Button";

const AccessibilitySection = () => {
    return (
        <section className="px-6 py-16 bg-white grid md:grid-cols-2 gap-10 items-center">
            <div className="flex flex-col gap-8 order-2 md:order-none">
                <h2 className="text-5xl font-bold text-gray-900">
                    Making content available for all audiences.
                </h2>
                <p className="mt-4 text-gray-600 max-w-md">
                    From text-to-speech to powerful AI dubbing, our tools
                    restore voices and information fluency through more natural
                    digital interfaces.
                </p>
                <ArrowButton className="border-2 max-w-fit">
                    Explore More
                </ArrowButton>
            </div>

            <div className="p-4 flex items-center justify-center order-1 md:order-none">
                <img
                    src="/assets/img3.png"
                    alt="AI Accessibility Tools"
                    className="max-w-full h-auto"
                />
            </div>
        </section>
    );
};

export default AccessibilitySection;
