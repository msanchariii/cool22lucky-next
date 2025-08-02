import React from "react";

const AccessibilitySection = () => {
    return (
        <section className="px-6 py-16 bg-white grid md:grid-cols-2 gap-10 items-center">
            <div>
                <h2 className="text-3xl font-bold text-gray-900">
                    Making content available for all audiences.
                </h2>
                <p className="mt-4 text-gray-600">
                    From text-to-speech to powerful AI dubbing, our tools
                    restore voices and information fluency through more natural
                    digital interfaces.
                </p>
                <button className="mt-6 px-5 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
                    Explore More
                </button>
            </div>

            <div className="p-4 bg-yellow-100 rounded-xl shadow flex items-center justify-center">
                <img
                    src="/images/accessibility.png"
                    alt="AI Accessibility Tools"
                    className="max-w-full h-auto"
                />
            </div>
        </section>
    );
};

export default AccessibilitySection;
